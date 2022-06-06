import Head from 'next/head'
import styles from './authors.module.css'
import Image from 'next/image'
import Card from '.././../../components/Card/Card'
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
  Blogs: {
    _id: string
    title: string
    author: string
    tags: string[]
    category: string
    likes: number
    createdAt: string
    thumbnail: string
    summary: string
  }[]
}

export default function Author({ authorData }: { authorData: apiResponse }) {
  if (authorData.message) {
    return (
      <div className={styles.errorContainer}>
        <Head>
          <title>Blog Not Found | NAPS</title>
        </Head>
        <div className={styles.errorHeading}>Invalid URL</div>
        error message -
        <code className={styles.errorCode}>{authorData.message}</code>
      </div>
    )
  }
  const dateToFormat = new Date(authorData.createdAt)
  var dd = String(dateToFormat.getDate()).padStart(2, '0')
  var mm = String(dateToFormat.getMonth() + 1).padStart(2, '0') //January is 0!
  var yyyy = dateToFormat.getFullYear()
  const showableDate = dd + '/' + mm + '/' + yyyy
  const isValidURL = (url: string) => {
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i'
    ) // fragment locator
    return !!pattern.test(url)
  }
  const blogData = authorData.Blogs
  console.log(blogData)
  return (
    <div className={styles.a}>
      <div className={styles.awrapper}>
        <div className={styles.left}>
          <div className={styles.imgbg}>
            <Image
              src={
                isValidURL(authorData.photo)
                  ? authorData.photo
                  : 'https://images.unsplash.com/photo-1653031419232-c3c7c7eba0cd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470'
              }
              alt='news-image'
              layout='fill'
            />
          </div>
        </div>
        <div className={styles.right}>
          <h1 className={styles.name}>{authorData.name}</h1>
          <br></br>
          <p className={styles.descp}>{authorData.desc}</p>
          <br></br>
          <div className={styles.tags}>
            {authorData.tags.map((tag) => (
              <div key={tag} className={styles.tag}>
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.cardGrid}>
        {blogData.map((blog) => (
          <Card
            id={blog._id}
            title={blog.title}
            summary={blog.summary}
            author={authorData.name}
            date={blog.createdAt}
            key={blog._id}
            image={blog.thumbnail}
          ></Card>
        ))}
      </div>
    </div>
  )
}
export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params.id
  const url = `${process.env.APIBASE}/author/id/${id}`
  const res = await fetch(url)
  const data: apiResponse = await res.json()
  console.log(data)
  return {
    props: { authorData: data },
    revalidate: 120,
  }
}
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${process.env.APIBASE}/author`)
  const data = await res.json()
  var paths = []
  data.forEach((item) => {
    paths.push({ params: { id: item._id } })
  })
  return {
    paths: paths,
    fallback: 'blocking',
  }
}
