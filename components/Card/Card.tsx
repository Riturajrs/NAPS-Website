import styles from "./styles.module.css"
import Image from "next/image";
type input = {
	id: string;
	title: string;
	summary: string;
	author: string;
	date: string;
	image?: string;
};
export default function Card({
	title,
	summary,
	author,
	date,
	image,
	id,
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
		<div className="max-w-lg w-full mx-auto bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
			<a href={`/blog/${id}`}>
				<div className={`${styles.imageContainer} rounded-t-lg relative h-80 w-full`}>
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
			</a>
			<div className="p-5">
				<a href={`/blog/${id}`}>
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{title}
					</h5>
				</a>
				<a href={`/Author/${id}`}>
					<div className="mb-2 text-md font-light tracking-tight text-gray-900 dark:text-white">
						- {author} at {showableDate}
					</div>
				</a>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					{summary}
				</p>
				<a
					href={`/blog/${id}`}
					className="inline-flex self-end items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
				</a>
			</div>
		</div>
	);
}
