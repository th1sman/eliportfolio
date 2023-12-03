import Head from "next/head"
import Navigation from "@/components/Navigation"
import Layout from "@/components/Layout"
import Footer from "@/components/Footer"
import styles from "@/styles/hero.module.css"
import Gallery from "@/components/Gallery"

export default function Main() {
    return (
        <>
            <Head>
                <title> RubroHoreca | Eliezer Jara</title>
            </Head>
            <Navigation />
            <Layout>
                <section>   
                     <h1 className={styles.heroTitle}>Rubro Horeca</h1>
                     <h3>Consultorias para negocios de alimentos y bebidas</h3>
                    <Gallery />
                </section>
            </Layout>
            <Footer/>
        </>
    )
}