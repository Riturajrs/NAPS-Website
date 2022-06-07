import styles from "./styles.module.css";

type apiRes = {
  _id: string,
  title: string,
  author: string,
  createdAt: string,
  tags: string[],
  like: number,
  thumbnail: string,
  content: string,
  category: string,
  summary: string,
  __v: number,
  authorName: string
}
export default function UpdateBlog({ data }:{ data: apiRes[]}) {
	return <>
  Update Blog sdfs
  </>;
}
