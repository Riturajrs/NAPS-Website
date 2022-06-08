import { useState, useEffect, useCallback } from "react";
import { useCookies } from "react-cookie";
export const fetchdata = async (url, method, cookie = {}) => {
  const response = await fetch(url, {
    credentials: "include",
    method: `${method || "GET"}`,
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer: ${cookie.user}`,
    },
  });
  return await response.json();
};
export const useFetch = (url, method, reload) => {
  const [cookie, setCookie] = useCookies("user");
  const [data, setData] = useState([]);
  const getData = async () => {
    setData(await fetchdata(url, method, cookie));
  };
  useEffect(() => {
    getData();
  }, [url, reload]);

  return { data };
};
