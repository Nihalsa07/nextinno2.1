import React from 'react'
import './Section1.css'
import logo from '../../NextinNo2.png'
import mySvg from '../../close.svg'


function Section1() {
    const scrollToView = (classname) => {
        document.getElementById(classname).scrollIntoView();
        // console.log(document.getElementById(classname).scrollIntoView());
    }

    return (
        <div className='section1-container'>
            <div className='section1-text-container'>
                {/* <img alt='Nextinno' src={logo} width={500} height={700} /> */}
                <p style={{ color: 'white', fontSize: '1.7rem', paddingBottom: '20px', fontWeight: 'bolder' }}>Your business's digital transformation <br /> relies on our expertise.</p>
                <p style={{ color: 'white', fontSize: '1.5rem' }}>Having business problems?<br /> we have digital solutions</p>
                <div onClick={() => scrollToView('section-8')} className='section1-button-maindiv'>
                    <span style={{ fontSize: '1.25rem' }}>Contact</span>
                </div>

            </div>
            <div className='section1-image-container'>
                <img alt='close' src={mySvg} width='90%' />

            </div>

        </div>
    )
}

export default Section1
