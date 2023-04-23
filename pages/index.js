import Head from 'next/head';

import Navbar from '@/components/elements/Navbar';
import Home from '@/components/home/Home';
import About from '@/components/aboutSection/About';
import Project from '@/components/projectSection/Project';
import Contact from '@/components/contactSection/Contact';
import Bey from '@/components/Bey';
import Presentation from '@/components/presentationSection/Presentation'
import Boids from "@/components/fish/Boids"

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
      {/* <Boids /> */}
      <Home />
      <About />
      <Project />
      <Contact />
      <Bey />
      <Presentation /> */}
      {/* <ThreeCanvas />
    </div>
  )
}
