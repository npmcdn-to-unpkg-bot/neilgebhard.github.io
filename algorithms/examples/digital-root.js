function digital_root(n) {
	if (n < 10) { return n; };
	return digital_root(n.toString().split('').reduce(function(acc, n) { return acc + +n; }, 0));
}