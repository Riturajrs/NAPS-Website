import { useEffect, useState } from "react";
import styles from "./AuthorDetails.module.css";
import Image from 'next/image';
// import { data } from "autoprefixer";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import Loader from "../Loader/Loader";
import authorImg from "../../public/default.png";
import MODAL from "../Modal/Modal";

const AuthorDetails = ()=>{

    // State vars-----------------------------------
    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const [image,setImage] = useState(authorImg);
    const [reload,setReload] = useState(false);

    // modal heading
    const[heading,setHeading] = useState("");
    // modal message
    const[message,setMessage] = useState("");
    // shows modal when true 
    const[showModal,setShowModal] = useState(false);

    // checks if data is being uploaded to server
    const [isLoading,setIsLoading] = useState(false);

    // cookies object to access all cookies
    const [cookies,setCookie] = useCookies("user");

    // router instance to reload page
    const router = useRouter();

    useEffect(()=>{

         // function to GET previous details of author
        async function prevDetails(id){
            try{
                // fetch req to GET previous details of author
                const response =  await fetch(`${process.env.NEXT_PUBLIC_APIBASE}/author/id/${id}`,{
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                });
                const data = await response.json();
                // console.log(data);

                // set previous details as default value in form
                setName(data.name);
                setDescription(data.desc);
                setImage(data.photo);
            } catch(err){
                // console.log(err);
            }
        }

        prevDetails(cookies.authorId);
        
        if(reload){
            router.reload();
        }
        
    },[reload])

    // functions to handle change in input fields
    function handleName(e){
        const Name = e.target.value;
        setName(Name);
    }

    function handleDescription(e){
        const Description = e.target.value;
        setDescription(Description);
    }

    async function handleImage(e){
        const file = e.target.files[0];
        const fd =  new FormData();
        fd.append('images',file)
        
        // loader will appear while is image url is being generated
        // and image is uplaoded
        setIsLoading(true);
        
        // upload to api
        const res = await fetch(`${process.env.NEXT_PUBLIC_APIBASE}/image-upload`,{
            method: "POST",
            body: fd
        })
        const Data = await res.json();
        // console.log(Data.data.URL);
        setIsLoading(false);

        setImage(Data.data.URL);
    }

    // function to handle form submit
    function handleSubmit(e){
        e.preventDefault();
        const authorDetails = {
            name: name,
            desc: description,
            photo: image
        }
        // console.log(authorDetails);
        
        // update author details
        updateDetails(authorDetails);
    }

    // function ot update author details
    async function updateDetails(authorDetails){

        // loader will appear until data is being uploaded to server
        setIsLoading(true);

        try{
            const response = await fetch(`http://13.233.159.246:4000/api/v1/author/id/${cookies.authorId}`,{
                method: "PATCH",
                headers: {
                    "Content-type":"application/json", 
                },
                body: JSON.stringify(authorDetails),
            });

        
            const data = await response.json();
            
            // modal appears to show response
            if(response.status === 500){
                setHeading("Failed");
                setMessage(data.message);
                setShowModal(true);
            }
            else{
                setHeading("Success");
                setMessage("Details succesfully updated");
                setShowModal(true);
            }
            // console.log(data);
            // setReload(true);
        } catch(err){
            // console.log(err);
        }

        setIsLoading(false);
    }

    return(
        <>
            {showModal && <MODAL heading={heading} message={message} changeState={setShowModal}/>}
            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit} className="my-24 w-full max-w-4xl mx-auto">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-post-date">
                            NAME
                        </label>
                        <input value={name} onChange={handleName} className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" id="grid-post-date" placeholder="Full Name" />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-caption">
                            DESCRIPTION
                        </label>
                        <textarea value={description} onChange={handleDescription} className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-caption" placeholder="Description" />
                        </div>
                    </div>

                    <div className={"flex flex-wrap justify-center" + " " + styles.imgContainer}>
                        <Image src={image} onChange={handleImage} className="p-1 bg-white border rounded max-w-sm" alt="..." layout="fill" />
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-thumbnail">
                            IMAGE
                        </label>
                        <input onChange={handleImage} className="appearance-none block w-full border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-thumbnail" type="file" placeholder="Upload Image here" />
                        </div>
                    </div>

                    <div className={styles.formFooter}>
                        <button type="submit" className="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Submit
                        </button>
                        {isLoading && <Loader />}
                    </div>

                </form>
            </div>
        </>
    )
}

export default AuthorDetails;