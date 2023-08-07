import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          style={{ borderRadius: "50%" }}
          src={"/images/site/max.png"}
          alt="Max"
          width="200"
          height="200"
        />
        <h1 className={styles.name}>Utkarsh Kumar</h1>
        <p className={styles.description}>I write about web developent</p>
      </div>
    </div>
  );
}
