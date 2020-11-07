import React, { lazy, Suspense, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import Header from './shared/header/header';
import Loading from './shared/elements/loading/loading';
import logo from "./assets/logonew.png";

const Home = lazy(() => import('./containers/home/home.container'));
const Samples = lazy(() => import('./containers/samples/samples.container'));

function App() {
    var header;
    var sticky;

    useEffect(()=>{
        header = document.getElementById("myHeader");
        sticky = header.getBoundingClientRect().top;
    })

    window.onscroll = () => { myHeader() };

    const myHeader = () => {
        if (window.pageYOffset - 750  > sticky) {
            header.classList.add("sticky");
            header.classList.remove("not-sticky");
        } else {
            header.classList.add("not-sticky");
            header.classList.remove("sticky");
        }
    }

    return (
        <div className="bg">
            <div className="not-sticky" id="myHeader">
                <div className='split block-head'>
                    <div
                        className="middle">
                        <div className="logo">
                            <img src={logo} width="50px" alt="logo" />
                        </div>
                    </div>
                    <div className="middle">
                        <p >Samples</p>
                    </div>
                    <div className="middle">
                        <p >About</p>
                    </div>
                    <div className="middle">
                        <p >Blog</p>
                    </div>
                </div>
            </div>
            <Header />
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/samples' component={Samples} />
                </Switch>
            </Suspense>
            
        </div>
    );
}

export default App;
