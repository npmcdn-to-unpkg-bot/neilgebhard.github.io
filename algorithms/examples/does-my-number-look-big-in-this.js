// A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits

function narcissistic(value) {
	var split = value.toString().split('');
	var mapped = split.map(function(num) { return Math.pow(num, split.length); });
	var reduced = mapped.reduce(function(total, num) { return total + num; }, 0);
	return value === reduced;
}