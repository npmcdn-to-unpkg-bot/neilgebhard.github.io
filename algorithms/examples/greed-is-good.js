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
