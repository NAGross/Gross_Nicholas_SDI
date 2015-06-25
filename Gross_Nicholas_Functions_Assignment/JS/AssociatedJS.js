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
.