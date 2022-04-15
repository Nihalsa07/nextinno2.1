import React from 'react'
import './Section9.css'
import logo from '../../NextinNo2.png'

function Section9() {
    const scrollToView = (classname) => {
        document.getElementById(classname).scrollIntoView();
        // console.log(document.getElementById(classname).scrollIntoView());
    }
    return (
        <div className='section9-main-container'>
            <div className='section9-option-mainContLogo'>
                <img alt='logo' src={logo} width='70%' />
                <p style={{ bottom: 0 }}>@ 2022 Nextinno, All Rights Reserved</p>
            </div>
            <div className='section9-option-mainCont'>
                <h3 style={{ marginBottom: '3%', fontWeight: 'bolder' }}>Explore</h3>
                <p onClick={() => scrollToView('section-1')} className='Links'>Home</p>
                <p onClick={() => scrollToView('section-2')} className='Links'>Services</p>
                <p onClick={() => scrollToView('section-3')} className='Links'>Products</p>
                <p onClick={() => scrollToView('section-7')} className='Links'>About Us</p>
                <p onClick={() => scrollToView('section-8')} className='Links'>Contact Us</p>

            </div>
            <div style={{ marginTop: '-3%' }} className='section9-option-mainCont'>
                <h3 style={{ marginBottom: '3%', fontWeight: 'bolder' }}>Follow on</h3>
                <p className='Links'>Instagram</p>
                <p className='Links'>Facebook</p>
                <p className='Links'>Twitter</p>

            </div>
            <div style={{ marginTop: '-3%' }} className='section9-option-mainCont'>
                <h3 style={{ marginBottom: '3%', fontWeight: 'bolder' }}>Contact Information</h3>
                <p className='info'>Email : NextinNo@gamil.com</p>
                <p className='info'>Phone : 7907961290</p>
                <p className='info'>Location : Perinthalmanna</p>
            </div>

        </div>
    )
}

export default Section9
