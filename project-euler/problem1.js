/*problem 1: adding up the sums of all numbers divisble by 3 and 5 under 1000*/

//declare variables
var sum = 0; 

for (var i = 0; i < 1000; i++) {
	if (i%3 === 0) { //check to see if divisible by 3
		sum += i;
	}
	else if (i%5 === 0) { //check to see if divisible by 5
		sum += i; 
	}
}

console.log(sum); 