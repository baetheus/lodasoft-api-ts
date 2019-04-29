"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsSharedLiveDataIO = io_ts_1.type({
    applicationId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    taskCount: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    messageCount: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
});
//# sourceMappingURL=LELodasoftCommonModelsSharedLiveData.js.map