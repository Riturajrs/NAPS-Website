import styles from "./../viewMembers.module.css";
const Stage1 = () => {
  return (
    <>
      <section className={styles.container}>
        <h2 className={styles.heading__1}>
          <div className={styles.heading__1__text}>Stage 1 members</div>
        </h2>
        <div className={styles.card}>
          <div className={styles.card__front + " " + styles.card__side}>
            Hello
          </div>
          <div className={styles.card__back + " " + styles.card__side}></div>
        </div>
      </section>
    </>
  );
};
export default Stage1;
