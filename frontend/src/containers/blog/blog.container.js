import React, { useEffect, useState } from 'react';
import JSVariables from '../../components/blog/js-variables';


const Blog = props => {
    useEffect(()=>{
        if(props.callback){
            props.callback();
        }
    })

    return (
        <div>
        </div>
    )
}

export default Blog;