// Greed is a dice game played with five six-sided dice. Score a throw according to these rules. An array with five six-sided dice values will always be given.

 // Three 1's => 1000 points
 // Three 6's =>  600 points
 // Three 5's =>  500 points
 // Three 4's =>  400 points
 // Three 3's =>  300 points
 // Three 2's =>  200 points
 // One   1   =>  100 points
 // One   5   =>   50 point

function score(dice) {
    var points = 0;
    var joined = dice.join('');
    for (var i = 1; i <= 6; i++) {
        var re = new RegExp(i, "g");
        var matched = joined.match(re);
        if (matched) {
            var triple = Math.floor(matched.length / 3);
            var singles = matched.length % 3;
            if (i === 1) {
                points += (triple * 1000) + (singles * 100);
            } else {
                points += (triple * 100 * i);
                if (i === 5) { points += singles * 50; }
            }
        }
    }
    return points;
}
