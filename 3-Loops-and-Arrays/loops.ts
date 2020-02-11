for (let index = 0; index < 5; index++) {
    console.log(index);
}

let total: number = 0;
let reviews: number[] = [5,5,3,4,2];
for (let i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];    
}
let average: number = total/reviews.length;
console.log(average);

let sportsOne: string[] = ["Golf", "Cricket", "Tennis"];
for (let i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}

// lets used simplified for loop
for (let tempSport of sportsOne) {
    console.log(tempSport);
}

// growable Arrays
let sportsTwo: string[] = ["hocket", "football"];
sportsTwo.push("Swimming");
sportsTwo.push("Cycling");

for (let tempSport of sportsTwo) {
    console.log(tempSport);
}