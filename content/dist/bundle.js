(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayHello = void 0;
function sayHello(name) {
    return "Hello froms ".concat(name);
}
exports.sayHello = sayHello;
},{}],2:[function(require,module,exports){
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
},{"./greet":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvZ3JlZXQudHMiLCJzcmMvdHMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQ0FBLFNBQWdCLFFBQVEsQ0FBQyxJQUFZO0lBQ2pDLE9BQU8sc0JBQWUsSUFBSSxDQUFFLENBQUM7QUFDakMsQ0FBQztBQUZELDRCQUVDOzs7O0FDRkQsaUNBQW1DO0FBRW5DLFNBQVMsSUFBSSxDQUFDLEdBQVc7SUFDckIsSUFBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUU7UUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUEsZ0JBQVEsRUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxDQUFDO0tBQ1o7SUFFRCxPQUFPLENBQUMsQ0FBQztBQUNiLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgZnVuY3Rpb24gc2F5SGVsbG8obmFtZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gYEhlbGxvIGZyb21zICR7bmFtZX1gO1xyXG59IiwiaW1wb3J0IHsgc2F5SGVsbG8gfSBmcm9tICcuL2dyZWV0JztcclxuXHJcbmZ1bmN0aW9uIFRlc3Qoc3RyOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgaWYoIXN0ci5sZW5ndGgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhzYXlIZWxsbygnTHVjJykpO1xyXG4gICAgICAgIHJldHVybiA1O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gNjtcclxufSJdfQ==
