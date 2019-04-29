"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsThirdPartyThirdPartyKeyValuePairViewModel_1 = require("../definitions/LELodasoftCommonModelsThirdPartyThirdPartyKeyValuePairViewModel");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsThirdPartyThirdPartyCredentialsViewModelIO = io_ts_1.type({
    credentialId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    credentialType: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    vendorName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    url: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    userName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    password: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    userId: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    credentialProviderId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    thirdPartyKeyValuePairs: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsThirdPartyThirdPartyKeyValuePairViewModel_1.LELodasoftCommonModelsThirdPartyThirdPartyKeyValuePairViewModelIO)),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    insertedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateInserted: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    updatedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateUpdated: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftCommonModelsThirdPartyThirdPartyCredentialsViewModel.js.map