import { useState } from "react";
import styles from "./AuthorDetails.module.css";

const AuthorDetails = ()=>{

    // State vars-----------------------------------
    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const [image,setImage] = useState("https://mdbootstrap.com/img/new/standard/city/041.jpg");

    // functions to handle change in input fields
    function handleName(e){
        const Name = e.target.value;
        setName(Name);
    }

    function handleDescription(e){
        const Description = e.target.value;
        setDescription(Description);
    }

    function handleImage(e){
        const Image = URL.createObjectURL(e.target.files[0]);
        setImage(Image);
    }

    // function to handle form submit

    function handleSubmit(e){
        e.preventDefault();
        const authorDetails = {
            name: name,
            description: description,
            image: image
        }
        console.log(authorDetails);
    }

    return(
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-post-date">
                        NAME
                    </label>
                    <input onChange={handleName} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" id="grid-post-date" placeholder="Full Name" value={name} />
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-caption">
                        DESCRIPTION
                    </label>
                    <textarea value={description} onChange={handleDescription} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-caption" placeholder="Description" />
                    </div>
                </div>

                <div class="flex flex-wrap justify-center">
                    <img
                    src={image}
                    class="p-1 bg-white border rounded max-w-sm"
                    alt="..."
                    />
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-thumbnail">
                        IMAGE
                    </label>
                    <input onChange={handleImage} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-thumbnail" type="file" placeholder="Upload Image here" />
                    </div>
                </div>

                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Submit
                </button>

            </form>
        </div>
    )
}

export default AuthorDetails;