import Navigation from "@/components/Navigation";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";
import styles from "@/styles/about.module.css";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <Navigation />
      <Layout>
        <div className={styles.quote}>
          <p>
            Acompañamos tu proceso de apertura o renovación de negocio
            gastronomico en todas las areas, para facilitar el exito de la
            rentabilidad de tu proyecto. El equipo de esta consultora se
            conforma de profesionales en el area gastronomico, diseño y
            especialistas en el mundo de finanzas
          </p>
          <div className={styles.images}>
            <Image src="/9.webp" width={500} height={100} alt="fotito1" />
            <Image src="/12.webp" width={100} height={100} alt="fotito2" />
            <Image src="/11.webp" width={100} height={100} alt="fotito3" />
          </div>
        </div>
      </Layout>
      <Footer />
    </div>
  );
}
