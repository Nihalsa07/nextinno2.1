import React from 'react'
import './Section10.css'

import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Section10() {
    return (
        <div className='section10-main-container'>
            <div className='contact-main-container reveal'>
                <div className='contact-email-section'>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '20px' }}>Get in touch</h3>
                    <p style={{ fontSize: '2rem', fontWeight: 'bolder' }}>Let's have awesome conversation</p>
                    <div className='contact-button-container'>
                        <div className='contact-button'>Send a Mail</div>
                    </div>
                </div>
                <div className='contact-social-mediaSection'>
                    <div className='socialMedia-options'>
                        <div className='socialMedia-option-icon'>
                            <InstagramIcon sx={{ color: '#bc2a8d' }} fontSize="large" />
                        </div>
                        <div className='socialMedia-option-icon'>
                            <TwitterIcon sx={{ color: '#00acee' }} fontSize="large" />
                        </div>
                        <div className='socialMedia-option-icon'>
                            <FacebookIcon sx={{ color: '#4267B2' }} fontSize="large" />
                        </div>
                        <div className='socialMedia-option-icon'>
                            <a href='https://in.linkedin.com/in/next-inno-8867a21b6'>
                                <LinkedInIcon sx={{ color: '#0077b5' }} fontSize="large" />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section10
