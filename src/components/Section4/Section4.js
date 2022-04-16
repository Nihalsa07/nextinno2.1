import React from 'react'
import './Section4.css'
import logo from '../../CRM.jpg'
import sales from '../../salesmanagement.png'
import churn from '../../churn.png'
import pos from '../../pos.png'
function Section4() {
    const scrollToView = (classname) => {
        document.getElementById(classname).scrollIntoView();
        // console.log(document.getElementById(classname).scrollIntoView());
    }
    return (
        <div className='section4-container'>
            <div className='section4-header-mainDiv'>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Our products</h2>
                <p style={{ color: '#757474', paddingTop: '5px' }}>Our Products for Clients</p>
            </div>
            <div className='section4-products-mainDiv'>
                <div className='products-card'>
                    <div className='products-header'>
                        <img src={logo} alt='product' width='100%' />
                    </div>
                    <div className='products-footer'>
                        <h2 style={{ marginBottom: '20px' }}>CRM</h2>
                        <ul>
                            <li>Lead Management</li>
                            <li>Contact Management</li>
                            <li>Reports and Dashboards</li>
                            <li>Sales Analytics</li>

                        </ul>
                        <div onClick={() => scrollToView('section-8')} className='product-contact'>Contact</div>

                    </div>

                </div>
                <div className='products-card'>
                    <div className='products-header'>
                        <img src={sales} alt='product' width='100%' />
                    </div>
                    <div className='products-footer'>
                        <h2 style={{ marginBottom: '20px' }}>Sales Management Application</h2>
                        <ul>
                            <li>Lead Management</li>
                            <li>Contact Management</li>
                            <li>Reports and Dashboards</li>
                            <li>Sales Analytics</li>

                        </ul>
                        <div onClick={() => scrollToView('section-8')} className='product-contact'>Contact</div>

                    </div>

                </div>
                <div className='products-card'>
                    <div className='products-header'>
                        <img src={churn} alt='product' width='100%' />
                    </div>
                    <div className='products-footer'>
                        <h2 style={{ marginBottom: '20px' }}>Customer Churn Prediction</h2>
                        <ul>
                            <li>Lead Management</li>
                            <li>Contact Management</li>
                            <li>Reports and Dashboards</li>
                            <li>Sales Analytics</li>

                        </ul>
                        <div onClick={() => scrollToView('section-8')} className='product-contact'>Contact</div>

                    </div>

                </div>
                <div className='products-card'>
                    <div className='products-header'>
                        <img src={pos} alt='product' width='100%' />
                    </div>
                    <div className='products-footer'>
                        <h2 style={{ marginBottom: '20px' }}>Point of Sale</h2>
                        <ul>
                            <li>Lead Management</li>
                            <li>Contact Management</li>
                            <li>Reports and Dashboards</li>
                            <li>Sales Analytics</li>

                        </ul>
                        <div onClick={() => scrollToView('section-8')} className='product-contact'>Contact</div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Section4
