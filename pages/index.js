import axios from "axios";
import { useState } from "react";
import Head from "next/head";
import Featured from "../components/Featured";
import SushiList from "../components/SushiList";
import AddButton from "../components/AddButton";
import Add from "../components/Add";
import styles from "../styles/Home.module.css";
import Contact from "@/components/Contact";

export default function Home({ sushiList, admin }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yukari Japanese Sushi House</title>
        <meta name="description" content="Best sushi house in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <SushiList sushiList={sushiList} />
      <Contact />
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get(
    "https://delivery-food-yukari.vercel.app/api/products"
  );
  return {
    props: {
      sushiList: res.data,
      admin,
    },
  };
};
