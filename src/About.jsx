import React from 'react'
import Common from './common';
import img from './img2.svg'
function About(){
    return(
        <Common name="Welcome to About Page" btn="Contact Us" to="/contact" img={img}/>
    )
}
export default About ;