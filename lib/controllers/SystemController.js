"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftApiModelsSystemVersionResult_1 = require("../definitions/LELodasoftApiModelsSystemVersionResult");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
exports.systemController = Reader_1.asks(function (e) { return ({
    System_GetVersion: function () {
        return e.apiClient
            .request({
            url: "/api/System/Version",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftApiModelsSystemVersionResult_1.LELodasoftApiModelsSystemVersionResultIO));
    },
}); });
//# sourceMappingURL=SystemController.js.map