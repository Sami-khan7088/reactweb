import React from 'react'
import Common from './common';
import img from "./img.svg"
function Home() {
    return (
        <>
        <Common name="Grow your business with" btn="Get started" to="/service" img={img}/>
        </>
    )
}
export default Home;