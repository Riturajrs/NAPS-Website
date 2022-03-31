import styles from "./detailsForm.module.css";

export default function postForm(){
    return(
        <div className={styles.formContainer}>
            <form class="w-full max-w-lg">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-full-name">
        FUll NAME
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" id="grid-full-name" placeholder="FULL NAME" />
      {/* <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
    </div>
  </div>
  
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-roll-num">
        ROLL NO.
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-roll-num" type="text" placeholder="BTECH/XXXX/XXX" />
      {/* <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
    </div>
  </div>

  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-profile-photo">
        PROFILE PHOTO
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-profile-photo" type="file" placeholder="Upload files here" />
      {/* <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
    </div>
  </div>

  <div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <select class="form-select appearance-none
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
        <option selected>ROLE</option>
        <option value="1">Stage 1</option>
        <option value="2">Stage 2</option>
        <option value="3">Stage 3</option>
    </select>
  </div>
</div>

<div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <select class="form-select appearance-none
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
        <option selected>DESIGNATION</option>
        <option value="1">CHAIRMAN</option>
        <option value="2">VICE CHAIRMAN</option>
        <option value="3">GEN SEC</option>
    </select>
  </div>
</div>

</form>
        </div>
    )
}