// Given an (unsigned) integer as input, return the number of bits that are equal to one in the binary representation of that number

function countBits(n) {
	var bits = (n >>> 0).toString(2);
	return bits.split('').reduce(function(acc, n) { return acc + +n; } ,0);
}