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
      <div className="text-5xl font-bold mt-5 mb-8 text-center">AUTHORS</div>
      <div className={styles.cardGrid}>
        {authorData.map((author) => (
          <Card2
            key={author._id}
            _id={author._id}
            name={author.name}
            photo={author.photo}
            desc={author.desc}
            tags={author.tags}
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
