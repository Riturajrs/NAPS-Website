import styles from "./styles.module.css"
import Image from "next/image";
import Link from "next/link"
type input = {
	id: string,
	title: string,
	summary: string,
	author: string,
	date: string,
	image?: string,
	authorId: string,
	category: string
};
export default function Card({
	title,
	summary,
	author,
	date,
	image,
	id,
	authorId,
	category
}: input) {
	const isValidURL = (url: string) => {
		var pattern = new RegExp(
			"^(https?:\\/\\/)?" + // protocol
				"((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
				"((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
				"(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
				"(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
				"(\\#[-a-z\\d_]*)?$",
			"i"
		); // fragment locator
		return !!pattern.test(url);
	};
	const dateToFormat = new Date(date);
	var dd = String(dateToFormat.getDate()).padStart(2, "0");
	var mm = String(dateToFormat.getMonth() + 1).padStart(2, "0"); //January is 0!
	var yyyy = dateToFormat.getFullYear();
	const showableDate = dd + "/" + mm + "/" + yyyy;
	return (
		<div className="max-w-lg w-full mx-auto bg-white rounded-lg border border-gray-100 shadow-sm dark:bg-gray-800 dark:border-gray-700">
			<Link passHref href={`/blog/${id}`}>
				<div className={`${styles.imageContainer} cursor-pointer rounded-t-lg relative h-80 w-full`}>
					<Image
						layout="fill"
						className="rounded-t-lg"
						src={
							isValidURL(image)
								? image
								: "https://images.unsplash.com/photo-1653031419232-c3c7c7eba0cd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470"
						}
						alt="blog image"
					/>
				</div>
			</Link>
			<div className="p-5 flex flex-col">
				<Link passHref href={`/blog/${id}`} >
					<h5 className="cursor-pointer mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{title}
					</h5>
				</Link>
					<h6 className="font-medium text-gray-800 dark:text-white">
						{category}
					</h6>
				<Link passHref href={`/Author/${authorId}`}>
					<div className="mb-2 cursor-pointer text-md font-light tracking-tight text-gray-900 dark:text-white">
						- {author} at {showableDate}
					</div>
				</Link>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					{summary}
				</p>
				<Link
					href={`/blog/${id}`}
					passHref>
					<div className="mx-auto inline-flex cursor-pointer self-end items-center py-2 px-3 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 " >
					Read more
					<svg
						className="ml-2 -mr-1 w-4 h-4"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path
							fillRule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							clipRule="evenodd"></path>
					</svg>
					</div>
				</Link>
			</div>
		</div>
	);
}
