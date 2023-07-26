var bottles = 9;
while (bottles >= 0) {
	if (bottles > 1) {
		console.log(bottles + " bottles of beer on the wall,");
		console.log(bottles + " bottles of beer.  Take one down pass it around,");
		console.log(bottles + " bottles of beer on the wall.");
		} else if (bottles == 1) {
		console.log(bottles + " bottle of beer on the wall,");
		console.log(bottles + " bottle of beer.  Take one down pass it around,");
		console.log(bottles + " bottle of beer on the wall.");
			} else {
			console.log("No more bottles of beeeeeer.");
			}
		bottles = bottles - 1;
	}