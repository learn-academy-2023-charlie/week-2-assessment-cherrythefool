# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer:
A parameter is used when initially declaring a function and expresses what to expect to be passed in. An argument is the specific data you're passing in for the parameter.

Researched answer: While parameters and arguments are both part of declaring and calling functions, they serve a different purpose. A parameter is essentially a placeholder for input values while you're declaring a function, while an argument is the value passed into that place when you call the function

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: 
Dot map can take in parameters of value, index, and array and requires value; the others are optional.

Researched answer: Dot map takes a paramater of a callback function (which is a function passed as an argument; "called back" by invoking the function it is the argument for). This callback function can then take in parameters of value, index, and array. It requires value; the others are optional.


3. What is the difference between map and filter?

Your answer: 
Map returns a new array with the same number of values of the given array and can manipulate each value as it passes it to the new array. Filter differs because it collects a subset of values from the original array, although it can still manipulate it

Researched answer: Map and Filter are both built-in array methods. The key difference is that map manipulates each piece of data from the original array and returns an array of the same length, while filter does not manipulate data but creates a subset of the original array, using a boolean (true/false) to determine whether to push given values into the subset.

1. What is iteration?

Your answer: 
Iteration is stepwise processing through a set of values, addressing one after another

Researched answer: Iteration is processing through instructions or operations until meeting a certain condition. For loops and while loops are examples of iteration, with for loops continuing according to input parameters, and while loops continuing until a condition is no longer true.

1. What is the difference between a function and a method?

Your answer: While both a function and a method store behavior, a method is a specific type of function which is itself stored as an object 

Researched answer:
Both a function and a method are storage containers for behavior. A function is standalone, while a method is stored in either an object or a class.


6. STRETCH: What is hoisting in JavaScript?

Your answer: oooh, interesting! I'm not familiar with hoisting but I'd love to do some research and get back to you.

Researched answer: It turns out I actually am familiar with hoisting but not by name. Hoisting just means that JavaScript will recognize declarations for functions and variables before they are used even if they're written after. This means that if you ask for the result of a function relying on certain variables, but declare the variables later, JavaScript will hoist the functionality to the beginning of its scope. I like to do this manually though! :D

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Component: A component is a modular piece of code. React uses components when putting together a user interface - instead of a wall of code, different "parts" of the page are separated into components like header, footer, or table of contents for example.

2. Spread operator: A spread operator lets you look at certain types of data as individual elements, like arrays or strings. They seem most useful with arrays.

3. React state: State is a variable which stores data about behavior/rendering. I think this has to do with changing variables? But I'm a bit confused about it for sure

4. React props: These are properties! This is how we can share data between React components and the parent component

5. DOM events: These are user interactions in the browser, like refreshing, clicking and typing. DOM stands for Document Object Model and is the interface for web and shows different elements kind of in a tree form structure.
