import Link from "next/link";
import { useRouter } from "next/router"
import styles from "./blog.module.css"
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
export default function Blog({blogData}:{blogData: apiResponse}){
  if(blogData.message){
    return <div className={styles.blogContainer}>
      <code>
        {blogData.message}
      </code>
    </div>
  }
  const dateToFormat = new Date(blogData.createdAt)
  var dd = String(dateToFormat.getDate()).padStart(2, '0');
  var mm = String(dateToFormat.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = dateToFormat.getFullYear();
  const showableDate = dd + '/' + mm + '/' + yyyy;
  return(
    <div className={styles.blogContainer}>
      <div className={styles.title}>{blogData.title}</div>
      <div className={styles.author}>
        <Link href={`/author/${blogData.author}`}>
        {blogData.authorName}
        </Link>
      {` at ${showableDate}`}
      </div>
      <div className={styles.cateogry}>
        {blogData.category}
      </div>
      <div className={styles.tags}>
        {blogData.tags.map((tag)=><div key={tag} className={styles.tag}>
            {tag}
          </div>
        )}
      </div>
    {blogData.content}
    </div>
  )

}
export async function getServerSideProps(context){
  const id = context.params.id
  const url = `${process.env.APIBASE}/blog/id/${id}`
  const res = await fetch(url)
  const data: apiResponse = await res.json()
  return {
    props: {blogData: data}
  }
}