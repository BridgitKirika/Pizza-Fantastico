$(document).ready(function(){
  

    function flavor() {
      var selectFlavor = document.getElementById("flavor").value;
      return parseInt(selectFlavor);
    }
    function size() {
      var selectSize = document.getElementById("size").value;
      return parseInt(selectSize);
    }
    function crust() {
      var selectCrust = document.getElementById("crust").value;
      return parseInt(selectCrust);
    }
    function topping() {
      var selectTopping = document.getElementById("topping").value;
      return parseInt(selectTopping);
    }
    function number() {
      var numberOfPizzas = document.getElementById("number").value;
      return parseInt(numberOfPizzas);
    }

    function Order(flavor, size, crust, topping, number) {
      this.newFlavor = flavor;
      this.newSize = size;
      this.newCrust = crust;
      this.newTopping = topping;
      this.newNumber = number;
    }
    var userInput = new Order(flavor(), size(), crust(), topping(), number());

    var totalCost =
      (userInput.newFlavor +
        userInput.newSize +
        userInput.newCrust +
        userInput.newTopping) *
      userInput.newNumber;
      alert("Your charges for Pizza is " + + totalCost);
      alert("Your pizza will be delivered to you in an instant and thank you for choosing us");  

   $("#formgroup").submit(function(execute) {
       execute.preventDefault();

         });
  });
