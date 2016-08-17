// Find the length of the longest substring in the given string s that is the same in reverse

function longestPalindrome(s) {
    for (var i = s.length; i > 0; i--) {
        for (var j = 0; j < s.length - i + 1; j++) {
            var str = s.slice(j, j + i);
            if (str === str.split('').reverse().join('')) {
                return str.length;
            }
        }
    }
    return 0;
}