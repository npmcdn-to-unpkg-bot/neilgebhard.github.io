function countBits(n) {
	var bits = (n >>> 0).toString(2);
	return bits.split('').reduce(function(acc, n) { return acc + +n; } ,0);
}