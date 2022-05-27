import styles from "./PostForm.module.css"
import { FormEventHandler, useState } from "react"
import Image from "next/image";
import { GetStaticProps } from "next/types"

const categories = ["Editorial", "Media Report"]
export default function PostForm({data}){
  // ----------------------------------------------- state variables
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState([]);
  const [thumbnail, setThumbnail] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [summary, setSummary] = useState("");
  //  Change functions
  const changeTitle = (e)=>{
    setTitle(e.target.value);
  }
  const changeAuthor = (e)=>{
    setAuthor(e.target.value);
  }
  const changeCategory = (e)=>{
    setCategory(e.target.value);
  }

  //  Upload image 
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
  //  Submit Handler
  const handleSubmit = (e)=>{
    e.preventDefault();
    // Invalid Data Handling -
    if(title==""){
      alert("Check The Title")
      return;
    }
    if(thumbnail==""){
      alert("Thumbnail not uploaded")
      return;
    }
    if(author==""){
      alert("Check The Author")
      return;
    }
    if(category==""){
      alert("Category not submitted")
      return;
    }
    if(tags==[]){
      alert("Check The Tags")
      return;
    }
    if(content==""){
      alert("Check The Content")
      return;
    }
    if(summary==""){
      alert("Summary not submitted")
      return;
    }
    // handling
    const dataToSubmit = {
      title: title,
      author: author,
      tags: tags,
      thumbnail: thumbnail,
      content: content,
      category: category,
      summary: summary
    }
    console.log(dataToSubmit)
  }
  return (
    <div className={styles.PostForm}>
    <form className={styles.form} onSubmit={handleSubmit}>
    <label htmlFor="title">Title</label>
    <input type="text" name="title" onChange={changeTitle} placeholder="Title" value={title}/>
    <div className={styles.imageContainer}>
      <Image src={thumbnail==""?"/default.png":thumbnail} layout="fill" alt="Thumbnail"/>
    </div>
    <label htmlFor="images">Thumbnail: </label>
    <input type="file" name="images" onChange={uploadImage}></input>
    <br/>
    <label>Author</label>
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
    <label>Category</label>
    <select value={category} onChange={changeCategory}>
      <option></option>
      {categories.map(cat=><option key={cat}>{cat}</option>)}
    </select>

    </form>
    </div>
  )
}
