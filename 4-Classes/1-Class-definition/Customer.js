var Customer = /** @class */ (function () {
    // making a constructor
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
// lets create an instance
var myCustomer = new Customer("Martin", "Dixon");
// myCustomer.firstName = "Martin";
// myCustomer.lastName = "Dixson";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
