import styles from "./Card.module.css";
import Image from "next/image";
import testImage from "../../media/sample.jpg";
import Link from "next/link";
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
		<div className={styles.card}>
			<div className={styles.imageContainer}>
				<Link href={`/blog/${id}`} passHref>
					<Image
						src={
							isValidURL(image)
								? image
								: "https://images.unsplash.com/photo-1653031419232-c3c7c7eba0cd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470"
						}
						alt="news-image"
						layout="fill"
					/>
				</Link>
			</div>
			<h1 className={styles.heading}>{title}</h1>
			<div className={styles.meta}>
				-<b>{author}</b> <i>at</i> <b>{showableDate}</b>
			</div>
			<br />
			<div className={styles.content}>{summary}</div>
		</div>
	);
}
