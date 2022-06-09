import Head from 'next/head'
import styles from './authorss.module.css'
import Image from 'next/image'
import Card2 from '../../components/Card/Card2'
// import sample from '.././../../media/author.jpg'
// import blogImg from '.././../../media/blogImg.jpg'
import { GetStaticPaths, GetStaticProps } from 'next'

type apiResponse = {
  _id: string
  name: string
  photo: string
  desc: string
  tags: string[]
  __v: string
  rollNum: string
  createdAt: string
  message?: string
}

export default function Author({ authorData }: { authorData: apiResponse[] }) {
  return (
    <div className={styles.a}>
      <div className={styles.cardGrid}>
        {authorData.map((author) => (
          <Card2
            name={author.name}
            photo={author.photo}
            desc={author.desc}
            rollNum={author.rollNum}
          ></Card2>
        ))}
      </div>
    </div>
  )
}
export const getStaticProps: GetStaticProps = async () => {
  const url = `${process.env.APIBASE}/author/`
  const res = await fetch(url)
  const data: apiResponse = await res.json()

  return {
    props: { authorData: data },
    revalidate: 120,
  }
}
