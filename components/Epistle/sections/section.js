import Link from "next/link";
import styles1 from "../Epistle.module.css";
import { useInView } from "react-intersection-observer";
import { useState, useEffect, useCallback } from "react";
import { useCookies } from "react-cookie";
import { fetchdata } from "./../useFetch";
import { userInfo } from "os";
export default function Section({ DateAdded, body, setReload }) {
  const { _id, title, content, links } = body;
  const [cookie, setCookie] = useCookies();
  return (
    <div className={styles1.card}>
      <div className={styles1.cardBar}></div>
      <div className={styles1.cardContent} style={{ transform: "scale(1)" }}>
        <div className={styles1.cardHeading}>{title}</div>
        <div className={styles1.cardText}>{content}</div>
        {links.length > 0 && (
          <div>
            <br />
            <div className={styles1.cardText}>
              Links:
              {links.map((link) => (
                <div key={link} className={styles1.cardText}>
                  <a target="_blank" rel="noreferrer" href={`${process.env.NEXT_PUBLIC_SERVERBASE}/notices/${link}`}>{link}</a>
                </div>
              ))}
            </div>
          </div>
        )}
        <br />
        <div className={styles1.cardText}>Date: {DateAdded}</div>
        <div
          className={
            cookie.user
              ? `${styles1.delete__button}`
              : `${
                  styles1.delete__button +
                  " " +
                  styles1.delete__button__inactive
                }`
          }
          data-id={`${_id}`}
          onClick={(e) => {
            const url = `${process.env.NEXT_PUBLIC_APIBASE}/epistle/Notice/${e.target.dataset.id}`;
            const sendDeleteRequest = async () => {
              const response = await fetchdata(url, "DELETE", cookie);
              if (response.status == "success") {
                setReload((reload) => {
                  return reload ? false : true;
                });
              }
            };
            sendDeleteRequest();
          }}
        >
          Delete
        </div>
      </div>
    </div>
  );
}
