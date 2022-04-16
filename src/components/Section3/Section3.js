import React from 'react'
import './Section3.css'
import progr from '../../programmer.svg'
import moonSvg from '../../moon 1.svg'

function Section3() {
    window.addEventListener('scroll', () => {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 50;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("actives");
            } else {
                reveals[i].classList.remove("actives");
            }
        }

    })
    return (
        <div className='section3-main-container'>
            <div className='section3-logo-main-div'>
                <img alt='programmer' src={progr} width='60%' />
            </div>
            <div className='section3-text-main-div reveal'>
                {/* <img alt='moon' src={moonSvg} width='40%' style={{ position: 'absolute', right: 0 }} /> */}
                <h1 className='reveal' style={{ fontSize: '2rem', marginBottom: '30px', fontWeight: 700 }}>Our Mission</h1>
                <p className='reveal' style={{ fontSize: '1.2rem', paddingRight: '20px' }}>Our mission is to enhance business growth
                    of our customers with creative design,
                    development and to deliver market
                    defining high quality solutions that
                    create value and reliable competitive
                    advantage to customers around
                    the globe.</p>
            </div>

        </div>
    )
}

export default Section3
