import React, { useState } from 'react';


const JSVariables = props => {

    return (
        <div>

            <div class="block-sample">
                <h3>
                    In this article we're going to talk about the basic variable types of JavaScript.
                </h3>
                <h4>
                    Table Of Contents:
                </h4>
                <h4>
                    Strings
                </h4>
                <h4>
                    Numbers
                </h4>
                <h4>
                    Operators
                </h4>
                <h4>
                    Type Coercion
                </h4>
                <h4>
                    Objects
                </h4>
                <h4>
                    Arrays
                </h4>
            </div>
            <div class="block-sample">
                <h4>
                    Strings
                </h4>
                <h5>
                    Strings are an important part of any programming language. In the simplest of terms, a string is a variable
                    that holds words. 
                </h5>
                <h5>
                    <pre class='code'>
                <strong>var</strong> myString = "something";
                <strong>let</strong> myOtherString = "$#$^@^#$@ @#$^@ #^$@^ @#^$";
                <strong>const</strong> myThirdString = "555-555-5555";
                    </pre>
                </h5>
                <h5>
                    Above you can see a few examples of declaring a string. You'll notice that each string holds different information, 
                    and is declared using a different declaration keyword. 
                    
                    This may be a little confusing for a newcomer, and you may not fully understand what I'm about to say next, but 
                    we will go more in depth about scope in future blog posts.
                    
                    The <strong>var</strong> keyword is used to declare a variable in the "function" or "global" scope, 
                    meaning that if it is declared in the root of a JavaScript file, it is accessible throughout
                    the file, and if it is declared within a function, it is accessible only within that function.
                    
                    The <strong>let</strong> keyword is also used to declare a variable in the "function" or "global" scope.

                    The <strong>const</strong> keyword is used to declare a variable in the "global" scope.
                </h5>
            </div>
            <div class="block-sample">
                <h4>So what is the difference between "let" and "var"?</h4>
                <h5>
                    A variable declared using the <strong>var</strong> keyword can be redeclared in a deeper scope, overwriting it's
                    value at a higher level
                    
                </h5>
            <h5>
            <pre class='code'>
<strong>var</strong> myString = "something";
//Has a value of "something"
(function someFunc() {'{'}
<strong>var</strong> myString = "different";
//Has a value of "different"
{'}'}();
console.log(myString);
//Outputs "different" as the value has been changed on the global scope 
            </pre>
            </h5>
            <h5>
                A variable declared using the <strong>let</strong> keyword can be redeclared in a deeper scope, <strong>without</strong>
                overwriting it's value at a higher level
            </h5>
            <h5>
            <pre class='code'>{`
<strong>let</strong> myOtherString = "555-555-5555";
//Has a value of "555-555-5555"
(function someFunc() {
    <strong>let</strong> myOtherString = "different";
    //Has a value of "different"
})();
console.log(myString);
//Outputs "555-555-5555" as the value has <strong>not</strong> been changed on the global scope 
            `}</pre>
            </h5>
            </div>
        </div>
    )
}
export default JSVariables;