export default function postForm(){
    return(
        <div>
            <div>
                <button>Create</button>
                <button>Update</button>
                <button>Author</button>
                <button>Link</button>
            </div>
            <form>
                <label htmlFor="postdate">
                    POST DATE
                </label>
                <input id="postdate" type="date" placeholder="dd-mm-yyyy"/>
                <label htmlFor="title">
                    TITLE
                </label>
                <input type="text" id="title" placeholder="Enter title"/>
                <label htmlFor="caption">
                    CAPTION
                </label>
                <textarea name="caption" id="caption" cols="30" rows="10" placeholder="Write Caption" />
                <label htmlFor="thumbnail">
                    THUMBNAIL
                </label>
                <input type="file" id="thumbnail" />
                <label htmlFor="tags">TAGS</label>
                <select id="tags" className="form-select appearance-none block w-full px-3 py-1.5 text-basefont-normal
text-gray-700
bg-white bg-clip-padding bg-no-repeat
border border-solid border-gray-300
rounded
transition
ease-in-out
m-0
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
        <option selected>alkdmadklfmf</option>
        <option value="1">alkfmkafdm</option>
        <option value="2">akdmaklm</option>
        <option value="3">faffkladf</option>
    </select>
    <label htmlFor="author">AUTHOR</label>
    <select className="form-select appearance-none
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
        <option selected>A</option>
        <option value="1">B</option>
        <option value="2">C</option>
        <option value="3">D</option>
    </select>
            </form>
        </div>
    )
}