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
        <div className="flex flex-col m-8 sm:mx-10 mb-16 md:mt-36 md:mx-24">
            <div className="flex flex-col-reverse gap-4 md:flex-row mx-4 justify-around">
                <div className="text-6xl sm:text-8xl font-bold gap-8 flex flex-col justify-center text-center">
                    About Us
                {/* <p className="text-lg font-normal">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p> */}
                </div>
                <div className="relative h-48 w-full md:h-48 md:w-64">
                    <Image src = {logo} alt={"Logo"} layout="fill" objectFit="contain" />
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
            <div className="mt-8">
                <h1 className="mx-auto text-3xl font-bold text-center mb-8">What we do</h1>
                <div ref={ref1} className={aboutStyles.card}>
                    <div className={aboutStyles.cardBar}>
                    </div>
                    <div className={`${aboutStyles.cardContent} ${inView1?"shadow-md":"shadow-sm"}`} style={inView1?{transform: "scale(1.0)"}: {transform: "scale(0.9)"}}>
                    <div className="font-semibold text-xl">
                        Nisi officia sit eiusmod ad velit laboris ex ea pariatur irure exercitation Lorem.
                    </div>
                    <div className="">
                        Do reprehenderit laborum cillum ad veniam do anim commodo culpa. Ullamco nisi veniam aute magna enim et. Eu dolore dolore Lorem cillum ad dolore sit officia. Laboris aliquip anim labore dolor est in ex laborum ut laborum nostrud do ut nostrud.
                    </div>
                    </div>
                </div>

                <div ref={ref2} className={aboutStyles.card} >
                    <div className={aboutStyles.cardBar}>
                    </div>
                    <div className={`${aboutStyles.cardContent} ${inView2?"shadow-md":"shadow-sm"}`} style={inView2?{transform: "scale(1.0)"}: {transform: "scale(0.9)"}}>
                    <div className="font-semibold text-xl">
                        Nisi officia sit eiusmod ad velit laboris ex ea pariatur irure exercitation Lorem.
                    </div>
                    <div className="">
                        Do reprehenderit laborum cillum ad veniam do anim commodo culpa. Ullamco nisi veniam aute magna enim et. Eu dolore dolore Lorem cillum ad dolore sit officia. Laboris aliquip anim labore dolor est in ex laborum ut laborum nostrud do ut nostrud.
                    </div>
                    </div>
                </div>
            </div>

                <div ref={ref3} className={aboutStyles.card}>
                    <div className={aboutStyles.cardBar}>
                    </div>
                    <div className={`${aboutStyles.cardContent} ${inView3?"shadow-md": "shadow-sm"}`} style={inView3?{transform: "scale(1.0)"}: {transform: "scale(0.9)"}}>
                    <div className="font-semibold text-xl">
                        Nisi officia sit eiusmod ad velit laboris ex ea pariatur irure exercitation Lorem.
                    </div>
                    <div className="">
                        Do reprehenderit laborum cillum ad veniam do anim commodo culpa. Ullamco nisi veniam aute magna enim et. Eu dolore dolore Lorem cillum ad dolore sit officia. Laboris aliquip anim labore dolor est in ex laborum ut laborum nostrud do ut nostrud.
                    </div>
                    </div>
                </div>

                <div ref={ref4} className={aboutStyles.card}>
                    <div className={aboutStyles.cardBar}>
                    </div>
                    <div className={`${aboutStyles.cardContent} ${inView4?"shadow-md": "shadow-sm"}`} style={inView4?{transform: "scale(1.0)"}: {transform: "scale(0.9)"}}>
                    <div className="font-semibold text-xl">
                        Nisi officia sit eiusmod ad velit laboris ex ea pariatur irure exercitation Lorem.
                    </div>
                    <div className="">
                        Do reprehenderit laborum cillum ad veniam do anim commodo culpa. Ullamco nisi veniam aute magna enim et. Eu dolore dolore Lorem cillum ad dolore sit officia. Laboris aliquip anim labore dolor est in ex laborum ut laborum nostrud do ut nostrud.
                    </div>
                    </div>
                </div>

                <div ref={ref5} className={aboutStyles.card}>
                    <div className={aboutStyles.cardBar}>
                    </div>
                    <div className={`${aboutStyles.cardContent} ${inView5?"shadow-md": "shadow-sm"}`} style={inView5?{transform: "scale(1.0)"}: {transform: "scale(0.9)"}}>
                    <div className="font-semibold text-xl">
                        Nisi officia sit eiusmod ad velit laboris ex ea pariatur irure exercitation Lorem.
                    </div>
                    <div className="">
                        Do reprehenderit laborum cillum ad veniam do anim commodo culpa. Ullamco nisi veniam aute magna enim et. Eu dolore dolore Lorem cillum ad dolore sit officia. Laboris aliquip anim labore dolor est in ex laborum ut laborum nostrud do ut nostrud.
                    </div>
                    </div>
                </div>

                <div ref={ref6} className={aboutStyles.card}>
                    <div className={aboutStyles.cardBar}>
                    </div>
                    <div className={`${aboutStyles.cardContent} ${inView6?"shadow-md": "shadow-sm"}`} style={inView6?{transform: "scale(1.0)"}: {transform: "scale(0.9)"}}>
                    <div className="font-semibold text-xl">
                        Nisi officia sit eiusmod ad velit laboris ex ea pariatur irure exercitation Lorem.
                    </div>
                    <div className="">
                        Do reprehenderit laborum cillum ad veniam do anim commodo culpa. Ullamco nisi veniam aute magna enim et. Eu dolore dolore Lorem cillum ad dolore sit officia. Laboris aliquip anim labore dolor est in ex laborum ut laborum nostrud do ut nostrud.
                    </div>
                    </div>
                </div>

                <div ref={ref7} className={aboutStyles.card}>
                    <div className={aboutStyles.cardBar}>
                    </div>
                    <div className={`${aboutStyles.cardContent} ${inView7?"shadow-md": "shadow-sm"}`} style={inView7?{transform: "scale(1.0)"}: {transform: "scale(0.9)"}}>
                    <div className="font-semibold text-xl">
                        Nisi officia sit eiusmod ad velit laboris ex ea pariatur irure exercitation Lorem.
                    </div>
                    <div className="">
                        Do reprehenderit laborum cillum ad veniam do anim commodo culpa. Ullamco nisi veniam aute magna enim et. Eu dolore dolore Lorem cillum ad dolore sit officia. Laboris aliquip anim labore dolor est in ex laborum ut laborum nostrud do ut nostrud.
                    </div>
                    </div>
                </div>

                <div ref={ref8} className={aboutStyles.card}>
                    <div className={aboutStyles.cardBar}>
                    </div>
                    <div className={`${aboutStyles.cardContent} ${inView8?"shadow-md": "shadow-sm"}`} style={inView8?{transform: "scale(1.0)"}: {transform: "scale(0.9)"}}>
                    <div className="font-semibold text-xl">
                        Nisi officia sit eiusmod ad velit laboris ex ea pariatur irure exercitation Lorem.
                    </div>
                    <div className="">
                        Do reprehenderit laborum cillum ad veniam do anim commodo culpa. Ullamco nisi veniam aute magna enim et. Eu dolore dolore Lorem cillum ad dolore sit officia. Laboris aliquip anim labore dolor est in ex laborum ut laborum nostrud do ut nostrud.
                    </div>
                    </div>
                </div>
        </div>
    ); 
}
