import React, { useContext, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula as dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { HeaderContext } from '../../App';


const Scope = props => {
    const setHeader = useContext(HeaderContext);

    useEffect(()=>{
        setHeader(false);
    })


    return (

        <div className="size-holder-blog middle">
            <div class="block-sample">
                <h1 className="centered">JavaScript Scope</h1>
                <h5>
                    In this article we're going to talk about scope in JavaScript.
                </h5>
            </div>
            <div class="block-sample">
                <h3>
                    Table Of Contents:
                </h3>
                <h4>
                    <a href="#Conclusion">
                        Conclusion
                    </a>
                </h4>
            </div>
            <div>
                <h5>
                    The different keywords can be each be used to declare a variable in JavaScript. 
                    
                    This may be a little confusing for a newcomer, and you may not fully understand what I'm about to say next, but 
                    we will go more in depth about scope in future blog posts.
                    
                    The <strong>var</strong> keyword is used to declare a variable in the "function" or "global" scope, 
                    meaning that if it is declared in the root of a JavaScript file, it is accessible throughout
                    the file, and if it is declared within a function, it is accessible only within that function.
                    
                    The <strong>let</strong> keyword is also used to declare a variable in the "function" or "global" scope.

                    The <strong>const</strong> keyword is used to declare a variable in the "global" scope.
                </h5>
            </div>
            
            <div className="block-sample">
                <h4>A quick intro to JavaScript scope</h4>
                <h5>
                    A variable declared using the <strong>var</strong> keyword can be redeclared in a deeper scope, overwriting it's
                    value at a higher level
                </h5>
                <div className="spaced-code middle code">
                <SyntaxHighlighter language="javascript" style={dark}>   
                {`
var myString = "something";
//Has a value of "something"
(function someFunc() {
var myString = "different";
//Has a value of "different"
}();
console.log(myString);
//Outputs "different" as the value has been changed on the global scope
                `}
                </SyntaxHighlighter>

                </div>
                <h5>
                    A variable declared using the let keyword can be redeclared in a deeper scope, without
                    overwriting it's value at a higher level
                </h5>
                <div className="spaced-code middle code">
                
                <SyntaxHighlighter language="javascript" style={dark}>
                {`
<strong>let</strong> myOtherString = "555-555-5555";
//Has a value of "555-555-5555"
(function someFunc() {
    let myOtherString = "different";
    //Has a value of "different"
})();
console.log(myString);
//Outputs "555-555-5555" as the value has <strong>not</strong> been changed on the global scope 
                `}
                </SyntaxHighlighter>
                </div>
            </div>
            <div class="block-sample">
                <h4>
                    Conclusion
                </h4>
            </div>
        </div>
    )
}
export default Scope;