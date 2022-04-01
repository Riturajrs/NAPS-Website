import styles from "./noticeForm.module.css";
import { useState } from "react";

export default function postForm(){
  const [date,setDate] = useState("");
  const [link,setLink] = useState("");

  function handleDate(e){
    const newValue = e.target.value;
    console.log(newValue);
    setDate(newValue); 
  }

  function handleLink(e){
    const newValue = e.target.value;
    console.log(newValue);
    setLink(newValue); 
  }

  function handleSubmit(e){
    e.preventDefault();
    const notice = {
      date: date,
      link: link
    };
    console.log(notice);
  }

    return(
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} class="w-full max-w-lg">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-date">
        POST DATE
      </label>
      <input value={date} onChange={handleDate} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" id="grid-date" placeholder="dd/mm/yyyy" />
      {/* <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
    </div>
  </div>
  
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-link">
        LINK
      </label>
      <input value={link} onChange={handleLink} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-roll-num" type="text" placeholder="link" />
      {/* <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
    </div>
  </div>

  <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Submit
  </button>

</form>
        </div>
    )
}