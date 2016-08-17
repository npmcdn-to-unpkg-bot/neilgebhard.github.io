// Given an array of integers, find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.

function findEvenIndex(arr) {
	function addArray(arr) { return arr.reduce(function(acc, n) { return acc + n; }, 0); }

	for (var i = 1; i < arr.length - 1; i++) {
		if (addArray(arr.slice(0, i)) === addArray(arr.slice(i + 1, arr.length))) { return i; }
	}

	return -1;
}