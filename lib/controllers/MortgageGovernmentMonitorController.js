"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
var LELodasoftCommonModelsMortgageGovernmentMonitorViewModel_1 = require("../definitions/LELodasoftCommonModelsMortgageGovernmentMonitorViewModel");
var utils_1 = require("../utils/utils");
exports.mortgageGovernmentMonitorController = Reader_1.asks(function (e) { return ({
    MortgageGovernmentMonitor_GetGovernmentMonitorById: function (governmentMonitorId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/governmentmonitors/" + encodeURIComponent(io_ts_1.number.encode(governmentMonitorId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageGovernmentMonitorViewModel_1.LELodasoftCommonModelsMortgageGovernmentMonitorViewModelIO));
    },
    MortgageGovernmentMonitor_UpdateGovernmentMonitor: function (governmentMonitorId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageGovernmentMonitorViewModel_1.LELodasoftCommonModelsMortgageGovernmentMonitorViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/governmentmonitors/" + encodeURIComponent(io_ts_1.number.encode(governmentMonitorId).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageGovernmentMonitorViewModel_1.LELodasoftCommonModelsMortgageGovernmentMonitorViewModelIO));
    },
    MortgageGovernmentMonitor_DeleteGovernmentMonitor: function (governmentMonitorId) {
        return e.apiClient
            .request({
            url: "/api/mortgage/governmentmonitors/" + encodeURIComponent(io_ts_1.number.encode(governmentMonitorId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    MortgageGovernmentMonitor_InsertGovernmentMonitor: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsMortgageGovernmentMonitorViewModel_1.LELodasoftCommonModelsMortgageGovernmentMonitorViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/mortgage/governmentmonitors",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsMortgageGovernmentMonitorViewModel_1.LELodasoftCommonModelsMortgageGovernmentMonitorViewModelIO));
    },
}); });
//# sourceMappingURL=MortgageGovernmentMonitorController.js.map