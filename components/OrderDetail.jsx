import { useState } from "react";
import styles from "../styles/OrderDetail.module.css";

const OrderDetail = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          Tagihan kamu sebesar Rp. {total},- dibayarkan setelah pesanan sampai.
        </h2>
        <div className={styles.item}>
          <label className={styles.label}>Nama Lengkap</label>
          <input
            placeholder="John Doe"
            type="text"
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Nomor Telepon</label>
          <input
            type="text"
            placeholder="+62 853 3565 4324"
            className={styles.input}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Alamat</label>
          <textarea
            rows={5}
            placeholder="Jl. Kenanga No.45 Semarang"
            type="text"
            className={styles.textarea}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button className={styles.button} onClick={handleClick}>
          Order
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
