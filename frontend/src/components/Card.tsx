import Image from "next/image";
import styles from "@/styles/card.module.css";
import Layout from "./Layout";

interface CardProps {
  title?: string;
  excerpt?: string;
  imageUri?: string;
  imageDimensions?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, ...props }) => {
  return (
    <div className={styles.card}>
      <Layout>
        <Image
          src={props.imageUri}
          alt={props.title}
          width={500}
          height={500}
          className={styles.cardImg}
          sizes={props.imageDimensions}
        />
      </Layout>
      <h2 className={styles.cardTitle}>{props.title}</h2>
      <p className={styles.desc}>{props.excerpt}</p>
    </div>
  );
};

export default Card;
