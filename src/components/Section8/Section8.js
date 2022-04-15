import React from 'react'
import './Section8.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Section8() {
    return (
        <div className='section8-main-container'>
            <div className='section8-header-mainDiv'>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Contact Us</h2>
                <p style={{ color: '#757474', paddingTop: '5px' }}>Send Us a Message</p>
            </div>
            <div className='section8-contentDiv'>
                <div className='section8-contact-container'>
                    <div className='section8-contactus-form'>
                        <div className='section8-contact-input' style={{ alignItems: 'flex-end' }}>
                            <h2 style={{ fontSize: '1.5rem', color: '#3F3D56' }}>Let's Talk</h2>
                        </div>
                        <div className='section8-contact-input'>
                            <TextField id="standard-basic" fullWidth label="Full Name" variant="standard" />
                            <TextField sx={{ marginLeft: '22%' }} fullWidth id="standard-basic" label="Company Name" variant="standard" />

                        </div>
                        <div className='section8-contact-input'>
                            <TextField id="standard-basic" fullWidth label="Phone" variant="standard" />
                            <TextField sx={{ marginLeft: '22%' }} fullWidth id="standard-basic" label="Email" variant="standard" />

                        </div>
                        <div className='section8-contact-input'>
                            <TextField id="standard-basic" label="Service" variant="standard" />
                            {/* <TextField sx={{ marginLeft: '22%' }} id="standard-basic" label="Descr" variant="standard" /> */}

                        </div>
                        <div className='section8-contact-input'>
                            <TextField id="standard-basic" label="Description" multiline maxRows={4} variant="standard" />
                            {/* <TextField sx={{ marginLeft: '22%' }} id="standard-basic" label="Descr" variant="standard" /> */}

                        </div>
                        <div className='section8-contact-button'>
                            <Button size='large' variant="contained">Send Message</Button>
                        </div>

                    </div>
                    <div className='section8-socialMedia'>
                        <div className='section8-socialMedia-contactOptions-cont'>
                            <div className='socialMedia-option'>
                                <h2 style={{ fontSize: '1.5rem' }}>Contact Information</h2>
                            </div>
                            <div className='socialMedia-option'>
                                <span style={{ fontSize: '1.1rem' }}>Email</span>
                                <p style={{ color: 'whitesmoke' }}>nextinno@gmail.com</p>

                            </div>
                            <div className='socialMedia-option'>
                                <span style={{ fontSize: '1.1rem' }}>Phone</span>
                                <p style={{ color: 'whitesmoke' }}>7907961290</p>

                            </div>
                            <div className='socialMedia-option'>
                                <span style={{ fontSize: '1.1rem' }}>Location</span>
                                <p style={{ color: 'whitesmoke' }}>Perinthalmanna</p>

                            </div>
                            <div className='socialMedia-option' style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
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

            </div>
        </div>
    )
}

export default Section8
