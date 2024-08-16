import React from 'react'
import '../styles.css'

const AboutMe = () => {
  return (
    <div className='about-me pb-5'>
        <div className='container pt-4 text-center'>
            <div className='row justify-content-center align-items-center'>
                <div className='about-me-info col-lg-5 col-sm-12'>
                    <h1 className='m-4'>About Me</h1>
                    <p className='lh-lg'>I am an undergraduate student at Colorado School of Mines driven to bridge teaching and technology through creative innovations and dedication towards outreach. 
                        <br></br><br></br>I enjoy problem-solving and am passionate about software development. I am always looking for future opportunities to strengthen my skills and form new connections.
                    </p>
                </div>
                <div className='tech-skills col-lg-5 col-sm-12'>
                    <h1 className='m-4'>Technical Skills</h1>
                    <div className='container text-center p-4'>
                        <div className='row'>
                            <div className='col-6'>
                                <p>C++</p>
                                <p>Python</p>
                                <p>HTML/CSS</p>
                                <p>PostgresSQL</p>
                            </div>
                            <div className='col-6'>
                                <p>Java</p>
                                <p>Javascript</p>
                                <p>React</p>
                                <p>Node.js</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe