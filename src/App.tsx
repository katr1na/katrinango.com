import React from 'react'
import Banner from './components/Banner'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Footer from './components/Footer'
import BannerInfo from './components/BannerInfo'
import SkyScatter from './components/SkyScatter'
import waveDivider from './assets/Wave Divider.svg'

const App = () => {
  return (
    <div>
      <Banner />
      <div className="top-border">
        <AboutMe />
      </div>
      <Projects />
      <Footer />
    </div>
  )
}

export default App