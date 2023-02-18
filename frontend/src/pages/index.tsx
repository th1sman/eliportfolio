import Head from "next/head";
import { Home } from "./Home";
import { Navbar } from "@/components/Navbar";



export default function Main() {
    return (
        <>
        <Head>
            <title> RubroHoreca </title>
        </Head>
        <Navbar />
        <Home />
        </>
    )
}