  // custom js here -----------------------------------------------------------
$(window).ready(function(){
// creating a click event on the order button
$('#order').click(function () {
  updateDetails();
});

// Variables
var lessThanFifteen = ['1 x Fries', '1 x Hash Brown', '1 x Free sauce'];
var lessThanTwenty = ['1 x Burger', '1 x Drink', '1 x Icecream'];
var moreThanTwenty = ['1 x Burger', '2 x Drinks', '2 x Icecreams', '1 x Carwash Ticket'];

// CLick event ENDS
function updateDetails() {

// Vanilla .js for the rest of my code
var getCustName = document.getElementById('customerName');
console.dir(getCustName.value);

// grab the persons same and log it to the order details
var getCustDetails = document.getElementById('custNameDetails');
getCustDetails.textContent = getCustName.value;
// Grab the buger type and log it to the order form

var getBurger = document.getElementById('burger').value;
console.log(getBurger);

// creating an array of strings and slitting the array so we can ge the price as a new string. it separates the $ and the numbers
var getBurgerArr = getBurger.split('$');
console.log(getBurgerArr[1]);

var getTotal = document.getElementById('total');
console.log(getTotal);

getTotal.textContent = getBurgerArr[1];
var getBurgerDetails = document.getElementById('burgerDetails');
burgerDetails.textContent = document.getElementById('burger').value;

// Grab the Drink type and log it to the order form
var getDrink = document.getElementById('drink').value;
console.log(getDrink);

// creating an array of strings and slitting the array so we can ge the price as a new string. it separates the $ and the numbers
var getDrinkArr = getDrink.split('$');
console.log(getDrinkArr[1]);
console.log(parseFloat(getBurgerArr[1]) + parseFloat(getDrinkArr[1]));

var getTotal = document.getElementById('total');

var getDrinkDetails = document.getElementById('drinkDetails');

drinkDetails.textContent = document.getElementById('drink').value;

getTotal.textContent = (parseFloat(getBurgerArr[1]) + parseFloat(getDrinkArr[1]));

};
});
