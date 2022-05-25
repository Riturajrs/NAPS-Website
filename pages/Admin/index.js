import { Tabs } from "flowbite-react";
import styles from "./Admin.module.css";

const Admin = ()=>{
    return <div className={styles.formContainer}>      
        <Tabs.Group
        aria-label="Tabs with underline"
        style="underline"
        >
            <Tabs.Item title="NEW POST">
                POST FORM
                {/* DROP COMPONENT FOR POST FORM HERE */}
            </Tabs.Item>
            <Tabs.Item
                active={true}
                title="UPDATE"
            >
                BLOG UPDATE
                {/* DROP COMPONENT FOR BLOG UPDATE HERE */}
            </Tabs.Item>
            <Tabs.Item title="YOUR PROFILE">
                AUTHOR PROFILE UPDATE
                {/* DROP COMPONENT FOR ATUHOR PROFILE HERE */}
            </Tabs.Item>
            <Tabs.Item title="EDITORIAL">
                EDITORIAL FORM
                {/* DROP COMPONENT FOR EDITORIAL POSTING FORM HERE  */}
            </Tabs.Item>
        </Tabs.Group>
    </div>
}

export default Admin;