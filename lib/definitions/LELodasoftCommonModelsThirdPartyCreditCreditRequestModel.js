"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsThirdPartyCreditCreditRequestModelIO = io_ts_1.type({
    applicationId: io_ts_1.number,
    borrowerIds: io_ts_1.array(io_ts_1.number),
    pullType: io_ts_1.keyof({ Individual: null, Joint: null }),
    creditVendor: io_ts_1.keyof({ MeridianLink: null, CoreLogicCredco: null }),
    creditRequestType: io_ts_1.keyof({ Submit: null, Reissue: null, Upgrade: null }),
    experian: io_ts_1.boolean,
    equifax: io_ts_1.boolean,
    transUnion: io_ts_1.boolean,
    creditReferenceNumber: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
});
//# sourceMappingURL=LELodasoftCommonModelsThirdPartyCreditCreditRequestModel.js.map