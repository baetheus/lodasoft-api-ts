"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var PathReporter_1 = require("io-ts/lib/PathReporter");
var operators_1 = require("rxjs/operators");
exports.unknownType = new (/** @class */ (function (_super) {
    __extends(UnknownType, _super);
    function UnknownType() {
        var _this = _super.call(this, 'unknownType', function (_) { return true; }, io_ts_1.success, io_ts_1.identity) || this;
        _this._tag = 'UnknownType';
        return _this;
    }
    return UnknownType;
}(io_ts_1.Type)))();
exports.throwValidation = function () {
    return operators_1.map(function (v) {
        return v.getOrElseL(function () {
            throw new Error(PathReporter_1.PathReporter.report(v).join('\n'));
        });
    });
};
exports.decodeAndMap = function (t) { return function (obs) {
    return obs.pipe(operators_1.map(t.decode), exports.throwValidation());
}; };
//# sourceMappingURL=utils.js.map