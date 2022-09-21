import Head from 'next/head'
import { Hero } from './../Components/Hero';
import { About } from './../Components/About';
import { Skills } from './../Components/skills';
import { Projects } from './../Components/Projects';
import { Contact } from './../Components/Contact';
import kohsa from "../public/assests/kohsa.png"
import { Certificates } from './../Components/Certificates';

import { useContext } from 'react';
import { AccountContext } from './../Context/AppContext';



export default function Home() {
  const {ProjData} = useContext(AccountContext)
  const {data} = useContext(AccountContext)
  return (
    <div>
      <Head>
        <title>Mercy | Full-Stack Developer</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="/fav.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Crete+Round:ital@1&family=Montserrat:ital,wght@1,900&family=Ms+Madi&family=Oswald:wght@700&display=swap" rel="stylesheet"/> 
      </Head>
    <Hero />
    <About />
    <Certificates/>
    <Skills data={data} />
    <Projects ProjData={ProjData} />
    <Contact />
    </div>
  )
}