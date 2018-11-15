/*
 * Hello. 2 points.
 */

function hello() {

  var op1 = document.getElementById("output1");
  op1.innerHTML = "Hello, AP Computer Science Principles!"
  ////////////////// DO NOT MODIFY
  check("hello"); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hello, Again. 3 points.
 */

function helloAgain() {

  //////////// DO NOT MODIFY
  let name; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  // Use the name variable declared above to store the user's response. You
  // do not need to re-declare it, only assign it a value.

  var op2 = document.getElementById("output2")
  name = prompt ("What is your name?")
  op2.innerHTML = ("Hello, " + name + "!")

  ///////////////////////////// DO NOT MODIFY
  check("helloAgain", name); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Celsius. 5 points.
 */

function celsius() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let cels = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  let far;
  var op3 = document.getElementById("output3")
  far = ((cels * 1.8) + 32).toFixed(2);
  op3.innerHTML = (cels + " degrees Celsius equals " + far + " degrees Fahrenheit.")

  ////////////////////////// DO NOT MODIFY
  check("celsius", cels); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Fahrenheit. 5 points.
 */

function fahrenheit() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let fahr = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  let ces;
  var op4 = document.getElementById("output4")
  ces = ((fahr - 32) / 1.8).toFixed(2);
  op4.innerHTML = (fahr + " degrees Fahrenheit equals " + ces + " degrees Celsius.")

  ///////////////////////////// DO NOT MODIFY
  check("fahrenheit", fahr); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Inches. 5 points.
 */

function inches() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of inches, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let inches = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY
  let br = "</br>"
  var op5 = document.getElementById("output5");
  let mile = Math.floor(inches / 63360);
  let yard = Math.floor(inches % 63360 / 36);
  let feet = Math.floor(inches % 63360 % 36 / 12);
  let inch = Math.floor(inches % 63360 % 36 % 12);
  op5.innerHTML = (`Miles: ${mile}${br}Yards: ${yard}${br}Feet: ${feet}${br}Inches: ${inch}`);

  ////////////////////////// DO NOT MODIFY
  check("inches", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Centimeters. 5 points.
 */

function centimeters() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of centimeters, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let centimeters = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  let br = "</br>"
  var op6 = document.getElementById("output6");
  let kilometer = Math.floor(centimeters / 100000);
  let meter = Math.floor(centimeters % 100000 / 100);
  let cent = Math.floor(centimeters % 100000 % 100);
  op6.innerHTML = (`Kilometers: ${kilometer}${br}Meters: ${meter}${br}Centimeters: ${cent}`);

  /////////////////////////////// DO NOT MODIFY
  check("centimeters", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Fluid Ounces. 5 points.
 */

function fluidOunces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of fluidOunces, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let fluidOunces = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  let br = "</br>"
  var op7 = document.getElementById("output7");
  let gallon = Math.floor(fluidOunces / 128);
  let quart = Math.floor(fluidOunces % 128 / 32);
  let pint = Math.floor(fluidOunces % 128 % 32 / 16);
  let cup = Math.floor(fluidOunces % 128 % 32 % 16 / 8);
  let oz = Math.floor(fluidOunces % 128 % 32 % 16 % 8);
  op7.innerHTML = (`Gallons: ${gallon}${br}Quarts: ${quart}${br}Pints: ${pint}${br}Cups: ${cup}${br}Fluid Ounces: ${oz}`);

  /////////////////////////////// DO NOT MODIFY
  check("fluidOunces", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Ounces. 5 points.
 */

function ounces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of ounces, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let ounces = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  let br = "</br>"
  var op8 = document.getElementById("output8");
  let ton = Math.floor(ounces / 32000);
  let lb = Math.floor(ounces % 32000 / 16);
  let oz = Math.floor(ounces % 32000 % 16);
  op8.innerHTML = (`Tons: ${ton}${br}Pounds: ${lb}${br}Ounces: ${oz}`);

  ////////////////////////// DO NOT MODIFY
  check("ounces", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Money. 7 points.
 */

function money() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of pennies, which you'll likely
  // need to do. Please do not modify the value of input.

  /////////////////////// DO NOT MODIFY
  let pennies = input; // DO NOT MODIFY
  /////////////////////// DO NOT MODIFY

  let br = "</br>"
  var op9 = document.getElementById("output9");
  let dollar = Math.floor(pennies / 100);
  let quarter = Math.floor(pennies % 100 / 25);
  let dime = Math.floor(pennies % 100 % 25 / 10);
  let nickel = Math.floor(pennies % 100 % 25 % 10 / 5);
  let penny = Math.floor(pennies % 100 % 25 % 10 % 5);
  op9.innerHTML = (`Dollars: ${dollar}${br}Quarters: ${quarter}${br}Dimes: ${dime}${br}Nickels: ${nickel}${br}Pennies: ${penny}`);

  ///////////////////////// DO NOT MODIFY
  check("money", input); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Change. 8 points.
 */

function change() {

  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative number less than 1.00."); // DO NOT MODIFY
  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of amount, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let amount = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  let br = "</br>"
  var opa1 = document.getElementById("output10");
  let quarter = Math.floor(amount * 100 / 25);
  let dime = Math.floor(amount * 100 % 25 / 10);
  let nickel = Math.floor(amount * 100 % 25 % 10 / 5);
  let penny = Math.floor(amount * 100 % 25 % 10 % 5);
  let coins = Math.floor(parseInt(quarter) + parseInt(dime) + parseInt(nickel) + parseInt(penny));
  opa1.innerHTML = (`${coins} coins.`);

  ////////////////////////// DO NOT MODIFY
  check("change", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}
