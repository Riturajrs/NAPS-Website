import styles from "./Home.module.css"
import Link from "next/link"
import Image from "next/image";
import NapsLogo from "../media/napslogo.png";
import Card from "../components/Card/Card";
import {useEffect} from "react"
type apiData = {
  _id: string,
  title: string,
  author: string,
  createdAt: string,
  tags: string[],
  likes: number,
  thumbnail: string,
  content: string,
  category: string,
  summary: string,
  __v: number}

export default function Home({data}: {data:apiData[]}){
  const notices:{ title: string, summary: string, author: string }[] = [
    {title: "Notice 1", summary: "sdlkfjslkfj sdfslk sdfhjsdhfjw fwkfjwe fwkf wjkeekfjwlf ewklwefjkf", author: "author1"},
    {title: "Notice 2", summary: "sdlkfjslkfj sdfslk sdfhjsdhfjw fwkfjwe fwkf wjkeekfjwlf ewklwefjkf", author: "author2"},
    {title: "Notice 3", summary: "sdlkfjslkfj sdfslk sdfhjsdhfjw fwkfjwe fwkf wjkeekfjwlf ewklwefjkf", author: "author3"},
    {title: "Notice 4", summary: "sdlkfjslkfj sdfslk sdfhjsdhfjw fwkfjwe fwkf wjkeekfjwlf ewklwefjkf", author: "author4"},
  ]
  useEffect(()=>{
  },[])
  return (
    <div className={styles.home}>
      <div className={styles.headingTop}>
        News and Publication Society
      </div>
      <div className={styles.headingBottom}>
        Birla Institute of Technology
      </div>
      <div className={styles.row1}>
        <div className={styles.col1}>
          <div className={styles.noticesHeading}>
          <Link href="/notices">Notices</Link>
          </div>
          {notices.map((notice, index)=>
          <div className={styles.noticeContainer} key={index}>
            <div className={styles.noticeTitle}>
            {notice.title}
            </div>
            <div className={styles.noticeSummary}>
              {notice.summary}
            </div>
          </div>
          )}
        </div>
        <div className={styles.col2}>
          <div className={styles.card}>
            <Image placeholder="blur" src={NapsLogo} layout="intrinsic" alt="random img"/>
            <div className={styles.description}> 
                <div className={styles.topic}>Sample Heading</div>
                <div className={styles.author}>By-ajanfjkadf</div>
                <div className={styles.date}>Date-dd/mm/yyyy</div>
                <div className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Purus in massa tempor nec feugiat nisl 
                pretium fusce id. Dolor sed viverra ipsum nunc aliquet bibendum enim.
                </div>
            </div>
          </div>
        </div>
      </div>
    <div className={styles.search}>
      <input type="text" placeholder="search"/>
    </div>
    <div className={styles.cardGrid}>
    {data.map(notice=>
      <Card title={notice.title} summary={notice.summary} author={notice.author} date={notice.createdAt}></Card>
    )}
    </div>
    </div>
  )
}

export async function getServerSideProps(){
  const res = await fetch("https://naps-test-api.herokuapp.com/api/v1/blog")
  var data = await res.json();
  return {
    props: {data}
  }
}