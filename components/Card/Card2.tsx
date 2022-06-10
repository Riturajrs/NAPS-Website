import styles from './styles.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
type input = {
  _id: string
  name: string
  photo: string
  desc: string
  tags: string[]
}

export default function Card({ _id, name, photo, desc, tags }: input) {
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
  return (
    <div className='max-w-lg w-2/3 hover:shadow-md transition-all duration-200 mx-auto bg-white rounded-lg border border-gray-100 shadow-sm dark:bg-gray-800 dark:border-gray-700'>
			<Link passHref href={`/Author/${_id}`}>
      <div
        className={`${styles.imageContainerAuthor} cursor-pointer rounded-t-lg relative h-80 w-full`}
      >
        <Image
          layout='fill'
          className='rounded-t-lg'
          src={
            isValidURL(photo)
              ? photo
              : 'https://images.unsplash.com/photo-1653031419232-c3c7c7eba0cd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470'
          }
          alt='Author image'
        />
      </div>
      </Link>
      <div className='p-5 flex flex-col '>
        <Link href={`Author/${_id}`} passHref>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center cursor-pointer'>
            {name}
          </h5>
        </Link>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400 text-center'>
          {desc}
        </p>
        <div className={styles.tags}>
          {tags.length > 0 && <p className='text-extralight'>Tags: </p>}
          {tags.map((tag) => (
            <Link key={tag} href={`blog/tag/${tag}`} passHref>
              <button className='bg-slate-100 hover:bg-slate-300 text-white-700 transition-all duration-200 py-1 px-2 border border-slate-300 rounded-md m-1'>
                {tag}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
