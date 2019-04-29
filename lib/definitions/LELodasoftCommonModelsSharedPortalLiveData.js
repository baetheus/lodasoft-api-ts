"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsSharedLiveData_1 = require("../definitions/LELodasoftCommonModelsSharedLiveData");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsSharedPortalLiveDataIO = io_ts_1.type({
    total: io_ts_types_1.createOptionFromNullable(LELodasoftCommonModelsSharedLiveData_1.LELodasoftCommonModelsSharedLiveDataIO),
    applicationTotals: io_ts_types_1.createOptionFromNullable(io_ts_1.dictionary(io_ts_1.string, LELodasoftCommonModelsSharedLiveData_1.LELodasoftCommonModelsSharedLiveDataIO)),
});
//# sourceMappingURL=LELodasoftCommonModelsSharedPortalLiveData.js.map