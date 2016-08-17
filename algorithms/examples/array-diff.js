// Given two arrays, subtract one from the other

function array_diff(a, b) {
	return a.filter(function(x) { return b.indexOf(x) == -1; });
}