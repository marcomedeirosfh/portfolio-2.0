import React from "react"
import Header from '../components/Header'
import Hero from "../components/Hero"
import About from "../components/About"
import Contact from "../components/Contact"
import Portfolio from "../components/Portfolio"

const IndexPage = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet"></link>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </>
    )
}

export default IndexPage

export const Head = () => <title>Marco Medeiros - UI and UX</title>
