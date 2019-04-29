"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsEventsEventViewModelIO = io_ts_1.type({
    eventId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    title: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    eventType: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({ Appointment: null, EstimatedClosing: null, LockExpiration: null })),
    description: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    privilege: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({ Private: null, Public: null })),
    location: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    icon: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    className: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    allDay: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    dateCreate: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    dateStart: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    dateEnd: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    eventRepeat: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    remindBeforeMinutes: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    remindToaster: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    remindSms: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    remindEmail: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    userId: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    userName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    loginName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    applicationId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    leadId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    borrowerId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    borrowerName: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    borrowerPhone: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    displayAddress: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    readOnly: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
});
//# sourceMappingURL=LELodasoftCommonModelsEventsEventViewModel.js.map