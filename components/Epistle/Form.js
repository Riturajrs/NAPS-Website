import styles from './Form.module.css'
import { Editor } from '@tinymce/tinymce-react'
import { useState } from 'react'

export default function Form () {
  const submitHandler = async e => {
    e.preventDefault()
  }
  const [content, setContent] = useState('')
  const [heading, setHeading] = useState('')
  const [links, setLinks] = useState([])

  const Headingchange = e => {
    setHeading(e.target.value)
  }

  const Contentchange = e => {
    setContent(e.target.value)
  }

  async function deleteFilehandler (fileDeleted) {
    // Add API call for deleting the link with file
    setLinks(all_links => all_links.filter(link => link !== fileDeleted))
  }

  async function handlePDF (e) {
    const file = e.target.files[0]
    const fd = new FormData()
    fd.append('files', file)
    // upload to api
    // const res = await fetch(`${process.env.NEXT_PUBLIC_APIBASE}/image-upload`,{
    //   method: "POST",
    //   body: fd
    // })
    // const Data = await res.json();
    setLinks(prevLinks => [...prevLinks, e.target.files[0].name])
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
          id='files'
          accept='.pdf'
          onChange={handlePDF}
        />
        <br />
        {links.length > 0 && `Number of files uploaded: ${links.length}`}
        <br />
        {links.length > 0 &&
          links.map(link => (
            <div>
              <div>
               Link for {link} added <button className={styles.link} onClick={() => deleteFilehandler(link)} key={link}>Remove</button>
              </div>
              <br />
            </div>
          ))}
        <br />

        <button className={styles.submit} type='submit'>
          Submit
        </button>
      </form>
    </div>
  )
}
