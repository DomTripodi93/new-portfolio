import React, { useEffect, useState } from 'react';
import JSVariables from '../../components/blog/js-variables';
import VariableDeclaration from '../../components/blog/variable-declaration';
import './blog.styles.scss';
import { Link } from 'react-router-dom';

const Blog = props => {
    useEffect(()=>{
        if(props.callback){
            props.callback();
        }
    })

    return (
        <div>
            <div className="block-sample">
                <Link to="/blog/VariableDeclaration">
                    <h3 className="link">Variable Declaration</h3>
                </Link>
                <h5>
                    Learn about declaring variables and the difference between statically 
                    and dynamically typed programming languages
                </h5>
            </div>
        </div>
    )
}

export default Blog;