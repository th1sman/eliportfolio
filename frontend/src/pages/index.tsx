import Head from "next/head";
import styles from "@/styles/hero.module.css";
import Gallery from "@/components/Gallery";
import Slider from "@/components/Slider";
import Asesorias from "./asesorias";
import About from "./quienes-somos";
import Cenas from "./cenas";
import Footer from "@/components/Footer";
import { useState, useRef, useEffect } from "react";
import AnimatedSection from "@/components/AnimatedSection";

export default function Main() {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        console.log("is intersecting:", entry.isIntersecting);
      },
      { rootMargin: "-300px" },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title> RubroHoreca | Eliezer Jara</title>
      </Head>
      <h1 className={styles.heroTitle}>Rubro Horeca</h1>
      <h3>Consultorias para negocios de alimentos y bebidas</h3>
      <AnimatedSection>
        <Gallery />
      </AnimatedSection>
      <Slider />
      <AnimatedSection>
        <About />
      </AnimatedSection>
      <AnimatedSection>
        <Asesorias />
      </AnimatedSection>
      <Cenas />
      <Footer />
    </>
  );
}
