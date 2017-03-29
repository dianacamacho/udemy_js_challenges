// standalone module 1, nothing to do or commnicate with UI controller
var budgetController = (function() {

})();

// standalone module 2, nothing to do or commnicate with budget Controller

var UIController = (function() {
  
})();

// these two controllers don't know the other exists. but still need way to send info/read data from the UI and have it processed in budget conroller. to do this, can have an app controller

// modules can take arguments, since they are really just function expressions, so can pass the other two modules as arguments so the app controller knows the info from the other two

// app controller

var controller = (function(budgetCtrl, UICtrl) {

})(budgetController, UIController);