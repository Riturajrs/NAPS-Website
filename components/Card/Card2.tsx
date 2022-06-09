import styles from './styles.module.css'
import Image from 'next/image'
import Link from 'next/link'
type input = {
  name: string
  photo: string
  desc: string
  rollNum: string
}
export default function Card({ name, photo, desc, rollNum }: input) {
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
    <div className='max-w-lg w-full mx-auto bg-white rounded-lg border border-gray-100 shadow-sm dark:bg-gray-800 dark:border-gray-700'>
      <div
        className={`${styles.imageContainer} cursor-pointer rounded-t-lg relative h-80 w-full`}
      >
        <Image
          layout='fill'
          className='rounded-t-lg'
          src={
            isValidURL(photo)
              ? photo
              : 'https://images.unsplash.com/photo-1653031419232-c3c7c7eba0cd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470'
          }
          alt='blog image'
        />
      </div>
      <div className='p-5 flex flex-col'>
        <h5 className='cursor-pointer mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {name}
        </h5>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          {desc}
        </p>
      </div>
    </div>
  )
}
