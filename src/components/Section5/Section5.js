import React from 'react'
import './Section5.css'
import webAdv from '../../webadv.svg'
import qualityProduct from '../../quality1.svg'
import support from '../../support.svg'
import predictive from '../../predictive.svg'

function Section5() {
    return (
        <div className='section5-main-container'>
            <div className='section5-header-mainDiv'>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Our Key Features</h2>
                {/* <p style={{ color: '#757474', paddingTop: '5px' }}>Our Products for Clients</p> */}
            </div>
            <div className='section5-contentDiv'>
                {/* <div className='section5-image-container'>
                    <img alt='logo' src={webAdv} width='80%' />
                </div>
                <div className='section5-feature-container'>
                    <div className='feature-card'>
                        <div className='feature-image-container'>
                            Image
                        </div>
                        <div className='feature-text-container'>
                            Text
                        </div>
                    </div>

                </div> */}
                <div className='section5-feature-card'>
                    <div className='section5-feature-card-image'>
                        <img alt='logo' src={webAdv} width='80%' />

                    </div>
                    <div className='section5-feature-card-text'>
                        <h2 style={{ textAlign: 'center' }}>Responsive Design</h2>
                        <p style={{ textAlign: 'center', paddingTop: '5px', color: '#757474' }}>We provide responsive website which results identical user experience across devices.</p>
                    </div>


                </div>
                <div className='section5-feature-card'>
                    <div className='section5-feature-card-image'>
                        <img alt='logo' src={qualityProduct} width='75%' />

                    </div>
                    <div className='section5-feature-card-text'>
                        <h2 style={{ textAlign: 'center' }}>Quality Service</h2>
                        <p style={{ textAlign: 'center', paddingTop: '5px', color: '#757474' }}>We are able to provide quality service by implementing a systemized approach to <br /> our works</p>
                    </div>


                </div>
                <div className='section5-feature-card'>
                    <div className='section5-feature-card-image'>
                        <img alt='logo' src={support} width='65%' />

                    </div>
                    <div className='section5-feature-card-text'>
                        <h2 style={{ textAlign: 'center' }}>24x7 Support</h2>
                        <p style={{ textAlign: 'center', paddingTop: '5px', color: '#757474' }}>Support you 24x7. </p>
                    </div>


                </div>
                <div className='section5-feature-card'>
                    <div className='section5-feature-card-image'>
                        <img alt='logo' src={predictive} width='70%' />

                    </div>
                    <div className='section5-feature-card-text'>
                        <h2 style={{ textAlign: 'center' }}>Predictive Analysis</h2>
                        <p style={{ textAlign: 'center', paddingTop: '5px', color: '#757474' }}>We are able to provide predictive analysis for boosting <br />your business</p>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Section5
