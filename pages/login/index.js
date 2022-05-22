import { useState } from "react";
import { useCookies } from "react-cookie";
import styles from "./login.module.css";

const Login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [rollNum, setRollNum] = useState("");
  const [cookie, setCookie] = useCookies(["user"]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [pwd, setPwd] = useState("");
  async function loginReq(loginDetails) {
    try {
      const response = await fetch(`http://localhost:4000/api/v1/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginDetails),
      });
      const data = await response.json();
      const cookie = data.token;
      console.log(data);
      setCookie("user", JSON.stringify(cookie).slice(1, -1), {
        path: "/",
        maxAge: 3600, // Expires after 1hr
        sameSite: true,
      });
    } catch (err) {
      console.log(err);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const loginDetails = {
      rollNum: rollNum,
      password: pwd,
    };
    console.log(loginDetails);
    loginReq(loginDetails);
  }

  function handleRollNum(e) {
    const newValue = e.target.value;
    console.log(newValue);
    setRollNum(newValue);
  }

  function handlePwd(e) {
    const newValue = e.target.value;
    console.log(newValue);
    setPwd(newValue);
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
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            {/* <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Forgot Password?
        </a> */}
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
