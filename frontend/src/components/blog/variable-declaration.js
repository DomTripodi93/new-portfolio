import React, { useContext, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula as dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { HeaderContext } from '../../App';

const VariableDeclaration = props => {
    const setHeader = useContext(HeaderContext);

    useEffect(()=>{
        setHeader(false);
    })

    return (
        <div className="size-holder-blog middle">
            <div class="block-sample">
                <h1 className="centered">Variable Declaration</h1>
                <h5>
                    In this article we're going to talk about declaring variables, and the difference between statically 
                    typed and dynamically typed programming languages.
                </h5>
            </div>
            <div class="block-sample">
                <h3>
                    Table Of Contents:
                </h3>
                <h4>
                    <a href="#StaticVDynamic">
                        What is Varaible Declaration?
                    </a>
                </h4>
                <h4>
                    <a href="#What">
                        What is Varaible Declaration?
                    </a>
                </h4>
                <h4>
                    <a href="#Static">
                        Statically Typed
                    </a>
                </h4>
                <h4>
                    <a href="#Dynamic">
                        Dynamically Typed
                    </a>
                </h4>
                <h4>
                    <a href="#Conclusion">
                        Conclusion
                    </a>
                </h4>
                <div id="StaticVDynamic"></div>
            </div>
            <div class="block-sample">
                <h3>
                    What do Static and Dynamic mean?
                </h3>
                <h4>
                    Static
                </h4>
                <h5>
                    Static means unchanging or fixed, so something static is something that is always the same. 
                </h5>
                <h5>
                    In the case of programming languages, "static" refers to variable types. When a variable 
                    is declared in a statically typed programming language, it is assigned a type and that 
                    type cannot be changed.
                </h5>
                <h5>
                    When I think of static, I think of something that doesn't move like a wall, or a sidewalk. 
                </h5>
                <h4>
                    Dynamic
                </h4>
                <h5>
                    Dynamic means flexible, so something dynamic is able to change and fit the needs of a 
                    given situation
                </h5>
                <h5>
                    In the case of programming languages, "dynamic" also refers to variable types. When a variable 
                    is declared in a dynamically typed programming language, it's value implicitly decides it's type.
                    In some dynamic programming lanugages like Python and JavaScript, the same variable can be
                    reassigned or redeclared with a value of a different type, which also changes the variable type.
                </h5>
                <h5>
                    When I think of dynamic, I think of something that can grow or change into something else, like 
                    clay or a caterpillar. 
                </h5>
                <div id="What"></div>
            </div>
            <div class="block-sample">
                <h4>
                    What is Variable Declaration?
                </h4>
                <h5>
                    Variable declaration is how you create a variable. Variable declaration varies in different programming languages.
                    The two main types of variable declaration are dynamic and static. 
                </h5>
                <h5>
                    You will hear languages refered to as dynamicalled typed, or statically typed based on the way type is declared and
                    enforced in a given language. 
                </h5>
                <h5>
                    In the examples below we will show how variables are declared in two statically typed languages, 
                    as well as two dynamically typed languages to show this difference. 
                </h5>
                <div id="Static"></div>
            </div>
            <div class="block-sample">
                <h4>
                    Statically Typed
                </h4>
                <h5>
                    Statically typed languages require an explicitly declared variable type on declaration. The type of
                    the variable being declared must accompany the variable name to define it.
                </h5>
                <div className="spaced-code middle code">
                <SyntaxHighlighter language="typescript" style={dark}> 
                {`
//TypeScript
const firstVariable: string = "something";
const secondVariable: number = 7;
const thirdVariable: number = 7.0;
const trueOrFalse: boolean = false;
                `}
                </SyntaxHighlighter>
                </div>
                <div className="spaced-code middle code">
                <SyntaxHighlighter language="csharp" style={dark}> 
                {`
//C#
public string FirstVariable = "something";
public int SecondVariable = 7;
public float ThirdVariable = 7.0;
public bool TrueOrFalse = false;
                `}
                </SyntaxHighlighter>
                </div>
                <h5>
                    You will notice in the above two examples, that different variable types can be named and declared
                    differently in different languages.
                </h5>
                <div id="Dynamic"></div>
            </div>
            <div class="block-sample">
                <h4>
                    Dynamically Typed
                </h4>
                <h5>
                    In dynamically typed languages, variable type is implicitly assumed instead of explicitly declared. When a variable is given 
                    a value, it's value determines it's type.
                </h5>
                <div className="spaced-code middle code">
                <SyntaxHighlighter language="javascript" style={dark}>   
                {`
//JavaScript
let variableName;
//typeof(variableName) outputs "undefined"
variableName = "something";
//typeof(variableName) outputs "string"
variableName = 7;
//typeof(variableName) outputs "number"
variableName = 7.0;
//typeof(variableName) outputs "number"
variableName = false;
//typeof(variableName) outputs "boolean"
                `}
                </SyntaxHighlighter>

                </div>
                <div className="spaced-code middle code">
                <SyntaxHighlighter language="python" style={dark}>
                {`
#Python
VariableName = None
#print(type(VariableName)) outputs <class 'NoneType'>
VariableName = "something"
#print(type(VariableName)) outputs <class 'string'>
VariableName = 7
#print(type(VariableName)) outputs <class 'int'>
VariableName = 7.0
#print(type(VariableName)) outputs <class 'float'>
VariableName = False
#print(type(VariableName)) outputs <class 'bool'>
                `}
                </SyntaxHighlighter>
                </div>
                <h5>
                    In JavaScript, as well as Python, you will notice that the same variable can be assigned a new value, and
                    as a result will take on the type of the current value. 
                </h5>
                <h5>
                    
                    You will also notice that the "number" type in JavaScript
                    encompasses both int and float types.
                </h5>
                <div id="Conclusion"></div>
            </div>
            <div class="block-sample">
                <h4>
                    Conclusion
                </h4>
                <h5>
                    In conclusion we can see that Statically Typed languages require explicit variable type
                    declaration, and do not allow type to change on a given variable.
                </h5>
                <h5>
                    Conversely, Dynamically Typed languages do not require any type declaration as the type of a
                    variable is implicitly defined, and in some situations a variable's type will change based 
                    on it's current value.
                </h5>
            </div>
        </div>
    )
}
export default VariableDeclaration;