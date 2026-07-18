var city = prompt("Enter your city name:");

if (city.toLowerCase() === "karachi") {
    alert("Welcome to city of lights");
}


var gender = prompt("Enter your gender (Male/Female):");

if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir.");
}
else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma'am.");
}
else {
    alert("Invalid Gender");
}


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


var fuel = parseFloat(prompt("Enter remaining fuel in litres:"));

if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}


var a = 4;

if (++a === 5) {
    alert("given condition for variable a is true");
}


var b = 82;

if (b++ === 83) {
    alert("given condition for variable b is true");
}


var c = 12;

if (c++ === 13) {
    alert("condition 1 is true");
}

if (c === 13) {
    alert("condition 2 is true");
}

if (++c < 14) {
    alert("condition 3 is true");
}

if (c === 14) {
    alert("condition 4 is true");
}
