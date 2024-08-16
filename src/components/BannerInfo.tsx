import React from 'react'
import linkedin from '../assets/Linkedin.svg'
import github from '../assets/Github.svg'
import mail from '../assets/Mail.svg'
import profileIcon from '../assets/profile-pic.jpg'
import '../styles.css'

const BannerInfo = () => {
    return (
        <div className="container text-center">
            <div className="banner-info row align-items-center pt-4">
                <div className="info col-lg-6 col-md-7 col-sm-12 order-md-1 order-2">
                    <h1 className='fullName'>Katrina Ngo</h1>
                    <p className='tag'>EdTech, Developer, Robloxian</p>
                    <div className='socials container text-center'>
                        <div className='row'>
                            <div className="col">
                                <a className='social-icon m-3' href="https://www.linkedin.com/in/katrinango-/" target="_blank" rel="noopener noreferrer">
                                    <img src={linkedin} alt='LinkedIn Icon'></img>
                                </a>
                                <a className='social-icon m-3' href="https://github.com/katr1na" target="_blank" rel="noopener noreferrer">
                                    <img src={github} alt='Github Icon'></img>
                                </a>
                                <a className='social-icon m-3' href="mailto:katrinango3388@gmail.com">
                                    <img src={mail} alt='Mail Icon'></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile-container col-lg-4 col-md-5 col-sm-12 order-md-2 order-1">
                    <img src={profileIcon} className='profile-pic' alt='Profile Picture'></img>
                </div>
            </div>
        </div>
    )
}

export default BannerInfo