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
                    <a href="#WhatIs">
                        What Is Scope?
                    </a>
                </h4>
                <h4>
                    <a href="#Global">
                        Global Scope
                    </a>
                </h4>
                <h4>
                    <a href="#Function">
                        Function Scope
                    </a>
                </h4>
                <h4>
                    <a href="#Block">
                        Block
                    </a>
                </h4>
                <h4>
                    <a href="#Keywords">
                        Declaration Keyword Scoping in JavaScript
                    </a>
                </h4>
                <h4>
                    <a href="#Conclusion">
                        Conclusion
                    </a>
                </h4>
                <div id="WhatIs"></div>
            </div>

            <div class="block-sample">
                <h4>What is Scope?</h4>
                <h5>
                    Scope is the range or space where something can operate. 
                </h5>
                <h5>
                    Is programming, scope is the space in your code where a named item (ie. variable or function)
                    can be called by name. Variables in higher levels of scope like a given file or function, can 
                    called by name in lower levels like nested functions, conditionals or loops.
                </h5>
                <h5>
                    I think of scope like a nesting doll, variables that are declared in the outermost doll can be 
                    referenced by name from within any of the smaller inner dolls.
                </h5>
                <div id="Global"></div>
            </div>

            <div class="block-sample">
                <h4>Global Scope</h4>
                <h5>
                    In programming, global scope is the highest level of scope. Variables declared in the global scope
                    are accessible in all lower levels of scope. Global scope also contains all other scopes.
                </h5>
                <div id="Function"></div>
            </div>

            <div class="block-sample">
                <h4>Function Scope</h4>
                <h5>
                    In JavaScript the scope of a function is it's own separated environment where variables declared with any keyword 
                    including var are unique to the scope and it's child scopes. Child scopes are lower scopes contained 
                    inside of the function. This includes nested functions, conditionals and loops. 
                </h5>
                <div id="Block"></div>
            </div>

            <div class="block-sample">
                <h4>Block Scope</h4>
                <h5>
                    Block scope is a very similar to function scope. the main difference is that it also includes conditionals and loops,
                    and is not separated from variables declared with the var keyword. 
                </h5>
                <h5>
                    Variables declared with const and let are block scoped, meaning that a variable of the same name can be declared as a 
                    separate variable within a deeper block scope without affecting the variable higher in the scope.
                </h5>
                <h5>
                    We will go into more detail about declaration keywords below.
                </h5>
                <div id="Keywords"></div>
            </div>

            <div class="block-sample">
                <h3>Declaration Keywords</h3>
                <h5>
                    There are three keywords that can be used to declare a variable in JavaScript: let, const, and var. 
                </h5>
                <h4>const</h4>
                <h5>
                    The const keyword is used to declare an variable in the "block" scope as well, but with immutable binding.
                    This means that it cannot be reassigned or redeclared with a new value.
                </h5>
                <div className="spaced-code middle code">
                <SyntaxHighlighter language="javascript" style={dark}>
                {`
const myString = "555-555-5555";
// Has a value of "555-555-5555"

(function someFunc() {
    let myString = "different";
    // Has a value of "different"
})();

console.log(myString);
// Outputs "555-555-5555" as the value has not been changed on the global scope 

const myString = 12;
// Causes an error "Uncaught SyntaxError: Identifier 'myString' has already been declared"
//      because a const cannot be redeclared

myString = 15;
// Causes an error "Uncaught TypeError: Assignment to constant variable"
//      because a const cannot be reassigned

const myString y = 6;
for (let i = 0; i < 5; i++){
    myString x = i;
    myString y = i;
}
console.log(x);
// Outputs "Uncaught ReferenceError: x is not defined" because declaring a variable 
//      with let inside of a loop is block scoped
console.log(y);
// Outputs 6 becuase the y in the for loop is block scoped to the for loop, and 
//      therefore a different variable than the y in the global scope
                `}
                </SyntaxHighlighter>
                </div>
                <h4>let</h4>
                <h5>
                    The let keyword is used to declare a variable in the "block" scope. this means that it is accessible
                    only within the code block it is declared in, and deeper.
                </h5>
                <h5>
                    A variable declared using the let keyword can be reassigned or redeclared with a new value.
                </h5>
                <h5>
                    When a variable declared using the let keyword is redeclared in a deeper scope is doesn't
                    affect a variable of the same name at a higher level.
                </h5>
                <div className="spaced-code middle code">
                <SyntaxHighlighter language="javascript" style={dark}>
                {`
let myString = "555-555-5555";
// Has a value of "555-555-5555"

(function someFunc() {
    let myString = "different";
    // Has a value of "different"
})();

console.log(myString);
// Outputs "555-555-5555" as the value has not been changed on the global scope 

let myString = 12;
// myString now has a value of 12, because variables declared with the let keyword
//      can be redeclared

myString = 15;
// myString now has a value of 15, because variables declared with the let keyword
//      can be reassigned

let y = 6;
for (let i = 0; i < 5; i++){
    let x = i;
    let y = i;
}
console.log(x);
// Outputs "Uncaught ReferenceError: x is not defined" because declaring a variable 
//      with let inside of a loop is block scoped
console.log(y);
// Outputs 6 becuase the y in the for loop is block scoped to the for loop, and 
//      therefore a different variable than the y in the global scope
                `}
                </SyntaxHighlighter>
                </div>
                <h4>var</h4>
                <h5>
                    The var keyword is used to declare a variable in the "function" or "global" scope, 
                    meaning that if it is declared in the root of a JavaScript file, it is accessible throughout
                    the file, and if it is declared within a function, it is accessible only within that function.
                </h5>
                <h5>
                    A variable declared using the var keyword can also be reassigned or redeclared with a new value.
                </h5>
                <div className="spaced-code middle code">
                <SyntaxHighlighter language="javascript" style={dark}>   
                {`
var myString = "something";
// Has a value of "something"

(function someFunc() {
    var myString = "different";
    // Has a value of "different"
}();

console.log(myString);
// Outputs "something" as the value is function scoped

var myString = 12;
// myString now has a value of 12, because variables declared with the var keyword
//      can be redeclared

myString = 15;
// myString now has a value of 15, because variables declared with the var keyword
//      can be reassigned

var y = 6;
for (let i = 0; i < 5; i++){
    var x = i;
    var y = i;
}
console.log(x);
// Outputs 4 because declaring a variable 
//      with var inside of a loop is globally scoped

console.log(y);
// Outputs 4 becuase the y in the for loop is globally scoped, and 
//      therefore the same variable as the y in the global scope
                `}
                </SyntaxHighlighter>
                </div>
                <h5>
                    There are many who argue that you should never use "var" and would never have to, and while
                    I do agree, I think it is still likely that you will come across it, and should understand
                    the difference.
                </h5>
                <div if="Conclusion"></div>
            </div>

            <div class="block-sample">
                <h4>
                    Conclusion
                </h4>
                <h5>
                    In conclusion, understanding scope gives us the ability to understand how to declare and 
                    name variables, and where they will be accessible.
                </h5>
            </div>
        </div>
    )
}
export default Scope;