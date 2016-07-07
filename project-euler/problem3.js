//problem 3
/*The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ? */

//NOTE: my code will just list all the prime factors, and from there you can deduct which one is the largest prime factor. 

/***************************************************************/

var array = []; 
var isPrime = function(num) {
	var x = 2;

	if (num === 2) {
		return true;
	}

	while (x < num) {
		if (num%x === 0) {
			return false;
		}
		x++;
	}

	return true;
};

var listPrimes = function(userChoice) {
	for (var i = 3; i < userChoice; i++) {
		if (userChoice%i === 0) {
			if(isPrime(i)) {
				array.push(i); 
			}
		}
		
	}
};

listPrimes(13195); 
console.log(array);

