import { useState } from 'react'
import MODAL from '../Modal/Modal'
import styles1 from './Epistle.module.css'
import Section from './sections/section'
import { useFetch } from './useFetch'
export default function Main () {
  const [page, changePage] = useState(1)
  const [reload, setReload] = useState(false)
  const url = `${process.env.NEXT_PUBLIC_APIBASE}/epistle/Notice?page=${page}`
  const { data } = useFetch(url, 'GET', reload)
  const options = { month: 'long' }
  const [showModal, setShowModal] = useState(false)
  const [modalHeading, setModalHeading] = useState('')
  const [modalMessage, setModalMessage] = useState('')
  const [filterDispDate, setFilterDispDate] = useState('')
  const [filterDate, setFilterDate] = useState('')
  const [filteredData, setFilteredData] = useState()
  const currentMonth = new Date(Date.now()).getMonth() + 1
  const pages = new Array(data.pages).fill(1)
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const dateHandler = async e => {
    const newDate =
      monthNames[parseInt(e.target.value.substring(5, 7)) - 1] +
      '-' +
      e.target.value.substring(0, 4)
    setFilterDate(newDate)
  }
  const dateSubmitHandler = async e => {
    e.preventDefault()
    let Data
    try {
      const Datajson = await fetch(
        `${process.env.NEXT_PUBLIC_APIBASE}/epistle/Notice/filter/${filterDate}`
        )
        Data = await Datajson.json()
    } catch (err) {
      setModalHeading('An error occurred!')
      setModalMessage(err)
      setShowModal(true)
    }
    if (Data.result === 0) {
      setModalHeading('No notices!')
      setModalMessage(`No notices for the month were found`)
      setShowModal(true)
    }
    setFilteredData(Data)
    setFilterDispDate(filterDate)
  }
  return (
    <div className={styles1.aboutCtn}>
      <div className={styles1.activities}>
        <h1 className={styles1.activitiesHeading}>The Epistle</h1>
        {showModal && (
          <MODAL
            heading={modalHeading}
            message={modalMessage}
            changeState={setShowModal}
          />
        )}
        <div className={styles1.container}>
          {(filteredData && filteredData.result > 0 && (
            <>
              <form className='flex mb-6 flex-wrap items-center justify-center'>
                <input className="mr-6 appearance-none w-max border border-gray-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type='date' onClick={() => setFilterDate()} onChange={dateHandler} />
                <button className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded" onClick={dateSubmitHandler}>Submit</button>
              </form>
              <h2 className={styles1.container__heading}>
                {`In the month of ${filterDispDate}`}
              </h2>
              <div className={styles1.container__notices}>
                {filteredData.data.map(el => {
                  let date = new Date(el.DateAdded)
                  date = date.toISOString().substring(0, 10)
                  date = date
                    .split('-')
                    .reverse()
                    .join('-')
                  return (
                    <Section
                      key={el._id}
                      DateAdded={date}
                      body={el}
                      setReload={setReload}
                    />
                  )
                })}
              </div>
            </>
          )) ||
            (data.data &&
              data.data.map((groups, index) => {
                return (
                  <>
                    <form className='flex mb-6 flex-wrap items-center justify-center'>
                      <input className="mr-6 appearance-none w-max border border-gray-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type='date' onChange={dateHandler} />
                      <button className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded" onClick={dateSubmitHandler}>Submit</button>
                    </form>
                    <h2 className={styles1.container__heading} key={groups._id}>
                      {groups._id == currentMonth
                        ? ' This month'
                        : `in the month of ${new Intl.DateTimeFormat(
                            'en-US',
                            options
                          ).format(new Date(groups.Date))}-${new Date(
                            groups.Date
                          ).getFullYear()}`}
                    </h2>
                    <div className={styles1.container__notices}>
                      {groups.notices.map(el => {
                        let date = new Date(el.DateAdded)
                        date = date.toISOString().substring(0, 10)
                        date = date
                          .split('-')
                          .reverse()
                          .join('-')
                        return (
                          <Section
                            key={el._id}
                            DateAdded={date}
                            body={el}
                            setReload={setReload}
                          />
                        )
                      })}
                    </div>
                  </>
                )
              }))}
        </div>
      </div>
      <div className={styles1.page__container}>
        {pages.map((el, index) => {
          return (
            <div
              key={index}
              className={
                index + 1 == data.currentPage
                  ? `${styles1.page__container__box +
                      ' ' +
                      styles1.page__container__box__active}`
                  : `${styles1.page__container__box}`
              }
              onClick={e => {
                changePage(index + 1)
                const top = document.querySelector(
                  `.${styles1.activitiesHeading}`
                )
                top.scrollIntoView({
                  behavior: 'smooth',
                  block: 'end',
                  inline: 'end'
                })
                // console.log(top);
              }}
            >
              {index + 1}
            </div>
          )
        })}
      </div>
    </div>
  )
}
