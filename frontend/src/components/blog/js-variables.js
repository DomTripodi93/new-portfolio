import React, { useContext, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula as dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { HeaderContext } from '../../App';


const JSVariables = props => {
    const setHeader = useContext(HeaderContext);

    useEffect(()=>{
        setHeader(false);
    })


    return (

        <div className="size-holder-blog middle">
            <div class="block-sample">
                <h1 className="centered">JavaScript Variables</h1>
                <h5>
                    In this article we're going to talk about different types of variables in JavaScript.
                </h5>
            </div>
            <div class="block-sample">
                <h3>
                    Table Of Contents:
                </h3>
                <h4>
                    <a href="#String">
                        Strings
                    </a>
                </h4>
                <h4>
                    <a href="#Numbers">
                        Numbers
                    </a>
                </h4>
                <h4>
                    <a href="#Booleans">
                        Booleans
                    </a>
                </h4>
                <h4>
                    <a href="#Arrays">
                        Arrays
                    </a>
                </h4>
                <h4>
                    <a href="#Functions">
                        Functions
                    </a>
                </h4>
                <h4>
                    <a href="#Objects">
                        Objects
                    </a>
                </h4>
                <h4>
                    <a href="#Classes">
                        Classes
                    </a>
                </h4>
                <h4>
                    <a href="#Conclusion">
                        Conclusion
                    </a>
                </h4>
                <div id="String"></div>
            </div>
            <div class="block-sample">
                <h4>
                    Strings
                </h4>
                <h5>
                    Strings are an important part of any programming language. In the simplest of terms, a string is a variable
                    that holds text.
                </h5>
                <div className="spaced-code middle code">
                <SyntaxHighlighter language="javascript" style={dark}> 
                {`                
let myString = "something";
let myOtherString = "$#$^@^#$@ @#$^@ #^$@^ @#^$";
let myThirdString = "555-555-5555";
let myFourthString = "12";
let myFifthString = "false";
                `}
                </SyntaxHighlighter>
                </div>

                <h5>
                    Above you can see a few examples of declaring a string. You will notice that a string can hold any
                    kind of text, including words, symbols, and numbers.
                </h5>
                <h5>
                    Strings can be concatenated in JavaScript using the "+" operator. 
                </h5>
                <div className="spaced-code middle code">
                <SyntaxHighlighter language="javascript" style={dark}> 
                {`                
let oneString = "something";
let anotherString = "else";
let concatenatedOne = oneString + anotherString;
// concatenatedOne has a value of "somethingelse"
let concatenatedTwo = oneString + " " + anotherString;
// concatenatedTwo has a value of "something else"
                `}
                </SyntaxHighlighter>
                </div>
                <h5>
                    String concatenation can be very useful and versitile, and as you can see above, it can be used to 
                    concatenate both static and dynamic strings.
                </h5>
                <h5>
                    In JavaScript a string is an array of characters, which gives us access to a lot of valuable
                    methods of the Array type.
                </h5>
                <div className="spaced-code middle code">
                <SyntaxHighlighter language="javascript" style={dark}> 
                {`                
let myString = "something";
let stringLength = myString.length;
// stringLength will have a value of 9
let myChar = myString[3];
// myChar will have a value of "e"
                `}
                </SyntaxHighlighter>
                </div>
                <h5>
                    You may be wondering why myChar has a value of "e" and not "m", because "m" is the third character
                    in myString. This is because the index of an array starts at 0 in JavaScript, which we will talk 
                    about more in the array section.
                </h5>
                <div id="Numbers"></div>
            </div>
            <div class="block-sample">
                <h4>
                    Numbers
                </h4>
                <h5>
                    If you have worked with another programming language and you are just learning about JavaScript, you 
                    may be surprised to see the variable type "number."
                </h5>
                <h5>
                    In most other languages you have multiple types like "int", "float", and "double". 
                    In JavaScript we simply have the "number" type which can be used for any numberic value.
                </h5>
                <div className="spaced-code middle code">
                <SyntaxHighlighter language="javascript" style={dark}> 
                {`                
let myNumber = 15;
let myOtherNumber = 15.4;
let myThirdNumber = 15.235252352523;
                `}
                </SyntaxHighlighter>
                </div>
                <h5>
                    In the above example each of the declared variables are of the type number. a number variable
                    can be a whole number, or a decimal with any level of precision.
                </h5>
                <h5>
                    There are a few standard operators that can be used for mathematical operations in JavaScript.
                </h5>
                <h5>
                    + : Addition <br />
                    - : Subtraction <br />
                    * : Multiplication <br />
                    / : Division <br />
                    % : Modulus (remainder of division) <br />
                </h5>
                <div className="spaced-code middle code">
                <SyntaxHighlighter language="javascript" style={dark}> 
                {`            
let myNumber = 15 + 7;
// myNumber will have a value of 22
let mySecondNumber = myNumber - 7;
//mySecondNumber will have a value of 15
let myThirdNumber = mySecondNumber * 3;
// myThirdNumber will have a value of 45
let myFourthNumber = myThirdNumber / 15;
//myFourthNumber will have a value of 3
let myFifthNumber = 16 % myFourthNumber
//myFifthNumber will have a value of 1
                `}
                </SyntaxHighlighter>
                </div>
                <div id="Booleans"></div>
            </div>

            <div class="block-sample">
                <h4>
                    Booleans
                </h4>
                <h5>
                    Booleans are relatively simple. A boolean holds a true or false value.
                </h5>
                <div className="spaced-code middle code">
                <SyntaxHighlighter language="javascript" style={dark}> 
                {`            
let myBoolean = false;
let secondBoolean = true;
let myThirdBoolean = 7 > 5;
// myThirdBoolean has a value of true
let myFourthBoolean = 7 < 5;
// myFourthBoolean has a value of false
                `}
                </SyntaxHighlighter>
                </div>
                <div id="Arrays"></div>
            </div>

            <div class="block-sample">
                <h4>
                    Arrays
                </h4>
                <h5>
                    An array is a sequential list of values. In JavaScript, these values can be of a dynamic type.
                    This means that any given value can be of any type within a given array.
                </h5>
                <h5>
                    Values in an array are accessed by their index. The starting index is 0, and each item is an 
                    index of one more than the last.
                </h5>
                <div className="spaced-code middle code">
                <SyntaxHighlighter language="javascript" style={dark}> 
                {`            
let myArray = [
    "word",
    1,
    true,
    [
        "something",
        7,
        false
    ]
]
// myArray[0] has a value of "word"
// myArray[1] has a value of 1
// myArray[2] has a value of true
// myArray[3][0] has a value of "something"
// myArray[3][1] has a value of 7
// myArray[3][2] has a value of false
                `}
                </SyntaxHighlighter>
                </div>
                <div id="Functions"></div>
            </div>

            <div class="block-sample">
                <h4>
                    Functions
                </h4>
                <h5>
                    A function is a reusable piece of code. Functions are commonly used to hold logic that is used repetatively.
                </h5>
                <h5>
                    A function can take in arguments, and perform logical operations on those arguments to return a value.
                </h5>
                <div className="spaced-code middle code">
                <SyntaxHighlighter language="javascript" style={dark}> 
                {`            
function addValues(argOne, argTwo) {
    return argOne + argTwo;
}
// Basic JavaScript Function syntax

const valueSquared = (arg) => {
    return arg * arg;
}
// JavaScript ES6 Arrow Function syntax

addValues(5, 6);
// returns a value of 11

let myNumber = 5;

let fiveSquared = valueSquared(myNumber);
// fiveSquared has a value of 25
                `}
                </SyntaxHighlighter>
                </div>
                <div id="Objects"></div>
            </div>
            <div class="block-sample">
                <h4>
                    Objects
                </h4>
                <h5>
                    Objects in JavaScript are very versitile, and can be used like dictionaries
                    are used in other languages. An object consists of key value pairs, where the 
                    key can be referenced to return the value.
                </h5>
                <div className="spaced-code middle code">
                <SyntaxHighlighter language="javascript" style={dark}> 
                {`            
let myObject = { 
    valOne: 7, 
    valTwo: "some word", 
    valThree: [5, false, "three"],
    valFour: {
        x: 17,
        y: "words"
        z: [1, "something", true]
    },
    valFive: function() { return this.valTwo }
}

let newVar = myObject["valOne"];
// newVar has a value of 7

let secondVal = myObject.valOne;
// secondVal also has a value of 7

let returnedVal = myObject.valFive();
// returnedVal has a value of "some word"
                `}
                </SyntaxHighlighter>
                </div>
                <h5>
                    In the above example you will see that the values assigned to a key can be of any
                    type including an array, a function, or another object.
                </h5>
                <h5>
                    You also might have noticed the "this" keyword, which references a scoped object or class. 
                    In this case "this" refers to myObject. We will talk more about the "this" keyword, and 
                    scope in a future article.
                </h5>
                <div id="Classes"></div>
            </div>

            <div class="block-sample">
                <h4>
                    Classes
                </h4>
                <h5>
                    Classes in JavaScript are a template for creating objects. Classes give some basic functionality
                    to any instance of the class. An instance of a class will have a type of object, but can be related
                    back to the class using instanceof to compare the object to the class.
                </h5>
                <h5>
                    Classes in JavaScript also have a constructor that can be used to instantiate the value of variables in the class.
                </h5>
                <div className="spaced-code middle code">
                <SyntaxHighlighter language="javascript" style={dark}> 
                {`            
class myClass {
    somevVariable = 7;
    secondVariable = "words";

    constructor(val){
        this.someVariable = val;
    }

    getSomeVariable(){
        return this.someVariable
    }
}

let classObject = new myClass(12);

let secondVaraibleOut = classObject.secondVariable;
// secondVariableOut has a value of "words"

let returnedSomeVariable = classObject.getSomeVariable();
// returnedSomeVariable has a value of 12

let isAnInstanceOf = classObject instanceof myClass;
// isAnInstanceOf has a value of true
                `}
                </SyntaxHighlighter>
                </div>
                <h5>
                    You may have noticed that "getSomeVariable" in "myClass" looks and acts like a function, but was not declared 
                    using the function keyword. A function that belongs to a class does not need the function keyword and is called a method.
                </h5>
                <h5>
                    You may also have noticed the "this" keyword coming up again in both the constructory and "getSomeVariable" methods of
                    the "myClass" class. In this case "this" refers to the instance of the class where it is used, for example "classObject"
                    would be refered to by "this" in the example, when "classObject" calls a method that uses "this."
                </h5>
                <div id="Conclusion"></div>
            </div>

            <div class="block-sample">
                <h4>
                    Conclusion
                </h4>
                <h5>
                    In this article we've gone over a basic introduction to JavaScript Variables. 
                </h5>
                <h5>
                    With these basic building blocks you will be able to follow future articles that go over more advanced concepts
                    while making reference to these variable types.
                </h5>
                <h5>
                    Each of these variables have further functionality, built in methods, and capabilitied that will be discussed in future articles.
                </h5>
            </div>
        </div>
    )
}
export default JSVariables;