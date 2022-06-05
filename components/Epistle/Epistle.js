import Data from './dummy_data'
import styles1 from './Epistle.module.css'
import Section from './sections/section'

export default function Main () {
  return (
    <div className={styles1.aboutCtn}>
      <div className={styles1.activities}>
        <h1 className={styles1.activitiesHeading}>The Epistle</h1>
        {Data.blogs.map(blog => {
          let date = new Date(blog.body.DateAdded)
          date = date.toISOString().substring(0, 10)
          date = date
            .split('-')
            .reverse()
            .join('-')
          return <Section DateAdded={date} body={blog.body} />
        })}
      </div>
    </div>
  )
}
