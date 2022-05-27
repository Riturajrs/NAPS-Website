import styles from "./PostForm.module.css"
import { useState } from "react"
import Image from "next/image";
import { GetStaticProps } from "next/types"


export default function PostForm({data}){
  // ----------------------------------------------- state variables
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState([]);
  const [thumbnail, setThumbnail] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [summary, setSummary] = useState("");
  // ----------------------------------------------- Change functions
  const changeTitle = (e)=>{
    setTitle(e.target.value);
  }
  const changeAuthor = (e)=>{
    setAuthor(e.target.value);
  }

  // ----------------------------------------------- upload image 
  async function uploadImage(e){
    const file = e.target.files[0];
    const fd =  new FormData();
    fd.append('images',file)
    // upload to api
    const res = await fetch(`http://13.233.159.246:4000/api/v1/image-upload`,{
      method: "POST",
      body: fd
    })
    const data = await res.json();
    setThumbnail(data.data.URL)
  }
  return (
    <div className={styles.PostForm}>
    <form>
    <input type="text" name="title" onChange={changeTitle} placeholder="Title" value={title}/>
    <div className={styles.imageContainer}>
      <Image src={thumbnail==""?"/default.png":thumbnail} layout="fill" alt="Thumbnail"/>
    </div>
    <label htmlFor="images">Thumbnail: </label>
    <input type="file" name="images" onChange={uploadImage}></input>
    <br/>
    <select value={author} onChange={changeAuthor}>
      <option></option>
      {data&&data.map((curauthor)=>{
        return (
        <option key={curauthor._id} value={curauthor._id}>
          {curauthor.name}
          </option>
          )
      })}
    </select>
    </form>
    </div>
  )
}
