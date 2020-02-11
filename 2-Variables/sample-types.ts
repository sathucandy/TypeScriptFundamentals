let found: boolean = true;
let grade: number = 88.6;
let firstName: string = "Sarthak";
let lastName: string = 'Gupta';

// lets brake it , this will give us mis match exception
// found = 0;
// grade = "A";
// firstName = false;
// lastName = 3;

console.log(found);
console.log("The grade is " + grade);

console.log("Hi " + firstName + " " + lastName);

// use template strings
console.log(`Hi ${firstName} ${lastName}`);