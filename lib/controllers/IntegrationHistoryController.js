"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
exports.integrationHistoryController = Reader_1.asks(function (e) { return ({
    IntegrationHistory_GetDocument: function (integrationHistoryId) {
        return e.apiClient
            .request({
            url: "/api/integration-history/" + encodeURIComponent(io_ts_1.number.encode(integrationHistoryId).toString()) + "/document",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
}); });
//# sourceMappingURL=IntegrationHistoryController.js.map