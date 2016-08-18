function setCelsiusToF() {
var cel=document.getElementById("celsius")
var far=document.getElementById("fahrenheit")

var result = celsius.value * 1.8 + 32;
fahrenheit.textContext = result;
}

document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM loaded");

  // attach a click handler to the set title button
  document.getElementById("submit").addEventListener("click", function() {
    console.log("set title button clicked");
    setCelsiusToF();
  });