import styles from './Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import NapsLogo from '../media/napslogo.png'
import Card from '../components/Card/Card'
import Head from 'next/head'
import { useEffect } from 'react'
import { GetStaticProps } from 'next'
type apiData = {
  _id: string
  title: string
  author: string
  authorName: string
  tags: string[]
  category: string
  createdAt: string
  thumbnail: string
  summary: string
}

export default function Home({ data }: { data: apiData[] }) {
  const newBlogs = data.slice(1)
  const topBlog = data[0]
  const notices: { title: string; summary: string; author: string }[] = [
    {
      title: 'Notice 1',
      summary:
        'sdlkfjslkfj sdfslk sdfhjsdhfjw fwkfjwe fwkf wjkeekfjwlf ewklwefjkf',
      author: 'author1',
    },
    {
      title: 'Notice 2',
      summary:
        'sdlkfjslkfj sdfslk sdfhjsdhfjw fwkfjwe fwkf wjkeekfjwlf ewklwefjkf',
      author: 'author2',
    },
    {
      title: 'Notice 3',
      summary:
        'sdlkfjslkfj sdfslk sdfhjsdhfjw fwkfjwe fwkf wjkeekfjwlf ewklwefjkf',
      author: 'author3',
    },
    {
      title: 'Notice 4',
      summary:
        'sdlkfjslkfj sdfslk sdfhjsdhfjw fwkfjwe fwkf wjkeekfjwlf ewklwefjkf',
      author: 'author4',
    },
  ]
  const showableDate = (date) => {
    const dateToFormat = new Date(date)
    var dd = String(dateToFormat.getDate()).padStart(2, '0')
    var mm = String(dateToFormat.getMonth() + 1).padStart(2, '0') //January is 0!
    var yyyy = dateToFormat.getFullYear()
    return dd + '/' + mm + '/' + yyyy
  }
  return (
    <div className={styles.home}>
      <Head>
        <title>Home | Naps</title>
      </Head>
      <div className={styles.headingTop}>News and Publication Society</div>
      <div className={styles.headingBottom}>Birla Institute of Technology</div>
      <div className={styles.row1}>
        <div className={styles.col1}>
          <div className={styles.noticesHeading}>Notices</div>
          {notices.map((notice, index) => (
            <div className={styles.noticeContainer} key={index}>
              <div className={styles.noticeTitle}>{notice.title}</div>
              <div className={styles.noticeSummary}>{notice.summary}</div>
            </div>
          ))}
        </div>
        <div className={styles.col2}>
          <div className={styles.card}>
            <Image
              placeholder='blur'
              src={NapsLogo}
              layout='intrinsic'
              alt='random img'
            />
            <div className={styles.description}>
              <div className={styles.topic}>Sample Heading</div>
              <div className={styles.author}>By-ajanfjkadf</div>
              <div className={styles.date}>Date-dd/mm/yyyy</div>
              <div className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Purus in massa tempor nec feugiat nisl pretium fusce id. Dolor
                sed viverra ipsum nunc aliquet bibendum enim.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.search}>New Posts</div>
      <div className={styles.cardGrid}>
        {newBlogs.map((blog) => (
          <Card
            id={blog._id}
            title={blog.title}
            summary={blog.summary}
            author={blog.authorName}
            date={blog.createdAt}
            key={blog._id}
            image={blog.thumbnail}
          ></Card>
        ))}
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.APIBASE}/blog/new`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  var data = await res.json()
  return {
    props: { data },
    revalidate: 120,
  }
}
