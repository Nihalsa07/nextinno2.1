import React, { useRef, useState } from 'react'
import './Header.css'
import logo from '../../NextinNo2.png'
import logo2 from '../../NextinNo 1.png'
// import { ReactComponent as YourSvg } from '../../NextinNo.svg';

function Header() {
    const sections = document.querySelectorAll('section')
    const navLi = document.querySelectorAll('span')
    const [color, setColor] = useState('transparent')
    const [logos, setLogo] = useState(logo)
    const headerDiv = useRef(null)
    window.addEventListener('scroll', () => {
        // window.scrollY === 0 ? setColor('transparent') : setColor('white')

        window.scrollY === 0 ? setLogo(logo) : setLogo(logo2)


        let current = ''
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // console.log(sectionTop);
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id')
            }

        })
        // console.log(navLi);
        navLi.forEach(li => {
            li.classList.remove('active')
            if (li.classList.contains(current)) {
                // console.log('sfd');
                li.classList.add('active')
            }
        })
    })

    const scrollToView = (classname) => {
        document.getElementById(classname).scrollIntoView();
        // console.log(document.getElementById(classname).scrollIntoView());
    }


    document.onscroll = function () {
        window.scrollY === 0 ? setColor('transparent') : setColor('white')
        // console.log(headerDiv);
        headerDiv.current.style.opacity = window.scrollY === 0 ? 1 : (window.scrollY / 100)
        //     // console.log(window.scrollY);
    }
    return (
        <div ref={headerDiv} style={{ backgroundColor: color }} className='header-main-div'>
            <div className='header-logo-div'>
                <img alt='failed' src={logos} style={{ width: 90, height: 75, marginLeft: 20 }} />
                {/* <YourSvg width={20} height={20} color={'white'} /> */}
            </div>
            <div className='header-navbar-div'>
                <div className='header-navbar-options'>
                    <span onClick={() => scrollToView('section-1')} className='section-1 active header-navbar-option-span'>Home</span>
                    <span onClick={() => scrollToView('section-2')} className='section-2 header-navbar-option-span'>Services</span>
                    <span onClick={() => scrollToView('section-3')} className='section-3 header-navbar-option-span'>Products</span>
                    {/* <span className='header-navbar-option-span'>Portfolio</span> */}
                    <span onClick={() => scrollToView('section-7')} className='section-7 header-navbar-option-span'>About Us</span>
                    <span onClick={() => scrollToView('section-8')} className='section-8 header-navbar-option-span'>Contact us</span>
                </div>

            </div>
        </div>
    )
}

export default Header
