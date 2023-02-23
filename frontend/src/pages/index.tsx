import Head from "next/head";
import { Home } from "./Home";
import { About } from './About'
import { Contact } from './Contact'
import { Dinners } from "./Dinners";
import { Consulting } from "./Consulting";
import { Footer } from '@/components/Footer'
import { Navbar } from "@/components/Navbar";
import { Section } from '../styles/styles'



export default function Main() {
    return (
        <>
            <Head>
                <title> RubroHoreca | Eliezer Jara</title>
            </Head>
            <Navbar />
            <Section>
                <Home />
                <About />
                <Consulting />
                <Dinners />
                <Contact />
            </Section>
            <Footer />
        </>
    )
}