import React from 'react'
import './Section6.css'
import efriendlogo from '../../logo.png'
import eurodecor from '../../eurodecor.jpg'

function Section6() {

    return (
        <div className='section6-main-container'>
            <div className='section6-header-mainDiv'>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Take a Look at Our Clients</h2>
                {/* <p style={{ color: '#757474', paddingTop: '5px' }}>Our Products for Clients</p> */}
            </div>
            <div className='section6-contentDiv'>
                <div className='client-card'>
                    <img alt='clent' src={efriendlogo} />

                </div>
                <div className='client-card'>
                    <img alt='clent' src={eurodecor} />


                </div>
                <div className='client-card'>


                </div>
            </div>

        </div>
    )
}

export default Section6
