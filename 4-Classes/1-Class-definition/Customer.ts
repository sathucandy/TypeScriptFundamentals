class Customer {
  firstName: string;
  lastName: string;

  // making a constructor
  constructor(theFirst: string, theLast: string) {
    this.firstName = theFirst;
    this.lastName = theLast;
  }
}

// lets create an instance
let myCustomer = new Customer("Martin", "Dixon");

// myCustomer.firstName = "Martin";
// myCustomer.lastName = "Dixson";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
