import styles from "./Home.module.css"
import Link from "next/link"
import Image from "next/image";
import NapsLogo from "../../media/napslogo.png";

export default function Home(){
  const notices = [
    {title: "Notice 1", summary: "sdlkfjslkfj sdfslk sdfhjsdhfjw fwkfjwe fwkf wjkeekfjwlf ewklwefjkf"},
    {title: "Notice 2", summary: "sdlkfjslkfj sdfslk sdfhjsdhfjw fwkfjwe fwkf wjkeekfjwlf ewklwefjkf"},
    {title: "Notice 3", summary: "sdlkfjslkfj sdfslk sdfhjsdhfjw fwkfjwe fwkf wjkeekfjwlf ewklwefjkf"},
    {title: "Notice 4", summary: "sdlkfjslkfj sdfslk sdfhjsdhfjw fwkfjwe fwkf wjkeekfjwlf ewklwefjkf"},
  ]
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
          <Link href="/notices" className={styles.notices}>Notices</Link>
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
            <Image src={NapsLogo} width={"200px"} height="200px" alt="random img"/>
            <div className={styles.description}> 
                <div className={styles.topic}>TOPIC</div>
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
      <hr />
    </div>
  )
}