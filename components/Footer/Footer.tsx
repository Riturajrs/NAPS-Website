import styles from "./Footer.module.css"
import Image from "next/image"
import InstaLogo from "../../media/instagram.svg"
import LinkedinLogo from "../../media/linkedin.svg"
import FacebookLogo from "../../media/facebook.svg"
import NapsLogo from "../../media/napslogo.png"
import Link from "next/link"

export default function Footer(){
  return (
    <div className="lg:mx-16 sm:mx-8 mx-6 m-2 rounded-lg shadow-md border-gray-200 p-2 px-4">
      <div className="">
        <div className="flex flex-row justify-between">
        <div className="flex text-sm sm:text-base flex-row justify-center w-max mx-auto sm:mx-0 sm:w-auto">
          <div className="hover:bg-slate-200 transition-all duration-200 rounded-md px-2 py-1 font-medium cursor-pointer">
            <Link  href="/">Home</Link>
          </div>
          <div className="hover:bg-slate-200 transition-all duration-200 rounded-md px-2 py-1 font-medium cursor-pointer">
          <Link  href="/about">About</Link>
          </div>
          <div className="hover:bg-slate-200 transition-all duration-200 rounded-md px-2 py-1 font-medium cursor-pointer">
          <Link  href="/Epistle">Epistle</Link>
          </div>
          <div className="hover:bg-slate-200 transition-all duration-200 rounded-md px-2 py-1 font-medium cursor-pointer">
          <Link  href="/Team">Team</Link>
          </div>
          <div className="hover:bg-slate-200 transition-all duration-200 rounded-md px-2 py-1 font-medium cursor-pointer">
          <Link  href="/Search">Search</Link>
          </div>
        </div>
        <div className="sm:block hidden cursor-pointer">
          <Image src={InstaLogo} alt="Instagram" className={styles.connectItem} layout="intrinsic" />
          <Image src={LinkedinLogo} alt="LinkedIn" className={styles.connectItem} layout="intrinsic" />
          <Image src={FacebookLogo} alt="Facebook" className={styles.connectItem} layout="intrinsic" />
        </div>
        </div>
      <div className="mt-2 font-light text-sm text-center w-full">
      © News and Publication Society
      </div>
      </div>
    </div>
  )
}