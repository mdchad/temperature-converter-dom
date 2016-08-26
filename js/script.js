function fahrenheitToCelsius( f ) {
   var c = (f - 32) * 5/9;
   c = Math.floor(c);
   console.log(c);
   return c;
}

function celsiusToFahrenheight( c ) {
   var f = (c * 9/5) + 32;
   f = Math.floor(f);
   return f;
}

window.onload = function() {
   document.getElementById("clear").onclick = clearScreen;
   document.getElementById("submit").onclick = convert;
  //  document.getElementById("toC").checked = true;
}

function clearScreen() {
   location.reload();
}

function convert() {
   var t = document.getElementById("tempInput").value;
   var tv = parseFloat(t);

  addEventListener("keypress", function() {
   if (event.keyCode == 13)
     document.getElementById("submit") = convert();
     document.getElementById("clear") = clearScreen();

});
console.log(tv);
var cT = document.getElementsByClassName('temp');
if (cT[0].checked) {
   document.getElementById("output").value = fahrenheitToCelsius(tv) + "C";
}
else if (cT[1]) {
   document.getElementById("output").value = celsiusToFahrenheight(tv) + "F";
}
return;
}
celsiusToFahrenheight(tv)
