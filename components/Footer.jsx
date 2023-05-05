import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h5>
        Made with <span className={styles.heart}>&hearts;</span> by Fajria
      </h5>
    </div>
  );
};

export default Footer;
