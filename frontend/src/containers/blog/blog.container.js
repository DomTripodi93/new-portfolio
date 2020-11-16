import React, { useContext, useEffect, useState } from 'react';
import JSVariables from '../../components/blog/js-variables';
import VariableDeclaration from '../../components/blog/variable-declaration';
import './blog.styles.scss';
import { HeaderContext } from '../../App';

const Blog = props => {
    let [post, setPost] = useState("");
    const setHeader = useContext(HeaderContext);

    useEffect(()=>{
        setHeader(false);
    })


    useEffect(()=>{
        setPost(props.match.params.post);
    },[props])


    return (
        <div>
            {post === "VariableDeclaration" ?
                <div>
                    <VariableDeclaration />
                </div>
                :
                null
            }
            {post === "JavaScriptVariables" ?
                <div>
                    <JSVariables />
                </div>
                :
                null
            }
        </div>
    )
}

export default Blog;