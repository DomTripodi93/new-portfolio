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
                    Learn about declaring variables and the difference between statically 
                    and dynamically typed programming languages.
                </h5>
            </div>
            <div className="block-sample">
                <Link to="/blog/VariableDeclaration">
                    <h3 className="link">Variable Declaration</h3>
                </Link>
                <h5>
                    Learn about declaring variables and the difference between statically 
                    and dynamically typed programming languages.
                </h5>
            </div>
        </div>
    )
}

export default BlogList;