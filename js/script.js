// Copyright (c) 2024 hames al sharoaAll rights reserved
//
// Created by: hames al sharoa
// Created on: may 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Assignment-4/sw.js", {
    scope: "/ICS2O-Assignment-4/",
  })
}

/**
 * This function calculates the total price of the user's order.
 */
function myButtonClicked() {
  const flavour = document.getElementById("flavour").value
  const size = document.getElementById("size").value
  const TAX_RATE = 1.13
  let toppingPrice = 0
  let sizePrice = 0

  if (flavour == "sprinkles") {
    toppingPrice = 1.0
  } else if (flavour == "glazed") {
    toppingPrice = 2.0
  } else if (flavour == "jam filling") {
    toppingPrice = 1.5
  } else if (flavour == "powdered sugar") {
    toppingPrice = 1.0
  } else if (flavour == "caramel") {
    toppingPrice = 3.0
  } else {
    toppingPrice = 0
  }

  if (size == "one piece") {
    sizePrice = 1.0
  } else if (size == "six piece") {
    sizePrice = 7.0
  } else if (size == "twelve piece") {
    sizePrice = 15.0
  } else {
    sizePrice = 0
  }

  document.getElementById("title").innerHTML = "Receipt"
  document.getElementById("subtitle").innerHTML = "Item ----- Cost"
  document.getElementById("sizePicked").innerHTML =
    size + " $" + sizePrice.toFixed(2)
  document.getElementById("toppingPicked").innerHTML =
    flavour + " $" + toppingPrice.toFixed(2)
  document.getElementById("taxes").innerHTML = "Taxes %13"

  const totalPrice = (sizePrice + toppingPrice) * TAX_RATE

  document.getElementById("total").innerHTML =
    "Total " + "$" + totalPrice.toFixed(2)
  document.getElementById("thanks").innerHTML = "Thanks for purchasing!"
}