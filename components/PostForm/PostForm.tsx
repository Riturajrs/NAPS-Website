import styles from "./PostForm.module.css";
import { useState, useRef } from "react";
import Image from "next/image";
import { Editor } from "@tinymce/tinymce-react";
import Loader from "../Loader/Loader";
import { useRouter } from "next/router";
import MODAL from "../../components/Modal/Modal";

type data = {
	_id: string;
	name: string;
	photo: string;
	desc: string;
	tags: string[];
	__v: number;
	createdAt: string;
	rollNum: string;
};
const categories = ["Editorial", "Media Report"];
const tagsoptions = [
	"sdjhks",
	"sksjdfh dsdfd",
	"jkdhkjahfjkd",
	"jkdhfd",
	"jshdkjfsd dsdf",
	"hgdkjhdj",
];
export default function PostForm({
	data,
	cookie,
}: {
	data: data[];
	cookie: string;
}) {
	// state variables
	const [isLoading, setLoading] = useState(false);
	const [isModal, setModal] = useState("false");
	const [modalMessage, setModalMessage] = useState("");
	const router = useRouter();
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [tags, setTags] = useState([]);
	const [thumbnail, setThumbnail] = useState("");
	const contentref = useRef(null);
	const [category, setCategory] = useState("");
	const [summary, setSummary] = useState("");
	const [date, setDate] = useState(Date.now());
	//  Change functions
	const changeTitle = (e) => {
		setTitle(e.target.value);
	};
	const changeDate = (e) => {
		setDate(e.target.value);
		console.log(e.target.value);
	};
	const changeAuthor = (e) => {
		setAuthor(e.target.value);
		// console.log(e.target.value)
	};
	const changeCategory = (e) => {
		setCategory(e.target.value);
	};
	const changeTags = (e) => {
		setTags((prevTags) => [
			...prevTags,
			!prevTags.includes(e.target.value) && e.target.value,
		]);
	};
	const handleUnTag = (e) => {
		setTags((prevtags) =>
			prevtags.filter((tag) => tag != e.target.innerText)
		);
	};
	const changeSummary = (e) => {
		setSummary(e.target.value);
	};
	//  Upload image
	async function uploadImage(e) {
		setThumbnail("Loading");
		const file = e.target.files[0];
		const fd = new FormData();
		fd.append("images", file);
		// upload to api
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_APIBASE}/image-upload`,
			{
				method: "POST",
				body: fd,
			}
		);
		const Data = await res.json();
		if (Data.data && Data.data.URL) {
			setThumbnail(Data.data.URL);
		} else {
			showModal(Data.message);
			setThumbnail("");
		}
	}
	//  Submit Handler
	const showModal = (message, heading = "Error") => {
		setLoading(false);
		setModal(heading);
		setModalMessage(message);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		// Invalid Data Handling -
		if (title == "") {
			showModal("Check The Title");
			return;
		}
		if (thumbnail == "") {
			showModal("Thumbnail is required");
			return;
		}
		if (thumbnail == "Loading") {
			showModal("Thumbnail is being uploaded", "Please Wait");
			return;
		}
		if (author == "") {
			showModal("No author was selected");
			return;
		}
		if (category == "") {
			showModal("Category not chosen");
			return;
		}
		if (tags.length < 1) {
			showModal("At least 1 tag required");
			return;
		}
		if (!contentref.current || contentref.current?.getContent() == "") {
			showModal("Check The Content");
			return;
		}
		if (summary == "") {
			showModal("Summary not submitted");
			return;
		}
		// handling
		const dataToSubmit = {
			title: title,
			author: author,
			tags: tags,
			thumbnail: thumbnail,
			content: contentref.current.getContent(),
			category: category,
			summary: summary,
			createdAt: date
		};
		const reqheaders = new Headers();
		reqheaders.append("Content-Type", "application/json");
		reqheaders.append("Authorization", `Bearer ${cookie}`);
		const res = await fetch(`${process.env.NEXT_PUBLIC_APIBASE}/blog`, {
			method: "POST",
			body: JSON.stringify(dataToSubmit),
			headers: reqheaders,
			mode: "cors",
		});
		const data = await res.json();
		if (data._id) {
			router.push(`/blog/${data._id}`);
		} else {
			showModal(data.message);
		}
		setLoading(false);
		// console.log(data)
	};
	async function handleContentImageUpload(
		blobInfo,
		success,
		failure,
		progress
	) {
		try {
			const fd = new FormData();
			fd.append("images", blobInfo.blob());
			// upload to api
			const res = await fetch(
				`${process.env.NEXT_PUBLIC_APIBASE}/image-upload`,
				{
					method: "POST",
					body: fd,
				}
			);
			// console.log(res.body)
			const Data = await res.json();
			success(Data.data.URL);
		} catch (err) {
			// console.log(err);
			failure(err);
		}
	}
	return (
		<div className="my-24 flex flex-col w-full max-w-4xl mx-auto">
			{isModal != "false" && (
				<MODAL
					heading={isModal}
					message={modalMessage}
					changeState={() => {
						setModal("false");
					}}
				/>
			)}
			<div className="">
				<label
					className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
					htmlFor="title">
					Title
				</label>
				<input
					required
					type="text"
					name="title"
					onChange={changeTitle}
					placeholder="Title"
					value={title}
					className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
				/>
				<div className={styles.imageContainer}>
					<Image
						src={
							thumbnail == "" || thumbnail == "Loading"
								? "/default.png"
								: thumbnail
						}
						layout="fill"
						alt="Thumbnail"
					/>
				</div>
				<div className={`${styles.loadingContainer} mx-auto`}>
					{thumbnail == "Loading" && (
						<>
							<Loader /> Please Wait
						</>
					)}
				</div>
				<label
					className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
					htmlFor="images">
					Thumbnail:{" "}
				</label>
				<input
					style={{ margin: "auto" }}
					className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					required
					type="file"
					name="images"
					onChange={uploadImage}></input>
				<br />
				<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
					Author
				</label>
				<select
					className="mb-6 block appearance-none w-full border border-gray-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					value={author}
					onChange={changeAuthor}>
					<option></option>
					{data &&
						data.map((curauthor) => {
							return (
								<option
									key={curauthor._id}
									value={curauthor._id}>
									{curauthor.name} ({curauthor.rollNum})
								</option>
							);
						})}
				</select>
				<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
					Category
				</label>
				<select
					className="mb-6 block appearance-none w-full border border-gray-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					required
					value={category}
					onChange={changeCategory}>
					<option></option>
					{categories.map((cat) => (
						<option key={cat}>{cat}</option>
					))}
				</select>
				<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
					Tags
				</label>
				<div className={styles.tagContainer}>
					{tags.map((tag) => (
						<div
							className={styles.tag}
							onClick={handleUnTag}
							key={tag}>
							{tag}
						</div>
					))}
				</div>
				<select
					className="mb-6 block appearance-none w-full border border-gray-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					required
					onChange={changeTags}>
					<option></option>
					{tagsoptions
						.filter((tag) => !tags.includes(tag))
						.map((cat) => (
							<option key={cat}>{cat}</option>
						))}
				</select>
				<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
					Content
				</label>
				<Editor
					apiKey={process.env.NEXT_PUBLIC_TINYMCEKEY}
					id="content"
					onInit={(evt, editor) => (contentref.current = editor)}
					init={{
						height: 500,
						force_br_newlines: true,
						force_p_newlines: true,
						menubar: false,
						plugins: [
							"advlist autolink lists link image charmap print preview anchor",
							"searchreplace code visualblocks",
							"insertdatetime media table paste code help wordcount",
						],
						toolbar:
							"undo redo | formatselect | " +
							"bold italic backcolor image| alignleft aligncenter " +
							"alignright alignjustify | bullist numlist outdent indent | " +
							"removeformat visualblocks | help",
						content_style:
							"body { font-family:Poppins,Helvetica,Arial,sans-serif; font-size:14px }",
						image_advtab: true,
						automatic_uploads: true,
						file_picker_types: "image",
						images_upload_handler: handleContentImageUpload,
						images_upload_base_path: "/",
					}}
				/>
				<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
					Summary
				</label>
				<textarea
					className="resize-none appearance-none h-32 block w-full border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					required
					value={summary}
					onChange={changeSummary}
				/>
				<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
					Date
				</label>
				<input
					style={{ margin: "auto" }}
					className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					required
					type="datetime-local"
					name="images"
					value={date}
					onChange={changeDate}></input>
				<div className={styles.loaderContainer}>
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
						onClick={handleSubmit}>
						Submit
					</button>
					{isLoading && (
						<>
							<Loader /> Please Wait
						</>
					)}
				</div>
			</div>
		</div>
	);
}
