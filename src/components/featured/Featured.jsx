import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hello DextrLabs</b> This is the draft assignment blogProject.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/dextrLabs.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>This is a sample blog</h1>
          <p className={styles.postDesc}>
            Hello there welcome to the blog app.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
