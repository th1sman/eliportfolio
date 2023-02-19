import Head from "next/head";
import { Home } from "./Home";
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
            </Section>
        </>
    )
}