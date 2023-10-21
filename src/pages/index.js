import React, { useEffect, useState } from "react"
import Header from '../components/Header'
import Hero from "../components/Hero"
import About from "../components/About"
import Contact from "../components/Contact"

const IndexPage = () => {
  const [view, setView] = useState('hero')
  useEffect(() => {
    console.log(view)
  }, [view])

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet"></link>
      <Header setView={setView}/>
      { (view === 'hero') && <Hero /> }
      { (view === 'about') && <About /> }
      { (view === 'contact') && <Contact /> }
    </>
    )
}

export default IndexPage

export const Head = () => <title>Marco Medeiros - UI and UX</title>
