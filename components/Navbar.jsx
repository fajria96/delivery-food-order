import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div>
          <Image
            src="/img/logo-restaurant.png"
            alt="logo restaurant"
            width="80"
            height="100"
          />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>YUKARI</div>
          <div className={styles.text}>JAPANESE SUSHI HOUSE</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>HOME</li>
          <li className={styles.listItem}>PRODUCTS</li>
          <li className={styles.listItem}>MENU</li>
          <li className={styles.listItem}>CONTACT</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/img/cart-logo.svg" alt="" width="30" height="30" />
          <div className={styles.counter}>0</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
