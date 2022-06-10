import { GetStaticProps } from "next/types";
import Card from "../Card/Card";
import styles from "./styles.module.css";

type apiResponse = {
  _id: string,
  title: string,
  author: string,
  createdAt: string,
  tags: string[],
  likes: number,
  thumbnail: string,
  content: string,
  category: string,
  summary: string,
  _v: number
  authorName: string,
  message?:string;
}
export default function UpdateBlog({ data }:{ data: apiResponse[]}) {
	return <div className={styles.updateBlog}>
  <div className={styles.cardContainer}>
    {data.map(blog=><Card category={blog.category} authorId={blog.author} author={blog.authorName} date={blog.createdAt} id={`${blog._id}/edit`} summary={blog.summary} title={blog.title} image={blog.thumbnail} key={blog._id}/>)}
  </div>
  </div>;
}
