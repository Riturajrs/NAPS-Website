import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import Card from "../../../../components/Card/Card"
import styles from "./styles.module.css"

type apiResponse ={
  _id: string,
  title: string,
  author: string,
  createdAt: string,
  tags: string,
  likes: string,
  thumbnail: string,
  content: string,
  category: string,
  summary: string,
  __v: number,
  authorName: string
}
export default function Tag({data}:{data: apiResponse[]}){
  const router = useRouter()
  const tag = router.query.tag;
  return(
    <div style={{margin: "5%"}}>
      <div className="text-3xl w-max mx-auto text-center mb-10 font-black text-slate-800">{tag}</div>
    <div className={styles.cardGrid}>
    {data.map(blog=><Card author={blog.authorName} authorId={blog.author} category={blog.category} date={blog.createdAt} id={blog._id} summary={blog.summary} title={blog.title} image={blog.thumbnail} key={blog._id}/>)}
    </div>
    {data.length == 0 &&(<div className="text-xl w-full text-center text-green-700 font-bold"> Are You Sure this tag exists?</div>)}
    </div>
  )
}

export const getServerSideProps:GetStaticProps = async(context)=>{
  const tag = context.params.tag;
  const res = await fetch(`${process.env.APIBASE}/blog/tag/${tag}`,)
  const data = await res.json()
  return(
    {props: {data}}
  )
}