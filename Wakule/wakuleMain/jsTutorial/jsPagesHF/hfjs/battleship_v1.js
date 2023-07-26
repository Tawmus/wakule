<!-- Variables -->
<!-- variables for the cell locations of the ship -->
var location1 = 3;
var location2 = 4;
var location3 = 5;
<!-- current guess -->
var guess;
<!-- number of hits -->
var hits = 0;
<!-- total number of guesses -->
var guesses = 0;
<!-- whether or not the ship is sunk -->
isSunk = false;

<!-- Logic -->
while (isSunk == false) {
	guess = prompt("Ready! Aim! Fire!! (enter a number from 0-6):");
	if (guess < 0 || guess > 6) {
		alert("Pick a valid number ya idiot!");
	}	else {
		guesses = guesses + 1;
	}
		if (guess == location1 || guess == location2 || guess == location3) {
			hits = (hits + 1);
			alert("You made " + hits + " hits so far.");

			if (hits == 3) {
				isSunk = true;
				alert("You sunk muh ship!!");
			}
		}	else {
				alert("You missed!");
	}}
var stats = "You took " + guesses + " guesses to sink the battleship, which means your shooting accuracy was " + ((3/guesses)*100) + "%.  ";
alert(stats + "All done now refresh the page.");
