import Image from "next/image"
import logo from "../../media/napslogo.png"
import { useInView } from "react-intersection-observer";
import aboutStyles from "./about.module.css";



export default function AboutUs(){
    const animationOptions = {
        threshold: 1
    }
    const [ref1, inView1] = useInView(animationOptions)
    const [ref2, inView2] = useInView(animationOptions)
    const [ref3, inView3] = useInView(animationOptions)
    const [ref4, inView4] = useInView(animationOptions)
    const [ref5, inView5] = useInView(animationOptions)
    const [ref6, inView6] = useInView(animationOptions)
    const [ref7, inView7] = useInView(animationOptions)
    const [ref8, inView8] = useInView(animationOptions)
    
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
                    <Image src = {logo} alt={"Logo"} layout="intrinsic" />
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
            <div className={aboutStyles.activities}>
                <h1 className={aboutStyles.activitiesHeading}>What we do</h1>
                <div ref={ref1} className={aboutStyles.card}>
                    <div className={aboutStyles.cardBar}>
                    </div>
                    <div className={aboutStyles.cardContent} style={inView1?{transform: "scale(1.1)"}: {transform: "scale(1)"}}>
                    <div className={aboutStyles.cardHeading}>
                        Nisi officia sit eiusmod ad velit laboris ex ea pariatur irure exercitation Lorem.
                    </div>
                    <div className={aboutStyles.cardText}>
                        Do reprehenderit laborum cillum ad veniam do anim commodo culpa. Ullamco nisi veniam aute magna enim et. Eu dolore dolore Lorem cillum ad dolore sit officia. Laboris aliquip anim labore dolor est in ex laborum ut laborum nostrud do ut nostrud.
                    </div>
                    </div>
                </div>

                <div ref={ref2} className={aboutStyles.card} >
                    <div className={aboutStyles.cardBar}>
                    </div>
                    <div className={aboutStyles.cardContent} style={inView2?{transform: "scale(1.1)"}: {transform: "scale(1)"}}>
                    <div className={aboutStyles.cardHeading}>
                        Nisi officia sit eiusmod ad velit laboris ex ea pariatur irure exercitation Lorem.
                    </div>
                    <div className={aboutStyles.cardText}>
                        Do reprehenderit laborum cillum ad veniam do anim commodo culpa. Ullamco nisi veniam aute magna enim et. Eu dolore dolore Lorem cillum ad dolore sit officia. Laboris aliquip anim labore dolor est in ex laborum ut laborum nostrud do ut nostrud.
                    </div>
                    </div>
                </div>
            </div>

                <div ref={ref3} className={aboutStyles.card}>
                    <div className={aboutStyles.cardBar}>
                    </div>
                    <div className={aboutStyles.cardContent} style={inView3?{transform: "scale(1.1)"}: {transform: "scale(1)"}}>
                    <div className={aboutStyles.cardHeading}>
                        Nisi officia sit eiusmod ad velit laboris ex ea pariatur irure exercitation Lorem.
                    </div>
                    <div className={aboutStyles.cardText}>
                        Do reprehenderit laborum cillum ad veniam do anim commodo culpa. Ullamco nisi veniam aute magna enim et. Eu dolore dolore Lorem cillum ad dolore sit officia. Laboris aliquip anim labore dolor est in ex laborum ut laborum nostrud do ut nostrud.
                    </div>
                    </div>
                </div>

                <div ref={ref4} className={aboutStyles.card}>
                    <div className={aboutStyles.cardBar}>
                    </div>
                    <div className={aboutStyles.cardContent} style={inView4?{transform: "scale(1.1)"}: {transform: "scale(1)"}}>
                    <div className={aboutStyles.cardHeading}>
                        Nisi officia sit eiusmod ad velit laboris ex ea pariatur irure exercitation Lorem.
                    </div>
                    <div className={aboutStyles.cardText}>
                        Do reprehenderit laborum cillum ad veniam do anim commodo culpa. Ullamco nisi veniam aute magna enim et. Eu dolore dolore Lorem cillum ad dolore sit officia. Laboris aliquip anim labore dolor est in ex laborum ut laborum nostrud do ut nostrud.
                    </div>
                    </div>
                </div>

                <div ref={ref5} className={aboutStyles.card}>
                    <div className={aboutStyles.cardBar}>
                    </div>
                    <div className={aboutStyles.cardContent} style={inView5?{transform: "scale(1.1)"}: {transform: "scale(1)"}}>
                    <div className={aboutStyles.cardHeading}>
                        Nisi officia sit eiusmod ad velit laboris ex ea pariatur irure exercitation Lorem.
                    </div>
                    <div className={aboutStyles.cardText}>
                        Do reprehenderit laborum cillum ad veniam do anim commodo culpa. Ullamco nisi veniam aute magna enim et. Eu dolore dolore Lorem cillum ad dolore sit officia. Laboris aliquip anim labore dolor est in ex laborum ut laborum nostrud do ut nostrud.
                    </div>
                    </div>
                </div>

                <div ref={ref6} className={aboutStyles.card}>
                    <div className={aboutStyles.cardBar}>
                    </div>
                    <div className={aboutStyles.cardContent} style={inView6?{transform: "scale(1.1)"}: {transform: "scale(1)"}}>
                    <div className={aboutStyles.cardHeading}>
                        Nisi officia sit eiusmod ad velit laboris ex ea pariatur irure exercitation Lorem.
                    </div>
                    <div className={aboutStyles.cardText}>
                        Do reprehenderit laborum cillum ad veniam do anim commodo culpa. Ullamco nisi veniam aute magna enim et. Eu dolore dolore Lorem cillum ad dolore sit officia. Laboris aliquip anim labore dolor est in ex laborum ut laborum nostrud do ut nostrud.
                    </div>
                    </div>
                </div>

                <div ref={ref7} className={aboutStyles.card}>
                    <div className={aboutStyles.cardBar}>
                    </div>
                    <div className={aboutStyles.cardContent} style={inView7?{transform: "scale(1.1)"}: {transform: "scale(1)"}}>
                    <div className={aboutStyles.cardHeading}>
                        Nisi officia sit eiusmod ad velit laboris ex ea pariatur irure exercitation Lorem.
                    </div>
                    <div className={aboutStyles.cardText}>
                        Do reprehenderit laborum cillum ad veniam do anim commodo culpa. Ullamco nisi veniam aute magna enim et. Eu dolore dolore Lorem cillum ad dolore sit officia. Laboris aliquip anim labore dolor est in ex laborum ut laborum nostrud do ut nostrud.
                    </div>
                    </div>
                </div>

                <div ref={ref8} className={aboutStyles.card}>
                    <div className={aboutStyles.cardBar}>
                    </div>
                    <div className={aboutStyles.cardContent} style={inView8?{transform: "scale(1.1)"}: {transform: "scale(1)"}}>
                    <div className={aboutStyles.cardHeading}>
                        Nisi officia sit eiusmod ad velit laboris ex ea pariatur irure exercitation Lorem.
                    </div>
                    <div className={aboutStyles.cardText}>
                        Do reprehenderit laborum cillum ad veniam do anim commodo culpa. Ullamco nisi veniam aute magna enim et. Eu dolore dolore Lorem cillum ad dolore sit officia. Laboris aliquip anim labore dolor est in ex laborum ut laborum nostrud do ut nostrud.
                    </div>
                    </div>
                </div>
        </div>
    ); 
}