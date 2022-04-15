import React from 'react'
import './Section7.css'
import logo from '../../NextinNo 1.png'

const colors = ["#fff", "#fff", "#fff"];
const delay = 3000;
const head = ['Who We Are', 'Our Vision', 'Our Mission']
const content = ['We love finding solutions to complicated problems by solving the unsolvable. Our technology experts think big, design smart, and develop fast for all screens. They’re ready to turn your big idea into a reality.', 'Our main aim is to develop in a constant manner and become a leading performer in this competitive global marketplace. NexTiNno is one of the prominent software companies that helps other organizations to transform into digital enterprises.', 'Our mission is to enhance business growth of our customers with creative design, development and to deliver market defining high quality solutions that create value and reliable competitive advantage to customers around the globe.']

function Section7() {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);
    return (
        <div className='section7-main-container'>
            <div className='section7-header-mainDiv'>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>About Us</h2>
                {/* <p style={{ color: '#757474', paddingTop: '5px' }}>Our Products for Clients</p> */}
            </div>
            <div className='section7-contentDiv'>
                <div className='section7-logo'>
                    <img alt='logo' src={logo} width='70%' />
                </div>
                <div className="slideshow">
                    <div
                        className="slideshowSlider"
                        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                    >
                        {colors.map((backgroundColor, index) => (
                            <div
                                className="slide"
                                key={index}
                                style={{ backgroundColor }}
                            >
                                <div className='slide-maincont'>
                                    <div style={{ fontSize: '2rem', fontWeight: 'bold' }} className='slide-head'>{head[index]}</div>
                                    <div className='slide-content'>
                                        <q className='slide-content-para'> {content[index]}</q>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="slideshowDots">
                        {colors.map((_, idx) => (
                            <div
                                key={idx}
                                className={`slideshowDot${index === idx ? " active" : ""}`}
                                onClick={() => {
                                    setIndex(idx);
                                }}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section7
