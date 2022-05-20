import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
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
  // Error on the backend
  if(blogData.message){
    return <div className={styles.errorContainer}>
      <Head>
        <title>Blog Not Found | NAPS</title>
      </Head>
      <div className={styles.errorHeading}>
        Invalid URL
      </div>
      error message - 
      <code className={styles.errorCode}>
        {blogData.message}
      </code>
    </div>
  }
  const dateToFormat = new Date(blogData.createdAt)
  var dd = String(dateToFormat.getDate()).padStart(2, '0');
  var mm = String(dateToFormat.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = dateToFormat.getFullYear();
  const showableDate = dd + '/' + mm + '/' + yyyy;
  const isValidURL = (url:string)=>{
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(url);
  }
  return(
    <>
      <Head>
        <title>{blogData.title} | NAPS</title>
      </Head>
    <div className={styles.blogContainer}>
      <div className={styles.title}>{blogData.title}</div>
      <div className={styles.author}>
        <Link href={`/author/${blogData.author}`}>
        {blogData.authorName}
        </Link>
      {` at ${showableDate}`}
      </div>
      <div className={styles.category}>
        {blogData.category}
      </div>
      <div className={styles.tags}>
        {blogData.tags.map((tag)=><div key={tag} className={styles.tag}>
            {tag}
          </div>
        )}
      </div>
      <div className={styles.thumbnail}>
        <Image src={isValidURL(blogData.thumbnail)?blogData.thumbnail:"https://images.unsplash.com/photo-1653031419232-c3c7c7eba0cd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470"} alt="news-image" layout="fill"/>
      </div>
      <div className={styles.content} dangerouslySetInnerHTML={{
        __html: blogData.content.replace(/%2F/gi, "/"),
      }}>
      </div>
    </div>
    </>
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