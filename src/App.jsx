import React from 'react'
import Navbar  from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='bg-red-800 h-screen w-full'>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  )
}

export default App
