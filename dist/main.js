"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greet_1 = require("./greet");
function Test(str) {
    if (!str.length) {
        console.log((0, greet_1.sayHello)('Luc'));
        return 5;
    }
    return 6;
}
