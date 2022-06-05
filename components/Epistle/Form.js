import styles from './Form.module.css'
import { useCookies } from 'react-cookie'
import {useRouter} from "next/router"
import { useState } from 'react'

export default function Form () {
  const router = useRouter()
  const [cookie] = useCookies(['user'])
  const [content, setContent] = useState('')
  const [heading, setHeading] = useState('')
  const [links, setLinks] = useState([])

  const Headingchange = e => {
    setHeading(e.target.value)
  }

  const Contentchange = e => {
    setContent(e.target.value)
  }

  const submitHandler = async e => {
    e.preventDefault()
    const filenames = links.map(link => link.fileName)
    console.log(content)
    try {
      const response = await fetch(
        `http://localhost:4000/api/v1/epistle/newNotice`,
        {
          method: 'POST',
          body: JSON.stringify({
            title: heading,
            content: content,
            links: filenames
          }),
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + cookie.user
          }
        }
      )
      const responseData = await response.json()
      if( responseData.status !== "success" ){
        throw new Error;
      }
      router.push('/Epistle')
      console.log(responseData)
    } catch (err) {
      setContent('')
      setHeading('')
      setLinks('')
    }
    
  }

  const deleteFilehandler = async fileDeleted => {
    const res = await fetch(
      `http://localhost:4000/api/v1/epistle/deleteFile/${fileDeleted.fileName}`,
      {
        method: 'DELETE',
        headers: { Authorization: 'Bearer ' + cookie.user }
      }
    )
    setLinks(all_links => all_links.filter(link => link !== fileDeleted))
  }

  const uploadFilehandler = async e => {
    const file = e.target.files[0]
    const fd = new FormData()
    fd.append('pdf', file)
    const res = await fetch(`http://localhost:4000/api/v1/epistle/uploadFile`, {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + cookie.user },
      body: fd
    })
    const Data = await res.json()
    Data.data.name = file.name
    setLinks(prevLinks => [...prevLinks, Data.data])
  }
  return (
    <div className={styles.main_form}>
      <div className={styles.heading}>Add notice on Epistle</div>
      <hr />
      <form
        className={styles.form}
        encType='multipart/form-data'
        onSubmit={submitHandler}
      >
        <label className={styles.label} htmlFor='Heading'>
          Heading of notice:{' '}
        </label>
        <br />
        <textarea
          type='text'
          className={styles.input}
          rows='2'
          cols='50'
          id='heading'
          name='heading'
          value={heading}
          onChange={Headingchange}
        />
        <br />
        <label className={styles.label} htmlFor='body'>
          Content of notice:{' '}
        </label>
        <br />
        <textarea
          type='text'
          className={styles.input}
          rows='5'
          cols='50'
          id='content'
          name='content'
          value={content}
          onChange={Contentchange}
        />
        <br />
        <label className={styles.label} htmlFor='links'>
          Add PDF documents if applicable:{' '}
        </label>
        <br />
        <input
          className={styles.input}
          type='file'
          id='pdf'
          accept='.pdf'
          onChange={uploadFilehandler}
        />
        <br />
        {links.length > 0 && `Number of files uploaded: ${links.length}`}
        <br />
        {links.length > 0 &&
          links.map(link => (
            <div>
              <div>
                Link for {link.name} added{' '}
                <button className={styles.link}>
                  <a href={link.URL} target='_blank'>
                    View
                  </a>
                </button>{' '}
                <button
                  className={styles.link}
                  onClick={() => deleteFilehandler(link)}
                  key={link}
                >
                  Remove
                </button>
              </div>
              <br />
            </div>
          ))}
        <br />
        <button className={styles.submit} onClick={submitHandler}>
          Submit
        </button>
      </form>
    </div>
  )
}
