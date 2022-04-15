import React from 'react'
import Header from './components/Header/Header'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
import Section3 from './components/Section3/Section3'
import Section4 from './components/Section4/Section4'
import Section5 from './components/Section5/Section5'
import Section6 from './components/Section6/Section6'
import Section7 from './components/Section7/Section7'
import Section8 from './components/Section8/Section8'
import Section9 from './components/Section9/Section9'

function App() {
  return (
    <div >
      <Header />
      <section id='section-1' className='sections'>
        <Section1 />
      </section>
      <Section3 />
      <section id='section-2' className='sections'>
        <Section2 />
      </section>
      <section id='section-3' className='sections'>
        <Section4 />
      </section>
      <Section5 />
      <Section6 />
      <section id='section-7' className='sections'>
        <Section7 />
      </section>
      <section id='section-8' className='sections'>
        <Section8 />
      </section>
      <Section9 />


    </div>
  )
}

export default App
