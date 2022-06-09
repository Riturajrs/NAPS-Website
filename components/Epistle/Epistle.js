import { useState } from "react";
import Data from "./dummy_data";
import styles1 from "./Epistle.module.css";
import Section from "./sections/section";
import { useFetch } from "./useFetch";
export default function Main() {
  const [page, changePage] = useState(1);
  const [reload, setReload] = useState(false);
  const url = `${process.env.NEXT_PUBLIC_APIBASE}/epistle/Notice?page=${page}`;
  const { data } = useFetch(url, "GET", reload);
  const options = { month: "long" };
  const currentMonth = new Date(Date.now()).getMonth() + 1;
  const pages = new Array(data.pages).fill(1);
  console.log(page);
  return (
    <div className={styles1.aboutCtn}>
      <div className={styles1.activities}>
        <h1 className={styles1.activitiesHeading}>The Epistle</h1>
        <div className={styles1.container}>
          {data.data &&
            data.data.map((groups, index) => {
              return (
                <>
                  <h2 className={styles1.container__heading} key={groups._id}>
                    {groups._id == currentMonth
                      ? " This month"
                      : `in the month of ${new Intl.DateTimeFormat(
                          "en-US",
                          options
                        ).format(new Date(groups.Date))}-${new Date(
                          groups.Date
                        ).getFullYear()}`}
                  </h2>
                  <div className={styles1.container__notices}>
                    {groups.notices.map((el) => {
                      let date = new Date(el.DateAdded);
                      date = date.toISOString().substring(0, 10);
                      date = date.split("-").reverse().join("-");
                      return (
                        <Section
                          key={el._id}
                          DateAdded={date}
                          body={el}
                          setReload={setReload}
                        />
                      );
                    })}
                  </div>
                </>
              );
            })}
        </div>
      </div>
      <div className={styles1.page__container}>
        {pages.map((el, index) => {
          return (
            <div
              key={index}
              className={
                index + 1 == data.currentPage
                  ? `${
                      styles1.page__container__box +
                      " " +
                      styles1.page__container__box__active
                    }`
                  : `${styles1.page__container__box}`
              }
              onClick={(e) => {
                changePage(index + 1);
                const top = document.querySelector(
                  `.${styles1.activitiesHeading}`
                );
                top.scrollIntoView({
                  behavior: "smooth",
                  block: "end",
                  inline: "end",
                });
                console.log(top);
              }}
            >
              {index + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
}
