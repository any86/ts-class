"use strict";
var Tools;
(function (Tools) {
    var TIMEOUT = 100;
    var Zip = (function () {
        function Zip() {
            setTimeout(function () {
                console.log('Zip');
            }, TIMEOUT);
        }
        return Zip;
    }());
    Tools.Zip = Zip;
    var Http = (function () {
        function Http() {
            console.log('Http');
        }
        return Http;
    }());
    Tools.Http = Http;
})(Tools || (Tools = {}));
var Tools1;
(function (Tools1) {
    var TIMEOUT = 100;
    var Zip = (function () {
        function Zip() {
            setTimeout(function () {
                console.log('Zip');
            }, TIMEOUT);
        }
        return Zip;
    }());
    Tools1.Zip = Zip;
    var Http = (function () {
        function Http() {
            console.log('Http');
        }
        return Http;
    }());
    Tools1.Http = Http;
})(Tools1 || (Tools1 = {}));
//# sourceMappingURL=5.js.map