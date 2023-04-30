import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import SushiList from "../components/SushiList";
import styles from "../styles/Home.module.css";

export default function Home({sushiList}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yukari Japanese Sushi House</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <SushiList sushiList={sushiList} />
  
    </div>
  );
}

export const getServerSideProps = async() => {
const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      sushiList: res.data,
    },
  }
}