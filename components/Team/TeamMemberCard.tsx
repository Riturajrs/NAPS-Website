import Image from "next/image"
import Link from "next/link"
import styles from "./card.module.css"
import InstaLogo from "../../media/instagram.svg"
import LinkedinLogo from "../../media/linkedin.svg"
import FacebookLogo from "../../media/facebook.svg"
type memberinfo = {
  image: string,
  name: string,
  post: string,
  linkedin: URL,
  insta: URL,
  facebook: URL,
  year: string
}

export default function MemberCard({image, name, facebook, insta, linkedin, post, year}:memberinfo){
return(
  <div className={styles.memberCard}>
    <Image placeholder="blur" src={image} alt="member-photo" layout="intrinsic"/>
    <div className={styles.name}>
    {name}
    </div>
    <div className={styles.post}>
    {post}
    </div>
    <div className={styles.year}>
      {year}
    </div>
    <div className={styles.connectBar}>
      <Link href={insta} passHref>
      <Image src={InstaLogo} alt="Instagram" className={styles.connectItem} />
      </Link>
      <Link href={linkedin} passHref>
      <Image src={LinkedinLogo} alt="LinkedIn" className={styles.connectItem} />
      </Link>
      <Link href={facebook} passHref>
      <Image src={FacebookLogo} alt="Facebook" className={styles.connectItem} />
      </Link>
    </div>
  </div>
)

}