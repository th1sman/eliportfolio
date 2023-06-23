import Head from "next/head";
import { Home } from "../components/Home";
import { About } from '../components/About'
import { Dinners } from "./Dinners";
import { Consulting } from "../components/Consulting";
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
        </>
    )
}