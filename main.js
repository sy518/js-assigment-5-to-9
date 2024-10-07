// Math expressions: Familiar operators
//Q no 1

var a = 25 + 30;
alert(a)


//Q no 2
var num1 = 25;
var num2 = 5;
var sum = num1 + num2;
alert("the value of sum is : " + sum)

//Q no 3
let modulusResult = 27 % 4;
alert("the reminder of 27 divided by 4 is : " + modulusResult)

//Math expressions: Unfamiliar operators
//Q no 1
let num = 3
let nweNum = num++
alert(num)
alert("the value of newNum is : " + nweNum)

//Q no 2
let counter = 10;
counter++;
counter++;
alert("the final value of counter is : " + counter)

//Q no 3
let points = 20;
points--;
alert("the value of points-- is : " + points);
let newPoints = 20;
++newPoints;
alert(" the value of ++newPoints is : " + newPoints)

//Q no 4
let number = 0;
++number;
++number;
++number;
alert("the value of number is : " + number)

//Math expressions: Eliminating ambiguity
//Q no 1
let calculation = 20 % 6;
alert("the result of 20 % 6 is : " + calculation)

//Q no 2
let expressionValue = (6 + 2) * (5 - 3)
alert("the answer of  (6 + 2) * (5 - 3) is : " + expressionValue)

//Q no 3
let finalTotal = 10 + 5 * 4 - 8 / 2;
//Multiplication and Division: These operators have the highest precedence, so they are evaluated first.
// 5 * 4 = 20
// 8 / 2 = 4
//Addition and Subtraction: These operators have lower precedence than multiplication and division.
// They are evaluated next, from left to right.
//10 + 20 = 30
//30 - 4 = 26
//answer is 26
alert("the answer of finalTotal is : " + finalTotal)

//Q no 4
//Operator Precedence: JavaScript follows a specific order of operations, known as operator precedence. Multiplication and division have higher precedence than addition and subtraction. So, the operations within parentheses are evaluated first, followed by multiplication and division, and then addition and subtraction.

//Prompts
//Q no 1
let userName = "syed Hamza ali";
let user = prompt("What is your name?");
alert("Hello " + userName)

//Q no 2
let age = prompt("how old are you?")
if (age !== null) {

    alert("I am " + age + " year old");
} else {
    alert("No age provided")
}

//Q no 3
let pets = prompt("How many pets do you have?");
if (pets !== 20) {
    alert("You din't enter anything");
}

//Q no 4
let script = prompt("Enter a number between 1 and 10");
let userInput = Number(script);
let result = userInput * 2
alert("the result is : " + result);

//Q no 5
let favNum = prompt("What is your favorite number?");
if (favNum !== 7) {
    alert("Your favorite number is set to 7");
}

//.if statements
//Q no 1
let capital = prompt("What is the capital of France?");
if (capital.toLowerCase() === "Paris") {
    alert("Correct!");
} else {
    alert("Try again!");
}

//Q no 2
let country = prompt("What is the capital of France?");
if (country.toLowerCase() === "Paris") {
    alert("Correct!");
} else {
    alert("Incorrect, the correct answer is Paris");
}

//Q no 3
let abc = prompt("What is the capital of the United Kingdom?")
if (abc === "London" || abc === "The United Kingdom") {
    alert("Correct");
}else{
    alert("Incorrect");
}

//Q no 4
let score = 0;

let que2 = prompt("What is the capital of france?");
if (que2 === "paris"){
    alert("correct!");
    score++;
    alert("Your current score is: " + score);
}
else{
    alert("Try again!");
    alert("Your current score is: " + score);
}

let que3 = prompt("What is the capital of United Kingdom?");
if (que3 === "london"){
    alert("correct!");
    score++;
    alert("Your current score is: " + score);
}
else{
    alert("incorrect!");
    alert("Your current score is: " + score);
}

let que4 = prompt("What is the capital of pakistan?")
if (que4 === "islamabad"){
    alert("correct!");
    score++;
    alert("Your current score is: " + score);
}
else{
    alert("incorrect!");
    alert("your current score is: " + score);
}

//Q no 5 
let qNo1 = prompt("What is the capital of Germany?");
let qNo2 = prompt("What is 10 + 10?");
if (qNo1.toLowerCase === "Berlin" || qNo2 === 20) {
    alert("You got both right!");
}else{
    alert("You got one correct!");
}