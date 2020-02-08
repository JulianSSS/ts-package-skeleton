"use strict";
exports.__esModule = true;
var greetingPrefix = 'Hello';
var greetingSuffix = '!';
var Greeter = /** @class */ (function () {
    function Greeter(greetedName) {
        this._greetingString = '';
        this._name = greetedName;
        this.generateGreetingString();
    }
    Object.defineProperty(Greeter.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Greeter.prototype.generateGreetingString = function () {
        this._greetingString = greetingPrefix + " " + this._name + greetingSuffix;
    };
    Greeter.prototype.greet = function (callback) {
        callback(this._greetingString);
    };
    return Greeter;
}());
exports.Greeter = Greeter;
