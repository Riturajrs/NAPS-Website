import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import styles from "./card.module.css"
import InstaLogo from "../../media/instagram.svg"
import LinkedinLogo from "../../media/linkedin.svg"
import FacebookLogo from "../../media/facebook.svg"
type memberinfo = {
  image: string|StaticImageData,
  name: string,
  post: string,
  linkedin?: string,
  insta?: string,
  facebook?: string,
  year: string
}

export default function MemberCard({image, name, facebook, insta, linkedin, post, year}:memberinfo){
return(
  <div className="flex flex-col rounded-lg shadow-sm hover:shadow-md justify-center items-center m-8 border border-slate-200 transition-all duration-200 overflow-hidden">
    <div className={styles.memberImage}>
    <Image src={image} alt={`${name}'s photo`} layout="fill"/>
    </div>
    <div className="py-4 border-t border-slate-200 w-full text-center bg-slate-100 text-slate-800">
    <div className="font-semibold text-2xl">
    {name}
    </div>
    <div className="text-lg">
    {post}
    </div>
    <div className="text-lg">
      {year}
    </div>
    <div className="flex flex-row h-8 justify-center gap-3"> 
      {insta&&(
      <Link href={insta} passHref>
      <Image src={InstaLogo} alt="Instagram" className={`cursor-pointer`} />
      </Link>
      )}
      {linkedin&&(
      <Link href={linkedin} passHref>
      <Image src={LinkedinLogo} alt="LinkedIn" className="cursor-pointer"/>
      </Link>
      )}
      {facebook&&(
      <Link href={facebook} passHref>
      <Image src={FacebookLogo} alt="Facebook" className={`cursor-pointer`} />
      </Link>
      )}
    </div>
    </div>
  </div>
)

}