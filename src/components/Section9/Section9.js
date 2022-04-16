import React from 'react'
import './Section9.css'
import logo from '../../NextinNo 1.png'

function Section9() {
    const scrollToView = (classname) => {
        document.getElementById(classname).scrollIntoView();
        // console.log(document.getElementById(classname).scrollIntoView());
    }
    return (
        <div className='section9-main-container'>
            <div className='section9-option-mainContLogo'>
                <p style={{ bottom: 0 }}>@ 2022 Nextinno, All Rights Reserved</p>
                <p style={{ marginLeft: '2%' }}>Powered By <span style={{ color: '#F50057', cursor: 'pointer' }}>NextinNo</span></p>
                <p style={{ margin: 'auto 20px auto auto' }}>Legal</p>
            </div>


        </div>
    )
}

export default Section9
