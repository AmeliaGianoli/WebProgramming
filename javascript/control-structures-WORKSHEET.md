# Control Structures
In Web 1 you learned about the following **control structures**:
1. IF Statements (and all of their variations)
1. While Loops
1. For Loops

Now you will explore the control structures that are listed below. 
For each one, write a brief paragraph that describes the control
structure and the situations when you would use it.
Also, include a fun and imaginative code sample that demonstrates 
the control structure.

## Switch/Case Statement
the switch/case statement functions similar to an "if/else if" but in a more concise manner;
the basic syntax is:

```js
switch () {
    case ():
        //code
        break;
    case ():
        //code
        break;
    case ():
        //code
        break;
    default:

}
```

The "( )" following each case is optional from what I can tell. The 'break' is required, otherwise it will continue through; once it finds a match, it stops evaluating (so if case 2 is a match, without the break, case 3 and the default will also run). With strategic use of the 'break' you can have multiple cases all run the same code (essentially creating an 'x' OR 'y' OR 'z' scenario);

```js
 // The most practical example I found was a video game menu, so this is my adaptation of that code:
 let menuChoice=prompt("(1)Start New Game (2)Load Game (3)Exit");
            switch(menuChoice){
                case ("1"):
                    console.log("Starting new game...");
                    break;
                case ("2"):
                    console.log("Load Saved Game...")
                    break;
                case ("3"): 
                    console.log("Exit Game");
                    break;
                default:
                    console.log("please make a valid selection");
            }
```

## For/In Loop
For...In is basically the same as object.forEach except it applies to arrays instead. It returns the key, not the value, so that needs to be used in some way (typically accessing the value using bracket notation).
Syntax:
```js
for (let key in object){
    // code using the key in some way
}
```

```js
const computerFiles = [{
    name: "MyResume.docx",
    location: "C:\\documents",
    extensaion: "docx",
    size: 2501,
}, {
    name: "FamilyPic.jpg",
    location: "C:\\desktop",
    extensaion: "jpg",
    size: 43000,
}, {
    name: "DogPic.jpg",
    location: "C:\\documents",
    extensaion: "jpg",
    size: 10002,
}, {
    name: "MyReport.docx",
    location: "C:\\documents",
    extensaion: "docx",
    size: 50004,
}
]

computerFiles.forEach((ce) => {
    for (let key in ce){
        console.log(key+" : "+ce[key])
    }
});
```

## Conditional Operator (aka Ternary Operator)
THis is a three-part way of expressing an If/Else statement in a more compact form.
Syntax:
```js
condition ? expressionIfTrue : expressionIfFalse;
```

```js
const age=prompt("What is your age?") 
const question=age>=21 ? "Care for a beer?" : "Would you like a soda?"
console.log(question)
```

