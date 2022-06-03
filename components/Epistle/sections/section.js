import Link from 'next/link'
import styles1 from '../Epistle.module.css'
import { useInView } from 'react-intersection-observer'

export default function Section ({ DateAdded, body }) {
  const animationOptions = {
    threshold: 1
  }
  const [ref, inView] = useInView(animationOptions)
  const { id, title, content, links } = body

  return (
    <div ref={ref} className={styles1.card}>
      <div className={styles1.cardBar}></div>
      <div
        className={styles1.cardContent}
        style={inView ? { transform: 'scale(1.1)' } : { transform: 'scale(1)' }}
      >
        <div className={styles1.cardHeading}>{title}</div>
        <div className={styles1.cardText}>{content}</div>
        {links.length > 0 && (
          <div>
            <br/>
            <div className={styles1.cardText}>
              Links:
              {links.map(link => (
                <div className={styles1.cardText}>
                  <Link href={link}>{link}</Link>
                </div>
              ))}
            </div>
          </div>
        )}
        <br/>
        <div className={styles1.cardText}>Date: {DateAdded}</div>
      </div>
    </div>
  )
}
