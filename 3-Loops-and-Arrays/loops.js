for (var index = 0; index < 5; index++) {
    console.log(index);
}
var total = 0;
var reviews = [5, 5, 3, 4, 2];
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
var average = total / reviews.length;
console.log(average);
var sportsOne = ["Golf", "Cricket", "Tennis"];
for (var i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
// lets used simplified for loop
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    console.log(tempSport);
}
// growable Arrays
var sportsTwo = ["hocket", "football"];
sportsTwo.push("Swimming");
sportsTwo.push("Cycling");
for (var _a = 0, sportsTwo_1 = sportsTwo; _a < sportsTwo_1.length; _a++) {
    var tempSport = sportsTwo_1[_a];
    console.log(tempSport);
}
