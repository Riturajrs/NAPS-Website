import styles from './Form.module.css'
import { useState } from 'react';

export default function Form () {
  const submitHandler = async(e) => {
    e.preventDefault();
  }
  return (
    <div className={styles.main_form}>
      <div className={styles.heading}>Add notice on Epistle</div>
      <hr/>
      <form className={styles.form} encType="multipart/form-data" onSubmit={submitHandler}>
        <label className={styles.label} htmlFor='heading'>Heading of notice: </label>
        <br/>
        <textarea className={styles.input} rows="2" cols="50" type='heading' id='heading' name='heading' required />
        <br/>
        <label className={styles.label} htmlFor='body'>Content of notice: </label>
        <br/>
        <textarea className={styles.input} rows="5" cols="100" type='body' id='body' name='body' required />
        <br/>
        <label className={styles.label} htmlFor='links'>Add links if applicable: </label>
        <br/>
        <label className={styles.label} htmlFor='links'>PDF: </label>
        <br/>
        <input className={styles.input} type='file' id='pdf' name='pdf' multiple />
        <br/>
        <label className={styles.label} htmlFor='links'>IMAGE: </label>
        <br/>
        <input className={styles.input} type='file' id='image' name='image' multiple />
        <br/>
        <br/>
        <button className={styles.submit} type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}
