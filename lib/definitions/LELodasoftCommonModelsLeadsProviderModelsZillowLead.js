"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactDetails_1 = require("../definitions/LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactDetails");
var LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactLoanQuote_1 = require("../definitions/LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactLoanQuote");
var LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactRecipient_1 = require("../definitions/LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactRecipient");
var LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactSender_1 = require("../definitions/LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactSender");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsLeadsProviderModelsZillowLeadIO = io_ts_1.type({
    type: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({ simple: null, quote: null, longForm: null, propertyPreapproval: null })),
    id: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    created: io_ts_types_1.createOptionFromNullable(io_ts_types_1.DateFromISOString),
    source: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    price: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    conciergeStatus: io_ts_types_1.createOptionFromNullable(io_ts_1.keyof({
        Transferred: null,
        AppointmentSet: null,
        UnsupportedLanguage: null,
        EmailRequested: null,
        DoNotCall: null,
        Duplicate: null,
        LenderContacted: null,
        NotInterested: null,
        ConciergeUnsuccessful: null,
        LenderMustCall: null,
    })),
    sender: io_ts_types_1.createOptionFromNullable(LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactSender_1.LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactSenderIO),
    recipient: io_ts_types_1.createOptionFromNullable(LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactRecipient_1.LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactRecipientIO),
    details: io_ts_types_1.createOptionFromNullable(LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactDetails_1.LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactDetailsIO),
    quote: io_ts_types_1.createOptionFromNullable(LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactLoanQuote_1.LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactLoanQuoteIO),
});
//# sourceMappingURL=LELodasoftCommonModelsLeadsProviderModelsZillowLead.js.map