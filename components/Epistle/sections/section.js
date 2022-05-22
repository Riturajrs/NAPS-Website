import Link from 'next/link'
import styles from './section.module.css'


export default function Section ({ DateAdded ,body }) {
  const { id, title, content, links } = body

  return (
    <div className={styles.main_body}>
      <div className={styles.title}>{title}</div>
      <hr className={styles.line} />
      <div className={styles.content}>{content}</div>
      {links.length > 0 && (
          <div>
          <hr className={styles.line} />
        <div className={styles.links_heading}>
          Links:
          {links.map(link => (
            <div className={styles.links}>
                <Link href={link}>{link}</Link>
            </div>
          ))}
        </div>
      </div>)}
      <div className={styles.date}>Date: {DateAdded}</div>
    </div>
  )
}
