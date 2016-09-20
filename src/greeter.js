"use strict";
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Bonjourno, " + this.greeting + "!";
    };
    return Greeter;
}());
exports.Greeter = Greeter;
;
