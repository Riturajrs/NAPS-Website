import { useState } from "react";
import styles from "./SignUp.module.css";
import { useCookies } from "react-cookie";

const SignUp = ()=>{
  const[fullName,setFUllName] = useState("");
  const[rollNum,setRollNum] = useState("");
  const[email,setEmail] = useState("");
  const[pwd,setPwd] = useState("");
  const[cnfrmPwd,setCnfrmPwd] = useState("");
  const[cookie,setCookie] = useCookies("user");

    // fetch req to API
    async function SingUpReq(newUserDetails) {

      try{
        // first new author is created
        const auhtorDetails = {
          name: newUserDetails.name,
          photo: "https://mdbootstrap.com/img/new/standard/city/041.jpg",
          desc: "NAPS Author"
        }
        let response = await fetch(`http://13.233.159.246:4000/api/v1/author`,{
          method: "POST",
          headers: {
            "Content-Type": "application/json", "authorization": `Bearer: ${cookie.user}`
          },
          body: JSON.stringify(auhtorDetails),
        })

        let data = await res.json();
        // extract author id
        const authorId = data._id;

        console.log(authorId);
        // add author id to new user details
        newUserDetails = {...newUserDetails,authorId: authorId};

        console.log(cookie.user)
        
        // create new user 
        response = await fetch(`http://13.233.159.246:4000/api/v1/users/signUp`, {
          credentials: "include",
          method: "POST",
          headers: { "Content-Type": "application/json","authorization": `Bearer: ${cookie.user}` },
          body: JSON.stringify(newUserDetails),
        });
        data = await response.json();
        console.log(data);

      } catch(err){
        console.log(err);
      }
      
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
        console.log(newUserDetails);
        SingUpReq(newUserDetails);
    }

    function handleFullName(e) {
        const newValue = e.target.value;
        console.log(newValue);
        setFUllName(newValue);
    }
    
    function handleRollNum(e) {
        const newValue = e.target.value;
        console.log(newValue);
        setRollNum(newValue);
    }
    
    function handleEmail(e) {
        const newValue = e.target.value;
        console.log(newValue);
        setEmail(newValue);
    }
    
    function handlePwd(e) {
        const newValue = e.target.value;
        console.log(newValue);
        setPwd(newValue);
    }

    function handleCnfrmPwd(e) {
        const newValue = e.target.value;
        console.log(newValue);
        setCnfrmPwd(newValue);
    }
    
    return (
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
                {/* <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                Forgot Password?
            </a> */}
              </div>
            </form>
          </div>
        </div>
      );
}

export default SignUp;