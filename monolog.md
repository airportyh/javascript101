This is a talk for beginners, so more advanced programmers please bear with me. You are welcome to chime in if I am not explaining something clearly. It's quite possible that I won't even have to talk at all. Beginners please speak up if I am going too fast or you have a question.

Welcome to Javascript 101, if you are looking for Java 101, then you are in the wrong place.

If you followed the directions and have Firebug installed on your laptop, please pad yourself on the back. Let's get everyone's acquainted with using the Firebug console let's writing a "hello world". But let me bring it up to show you. Start Firefox, and then click on the little firebug icon. {Write the hello world program.} So, you can see that it printed "hello world" in its own line. You also, see an 'undefined' underneath it. Undefined is the default value that is returned by any statement that doesn't return any value. So you can safely ignore that for now. Through the presentation I'll be showing many code examples, all of which you can type into your Firebug and experiment. With that, I am going to start.

Javascript is the single most widely installed programming language in the world. But, it's also the world's most misunderstood programming language. By far the biggest source of confusion is name. Javascript is not Java, or is it a scripting language specific to Java, a subset of Java, or is it dependent on Java in any way.

Despite its popularity, Javascript had a bad reputation in the early days because of inconsistencies in the language and in the DOM API. The situation has gradually improved, however the bad reputation has remained. Javascript was viewed as the programming language for amateurs while Java enjoyed popularity among mainstream programmers.

This situation obscured the fact that Javascript is actually a powerful and expressive language to program in, and is superior to Java in many ways. In particular, its dynamism and higher-order functions sets it apart from other languages, which we'll talk about later.

But we are not here to compare Javascript to Java. Nope, we are not going to do that today.

What we *are* going to do is talk about Javascript the language. Let's start with numbers. Like any other programming language, Javascript can add, subtract, multiply and divide. Internally, numbers are stored as IEEE-754 floating point numbers, also known as DOUBLE. The probably with floating point numbers is that they are inexact. For example 0.1 + 0.2 does not exactly == 0.3, but is more of an approximation. You probably don't want to write a banking system using Javascript.

Booleans

Booleans have exactly two values: true and false. Booleans can be used in the conditional part of an `if` statement, as well as the `while`, `do`, and `for`-loop control structures. However, non-boolean values are also accepted in those places. Every value in Javascript is either truthy or falsy. If the conditional part of the `if` is truthy, it will execute the following block, otherwise, it won't. The `Boolean` function can tell you whether a value is truthy or falsy by returning true or false, respectively. In general, there are exactly 6 falsy values: false, 0, null, undefined, '' and NaN. Everything else is truthy.

Objects

We've talked about 3 data types so far, numbers, strings and booleans. All three of these are primitive data types. With the exception of these, and the values null and undefined, everything else is objects. The simplest object is the empty object, which can be created using the object literal notation - using a pair of curly braces, by calling the `Object` function, or using the `new` operator to instantiated an object. Objects in Javascript are simply a set of key/value pairs. In other languages these are called dictionaries, or hashmaps, or hashtables. In this object that I've created here using the literal notation has two key/value pairs, lang to javascript, and author to Brendan Eich. To access to values by key, you can use the dot notation, like so, or you can use the subscript notation, which takes a string as key. These two notations are equivalent, but while the keys that can be used in the dot notation are restricted to the set of valid identifiers, they are not restricted at all for the subscript notation.

To overwrite a value, you simply write to the key using the assignment operator; and this works for both notations as well. To augment an object, you just assign a value to a new key. This is a different approach from most other object oriented languages where in order to create a new attribute or method, you can to go modify the class of the object. In Javascript, all you do is modify the object directly. 

To iterate the key/value pairs of an object, you can use the for/in loop - a variant of the for-loop. So, you can loop through the attributes like that, and print them out nicely formatted like that. There is a `delete` statement which delete a key/value pair. After it is deleted, the property becomes undefined. That's all I want to say for now about objects. Next, let's move on to functions.

A function is created using the `function` statement, like so. This code creates a function named `f` which returns twice the value that was passed in. The `return` statement returns a value for this function back to the caller of the function. So if we call this function with the value 2, we get 4. The `return` statement is optional. If you don't return anything, then the function defaults to returning `undefined`. 

A function defines a new variable scope, which means the variables declared within the function take precedence over the ones declared on the outside, and are also not visible from the outside. A function's parameters live within its scope. {explain in more detail the example.}

Functions can be nested, in which case, we'll have nested variable scopes. {explain the example.}

Here's a gotcha for functions. If you assign a value to a variable, and forget to declare it using the `var` statement, like so, the variable will actually get assigned to the global variable scope, i.e. become a global variable. This is in most cases, undesirable, and so it's recommended that you always declare your variables.

Moving on. Functions in Javascript are higher-order functions. This means that functions can be passed as parameters to other functions, and can also be returned as values from other functions. Functions are also normal values that can be assigned to variables and invoked at a later time. Functions do not even have to have a name; we call these anonymous functions. The combination of higher-order functions and the next concept - closure - makes Javascript an extremely powerful and expressive language. 

Closure is the double rainbow of functional programming languages, of which Javascript is a proud member. In Javascript, a closure happens when an inner function outlives the execution of its parent functions. When this happens, variable scope of the parent function remains completely intact, allow the inner function to continue to access the variables there within.

I am going to show you two examples. In the first example, we have a function that takes message and prints it to the console two seconds later. We achieve this by calling the standard Javascript function `setTimeout`, which returns immediately, but will execute passed-in function after a specified number of milliseconds. Note that, by the time the inner function `print` is executed, the execution of `printLater` has already been complete, and yet the message remains intact and is printed on the screen. The variable did not get wiped away when the `printLater` function finished execution.

In example 2, we are going to create some counters. We are going to make a `newCounter` function whose job is to manufacture `counter` functions. To use this, you'd create a counter function by calling the `newCounter` function. After that, the first time you call the counter function, it returns 0, the next time, it returns 1, and will incrementing thereafter. Note that you can create two separate counter function that work independently. {talk through the code.} An interesting side-effect of this code is that once the counter function is made, it's counter variable `n` is completely hidden and inaccessible from the outside. 

Moving on. When a function is attached to an object, it is called a method. Here's an example. We created a kitty which contains a `name` attribute as well as a `talk` attribute, whose value is a function. We can call the function as a method of kitty by doing kitty.talk(). At the moment of invocation, `kitty` is bound to the `this` special variable for the duration of the execution of the `talk` function, which allows us to reference the name of the kitty.

There's a gotcha when using inner functions inside of methods, namely `this` won't necessarily be bound to same object which `this` was bound to in the parent function. {explain examples further.}
