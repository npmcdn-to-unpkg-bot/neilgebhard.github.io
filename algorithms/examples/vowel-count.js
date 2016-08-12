function getCount(str) {
	re = /[aeiou]/gi;
	return (str.match(re) || []).length;
}