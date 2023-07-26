// Variables
var dogName;
var dogWeight;

dogName = prompt("What is a good name for your mutt?");
dogWeight = prompt("How much does " + dogName + " weigh?");

function dogy(name, weight) {
	if (weight > 20) {
		console.log(dogName + " says WOOF.  I weigh " + dogWeight + " pounds which is too much!");
		console.log("function name and weight: " + name + " & " + weight);
		}	else {
		console.log(dogName + " says woof.  I'm beautiful because I only weigh " + dogWeight + " pounds!");
		console.log("function name and weight: " + name + " & " + weight);
	}
}

dogy(dogName, dogWeight);
//dogy("dogName", "100");
