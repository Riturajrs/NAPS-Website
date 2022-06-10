import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import styles from "./login.module.css";
import MODAL from "../../components/Modal/Modal";
import Loader from "../../components/Loader/Loader";

const Login = () => {
  // state vars
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [rollNum, setRollNum] = useState("");
  const [pwd, setPwd] = useState("");
  const [showModal,setShowModal] = useState(false);
  const [isLoading,setIsLoading] = useState(false);
  
  // cookies object to access all cookies
  const [cookies, setCookie] = useCookies(["user"]);
  
  // router instance for redirects 
  const router = useRouter();

  useEffect(() => {
    // check if user already logged in
    // redirect to /admin
    if(cookies.user){
      router.push("/Admin");
    }
  },[cookies.user,router]);


  async function loginReq(loginDetails) {
    // loader will appear until fetch request is complete
    setIsLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_APIBASE}/users/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(loginDetails),
        }
      );
      // console.log(response);
      if (response.status === 400) setShowModal(true);
      else {
        const data = await response.json();
        const cookie = data.token;
        // console.log(data);
        // console.log(data.data.user);
        
        // set jwt token as cookie 
        // to create session
        setCookie("user", JSON.stringify(cookie).slice(1, -1), {
          path: "/",
          maxAge: 3600, // Expires after 1hr
          sameSite: true,
        });

        // set author id as cookie
        // to fetch author details
        setCookie("authorId", data.data.user.authorId, {
          path: "/",
          maxAge: 3600,
          sameSite: true,
        });
      }
    } catch (err) {
      // console.log(err);
    }
    setIsLoading(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const loginDetails = {
      rollNum: rollNum,
      password: pwd,
    };
    // console.log(loginDetails);
    loginReq(loginDetails);
  }

  function handleRollNum(e) {
    const newValue = e.target.value;
    // console.log(newValue);
    setRollNum(newValue);
  }

  function handlePwd(e) {
    const newValue = e.target.value;
    // console.log(newValue);
    setPwd(newValue);
  }

  return (
    <>
      {/* if incorrect login details, modal will appear */}
      {showModal && (
        <MODAL
          heading={"Login Failed"}
          message={"Incorrect Username or Password"}
          changeState={setShowModal}
        />
      )}

    {/* if incorrect login details, modal will appear */}
    {showModal && <MODAL heading={"Login Failed"} message={"Incorrect Username or Password"} changeState={setShowModal} />}
    
    <div className="w-max mx-auto mt-4">
      <div className="w-full max-w-xs">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="rollNum"
            >
              RollNum
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
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
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
};
export default Login;
