import { GetStaticProps } from "next";
import { useState } from "react";
import Image from "next/image"
import logo from "../../media/napslogo.png"
import Card from "../../components/Card/Card";
import styles from "./voxpopuli.module.css";
import Head from "next/head";


export default function Voxpopuli () {

    return (

            <div className="flex flex-col m-5 sm:mx-10 mb-10 md:mt-36 md:mx-24">
            <div className="flex flex-col-reverse gap-4 md:flex-row mx-4 justify-around">
                <div className="text-6xl sm:text-5xl font-bold gap-5 flex flex-col justify-center text-center">
                    Vox Populi 2023
            
                </div>
                <div className="relative h-48 w-full md:h-80 md:w-80">
                    <Image src = {logo} alt={"Logo"} layout="fill" objectFit="contain" />
                </div>
                <div className="relative h-10 w-full md:h-48 md:w-64">

                </div>
            </div>
            <div className="m-4 my-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Pulvinar elementum integer enim 
            neque. Diam ut venenatis tellus in metus vulputate eu scelerisque. Dis parturient montes nascetur ridiculus mus mauris 
            vitae ultricies. A scelerisque purus semper eget duis at. Ut ornare lectus sit amet. Metus dictum at tempor commodo 
            ullamcorper a lacus vestibulum. Metus aliquam eleifend mi in nulla posuere sollicitudin. Euismod quis viverra nibh cras pulvinar mattis. Egestas diam in arcu cursus euismod quis viverra nibh cras.
            Praesent elementum facilisis leo vel fringilla est ullamcorper. Dignissim suspendisse in est ante in nibh mauris cursus. 
            </div>
        
        <>
        <Head>
				<title>NAPS | Vox Populi</title>
			</Head>
        
       

          
        <div className={styles.voxpopuli}></div>
        
 
     </>

</div>
    
        
        
    )






}
