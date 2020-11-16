import React, { useState } from 'react';

import github from '../../assets/github.png';
import phone from '../../assets/phone.png';
import mail from '../../assets/email2.png';
import linkedin from '../../assets/linkedin.png';
import logo from "../../assets/logonew.png";


const HeaderAlt = props => {
    const [dropDownHidden, toggleDropDownHidden] = useState(true);

    const toggleDropDown = () => {
        setTimeout(() => {
            toggleDropDownHidden(!dropDownHidden);
        }, 5);
    };

    const hideDropDown = () => {
        toggleDropDownHidden(true);
    }

    return (
        <div id="Header" onClick={hideDropDown} className='header-cover2'>
            <div id="overlay">
            </div>
            <h3 onClick={toggleDropDown} className="hamburger">
                &#9776;
            </h3>
            {!dropDownHidden ?
                <div className="drop-down">
                    <div className='split block-head'>
                        <div className="grid50">
                            <h3 onClick={toggleDropDown} className="hamburger2">
                                &#9776;
                            </h3>
                            <div className="logo2">
                                <a href="/">
                                    <img src={logo} width="50px" alt="logo" />
                                </a>
                            </div>
                        </div>
                        <div className="header-tag">
                            <a href="/Samples">Samples</a>
                        </div>
                        <div className="header-tag">
                            <a href="/About" >About</a>
                        </div>
                        <div className="middle">
                            <a href="/Blog" >Blog</a>
                        </div>
                    </div>
                </div>
                :
                null
            }
            <div className="centered">
                <h1 className="title-text">Dominic Tripodi, Full Stack Developer</h1>
            </div>
            <div className="grid50 centered sized size-holder middle">
                <div className="grid50">
                    <div>
                        <a href="mailto:DTripodi93@Gmail.com">
                            <img className="min" src={mail} alt="mail"></img>
                        </a>
                    </div>
                    <div>
                        <a href="tel:12674071282">
                            <img className="min" src={phone} alt="phone"></img>
                        </a>
                    </div>
                </div>
                <div className="grid50">
                    <div>
                        <a href="https://www.linkedin.com/in/dominic-tripodi-11788a121/">
                            <img className="min" src={linkedin} alt="LinkedIn"></img>
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/DomTripodi93">
                            <img className="min" src={github} alt="GitHub"></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderAlt;