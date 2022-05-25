import styles from "./PostForm.module.css"
import { useState } from "react"
type blogData = {
  title: string,
  author: string,
  tags: string[],
  thumbnail: string,
  content: string,
  category: string,
  summary: string,
}
export default function PostForm(){
  // ----------------------------------------------- state variables
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState([]);
  const [thumbnail, setThumbnail] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [summary, setSummary] = useState("");

  // ----------------------------------------------- upload image 
  async function uploadImage(e){
    const file = e.target.files[0];
    const fd =  new FormData();
    fd.append('images',file)
    // upload to api
    const res = await fetch("http://localhost:4000/api/v1/image-upload",{
      method: "POST",
      body: fd
    })
    const data = await res.json();
   
  }

  return (
    <div className={styles.PostForm}>
    <input type="file" name="file" onChange={uploadImage}></input>
    </div>
  )
}