import { StaticImageData } from "next/image";
import Link from "next/link";
import { currentmembers } from "../../team";
import Image from "next/image";
import logo from "../../media/napslogo.png";
import a from "../../media/1.jpeg";
import b from "../../media/2.jpeg";
import c from "../../media/3.jpg";

import Card from "../../components/Card/Card";
import styles from "./voxpopuli.module.css";
import Head from "next/head";

export default function Voxpopuli() {
  return (
    <>
      <div className="flex flex-col m-5 sm:mx-10 mb-10 md:mt-36 md:mx-30">
        <div className="flex flex-col-reverse gap-4 md:flex-row mx-4 justify-around">
          <div className="text-10xl sm:text-5xl font-bold gap-5 flex flex-col justify-center text-center">
            Vox Populi 2023
          </div>
          <div className="relative h-48 w-full md:h-80 md:w-80">
            <Image src={logo} alt={"Logo"} layout="fill" objectFit="contain" />
          </div>
          <div className="relative h-10 w-full md:h-48 md:w-64"></div>
        </div>
        <div className="m-1 my-5 text-2xl font-serif ">
          Ladies and gentlemen, gird your loins for an exhilarating journey
          through a realm of expressive verbiage and captivating witticisms!
          With the proliferation of urban jungles, it behooves us to shed light
          on the subtle, yet pressing issues that are lurking in plain sight.
          And who better than YOU to do so? Join 'Vox Populi' - an online
          writing contest by BIT Mesra's News and Publication Society. Share
          your uncensored thoughts and ideas about your city and win prizes!
        </div>

        <Head>
          <title>NAPS | Vox Populi</title>
        </Head>

        <div className="text-6xl sm:text-5xl font gap-5 flex flex-col justify-center text-center font-semibold text-red-700">
          Your Entries :-
          <div></div>
        </div>
        <div className="card">
          <div className="flex flex-col justify-center w-50">
          <Image src={a} alt={"Logo"} />
          </div>
          <br></br>
          <div className="content">
            <br></br>
            <div className="text-4xl sm:text-4xl gap-5 flex felx-col justify-center text-center font-serif border width 50  border-groove ">
              Ayushi Sha <br></br>
              BIT Mesra
            </div>
          </div>
          <br></br>
          <div className="card">
          <div className="flex flex-col justify-center w-50">
            <Image src={b} alt={"Logo"} />
            </div>
            <br></br>
            <div className="content">
              <br></br>
              <div className="text-4xl sm:text-4xl gap-5 flex felx-col justify-center text-center font-serif border width 50  border-groove  ">
                Shaswat Jha<br></br>
                BIT Mesra
              </div>
            </div>
          </div>
          <br></br>

          <div className="card">
          <div className="flex flex-col justify-center w-50">
          <Image src={c} alt={"Logo"} />

            
            </div>
            <br></br>
            <div className="content">
              <br></br>
              <div className="text-4xl sm:text-4xl gap-5 flex felx-col justify-center text-center font-serif border width 50  border-groove ">
              Chhavi Rani 
                 <br></br>
                BIT Mesra
              </div>
            </div>
          </div>
          <br></br>


          <div className="card">
          <div className="flex flex-col justify-center w-50">
              <img src="https://images.pexels.com/photos/1815257/pexels-photo-1815257.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            </div>
            <br></br>
            <div className="content">
              <br></br>
              <div className="text-4xl sm:text-4xl gap-5 flex felx-col justify-center text-center  font-serif border width 50  border-groove ">
                Keep Smiling <br></br>
                college name
              </div>
            </div>
          </div>
        





















          
        </div>
      </div>
    </>
  );
}
