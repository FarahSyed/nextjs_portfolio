import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Farah Syed | MERN Stack Developer</title>
        <meta name="description" content="I’m a MERN stack developer with a focus on building well-designed (UI) and functional (UX) web and mobile hybrid applications for exceptional digital experiences." />
        <link rel="icon" href="/logo.png" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    </div>
  )
}
