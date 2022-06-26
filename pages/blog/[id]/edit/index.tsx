import { Editor } from "@tinymce/tinymce-react";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next/types";
import { useEffect, useRef, useState } from "react";
import { useCookies } from "react-cookie";
import Loader from "../../../../components/Loader/Loader";
import styles from "./styles.module.css";
import Image from "next/image";
import MODAL from "../../../../components/Modal/Modal";

type apiResponse = {
	_id: string;
	title: string;
	author: string;
	createdAt: string;
	tags: string[];
	likes: number;
	thumbnail: string;
	content: string;
	category: string;
	summary: string;
	_v: number;
	authorName: string;
	message?: string;
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

export default function Edit({
	blogData,
	authorData,
}: {
	blogData: apiResponse;
	authorData: {
		_id: string;
		name: string;
		photo: string;
		desc: string;
		tags: string[];
		createdAt: string;
		rollNum: string;
	}[];
}) {
	const [cookies, setCookie] = useCookies();
	const router = useRouter();
	useEffect(() => {
		// if user not logged in redirect to login page
		if (!cookies.user) {
			router.push("/login");
		}
	}, [cookies, router]);

	// state variables
	const [isLoading, setLoading] = useState(false);
	const [isModal, setModal] = useState("false");
	const [modalMessage, setModalMessage] = useState("");
	const [title, setTitle] = useState(blogData.title);
	const [author, setAuthor] = useState(blogData.author);
	const [tags, setTags] = useState(blogData.tags);
	const [thumbnail, setThumbnail] = useState(blogData.thumbnail);
	const contentref = useRef(null);
	const [category, setCategory] = useState(blogData.category);
	const [summary, setSummary] = useState(blogData.summary);
	//  Change functions
	const changeTitle = (e) => {
		setTitle(e.target.value);
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
			setThumbnail(thumbnail);
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
		};
		const reqheaders = new Headers();
		reqheaders.append("Content-Type", "application/json");
		reqheaders.append("Authorization", `Bearer ${cookies.user}`);
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_APIBASE}/blog/id/${router.query.id}`,
			{
				method: "PATCH",
				body: JSON.stringify(dataToSubmit),
				headers: reqheaders,
				mode: "cors",
			}
		);
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
	const [sure, setSure] = useState(0);
	const handleDelete = async () => {
		setSure(1);
		if (sure == 1) {
			setLoading(true);
			const reqheaders = new Headers();
			reqheaders.append("Authorization", `Bearer ${cookies.user}`);
			const res = await fetch(
				`${process.env.NEXT_PUBLIC_APIBASE}/blog/id/${blogData._id}`,
				{
					method: "DELETE",
					headers: reqheaders,
				}
			);
			const data = await res.json();
			showModal("Should be updated in 2 mins");
			setTimeout(()=>{
				router.push("/Admin");
			},1000)
			setLoading(false);
		} else {
			showModal("Click again to confirm", "Delete?");
		}
	};

	if (blogData.message) {
		return (
			<div className="my-24 m-8 text-red-600 text-lg font-semibold">
				Blog doesn{"'"}t exist
			</div>
		);
	}

	return (
		<div className="my-24 flex flex-col m-8 w-auto sm:mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-4xl">
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
				<div className={styles.loadingContainer}>
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
					required
					type="file"
					name="images"
					onChange={uploadImage}
					className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></input>
				<br />
				<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
					Author
				</label>
				<select
					className="mb-6 block appearance-none w-full border border-gray-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
					required
					value={author}
					onChange={changeAuthor}>
					<option></option>
					{authorData &&
						authorData.map((curauthor) => {
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
					initialValue={blogData.content}
					id="content"
					onInit={(evt, editor) => (contentref.current = editor)}
					init={{
						height: 500,
						force_br_newlines: true,
						force_p_newlines: true,
						menubar: false,
						plugins: [
							"advlist autolink lists link image charmap print preview anchor",
							"searchreplace code visualblocks code",
							"insertdatetime media table paste code help wordcount",
						],
						toolbar:
							"undo redo | formatselect | " +
							"bold italic backcolor image| alignleft aligncenter " +
							"alignright alignjustify | bullist numlist outdent indent | " +
							"removeformat | help",
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
				<div className={styles.loaderContainer}>
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
						onClick={handleSubmit}>
						Submit
					</button>
					<button
						className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
						onClick={handleDelete}>
						Delete
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

export const getStaticProps: GetStaticProps = async (context) => {
	const id = context.params.id;
	const url = `${process.env.APIBASE}/blog/id/${id}`;
	const res = await fetch(url);
	const data: apiResponse = await res.json();
	const authurl = await fetch(`${process.env.APIBASE}/author`);
	const authorData = await authurl.json();
	return {
		props: { blogData: data, authorData: authorData },
		revalidate: 120,
	};
};
export const getStaticPaths: GetStaticPaths = async () => {
	const res = await fetch(`${process.env.APIBASE}/blog`);
	const data = await res.json();
	var paths = [];
	data.forEach((item) => {
		paths.push({ params: { id: item._id } });
	});
	return {
		paths: paths,
		fallback: "blocking",
	};
};
