import { Tabs } from "flowbite-react";
import styles from "./Admin.module.css";
import PostForm from "../../components/PostForm/PostForm"
import AuthorDetails from "../../components/AuthorDetailsForm/AuthorDetails";
import Form from "../../components/Epistle/Form";
import { useCookies } from "react-cookie";
import {useRouter} from "next/router";
import { useEffect } from "react";

const Admin = ({data})=>{

    const [cookie,setCookie] = useCookies("user");

    const router = useRouter();

    useEffect(()=>{
        if(!cookie.user){
            router.push("http://localhost:3000/login");
        }
    },[]);

        
    return <div className={styles.formContainer}>      
        <Tabs.Group
        aria-label="Tabs with underline"
        style="underline"
        >
            <Tabs.Item title="NEW POST">
                <PostForm data={data}/>
            </Tabs.Item>

            <Tabs.Item
                active={true}
                title="UPDATE"
            >
                BLOG UPDATE
                {/* DROP COMPONENT FOR BLOG UPDATE HERE */}
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
    const res = await fetch(`${process.env.APIBASE}/author`,   {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }})
    var data = await res.json();
    return {
        props: {data},
        revalidate: 120
    }
}
export default Admin;