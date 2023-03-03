import Head from "next/head";
import { Home } from "../components/Home";
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Dinners } from "../components/Dinners";
import { Consulting } from "../components/Consulting";
import { Footer } from '@/components/Footer'
import { Navbar } from "@/components/Navbar";



export default function Main() {
    return (
        <>
            <Head>
                <title> RubroHoreca | Eliezer Jara</title>
            </Head>
            <Navbar />
                <Home />
                <About />
                <Consulting />
                <Dinners />
                <Contact />
            <Footer />
        </>
    )
}