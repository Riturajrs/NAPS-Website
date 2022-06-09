import { useEffect, useState } from "react";
import styles from "./SignUp.module.css";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import MODAL from "../../components/Modal/Modal";
import Loader from "../../components/Loader/Loader";

const SignUp = ()=>{
  // state vars
  const[fullName,setFUllName] = useState("");
  const[rollNum,setRollNum] = useState("");
  const[email,setEmail] = useState("");
  const[pwd,setPwd] = useState("");
  const[cnfrmPwd,setCnfrmPwd] = useState("");
  const[showModal,setShowModal] = useState(false);
  // modal heading
  const[heading,setHeading] = useState("");
  // modal message
  const[message,setMessage] = useState("");
  const[isLoading,setIsLoading] = useState(false);

  // to access stored cookie
  const[cookie,setCookie] = useCookies("user");

  // router instance for redirects
  const router = useRouter(); 

  // redirect to login page if not logged in
  useEffect(()=>{
    if(!cookie.user){
      router.push("/login");
    }
  },[cookie.user,router])

    // fetch req to API
    async function SingUpReq(newUserDetails) {
      
      // loader will appear till new author and new user are created
      setIsLoading(true);

      try{
        // first new author is created
        const auhtorDetails = {
          name: newUserDetails.name,
          photo: "https://mdbootstrap.com/img/new/standard/city/041.jpg",
          desc: "NAPS Author",
          rollNum: newUserDetails.rollNum,
        }
        let response = await fetch(`http://13.233.159.246:4000/api/v1/author`,{
          method: "POST",
          headers: {
            "Content-Type": "application/json", "authorization": `Bearer: ${cookie.user}`
          },
          body: JSON.stringify(auhtorDetails),
        })
        let data = await response.json();
        // if error occured while creating author
        if(response.status==401 || response.status==400){
            setHeading("Failed");
            setMessage(data.message);
            setShowModal(true);
        } 
        else {  
          // extract author id
          const authorId = data._id;
  
          // console.log(authorId);
          // add author id to new user details
          newUserDetails = {...newUserDetails,authorId: authorId};
  
          // console.log(cookie.user)
          
          // create new user 
          response = await fetch(`http://13.233.159.246:4000/api/v1/users/signUp`, {
            credentials: "include",
            method: "POST",
            headers: { "Content-Type": "application/json","authorization": `Bearer: ${cookie.user}` },
            body: JSON.stringify(newUserDetails),
          });
  
          data = await response.json();
          // console.log(data);
  
          // if error ocuured in creating new user
          if(response.status==401 || response.status==400){
            setHeading("Failed");
            setMessage(data.message);
            setShowModal(true);
          }
  
          // if user and author both created successfully
          if(response.status===201){
            setHeading("Success");
            setMessage("User created successfully");
            setShowModal(true);
          }
        }

      } catch(err){
        // console.log(err);
      }
      setIsLoading(false);

    }

    function handleSubmit(e){
        e.preventDefault();
        if(pwd!==cnfrmPwd) {
            alert("Password and Confirm Password do not match, enter again");
            setPwd("");
            setCnfrmPwd("");
            return;
        }
        const newUserDetails = {
            name: fullName,
            email: email,
            rollNum: rollNum,
            password: pwd,
            cnfrmPassword: cnfrmPwd
        };
        // console.log(newUserDetails);
        SingUpReq(newUserDetails);
    }

    function handleFullName(e) {
        const newValue = e.target.value;
        // console.log(newValue);
        setFUllName(newValue);
    }
    
    function handleRollNum(e) {
        const newValue = e.target.value;
        // console.log(newValue);
        setRollNum(newValue);
    }
    
    function handleEmail(e) {
        const newValue = e.target.value;
        // console.log(newValue);
        setEmail(newValue);
    }
    
    function handlePwd(e) {
        const newValue = e.target.value;
        console.log(newValue);
        setPwd(newValue);
    }

    function handleCnfrmPwd(e) {
        const newValue = e.target.value;
        // console.log(newValue);
        setCnfrmPwd(newValue);
    }
    
    return (
      <>
        {/* if show modal is true, modal will appear*/}
        {showModal && <MODAL heading={heading} message={message} changeState={setShowModal} />}

        <div className={styles.formContainer}>
          <div className="w-full max-w-xs">
            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="fullName"
                >
                  Full Name
                </label>
                <input
                  value={fullName}
                  onChange={handleFullName}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="fullName"
                  type="text"
                  placeholder="Full Name"
                  required={true}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="rollNum"
                >
                  Roll Number
                </label>
                <input
                  value={rollNum}
                  onChange={handleRollNum}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="BTECH/*****/**"
                  required={true}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  value={email}
                  onChange={handleEmail}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Institute Mail Id"
                  required={true}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  value={pwd}
                  onChange={handlePwd}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                  required={true}
                />
                {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="cnfrmPwd"
                >
                  Confirm Password
                </label>
                <input
                  value={cnfrmPwd}
                  onChange={handleCnfrmPwd}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="cnfrmPwd"
                  type="password"
                  placeholder="******************"
                  required={true}
                />
                {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Create New User
                </button>
                {isLoading && <Loader />}
                {/* <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                Forgot Password?
            </a> */}
              </div>
            </form>
          </div>
        </div>
      </>
      );
}

export default SignUp;