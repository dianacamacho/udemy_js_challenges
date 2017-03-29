// BUDGET CONTROLLER
var budgetController = (function() {



})();


// UI CONTROLLER
var UIController = (function() {
  


})();


// GLOBAL APP CONTROLLER
// central spot for events and will delegate tasks to the other controllers

var controller = (function(budgetCtrl, UICtrl) {
  var ctrlAddItem = function() {
    // 1. Get the filed input daya

    // 2. Add the item to the budget controller

    // 3. Add the item to the UI

    // 4. Calc the budget

    // 5. Display the budget on the UI
    console.log('works');
  };

  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

  // Also want to account for keypress, not just click on the button when adding items

  // checking for keyup on global document since keypress can happen anywhere not jsut on any specific element. Browser auto passes the event object to the callback function.

  document.addEventListener('keypress', function(event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });

})(budgetController, UIController);