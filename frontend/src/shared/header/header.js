import React, { useState } from 'react';

import './header.styles.scss';

import github from '../../assets/github.png';
import me from '../../assets/me.png';
import phone from '../../assets/phone.png';
import mail from '../../assets/email2.png';
import linkedin from '../../assets/linkedin.png';


const Header = props => {
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
        <div onClick={hideDropDown} className='header-cover'>
            <div id="overlay">
            </div>
            <img className="img-holder me" src={me} alt="self"></img>
            <h3 onClick={toggleDropDown} class="hamburger">
                &#9776;
            </h3>
            {!dropDownHidden ?
                <div className="drop-down">
                    <h5 class="drop-down-item">
                    </h5>
                </div>
                :
                null
            }
            <div className="centered">
                <h1>Dominic Tripodi, Full Stack Developer</h1>
            </div>
            <div className="grid50-to-100 centered sized size-holder middle">
                <h3 className="pc-only">Reach Me:</h3>
                <h3 className="pc-only">Find Me:</h3>
                <div className="grid50">
                    <div>
                        <a href="mailto:DTripodi93@Gmail.com">
                            <img className="min" src={mail} alt="mail"></img>
                        </a>
                        <h5>DTripodi93@Gmail.com</h5>
                    </div>
                    <div>
                        <a href="tel:12674071282">
                            <img className="min" src={phone} alt="phone"></img>
                        </a>
                        <h5>267-407-1282</h5>
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

export default Header;