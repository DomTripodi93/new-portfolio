import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import Header from './containers/header/header';
import Loading from './shared/elements/loading/loading';
import logo from "./assets/logonew.png";
import Footer from './shared/footer/footer';

const Home = lazy(() => import('./containers/home/home.container'));
const Samples = lazy(() => import('./containers/samples/samples.container'));
const Blog =lazy(()=> import('./containers/blog/blog.container'));
const About = lazy(() => import( './containers/about/about.container'));
const VariableDeclaration = lazy(()=>import('./components/blog/variable-declaration'));

function App() {
    var header = document.getElementById("myHeader");
    var sticky = -450;
    const [isMain, setIsMain] = useState(true);

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
                        <a href="/">
                            <div className="logo">
                                <img src={logo} width="50px" alt="logo" />
                            </div>
                        </a>
                    </div>
                    <div className="middle">
                        <a href="/Samples">Samples</a>
                    </div>
                    <div className="middle">
                        <a href="/About" >About</a>
                    </div>
                </div>
            </div>
            <Header main={isMain}/>
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/samples' render={()=>
                        <Samples callback={setIsMain}/>
                    } />
                    <Route exact path='/about' render={()=>
                        <About callback={setIsMain}/>
                    } />
                    <Route exact path='/blog' render={()=>
                        <Blog callback={setIsMain}/>
                    } />
                    <Route exact path='/blog/VariableDeclaration' render={()=>
                        <VariableDeclaration callback={setIsMain}/>
                    } />
                </Switch>
            </Suspense>
            <Footer />
        </div>
    );
}

export default App;
