import { Tabs } from "flowbite-react";
import styles from "./Admin.module.css";
import PostForm from "../../components/PostForm/PostForm"
import UpdateBlog from "../../components/UpdateBlog/UpdateBlog"
import AuthorDetails from "../../components/AuthorDetailsForm/AuthorDetails";
import Form from "../../components/Epistle/Form";
import { useCookies } from "react-cookie";
import {useRouter} from "next/router";
import { useEffect } from "react";

const Admin = ({authorData, blogData})=>{

    // cookies object to access all cookies
    const [cookies,setCookie] = useCookies();

    // router instance for redirects
    const router = useRouter();

    useEffect(()=>{
        // if user not logged in redirect to login page
        if(!cookies.user){
            router.push("http://localhost:3000/login");
        }
    },[cookies,router]);

        
    return <div className={styles.formContainer}>      
        <Tabs.Group
        aria-label="Tabs with underline"
        style="underline"
        >
            <Tabs.Item title="NEW POST">
                <PostForm data={authorData}/>
            </Tabs.Item>

            <Tabs.Item
                active={true}
                title="UPDATE"
            >
                <UpdateBlog data={blogData}/>
            </Tabs.Item>

            <Tabs.Item title="YOUR PROFILE">
                {/* AUTHOR PROFILE UPDATE
                DROP COMPONENT FOR ATUHOR PROFILE HERE */}
                <AuthorDetails />
            </Tabs.Item>

            <Tabs.Item title="EPISTLE">
                <Form />
            </Tabs.Item>

        </Tabs.Group>
    </div>

}

export const getStaticProps = async()=>{
    const authorRes = await fetch(`${process.env.APIBASE}/author`,   {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }})
    var authorData = await authorRes.json();
    const blogRes = await fetch(`${process.env.APIBASE}/blog`)
    var blogData = await blogRes.json();
    return {
        props: {authorData, blogData},
        revalidate: 120
    }
}
export default Admin;