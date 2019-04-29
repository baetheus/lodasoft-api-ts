"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsConfigurationSendTestSmsRequestIO = io_ts_1.type({
    serviceType: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({ Twilio: null })),
    fromPhoneNumber: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    accountIdentifier: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    authToken: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    toPhoneNumber: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    message: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
});
//# sourceMappingURL=LELodasoftCommonModelsConfigurationSendTestSmsRequest.js.map