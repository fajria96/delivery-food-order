import styles from "../styles/SushiList.module.css";
import SushiCard from "./SushiCard";

const SushiList = ({sushiList}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST JAPANESE RESTAURANT</h1>
      <p className={styles.desc}>
        Welcome to Yukari Japanese Sushi House where we serve the freshest and
        most delicious sushi in town. Our restaurant is a family-owned business
        that has been serving the community for over a decade. We take pride in
        our authentic Japanese cuisine, using only the finest ingredients to
        create unique and flavorful dishes that will tantalize your taste buds.
      </p>
      <div className={styles.wrapper}>
      {sushiList.map((sushi) => (
          <SushiCard key={sushi._id} sushi={sushi} />
          ))}
      </div>
    </div>
  );
};

export default SushiList;
