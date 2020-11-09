import React from 'react';
import Samples from '../samples/samples.container';
import About from '../about/about.container';


const Home = props => {

    return (
        <div className='centered'>
            <Samples />
            <div id="About"><br/></div>
            <About />
        </div>
    )
}

export default Home;