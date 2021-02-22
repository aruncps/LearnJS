// Create variables for the welcome Message
var greeting = 'Howdy ';
var name = 'Arun';
var message = ', please check your order';

//Concatenate the three variables above to create the welcome message
var welcome = greeting + name +message;

//Concatenate variables to hold details about the sign
var sign = 'Manchester';
var tiles = sign.length;
var subTotal = tiles*5;
var shipping = 7;
var grandTotal = subTotal + shipping;

//Get the element that has an id of greeting
var el = document.getElementById('greeting');
//Replace the content of that element with the personalized welcome message
el.textContent = welcome;

// Get the element that has an id of userSign then update its contents

var elSign = document.getElementById('userSign');
elSign.textContent = sign;


// Get the element that has an id of tiles then update its contents
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

// Get the eement that has an id of subTotal then udpate its content
var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$' +  subTotal;

// Get the element that has an id of shipping then update its contents
var elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;

// Get the element that has an id of grandTotal then update its contents
var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;
