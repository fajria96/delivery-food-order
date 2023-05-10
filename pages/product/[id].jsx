import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlices";

const Product = ({ sushi }) => {
  const [price, setPrice] = useState(sushi.prices[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleSize = (sizeIndex) => {
    const difference = sushi.prices[sizeIndex] - sushi.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleClick = () => {
    dispatch(addProduct({ ...sushi, price, quantity }));
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={sushi.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{sushi.title}</h1>
        <span className={styles.price}>Rp. {price},-</span>
        <p className={styles.desc}>{sushi.desc}</p>
        <h3 className={styles.choose}>Pilih ukuran porsi</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => handleSize(0)}>
            <Image src="/img/sushi-3.png" width={100} height={60} alt="" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(1)}>
            <Image src="/img/sushi-6.png" width={130} height={90} alt="" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(2)}>
            <Image src="/img/sushi-10.png" width={120} height={90} alt="" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <div className={styles.add}>
          <input
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            defaultValue={1}
            className={styles.quantity}
          />
          <button className={styles.button} onClick={handleClick}>
            Masukkan ke Keranjang
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `https://delivery-food-yukari.vercel.app/api/products/${params.id}`
  );
  return {
    props: {
      sushi: res.data,
    },
  };
};

export default Product;
