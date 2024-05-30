"use strict";
//FIRST
Object.defineProperty(exports, "__esModule", { value: true });
var anjani = { name: "anjani", motherName: "abc", fatherName: "xyz", DOB: "01-01-2003" };
function printDetails(person) {
    var result = "";
    var value;
    for (var key in person) {
        value = person[key];
        if (result != "") {
            result += ", ";
        }
        result += "".concat(key, ": ").concat(value);
        // result+=key+": "+person1[key];
    }
    return result;
}
console.log(printDetails(anjani));
//THIRD
var utils_1 = require("./utils");
var anjani1 = { name: "anjani", motherName: "abc", fatherName: "xyz", DOB: "01-01-2003", age: 20, address: { city: "Hyderabad", state: "Telangana", pincode: 50001 } };
console.log(utils_1.util.printDetails(anjani1).slice(0, -2));
