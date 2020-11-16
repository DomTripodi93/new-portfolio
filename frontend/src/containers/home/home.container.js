import React, { useContext, useEffect } from 'react';
import Samples from '../samples/samples.container';
import About from '../about/about.container';
import { HeaderContext } from '../../App';


const Home = props => {
    const setHeader = useContext(HeaderContext);

    useEffect(()=>{
        setHeader(true);
    })


    return (
        <div className='centered'>
            <Samples home={true} />
            <div id="About"><br/></div>
            <About home={true} />
        </div>
    )
}

export default Home;