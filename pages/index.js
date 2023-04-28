import Head from 'next/head';

import BackgroundImage from "@/components/home/BackgroundImage";
import BackCanvas from '@/components/three/BackCanvas';
import FrontCanvas from '@/components/three/FrontCanvas';

import Navbar from '@/components/elements/Navbar';
import Home from '@/components/home/Home';
import About from '@/components/aboutSection/About';
import Project from '@/components/projectSection/Project';
import Contact from '@/components/contactSection/Contact';
import Bye from '@/components/Bye';
import Presentation from '@/components/presentationSection/Presentation'
import Game from '@/components/gameSection/Game'
import Control from '@/components/gameSection/Control';

export default function Index() {
  return (
    <div>
      <Head>
        <title>大野優剛 / Yuugou Ohno</title>
        <meta charset="UTF-8"></meta>
        <meta name="description" content="大野優剛のポートフォリオサイトです。/ This is Yugo Ohno's portfolio site." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="大野優剛, 大野, 優剛, YuugouOhno, Yuugou, Ohno, ポートフォリオ, エンジニア, WEBエンジニア"></meta>
        <meta name="author" content="大野優剛"></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta property="og:title" content="大野優剛/YuugouOhno"></meta>
        <meta property="og:image" content="http://example.com/image.jpg"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <BackgroundImage />
      <BackCanvas />
      <Home />
      <About />
      <Project />
      <Contact />
      <Bye />
      <Presentation />
      <Game />
      <Control />
    </div>
  )
}