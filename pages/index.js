import Head from 'next/head';

import Navbar from '@/components/Navbar';
import Home from '@/components/home/Home';
import About from '@/components/aboutSection/About';
import Project from '@/components/projectSection/Project';
import Contact from '@/components/contactSection/Contact';
import Game from '@/components/Game';
// import ThreeCanvas from '@/components/ThreeCanvas';

export default function Index() {
  return (
    <div>
      <Head>
        <title>Yuugou Ohno</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
      <Game />
      {/* <ThreeCanvas /> */}
    </div>
  )
}
