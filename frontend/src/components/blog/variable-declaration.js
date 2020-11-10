import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula as dark } from 'react-syntax-highlighter/dist/esm/styles/prism';


const VariableDeclaration = props => {

    return (
        <div>
            <div class="block-sample">
                <h1 className="centered">Variable Declaration</h1>
                <h3>
                    In this article we're going to talk about declaring variables, and the difference between statically 
                    typed and dynamically typed programming languages.
                </h3>
            </div>
            <div class="block-sample">
                <h4>
                    Table Of Contents:
                </h4>
                <h4>
                    What is Varaible Declaration?
                </h4>
                <h4>
                    Statically Typed
                </h4>
                <h4>
                    Dynamically Typed
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
                <div className="size-holder middle">
                <SyntaxHighlighter language="typescript" style={dark}> 
                {`
//TypeScript
const variableName: string = "something";
const secondVariable: number = 7;
const trueOrFalse: boolean = false;
                `}
                </SyntaxHighlighter>
                <SyntaxHighlighter language="csharp" style={dark}> 
                {`
//C#
public string VariableName = "something";
public int SecondVariable = 7;
public Boolean TrueOrFalse = false;
                `}
                </SyntaxHighlighter>
                </div>
                
                <h4>
                    Dynamically Typed
                </h4>
                <h5>
                    In dynamically typed languages, variable type is implicitly assumed instead of explicitly declared. When a variable is given 
                    a value, it's value determines it's type.
                </h5>
                <div className="size-holder middle">
                <SyntaxHighlighter language="javascript" style={dark}>   
                {`
//JavaScript
const varaibleName;
//typeof(variableName) outputs undefined
variableName = "something";
//typeof(variableName) outputs string
variableName = 7;
//typeof(variableName) outputs number
variableName = false;
//typeof(variableName) outputs boolean
                `}
                </SyntaxHighlighter>

                <SyntaxHighlighter language="python" style={dark}>
                {`
#Python
VariableName = None
#print(type(VariableName)) outputs <class 'NoneType'>
VariableName = "something"
#print(type(VariableName)) outputs <class 'string'>
VariableName = 7
#print(type(VariableName)) outputs <class 'int'>
VariableName = False
#print(type(VariableName)) outputs <class 'bool'>
                `}
                </SyntaxHighlighter>
                </div>
                
                <h5>
                    In JavaScript, as well as Python, you will notice that the same variable can be assigned a new value, and
                    as a result will take on the type of the current value.
                </h5>

            </div>
        </div>
    )
}
export default VariableDeclaration;