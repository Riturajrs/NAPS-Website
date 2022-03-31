import Image from "next/image"
import Link from "next/link"
import styles from "./card.module.css"
import InstaLogo from "../../media/instagram.svg"
import LinkedinLogo from "../../media/linkedin.svg"
import FacebookLogo from "../../media/facebook.svg"

export default function MemberCard({image, name, post, linkedin, insta, facebook, year}){
return(
  <div className={styles.memberCard}>
    <Image src={image} alt="member-photo" height="160px" width="120px"/>
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
      <Image href={facebook} src={FacebookLogo} alt="Facebook" className={styles.connectItem} />
      </Link>
    </div>
  </div>
)

}