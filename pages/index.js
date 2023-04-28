import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import SushiList from "../components/SushiList";
import Footer from "@/components/Footer";
import styles from "../styles/Home.module.css";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yukari Japanese Sushi House</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Featured />
      <SushiList />
      <Footer />
    </div>
  );
}
