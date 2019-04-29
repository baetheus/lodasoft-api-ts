"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftApiModelsOnlineAppFeatureFlagsIO = io_ts_1.type({
    voaEnabled: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    creditPullEnabled: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    duEnabled: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    lpaEnabled: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
});
//# sourceMappingURL=LELodasoftApiModelsOnlineAppFeatureFlags.js.map