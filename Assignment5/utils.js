"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.util = void 0;
var util;
(function (util) {
    function printDetails(object) {
        var result = "";
        for (var key in object) {
            //console.log(anjani1[key]);
            if (typeof object[key] === 'object') {
                result += printDetails(object[key]);
            }
            else {
                result += key + ": " + object[key] + ", ";
            }
        }
        return result;
    }
    util.printDetails = printDetails;
})(util || (exports.util = util = {}));
