// Q 76:
// function parameters and return values. create a function that takes two numbers as parameters , 
//adds them together, and returns the result. show how you can call this function and log the result.
// Explain & TIP: Functions can take inputs (parameters) and give back an output (return value). 
//They're like personal assistants that do a specific task for you and report back with the results.
function addNumbers(num1, num2) {
    return num1 + num2;
}
console.log(addNumbers(5, 7));
//.............................................................................................................................
// Q 77:
// Default Parameters: Write a function that greets a user. It should take the user's name as a 
//parameter and say hello. If no name is given, it should greet an anonymous user.
//Explain & TIP: Default parameters allow your functions to have preset values for their parameters. 
//These values are used if no other value is provided, making functions more flexible.
function greetUser(name) {
    if (name === void 0) { name = "anonymous"; }
    console.log("Hello , ".concat(name, " ! "));
}
greetUser("Yousra");
greetUser();
//...........................................................................................................................
// Q 78: 
// Functioning expressions vs . function declarations : compare function expressions and declarations by creating one of
//  each that performs that same task such as squaring a number.
function squareDeclaration(number) {
    return number * number;
}
var squareExpression = function (number) {
    return number * number;
};
console.log(squareDeclaration(4));
console.log(squareExpression(4));
//.............................................................................................................................
// Q 79:
// Question 79: Creating and Accessing Object Properties: Construct an object representing a car with properties 
// for make, model, and year. Then, show how you can access the model property of the car.
var car1 = {
    make: "BMW",
    model: "M8 Competition Convertible.",
    year: 2020
};
console.log(car1.model);
console.log(car1.make);
console.log(car1.year);
console.log(Object.keys(car1).length);
//........................................................................................................................
// Q 80:
// Question 80: Updating Object Properties: Add a property named color to the existing car object, and then update the
// year property to 2021. Show how to perform these operations.
var car = {
    make: "BMW",
    model: "M8 Competition Convertible.",
    year: 2020,
    color: "black"
};
car.color = "black";
car.year = 2021;
console.log(car);
