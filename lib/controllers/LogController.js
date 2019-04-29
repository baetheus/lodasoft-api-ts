"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftApiControllersLogControllerLogModel_1 = require("../definitions/LELodasoftApiControllersLogControllerLogModel");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
exports.logController = Reader_1.asks(function (e) { return ({
    Log_Log: function (parameters) {
        var encoded = io_ts_1.partial({ body: io_ts_1.array(LELodasoftApiControllersLogControllerLogModel_1.LELodasoftApiControllersLogControllerLogModelIO) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/log/batch",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Log_LogBatchAuthed: function (parameters) {
        var encoded = io_ts_1.partial({ body: io_ts_1.array(LELodasoftApiControllersLogControllerLogModel_1.LELodasoftApiControllersLogControllerLogModelIO) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/log/batch-authed",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
}); });
//# sourceMappingURL=LogController.js.map