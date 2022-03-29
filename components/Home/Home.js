import styles from "./Home.module.css"
import Link from "next/link"

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
      <div className={styles.row}>
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
          Test Text
        </div>
      </div>
    </div>
  )
}