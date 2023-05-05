import Image from "next/image";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <div id="contact">
      <div className={styles.container}>
        <div className={styles.item}>
          <Image
            src="/img/footer.jpg"
            layout="fill"
            objectFit="contain"
            alt="footer image"
          />
        </div>
        <div className={styles.item}>
          <div className={styles.card}>
            <h2 className={styles.motto}>
              FRESH SUSHI, EVERY DAY! ORDER NOW OR VISIT US TODAY, WE ARE OPEN
              FOR TAKEWAY AND DELIVERY
            </h2>
          </div>
          <div className={styles.card}>
            <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
            <p className={styles.text}>
              45 Simatupang Road #250.
              <br /> Semarang, 85022
              <br /> (548) 867-1010
            </p>
            <p className={styles.text}>
              87 Soekarno-Hatta Rd #235.
              <br /> Malang, 85022
              <br /> (543) 867-1011
            </p>
            <p className={styles.text}>
              74 Kenanga St #104.
              <br /> Samarinda, 85022
              <br /> (542) 867-1012
            </p>
            <p className={styles.text}>
              16 Medono St #125.
              <br /> Surabaya, 85022
              <br /> (541) 867-1013
            </p>
          </div>
          <div className={styles.card}>
            <h1 className={styles.title}>WORKING HOURS</h1>
            <p className={styles.text}>
              MONDAY UNTIL FRIDAY
              <br /> 9:00 – 22:00
            </p>
            <p className={styles.text}>
              SATURDAY - SUNDAY
              <br /> 12:00 – 24:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
