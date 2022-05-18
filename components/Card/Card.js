import styles from "./Card.module.css"
import Image from "next/image"
import testImage from "../../media/sample.jpg"
export default function Card({heading, content, author, date, image}) {
  return(
    <div className={styles.card}>
      <Image placeholder="blur" src={testImage} alt="news-image" layout="intrinsic"/>
      <h1 className={styles.heading}>
        {heading}
      </h1>
      <div className={styles.meta}>
      -<b>{author}</b> <i>at</i> <b>{date}</b>
      </div>
      <br/>
      <div className={styles.content}>
      {content}
      </div>
    </div>
  )
}