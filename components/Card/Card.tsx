import styles from "./Card.module.css"
import Image from "next/image"
import testImage from "../../media/sample.jpg"
type input = {
  title: string,
  summary: string,
  author: string,
  date: string,
  image?: string
}
export default function Card({title, summary, author, date, image}: input) {
  // const dateToFormat = new Date(date)
  // var dd = String(dateToFormat.getDate()).padStart(2, '0');
  // var mm = String(dateToFormat.getMonth() + 1).padStart(2, '0'); //January is 0!
  // var yyyy = dateToFormat.getFullYear();
  // const showableDate = mm + '/' + dd + '/' + yyyy;
  return(
    <div className={styles.card}>
      <Image placeholder="blur" src={testImage} alt="news-image" layout="intrinsic"/>
      <h1 className={styles.heading}>
        {title}
      </h1>
      <div className={styles.meta}>
      -<b>{author}</b> <i>at</i> <b>{date}</b>
      </div>
      <br/>
      <div className={styles.content}>
      {summary}
      </div>
    </div>
  )
}