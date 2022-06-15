import styles from './teams.module.css'
import MemberCard from './TeamMemberCard'
import { StaticImageData } from 'next/image'
import Link from 'next/link'
import { currentmembers } from '../../team'

const members = currentmembers
export default function Team() {
  return (
    <div className={styles.team}>
      <h1 className={styles.heading}>Our Team</h1>
      <div className={styles.memberGrid}>
        {members.map((member) => {
          return (
            <MemberCard
              key={member.name + member.year + member.post}
              facebook={member.facebook}
              image={member.image}
              insta={member.insta}
              linkedin={member.linkedin}
              name={member.name}
              post={member.post}
              year={member.year}
            ></MemberCard>
          )
        })}
      </div>
        <div className="text-center cursor-pointer text-lg font-light text-slate-500">
          <Link href="/Team/Past"> Past Team Members</Link>
        </div>
    </div>
  )
}
