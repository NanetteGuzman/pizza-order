// Global variables
var crust = document.getElementById("crust");
var sauce = document.getElementById("sauce");
let toppings = [];

// event listener
var formButton = document.getElementById("btn");
formButton.addEventListener("click", function (event) {
  event.preventDefault();

  toppings = [];

  var topp1 = document.getElementById("topping1").value;
  var topp2 = document.getElementById("topping2").value;
  var topp3 = document.getElementById("topping3").value;

  toppings.push(topp1, topp2, topp3);

  calculateTotal(toppings);
});

function calculateTotal(toppingArray) {
  let total = 0;
  let toppingCost = 2.5;
  let baseCost = 5.5; // cost of crust and sauce
  // order string concatenation
  let orderString = crust.value + " Crust pizza with " + sauce.value;

  // For Loop
  let toppingString = "Toppings: ";
  for (var i = 0; i < toppingArray.length; i++) {
    if (toppings[i] !== "") {
      total += toppingCost;
      toppingString += toppingArray[i] + " ";
    }
  }
  // total = baseCost + cost of all toppings
  total += baseCost;

  // use DOM: = orderString
  document.getElementById("pizzaOrder").innerHTML = orderString;
  document.getElementById("toppings").innerHTML = toppingString;
  document.getElementById("total").innerHTML = "$" + total.toFixed(2);
}
