import React from 'react'
import '../styles.css'
import linkedin from '../assets/Linkedin.svg'
import github from '../assets/Github.svg'
import mail from '../assets/Mail.svg'
import profileIcon from '../assets/profile-pic.jpg'

const Footer = () => {
  return (
    <div className='footer text-center p-4'>
        <div className="divider"></div>
        <div className='row justify-content-center'>
            <div className='col-md-4'>
                <p>katrinango3388@gmail.com</p>
            </div>
            <div className='col-md-4'>
                <div className='socials container text-center'>
                    <div className='row'>
                        <div className="col">
                            <a className='m-3' href="https://www.linkedin.com/in/katrinango-/" target="_blank" rel="noopener noreferrer">
                                <img src={linkedin} alt='LinkedIn Icon'></img>
                            </a>
                            <a className='m-3' href="https://github.com/katr1na" target="_blank" rel="noopener noreferrer">
                                <img src={github} alt='Github Icon'></img>
                            </a>
                            <a className='m-3' href="mailto:katrinango3388@gmail.com">
                                <img src={mail} alt='Mail Icon'></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer