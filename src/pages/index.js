import GrowthHacking from "@/components/GrowthHacking/GrowthHacking";
import Navbar from "@/components/Navbar/Navbar";
import OurCases from "@/components/OurCases/OurCases";
import Potentialize from "@/components/Potentialize/Potentialize";
import Partners from "@/components/Partners/Partners";
import Comments from "@/components/Comments/Comments";
import WeAreTrik from "@/components/WeAreTrik/WeAreTrik";
import WeCreate from "@/components/WeCreate/WeCreate";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Footer from "@/components/Footer/Footer";
import Form from "@/components/Form/Form";

export default function Home() {
  return (
    <>
      <Head>
        <title>TRIK</title>
        <meta name="description" content="Growth, Digital, Agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className={`${styles.main} text-light`}>
        <WeAreTrik />
        <Potentialize />
        <GrowthHacking />
        <WeCreate />
        <OurCases />
        <Partners />
        <Comments />
        <Form />
        <Footer />
      </main>
    </>
  );
}
