import React from "react";
import styles from "@/styles/dinners.module.css";
import Navigation from "@/components/Navigation";
import Image from "next/image";

export default function Cenas() {
  return (
    <div>
      <Navigation />
      <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.imageBox}>
            <Image src="/12.webp" alt="Image1" fill sizes="100vw" />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.imageBox}>
            <Image src="/12.webp" alt="Image1" fill sizes="100vw" />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.imageBox}>
            <Image src="/12.webp" alt="Image1" fill sizes="100vw" />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.imageBox}>
            <Image src="/12.webp" alt="Image1" fill sizes="100vw" />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.imageBox}>
            <Image src="/12.webp" alt="Image1" fill sizes="100vw" />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.imageBox}>
            <Image src="/12.webp" alt="Image1" fill sizes="100vw" />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.imageBox}>
            <Image src="/12.webp" alt="Image1" fill sizes="100vw" />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.imageBox}>
            <Image src="/12.webp" alt="Image1" fill sizes="100vw" />
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.imageBox}>
            <Image src="/12.webp" alt="Image1" fill sizes="100vw" />
          </div>
        </div>
      </div>
    </div>
  );
}
