// Switch statements

// var job = 'cop';
// job = prompt("What does John do?");

// switch(job) {
//   case 'teacher':
//     console.log('John teaches kids');
//     break;
//   case 'driver':
//     console.log('John drives a cab');
//     break;
//   case 'cop':
//     console.log('John helps fight crime');
//     break;
//   default: 
//     console.log('John does something else');
// }


///////////////////////////////////////
// CODING CHALLENGE 1

/*
John and a friend invented a simple game where the player with the highest value of his height (in centimeters) plus five times his age wins (what a silly game :)

1. Create variables for the heights and ages of two friends and assign them some values
2. Calculate their scores
3. Decide who wins and print the winner to the console. Include the score in the string that you output to the console. Don't forget that there can be a draw (both players with the same score).

4. EXTRA: Add a third player and now decide who wins. Hint: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)

*/

// SOLUTION 1

/*
var john = { height: 160, age: 12 };
var friend = { height: 172, age: 10 };
var friendTwo = { height: 182, age: 10 };

var calcScore = function(person) {
  return person.height + 5 * person.age;
}

var johnScore = calcScore(john);
console.log('John score: ' + johnScore)

var friendScore = calcScore(friend);
console.log('Friend score: ' + friendScore);

var friendTwoScore = calcScore(friendTwo);
console.log('Friend Two score: ' + friendTwoScore);

if (johnScore > friendScore) {
  console.log('John Wins, score: ' + johnScore);
} else if (johnScore === friendScore) {
  console.log('It\'s a tie, scores: ' + johnScore);
} else {
  console.log('Friend Wins, score: ' + friendScore);
}

if (johnScore > friendScore && johnScore > friendTwoScore) {
  console.log('John Wins, score: ' + johnScore);
} else if (friendScore > johnScore && friendScore > friendTwoScore) {
  console.log('Friend Wins, score: ' + friendScore);
} else if (friendTwoScore > johnScore && friendTwoScore > friendScore) {
  console.log('Friend Two Wins, score: ' + friendTwoScore);
} else {
  console.log('It\'s a draw');
}

*/

///////////////////////////////////////
// CODING CHALLENGE 2

/*
1. Create an array with some years where persons were born
2. Create an empty array (just [] )
3. Use a loop to fill the array with the ages of the persons
4. Use another loop to log into the console whether each person is of full age (18 or older), as well as their age

5. Finally, create a function called printFullAge which receives the array of years as an argument, executes the steps 2., 3. and 4. and returns an array of true/false boolean values: true if the person is of full age (>= 18 years) and false if not (< 18 years)
6. Call the function with two different arrays and store the results in two variables: full_1 and full_2

Example input:  [1965, 2008, 1992]
Example output: [true, false, true]

Hint: you can use a loop not only to read from an array, like y[i], but also to set values in an array, like y[i] = ... You can also use the specific array methods.
*/

// SOLUTION 2

/*
var years = [1990, 1995, 2000, 2005, 2010];
var ages = [];

var calcAge = function(year) {
  return 2017 - year;
}

for(var i = 0; i < years.length; i++) {
  var age = calcAge(years[i]);
  ages.push(age);
}

for(var i = 0; i < years.length; i++) {
  var age = calcAge(years[i]);
  if (age >= 18) {
    console.log('Person is of full age, ' + age + ' years old');
  } else {
    console.log('Person is not yet 18');
  }
}


var calcAge = function(year) {
  return 2017 - year;
}

function printFullAge(years) {
  var ages = [];
  var result = [];
  
  for(var i = 0; i < years.length; i++) {
    var age = calcAge(years[i]);
    ages.push(age);
    // OR ages[i] = calcAge(years[i]);
  }

  for(var i = 0; i < years.length; i++) {
    var age = calcAge(years[i]);
    if (age >= 18) {
      result.push(true);
      console.log('Person is of full age, ' + age + ' years old');
    } else {
      result.push(false);
      console.log('Person is not yet 18');
    }
  }

  return result;
}

var years = [1990, 1995, 2000, 2005, 2010];
var full_1 = printFullAge(years);
console.log(full_1);
var full_2 = printFullAge([1908, 1993, 2001]);
console.log(full_2);

*/

// Hoisting with Functions

  // Function declaration

  // order of when you call functino doesnt matter because of hoisting, function declaration is already defined during creation phase and ready for use in the execution phase

calculateAge(1990);

function calculateAge(year) {
  console.log(2017 - year);
}

  // Function expression

  // Because it is a function expression (function set to var) and not declaration, the var is hoisted in creation phase as undefined, so when execution phase starts, function retirment is not yet defined when the function code is executed, so get error about retirement function not beign a function

// retirement(1990);

// var retirement = function (year) {
//   console.log(65 - (2016- year));
// }


  // to make it work, need to put function call after the function expression


// var retirementGood = function (year) {
//   console.log(65 - (2016- year));
// }

// retirementGood(1990);


// Hoistinng with variables

// variables

// console.log(age); // prints undefined because var undefined
// var age = 23; // var age declared in global execution context

// function foo() {
//     console.log(age);
//     var age = 65; // declared in execution context of the foo function, so different from outer age var, different contexts
//     console.log(age); // prints 65 
// }
// foo();
// console.log(age); // prints 23


// Lecture: Scoping


// First scoping example

// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         console.log(a + b + c);
//     }
// }

// Will print 'Hello!Hi!Hey!' because second function is inside first function so second has access to first's scope to get var b value, and both have access to global scope to get var a


// Example to show the differece between execution stack and scope chain

// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         third()
//     }
// }

// function third() {
//     var d = 'John';
//     console.log(c);
// }

// Will get error because even though the inner second function is calling third() within it, the function declaration of third function is outside of second's scope, so when it tries to log (c), c is undefined in function third's scope. third can't access var c from second scope unless it is within it. The execution stack is different from the scope chain. Function third can only access it's own scope and the global scope (which has var a)




