import styles from './teams.module.css'
import sample from '../../media/sample.jpg'
import MemberCard from './TeamMemberCard'
import { StaticImageData } from 'next/image'

type memberInfo = {
  name: string
  post: string
  year: string
  image: string | StaticImageData
  facebook?: string
  insta?: string
  linkedin?: string
}
// UPDATE MEMBER INFO HERE
const members: memberInfo[] = [
  {
    name: 'Member Name',
    facebook: 'https://facebook.com',
    image: sample,
    post: 'Designation',
    year: '2020',
    linkedin: 'https://linkedin.com',
    insta: 'https://instagram.com',
  },
  {
    name: 'Member Name',
    facebook: 'https://facebook.com',
    image: sample,
    post: 'Designation',
    year: '2020',
    linkedin: 'https://linkedin.com',
    insta: 'https://instagram.com',
  },
  {
    name: 'Member Name',
    facebook: 'https://facebook.com',
    image: sample,
    post: 'Designation',
    year: '2020',
    linkedin: 'https://linkedin.com',
    insta: 'https://instagram.com',
  },
  {
    name: 'Member Name',
    facebook: 'https://facebook.com',
    image: sample,
    post: 'Designation',
    year: '2020',
    linkedin: 'https://linkedin.com',
    insta: 'https://instagram.com',
  },
  {
    name: 'Member Name',
    facebook: 'https://facebook.com',
    image: sample,
    post: 'Designation',
    year: '2020',
    linkedin: 'https://linkedin.com',
    insta: 'https://instagram.com',
  },
  {
    name: 'Member Name',
    facebook: 'https://facebook.com',
    image: sample,
    post: 'Designation',
    year: '2020',
    linkedin: 'https://linkedin.com',
    insta: 'https://instagram.com',
  },
  {
    name: 'Member Name',
    facebook: 'https://facebook.com',
    image: sample,
    post: 'Designation',
    year: '2020',
    linkedin: 'https://linkedin.com',
    insta: 'https://instagram.com',
  },
  {
    name: 'Member Name',
    facebook: 'https://facebook.com',
    image: sample,
    post: 'Designation',
    year: '2020',
    linkedin: 'https://linkedin.com',
    insta: 'https://instagram.com',
  },
  {
    name: 'Member Name',
    facebook: 'https://facebook.com',
    image: sample,
    post: 'Designation',
    year: '2020',
    linkedin: 'https://linkedin.com',
    insta: 'https://instagram.com',
  },
  {
    name: 'Member Name',
    facebook: 'https://facebook.com',
    image: sample,
    post: 'Designation',
    year: '2020',
    linkedin: 'https://linkedin.com',
    insta: 'https://instagram.com',
  },
]

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
    </div>
  )
}
