import styles from "./PostForm.module.css"
import { useState } from "react"
import Image from "next/image";
import { Editor } from "@tinymce/tinymce-react";

const categories = ["Editorial", "Media Report"]
const tagsoptions = ["sdjhks", "sksjdfh dsdfd","jkdhkjahfjkd", "jkdhfd", "jshdkjfsd dsdf", "hgdkjhdj"]
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
  const changeTags = (e)=>{
    setTags(prevTags=> [...prevTags,(!(prevTags.includes(e.target.value))&&e.target.value)])
  }
  const handleUnTag = (e)=>{
    setTags(prevtags=>prevtags.filter(tag=>(tag!=e.target.innerText)));
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
    const Data = await res.json();
    setThumbnail(Data.data.URL)
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
  async function handleContentImageUpload(blobInfo, success, failure, progress) {
    try{
      const fd =  new FormData();
      fd.append('images',blobInfo.blob())
      // upload to api
      const res = await fetch(`http://13.233.159.246:4000/api/v1/image-upload`,{
        method: "POST",
        body: fd
      })
      console.log(res.body)
      const Data = await res.json();
      success(Data.data.URL)
    }catch(err){
      console.log(err);
      failure(err);
    }


  }
  return (
    <div className={styles.PostForm}>
    <div className={styles.form} onSubmit={handleSubmit}>
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
          {curauthor.name} ({curauthor.rollNum})
          </option>
          )
      })}
    </select>
    <label>Category</label>
    <select value={category} onChange={changeCategory}>
      <option></option>
      {categories.map(cat=><option key={cat}>{cat}</option>)}
    </select>
    <div className={styles.tagContainer}>
    {tags.map(tag=><div className={styles.tag} onClick={handleUnTag} key={tag}>{tag}</div>)}
    </div>
    <label>Tags</label>
    <select onChange={changeTags}>
      <option></option>
      {tagsoptions.filter((tag)=>!tags.includes(tag)).map(cat=><option key={cat}>{cat}</option>)}
    </select>
      <Editor
      apiKey={process.env.NEXT_PUBLIC_TINYMCEKEY}
      id="content"
      init={{
        height: 500,
        force_br_newlines: true,
        force_p_newlines: true,
        menubar: false,
        plugins: [
          "advlist autolink lists link image charmap print preview anchor",
          "searchreplace code visualblocks code",
          "insertdatetime media table paste code help wordcount",
        ],
        toolbar:
              "undo redo | formatselect | " +
              "bold italic backcolor image| alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        image_advtab: true,
        automatic_uploads: true,
        file_picker_types: "image",
        images_upload_handler: handleContentImageUpload,
        images_upload_base_path: "/",
      }}
      />

    </div>
    </div>
  )
}
