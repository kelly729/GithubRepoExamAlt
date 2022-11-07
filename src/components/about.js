import React from 'react'
import { Helmet } from 'react-helmet-async'

const About = () => {
  return (
    <>
    <Helmet>
    <title>About page</title>
    <meta name='description' content='About me'></meta>
   </Helmet>
    
      <div className='about'>
      <h2>About us</h2>
      <p>
      Donec malesuada metus eu sodales aliquet. In fringilla in arcu a lobortis.
        Aenean sit amet urna tristique, posuere quam eu, elementum lorem. Vivamus
         semper ullamcorper tellus, ac cursus tortor iaculis nec. Sed vestibulum 
        congue elit, ut viverra risus posuere sit amet. Fusce molestie ligula 
        non lacus vestibulum mollis id imperdiet tellus. Morbi fermentum eros 
        quis auctor pharetra. Vivamus ut consequat ligula.
      </p>

    </div>
    </>
  )
}

export default About
