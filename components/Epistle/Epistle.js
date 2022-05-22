import Data from './dummy_data'
import styles from './Epistle.module.css'
import Section from './sections/section'

export default function Main () {
  return (
    <div className={styles.main_body}>
      <div className={styles.heading}>The Epistle</div>
      {Data.blogs.map(blog => {
        let date = new Date(blog.body.DateAdded)
        date = date.toISOString().substring(0,10);
        date = date.split("-").reverse().join("-");
        return <Section DateAdded={date} body={blog.body} />
      })}
    </div>
  )
}
