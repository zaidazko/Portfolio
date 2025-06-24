import React from 'react'
import Hero from '/components/Hero.jsx'
import Skills from '/components/Skills.jsx'
import Projects from '/components/Projects.jsx'
import Contact from  '/components/Contact.jsx'
import Header from '/components/Header.jsx'
import MyLanyard from '/components/MyLanyard.jsx'
  


const App = () => {
  return (
    <>
      <div className="fixed inset-0 -z-10 w-full h-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div><Header/></div>
      <div className="w-full"><MyLanyard/></div>


      
      <div className="min-h-screen flex flex-col gap-36 justify-center items-center">
        <div className="pt-28 -mt-60" id="hero"><Hero/></div>
        <div className="pt-28 -mt-28" id="skills"><Skills/></div>
        <div className="pt-28 -mt-28" id="projects"><Projects/></div>
        <div className="pt-28 -mt-28" id="contact"><Contact/></div>
      </div>
    </>
  ) 
}

export default App
