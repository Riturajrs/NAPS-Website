import { GetStaticProps } from "next"
import { useState } from "react"
import Card from "../../components/Card/Card"
import styles from "./search.module.css"
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
  __v: number
}
export default function Search({blogData}:{blogData: apiData[]}){
  const [filteredData, setFilteredData] = useState(blogData);
  const [search, setSearch] = useState(()=>"");
  const handleSearch = (e)=>{
    setSearch(e.target.value);
    const tempFilter = blogData.filter((blog)=>{
      return (blog.category.includes(search) || blog.summary.includes(search) || blog.title.includes(search) || blog.tags.includes(search));
    })
    setFilteredData(tempFilter)
  }
  console.log(search)
  return <div className={styles.search}>
    <input className = {styles.input} placeholder = "Search" onInput={handleSearch} value={search}></input>
    <div className="grid">
      {filteredData.map(blog=><Card author={blog.author} date={blog.createdAt} id={blog._id} summary={blog.summary} title={blog.title} image={blog.thumbnail} key={blog._id} />)}
    </div>
  </div>
}

export const getStaticProps:GetStaticProps = async()=>{
  const res = await fetch(`${process.env.APIBASE}/blog`)
  const data = await res.json();
  return {
    props:{blogData: data},
    revalidate: 120
  }
}