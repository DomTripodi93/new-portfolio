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
                    Varaible Declaration
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
                    What is Variable Declaration?
                </h4>
                <h5>
                    Variable declaration is how you create a variable. Variables are declared differently in different languages.
                    There are two main types of variable declaration, dynamic and static. You will hear languages refered to as 
                    dynamicalled typed, or statically typed. 
                </h5>
                <h5>
                    Declaring variables is an important part of programming that allows us to work with and display data.
                </h5>
                <h4>
                    Statically Typed
                </h4>
                <h5>
                    Statically typed languages require an explicitly declared variable type on declaration. 
                    The type of the variable is set differently in different languages:
                </h5>
                <h5>
                <pre className='code'>{`
//TypeScript
const variableName: string = "something";
const secondVariable: number = 7;
const trueOrFalse: boolean = false;

//C#
public string VariableName = "something";
public int SecondVariable = 7;
public Boolean TrueOrFalse = false;
                `}</pre>
                </h5>
                <h4>
                    Dynamically Typed
                </h4>
                <h5>
                    In dynamically typed languages, variable type is implicitly assumed instead of explicitly declared. When a variable is given 
                    a value, it's value determines it's type.
                </h5>
                <h5>
                <pre className='code'>{`
//JavaScript
const varaibleName;
//typeof(variableName) outputs undefined
variableName = "something";
//typeof(variableName) outputs string
variableName = 7;
//typeof(variableName) outputs number
variableName = false;
//typeof(variableName) outputs boolean

#Python
VariableName = None
#print(type(VariableName)) outputs <class 'NoneType'>
VariableName = ""
#print(type(VariableName)) outputs <class 'string'>
VariableName = 7
#print(type(VariableName)) outputs <class 'int'>
VariableName = False
#print(type(VariableName)) outputs <class 'bool'>
                `}</pre>
                </h5>
                <h5>
                    In JavaScript, as well as Python, you will notice that the same variable can be assigned a new value, and
                    as a result will take on the type of the current value.
                </h5>

                <h4>
                    Strings
                </h4>
                <h5>
                    Strings are an important part of any programming language. In the simplest of terms, a string is a variable
                    that holds words. 
                </h5>
                <h5>
                    <pre className='code'>{`                 
var myString = "something";
let myOtherString = "$#$^@^#$@ @#$^@ #^$@^ @#^$";
const myThirdString = "555-555-5555";
                    `}
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
            <pre class='code'>{`
var myString = "something";
//Has a value of "something"
(function someFunc() {
var myString = "different";
//Has a value of "different"
}();
console.log(myString);
//Outputs "different" as the value has been changed on the global scope `}
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
    let myOtherString = "different";
    //Has a value of "different"
})();
console.log(myString);
//Outputs "555-555-5555" as the value has <strong>not</strong> been changed on the global scope 
            `}</pre>
            </h5>
            <h5>

            </h5>
            </div>
        </div>
    )
}
export default JSVariables;