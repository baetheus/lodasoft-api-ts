"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsDemoRequestDemoViewModel_1 = require("../definitions/LELodasoftCommonModelsDemoRequestDemoViewModel");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
exports.demoController = Reader_1.asks(function (e) { return ({
    Demo_RequestDemo: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsDemoRequestDemoViewModel_1.LELodasoftCommonModelsDemoRequestDemoViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/demo/request",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
}); });
//# sourceMappingURL=DemoController.js.map