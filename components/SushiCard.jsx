import Image from "next/image";
import styles from "../styles/SushiCard.module.css";

const SushiCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/miso-beef-roll.jpg" alt="" width="150" height="150" />
      <h1 className={styles.title}>MISO BEEF ROLL</h1>
      <span className={styles.price}>Rp. 30.000,-</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default SushiCard;
