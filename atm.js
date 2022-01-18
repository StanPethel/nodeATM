"use strict";
//TODO: Import necessary values from account.js
let {pinFunction,balanceFunction}= require("./account");
let prompt = require("prompt-sync");


function getBalance() {
  console.log(balanceFunction)
  //TODO: Return the customer's acct. balance
}

function withdraw(withdrawAmount) {
   let withdrawQuestion = prompt("How much would you like to withdraw?")
   if(isNaN(withdrawQuestion)===false){
   let fullWithdrawAmount = getBalance - withdrawQuestion
   console.log (fullWithdrawAmount)}
   else{
     alert("Enter a number")
     return withdraw(withdrawAmount)
   }
  //TODO: withdraw amount from current acct. balance
  // Log the current balance after withdrawal is made
}

function deposit(depositAmount) {
  let depositQuestion= prompt("How much would you like to deposit?")
    if(isNaN(depositQuestion)===false){
      let depositAmount = withdrawAmount + depositQuestion
  console.log(depositAmount) }
    else{
      alert("Enter a number.")
     return deposit(depositAmount)
   }  
  //TODO: deposit amount to current acct. balance
  // Log the current balance after deposit is made
}

function validatePin(enteredPin) {
  let promptForPin = prompt("Enter your pin")
  if(promptForPin === pinFunction){
    console.log(getBalance)
  }
  else{
    console.log (alert("Wrong pin try again."))
    return validatePin(enteredPin)
  }

  //TODO: Check if entered pin matches account.js pin
  //Allow access to ATM if matching
  //Refulturn value should be a Boolean (true or false)
  //In English: if the PIN entered is correct, return True. Otherwise, return False.
}

//TODO: Export these functions
module.export = {
  balance: getBalance,
  takeOutMoney: withdraw,
  addMoney: deposit,
  correctPin:validatePin,
};