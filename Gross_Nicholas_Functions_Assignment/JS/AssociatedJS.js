/*
 Nicholas Gross
 Week 4
 06/24/2015
 Functions Assignment
 */



//Finding out how much gas is left in your has tank


// Welcome the user

alert("Welcome, Today we will find out how much gas is \nleft in your gas tank!");

//Find out the users name

var name=prompt("What is your name?");

//looking to see if the variable is empty

while(name==="")


    //reprompting the user

    if (name ==="") {
        name = prompt("Please do not leave blank.\nEnter your name.");
    } else if ((name)) {
        name = prompt("Please do not leave blank.\nEnter your name. ");
    }

console.log(name);

//Now we will see how much gas can be held in your tank

var fullTank=prompt("Enter the amount of gas that your tank can hold in gallons?");



//looking to see if prompt was left empty

while(fullTank==="")


    //reprompting the user

    if (fullTank ==="") {
        fullTank = prompt("Do not leave blank.\nHow much gas can your gas tank hold?");
    } else if (fullTank) {
        fullTank = prompt("Do not leave blank.\nHow much gas can your gas tank hold?");
    }

console.log(fullTank);


//Finding out how much gas in currently in there tank

var currentTank = prompt("How many gallons are left in your tank?");
console.log(currentTank);



//test prompt to see of variable is empty

while(currentTank==="" || isNaN(currentTank))

    //reprompting the user

    if (currentTank === "") {
        currentTank = prompt("Do not leave blank.\n Only use numbers and enter the amount of gas remaining in your tank");
    } else if (isNaN(currentTank)) {
        currentTank = prompt("Do not leave blank.\n Only use numbers and enter the amount of gas remaining in your tank");
    }

//Going to the gas station. How much gas would you like to put in your tank?


var fillUP = prompt("How much gas would you like to put in your gas tank?");
console.log(fillUP);


//looking to see if user left prompt empty


while(fillUP==="" || isNaN(fillUP))

    //re prompt the user

    if (fillUP === "") {
        fillUP = prompt("Do not leave blank.\n Only use numbers and enter the amount of gas you would like to put into your tank.");
    } else if (isNaN(fillUP)) {
        fillUP = prompt("Do not leave blank.\n Only use numbers and enter the amount of gas you would like to put into your tank.");
    }
..