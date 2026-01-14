import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Experiences from './Components/Experiences/Experiences'
import Achievements from './Components/Achievements/Achievements'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <Achievements/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
