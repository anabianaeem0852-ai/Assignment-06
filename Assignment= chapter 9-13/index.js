// Name: [Anabia Naeem]
// Roll No: [855411]
// SMIT JS Assignment - Chapters 9--13

// Q1

var city = prompt("Enter your city name:");

if (city.toLowerCase() === "karachi") {
alert("Welcome to city of lights");
}

// Q2

var gender = prompt("Enter your gender (Male/Female):");

if (gender.toLowerCase() === "male") {
alert("Good Morning Sir.");
}

if (gender.toLowerCase() === "female") {
alert("Good Morning Ma'am.");
}

// Q3 

var signal = prompt("Enter traffic signal color: Red, Yellow, Green");

if (signal.toLowerCase() === "red") {
    alert("Must Stop");
}
else if (signal.toLowerCase() === "yellow") {
    alert("Ready to move");
}
else if (signal.toLowerCase() === "green") {
    alert("Move now");
}
else {
    alert("Wrong color");
}

// Q4

var fuel = parseFloat(prompt("Enter remaining fuel in litres:"));

if (fuel < 0.25) {
alert("Please refill the fuel in your car");
}

// Q5 (a)

var a = 4;
if (++a === 5){ 
    alert("given condition for variable a is true"); 
}

// Q5 (b)
var b = 82;
if (b++ === 83){ 
    alert("given condition for variable b is true"); 
}

// Q5 (c)
var c = 12;
if (c++ === 13){ alert("condition 1 is true"); }
if (c === 13){ alert("condition 2 is true"); }
if (++c < 14){ alert("condition 3 is true"); }
if (c === 14){ alert("condition 4 is true"); }

// Q5 (d)
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){ 
    alert("The cost equals"); 
}

// Q5 (e)
if (true){ alert("True"); }
if (false){ alert("False"); }

// Q5 (f)
if ("car" < "cat"){ alert("car is smaller than cat"); }

// Q6

var sub1 = +prompt("Enter marks of Subject 1");
var sub2 = +prompt("Enter marks of Subject 2");
var sub3 = +prompt("Enter marks of Subject 3");
var total = 300;
var obtained = sub1 + sub2 + sub3;
var per = (obtained / total) * 100;
alert("Total Marks: " + total + "\nObtained Marks: " + obtained + "\nPercentage: " + per + "%");


// Q7 

var secret = 4;
var guess = +prompt("Guess the secret number from 1 to 10");
if (guess === secret){ 
alert("Bingo! Correct answer"); 
}
else if (guess + 1 === secret){ 
alert

// Q9 

var num2 = +prompt("Enter a number");
if (num2 % 2 === 0){ 
alert(num2 + " is Even"); 
}
else{ 
alert(num2 + " is Odd"); 
}

// Q8

var num = +prompt("Q8: Enter a number to check divisible by 3:");
if(num % 3 === 0){
alert(num + " is divisible by 3");
}
else{
alert(num + " is NOT divisible by 3");
}

// Q9 

var num2 = +prompt("Enter a number");
if (num2 % 2 === 0){ 
    alert(num2 + " is Even"); 
}
else{ 
    alert(num2 + " is Odd"); 
}


// Q10 

var temp = +prompt("Enter temperature");
if (temp > 40){ 
    alert("It is too hot outside."); 
}
else if (temp > 30){ 
    alert("The Weather today is Normal."); 
}
else if (temp > 20){ 
    alert("Today's Weather is cool."); 
}
else if (temp > 10){ 
    alert("OMG! Today's weather is so Cool.");

// Q11

var num1 = +prompt("Q11: Enter first number:");
var operation = prompt("Enter operation: + , - , * , / , %");
var num2 = +prompt("Enter second number:");

var result;

if(operation === "+"){
result = num1 + num2;
}
else if(operation === "-"){
result = num1 - num2;
}
else if(operation === "*"){
result = num1 * num2;
}
else if(operation === "/"){
result = num1 / num2;
}
else if(operation === "%"){
result = num1 % num2;
}
else{
alert("Invalid Operation");
}
alert("Result: " + result);
}


alert("--- Chapter 12--13 Start ---");

// Q1: 

var ch = prompt("Ch1 Q1: Enter a character");
var code = ch.charCodeAt(0);
if (code >= 48 && code <= 57){ 
alert("It is a number"); 
}
else if (code >= 65 && code <= 90){ 
alert("It is an Uppercase Letter"); 
}
else if (code >= 97 && code <= 122){ 
alert("It is a Lowercase Letter"); 
}
else{ 
alert("Invalid Input"); 
}

// Q2:

var n1 = +prompt("Ch1 Q2: Enter first integer");
var n2 = +prompt("Ch1 Q2: Enter second integer");
if (n1 > n2){
alert("Larger number is: " + n1);
}
else if (n2 > n1){
alert("Larger number is: " + n2);
}
else{
alert("Both numbers are Equal");
}

// Q3: 

var num = +prompt("Ch1 Q3: Enter a number");
if (num > 0){
alert(num + " is Positive");
}
else if (num < 0){
alert(num + " is Negative");
}
else{
alert("The number is Zero");
}

// Q4:

var char = prompt("Ch1 Q4: Enter a character");
char = char.toLowerCase();
if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
alert("True - It is a Vowel");
}
else{
alert("False - It is a Consonant");
}

// Q5:

var correctPassword = "ana123";
var userPassword = prompt("Ch12-13 Q5: Enter your password");

if (userPassword == ""){
    alert("Please enter your password");
}
else if (userPassword == correctPassword){
    alert("Correct! The password you entered matches the original password");
}
else{
    alert("Incorrect password");
}

// Q6:

var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}

alert("Ch12-13 Q6: " + greeting);

// Q7:

var time = +prompt("Ch12-13 Q7: Enter time in 24hr format like 1900 for 7pm");

if (time >= 0000 && time < 1200){
    alert("Good morning!");
}
else if (time >= 1200 && time < 1700){
    alert("Good afternoon!");
}
else if (time >= 1700 && time < 2100){
    alert("Good evening!");
}
else if (time >= 2100 && time <= 2359){  // <-- yahan 2359 add karo
    alert("Good night!");
}
else{
    alert("Invalid Time");
}
}