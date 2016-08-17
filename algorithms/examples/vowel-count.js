// Given a string, return the number of vowels

function getCount(str) {
	re = /[aeiou]/gi;
	return (str.match(re) || []).length;
}