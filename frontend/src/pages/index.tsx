import Head from "next/head";
import styles from "@/styles/hero.module.css";
import Gallery from "@/components/Gallery";
import Layout from "@/components/Layout";

export default function Main() {
  return (
    <>
      <Head>
        <title> RubroHoreca | Eliezer Jara</title>
      </Head>
      <Layout />
      <section>
        <h1 className={styles.heroTitle}>Rubro Horeca</h1>
        <h3>Consultorias para negocios de alimentos y bebidas</h3>
        <Gallery />
      </section>
    </>
  );
}

