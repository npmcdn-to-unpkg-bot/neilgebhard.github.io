// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

function digital_root(n) {
	if (n < 10) { return n; };
	return digital_root(n.toString().split('').reduce(function(acc, n) { return acc + +n; }, 0));
}