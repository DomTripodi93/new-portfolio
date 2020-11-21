import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderContext } from '../../App';
import './blog.styles.scss';

const BlogList = props => {
    const setHeader = useContext(HeaderContext);

    useEffect(()=>{
        setHeader(false);
    })


    return (
        <div className="size-holder-blog middle">
            <div className="block-sample">
                <Link to="/blog/JavaScriptVariables">
                    <h3 className="link">JavaScript Variables</h3>
                </Link>
                <h5>
                    Learn about the different types of variables in JavaScript.
                </h5>
            </div>
            <div className="block-sample">
                <Link to="/blog/DynamicVsStatic">
                    <h3 className="link">Dynamically vs Statically Typed </h3>
                </Link>
                <h5>
                    Learn the difference between statically 
                    and dynamically typed programming languages.
                </h5>
            </div>
            <div className="block-sample">
                <Link to="/blog/Scope">
                    <h3 className="link">Scope</h3>
                </Link>
                <h5>
                    Learn about the different levels of scope in JavaScript.
                </h5>
            </div>
        </div>
    )
}

export default BlogList;