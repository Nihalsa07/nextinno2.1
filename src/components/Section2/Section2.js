import React from 'react'
import './Section2.css'
import webDevelopment from '../../webdevelopment.svg'
import webdev from '../../webdev.svg'
import appDev from '../../appDev.svg'
import digitalMarketing from '../../digitalMarketing.svg'
import graphicDesign from '../../quality.svg'
import machineLearning from '../../machinelearning.svg'
import cloud from '../../cloud.svg'

function Section2() {

    return (
        <div className='section2-container'>
            <div className='section2-header-mainDiv'>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Our Services</h2>
                <p style={{ color: '#757474', paddingTop: '5px' }}>Our Services for Clients</p>
            </div>
            <div className='section2-services-mainDiv'>
                <div className="service-card reveal">
                    <div className='service-image-container'>
                        <img src={webdev} alt="Avatar" style={{ objectFit: 'cover', width: '70%' }} />

                    </div>
                    <div className="container">
                        <h2 style={{ fontSize: '1.2rem', textAlign: 'center', paddingBottom: '5px' }}>Web Development</h2>
                        {/* <p className='service-description'>We build sites that work for your business
                            and your users</p> */}
                    </div>
                </div>
                <div className="service-card reveal">
                    <div className='service-image-container'>
                        <img src={appDev} alt="Avatar" style={{ objectFit: 'cover', width: '25%' }} />

                    </div>
                    <div className="container">
                        <h2 style={{ fontSize: '1.2rem', textAlign: 'center', paddingBottom: '5px' }}>App Development</h2>
                        {/* <p className='service-description'>We build sites that work for your business
                            and your users</p> */}
                    </div>
                </div>
                <div className="service-card reveal">
                    <div className='service-image-container'>
                        <img src={digitalMarketing} alt="Avatar" style={{ objectFit: 'cover', width: '40%' }} />

                    </div>
                    <div className="container">
                        <h2 style={{ fontSize: '1.2rem', textAlign: 'center', paddingBottom: '5px' }}>Digital Marketing</h2>
                        {/* <p className='service-description'>We build sites that work for your business
                            and your users</p> */}
                    </div>
                </div>
                <div className="service-card reveal">
                    <div className='service-image-container'>
                        <img src={graphicDesign} alt="Avatar" style={{ objectFit: 'cover', width: '70%' }} />

                    </div>
                    <div className="container">
                        <h2 style={{ fontSize: '1.2rem', textAlign: 'center', paddingBottom: '5px' }}>Graphic Design</h2>
                        {/* <p className='service-description'>We build sites that work for your business
                            and your users</p> */}
                    </div>
                </div>
                <div className="service-card reveal">
                    <div className='service-image-container'>
                        <img src={machineLearning} alt="Avatar" style={{ objectFit: 'cover', width: '95%' }} />

                    </div>
                    <div className="container">
                        <h2 style={{ fontSize: '1.2rem', textAlign: 'center', paddingBottom: '5px', paddingTop: '45px' }}>Machine Learning</h2>
                        {/* <p className='service-description'>We build sites that work for your business
                            and your users</p> */}
                    </div>
                </div>
                <div className="service-card reveal">
                    <div className='service-image-container'>
                        <img src={cloud} alt="Avatar" style={{ objectFit: 'cover', width: '80%' }} />

                    </div>
                    <div className="container">
                        <h2 style={{ fontSize: '1.2rem', textAlign: 'center', paddingBottom: '5px', paddingTop: '45px' }}>Cloud Engineering</h2>
                        {/* <p className='service-description'>We build sites that work for your business
                            and your users </p> */}
                    </div>
                </div>



            </div>

        </div>
    )
}

export default Section2
