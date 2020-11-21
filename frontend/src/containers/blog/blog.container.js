import React, { useContext, useEffect, useState } from 'react';
import JSVariables from '../../components/blog/js-variables';
import VariableDeclaration from '../../components/blog/variable-declaration';
import './blog.styles.scss';
import { HeaderContext } from '../../App';
import Scope from '../../components/blog/scope';

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
            {post === "DynamicVsStatic" ?
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
            {post === "Scope" ?
                <div>
                    <Scope />
                </div>
                :
                null
            }
        </div>
    )
}

export default Blog;