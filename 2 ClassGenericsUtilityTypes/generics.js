"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getValue_1 = require("./getValue");
var num1 = 2;
console.log((0, getValue_1.getValue)(num1));
var str = "qwerty";
console.log((0, getValue_1.getValue)(str));
var strings = ["abc", "def", "ghi"];
console.log((0, getValue_1.getValue)(strings));
var numbers = [23, 17, 56, 84, 90];
console.log((0, getValue_1.getValue)(numbers));
