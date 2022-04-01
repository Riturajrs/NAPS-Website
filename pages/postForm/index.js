import styles from "./postForm.module.css";
import {useState} from "react";

export default function postForm(){

  const tags = ["Science","Politics","History","Business","National","International","Tech"];
  const authors = ["Ishan","Lohit","Ankur"];

  const [postDate,setPostDate] = useState("");
  const [title,setTitle] = useState("");
  const [caption,setCaption] = useState("");
  const [thumbnail,setThumbnail] = useState("");
  const [tag,setTag] = useState("");
  const [author,setAuthor] = useState("");
  const [selectedTags,setSelectedTags] = useState([]);

  // binding for post date field
  function handlePostDateChange(e){
    const newValue = e.target.value;
    console.log(newValue);
    setPostDate(newValue);
  }
  
  // binding for title 
  function handleTitleChange(e){
    const newValue = e.target.value;
    console.log(newValue);
    setTitle(newValue);
  }
  
  // binding for caption
  function handleCaptionChange(e){
    const newValue = e.target.value;
    console.log(newValue);
    setCaption(newValue);
  }

  // binding for thumbnail
  function handleImage(e){
    const img = e.target.files[0];
    const temp = URL.createObjectURL(img)
    console.log(temp)
    setThumbnail(temp);
  }

  function handleTag(e){
    const newValue = e.target.value;
    console.log(newValue);
    if(!selectedTags.includes(newValue) && newValue!==""){
      setSelectedTags(prevValue=>[...prevValue,newValue])
    }
  }

  function handleAuthor(e){
    const newValue = e.target.value;
    console.log(newValue);
    setAuthor(newValue);
  }

  function handleRemoveTag(e){
    // console.log(e.target.outerText)
    const newTags = selectedTags.filter(tag=>tag!==e.target.outerText);
    console.log(newTags);
    setSelectedTags(newTags);
  }

  function handleSubmit(e){
    e.preventDefault();
    const blogDetails = {
      postDate: postDate,
      title: title,
      caption: caption,
      thumbnail: thumbnail,
      tags: [...selectedTags],
      author: author
    };
    console.log(blogDetails);
  }

    return(
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} class="w-full max-w-lg">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-post-date">
        POST DATE
      </label>
      <input onChange={handlePostDateChange} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="date" id="grid-post-date" placeholder="dd/mm/yyyy" value={postDate} />
      {/* <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
    </div>
  </div>
  
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-title">
        TITLE
      </label>
      <input value={title} onChange={handleTitleChange} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-title" type="text" placeholder="Enter Title" />
      {/* <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
    </div>
  </div>

  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-caption">
        CAPTION
      </label>
      <textarea value={caption} onChange={handleCaptionChange} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-caption" placeholder="Enter Caption" />
      {/* <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
    </div>
  </div>

  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-thumbnail">
        THUMBNAIL
      </label>
      <input onChange={handleImage} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-thumbnail" type="file" placeholder="Upload files here" />
      {/* <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
    </div>
  </div>

  <div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <select onChange={handleTag} defaultValue={0} class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
        <option value={tag}>Select A Tag</option>
        {tags.map(Tag=><option value={Tag} key={Tag}>
          {Tag}
          </option>
        )
        }
    </select>
    <div className={styles.selectedTags}>
      {selectedTags.map(Tag=><div key={Tag} className={styles.tag} onClick={handleRemoveTag}>
        {Tag}
        </div>
      )}
    </div>
  </div>
</div>

<div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <select onChange={handleAuthor} class="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
        <option value={author}>Author</option>
        {authors.map(author=><option value={author}>{author}</option>)}
        {/* <option value="1">A</option>
        <option value="2">B</option>
        <option value="3">C</option> */}
    </select>
  </div>
</div>

<button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Submit
</button>

</form>
        </div>
    )
}