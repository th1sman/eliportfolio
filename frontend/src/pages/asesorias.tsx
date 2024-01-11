import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import styles from "@/styles/asesorias.module.css";
import Image from "next/image";

export default function Asesorias() {
  return (
    <div>
      <Navigation />
      <section>
        <h2 className={styles.title}>Podemos asesorarte</h2>
        <p className={styles.title}>
          Asesoramos a pequeños, medianos y grandes negocios relacionados con el
          rubro de turismo y gastronomia y también a personas que quieran
          iniciar en el mundo gastronómico y que busquen invertir de forma mas
          segura encaminando hacia el exito su proyecto. Tambien a los negocios
          que quieran potenciar sus propuestas y rentabilizar de mejor manera su
          empresa
        </p>
        <div className={styles.consulting}>
          <div className={styles.box}>
            <Image src="/12.webp" alt="Image1" fill sizes="100vw" />
          </div>
          <div className={styles.box}>
            <Image src="/12.webp" alt="Image1" fill />
          </div>
          <div className={styles.box}>
            <Image src="/12.webp" alt="Image1" fill />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
