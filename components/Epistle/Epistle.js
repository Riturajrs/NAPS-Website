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
  const [filterDate, setFilterDate] = useState('')
  const [filteredData, setFilteredData] = useState()
  const currentMonth = new Date(Date.now()).getMonth() + 1
  const pages = new Array(data.pages).fill(1)
  const dateHandler = async e => {
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
    const newDate =
      monthNames[parseInt(e.target.value.substring(5, 7)) - 1] +
      '-' +
      e.target.value.substring(0, 4)
    setFilterDate(newDate)
    let Data
    try {
      const Datajson = await fetch(
        `http://localhost:4000/api/v1/epistle/Notice/filter/${newDate}`
      )
      Data = await Datajson.json()
    } catch (err) {
      setModalHeading('An error occurred!')
      setModalMessage(err)
      setShowModal(true)
    }
    if (Data.result === 0) {
      setModalHeading('No notices!')
      setModalMessage(
        `No notices for the month of ${
          monthNames[parseInt(e.target.value.substring(5, 7)) - 1]
        } were found`
      )
      setShowModal(true)
    }
    setFilteredData(Data)
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
              {filterDate}
              <input type='month' onChange={dateHandler} />
              <h2 className={styles1.container__heading}>
                {`in the month of ${filterDate}`}
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
                    {filterDate}
                    <input type='month' onChange={dateHandler} />
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
