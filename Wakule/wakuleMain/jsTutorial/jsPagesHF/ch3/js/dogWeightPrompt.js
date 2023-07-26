<!-- Variables -->
<!-- variables for the cell locations of the ship -->
var dogName;
var dogWeight;

dogName = prompt("What a good name for your mutt.");
dogWeight = prompt("How much does " + dogName + " weigh");

if (dogWeight > 20) {
	console.log(dogName + " says WOOF.  I weigh too much!");
	}	else {
	console.log(dogName + " says woof.  I'm beautiful...");
	}
