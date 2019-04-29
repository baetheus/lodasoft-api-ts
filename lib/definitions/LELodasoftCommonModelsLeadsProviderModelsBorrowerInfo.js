"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsLeadsProviderModelsAddressInfo_1 = require("../definitions/LELodasoftCommonModelsLeadsProviderModelsAddressInfo");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsLeadsProviderModelsBorrowerInfoIO = io_ts_1.type({
    firstName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    lastName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    birthDate: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    email: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    phone: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    workPhone: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    mailingAddress: io_ts_types_1.createOptionFromNullable(LELodasoftCommonModelsLeadsProviderModelsAddressInfo_1.LELodasoftCommonModelsLeadsProviderModelsAddressInfoIO),
    creditScore: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
});
//# sourceMappingURL=LELodasoftCommonModelsLeadsProviderModelsBorrowerInfo.js.map