import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Footer from './components/Footer'
import LearnMore from './components/LearnMore'

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path='/' element={
        <div>
          <Banner />
          <div className="top-border">
            <AboutMe />
          </div>
          <Projects />
          <Footer />
        </div>
      }/>
      <Route path="/learn-more" element={<LearnMore />}/>
    </Routes>
  </Router>
);

export default App