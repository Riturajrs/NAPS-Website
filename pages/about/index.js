import Image from "next/image"
import logo from "../../media/napslogo.png"
import aboutStyles from "./about.module.css";
export default function AboutUs(){
    return(
        <div className={aboutStyles.aboutCtn}>
            <div className={aboutStyles.about}>
                <div className={aboutStyles.aboutCtn1}>
                <div className={aboutStyles.aboutTxtCtn}>
                    <div className={aboutStyles.aboutTxt+" "+aboutStyles.aboutTxt1}>About</div>
                    <div className={aboutStyles.aboutTxt+" "+aboutStyles.aboutTxt2}>Us</div>
                </div>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
                <button className={"text-white:font-bold bg-blue-700 text-white font-bold rounded py-2 px-4" + " " + aboutStyles.aboutBtn} >
                    Read More
                </button>
                </div>
                <div className={aboutStyles.aboutCtn2}>
                    <Image src = {logo} alt={"Logo"} width="500px" height="250px" />
                </div>
            </div>
            <div className={aboutStyles.txt}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Pulvinar elementum integer enim 
            neque. Diam ut venenatis tellus in metus vulputate eu scelerisque. Dis parturient montes nascetur ridiculus mus mauris 
            vitae ultricies. A scelerisque purus semper eget duis at. Ut ornare lectus sit amet. Metus dictum at tempor commodo 
            ullamcorper a lacus vestibulum. Metus aliquam eleifend mi in nulla posuere sollicitudin. Euismod quis viverra nibh cras pulvinar mattis. Egestas diam in arcu cursus euismod quis viverra nibh cras.
            Praesent elementum facilisis leo vel fringilla est ullamcorper. Dignissim suspendisse in est ante in nibh mauris cursus. 
            </div>
        </div>
    ); 
}