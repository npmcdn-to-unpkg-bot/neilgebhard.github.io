function narcissistic(value) {
	var split = value.toString().split('');
	var mapped = split.map(function(num) { return Math.pow(num, split.length); });
	var reduced = mapped.reduce(function(total, num) { return total + num; }, 0);
	return value === reduced;
}