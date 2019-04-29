"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftApiModelsZipcodeLookupResult_1 = require("../definitions/LELodasoftApiModelsZipcodeLookupResult");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
exports.zipcodeController = Reader_1.asks(function (e) { return ({
    Zipcode_ZipcodeLookup: function (zip) {
        return e.apiClient
            .request({
            url: "/api/Zipcode/Lookup/" + encodeURIComponent(io_ts_1.string.encode(zip).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftApiModelsZipcodeLookupResult_1.LELodasoftApiModelsZipcodeLookupResultIO)));
    },
    Zipcode_ZipcodeLookuAnonymousp: function (zip) {
        return e.apiClient
            .request({
            url: "/api/Zipcode/" + encodeURIComponent(io_ts_1.string.encode(zip).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftApiModelsZipcodeLookupResult_1.LELodasoftApiModelsZipcodeLookupResultIO)));
    },
    Zipcode_Send: function (toUserId, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ message: io_ts_1.string }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Zipcode/send/" + encodeURIComponent(io_ts_1.string.encode(toUserId).toString()),
            method: 'PUT',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
}); });
//# sourceMappingURL=ZipcodeController.js.map