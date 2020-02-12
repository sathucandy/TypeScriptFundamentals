var Customer = /** @class */ (function () {
    // making a constructor
    function Customer(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: true,
        configurable: true
    });
    return Customer;
}());
// lets create an instance
var myCustomer = new Customer("Martin", "Dixon");
// myCustomer._firstName = "Martin";
// myCustomer._lastName = "Dixson";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
