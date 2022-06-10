import { GetStaticProps } from "next"
import { useState } from "react"
import Card from "../../components/Card/Card"
import styles from "./search.module.css"
import Head from "next/head"
type apiData = {
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
  __v: number,
  authorName: string
}
export default function Search({blogData}:{blogData: apiData[]}){
  const [filteredData, setFilteredData] = useState(blogData);
  const [search, setSearch] = useState("");
  const handleSearch = (e)=>{
    setSearch(e.target.value);
    const term = e.target.value.toLowerCase()
    const tempFilter = blogData.filter((blog)=>{
      const tagMatch = (blog.tags.map(tag=>tag.toLowerCase().includes(term))).includes(true)
      const categoryMatch = blog.category.toLowerCase().includes(term) 
      const summMatch = blog.summary.toLowerCase().includes(term)
      const titleMatch = blog.title.toLowerCase().includes(term)
      const authorMatch = blog.authorName.toLowerCase().includes(term)
      return (tagMatch || categoryMatch || summMatch || titleMatch || authorMatch);
    })
    setFilteredData(tempFilter)
  }
  return <>
  <Head>
    <title>NAPS | Search</title>
  </Head>
  <div className={styles.search}>
    <input className = "appearance-none block w-full border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder = "Search" onInput={handleSearch} value={search}></input>
    <div className="gcse-search"></div>
    <div className={styles.cardGrid}>
      {filteredData.map(blog=><Card category={blog.category} authorId={blog.author} author={blog.authorName} date={blog.createdAt} id={blog._id} summary={blog.summary} title={blog.title} image={blog.thumbnail} key={blog._id} />)}
    </div>
  </div>
  </>
}

export const getStaticProps:GetStaticProps = async()=>{
  const res = await fetch(`${process.env.APIBASE}/blog`)
  var data = await res.json();
  data = data.reverse()
  return {
    props:{blogData: data},
    revalidate: 120
  }
}