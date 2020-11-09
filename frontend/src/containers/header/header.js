import React, { useState } from 'react';

import './header.styles.scss';
import HeaderMain from '../../components/header/header-main.component';
import HeaderAlt from '../../components/header/header-alt.component';


const Header = props => {
    return (
        <div>
        {props.main?
            <HeaderMain />  
            :
            <HeaderAlt />
        }
        </div>
    )
}

export default Header;