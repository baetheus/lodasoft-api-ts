"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsMortgageGovernmentMonitorViewModelIO = io_ts_1.type({
    governmentMonitorId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    borrowerId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    isFurnishInfo: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    ethnicity: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({
        AmericanIndianOrAlaskaNative: null,
        Asian: null,
        BlackOrAfricanAmerican: null,
        HispanicOrLatino: null,
        NativeHawaiianOrOtherPacificIslander: null,
        White: null,
        InformationNotProvided: null,
        NotApplicable: null,
    })),
    race: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({
        Caucasian: null,
        NonCaucasian: null,
        AmericanIndianOrAlaskaNative: null,
        Asian: null,
        BlackOrAfricanAmerican: null,
        NativeHawaiianOrOtherPacificIslander: null,
        White: null,
        InformationNotProvided: null,
        NotApplicable: null,
    })),
    sex: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({ Female: null, Male: null, InformationNotProvided: null, NotApplicable: null })),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    insertedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateInserted: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    updatedBy: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dateUpdated: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
});
//# sourceMappingURL=LELodasoftCommonModelsMortgageGovernmentMonitorViewModel.js.map