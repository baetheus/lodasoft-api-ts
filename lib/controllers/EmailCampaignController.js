"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsAdminEmailCampaignViewModel_1 = require("../definitions/LELodasoftCommonModelsAdminEmailCampaignViewModel");
var LELodasoftCommonModelsAdminEmailTemplateViewModel_1 = require("../definitions/LELodasoftCommonModelsAdminEmailTemplateViewModel");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.emailCampaignController = Reader_1.asks(function (e) { return ({
    EmailCampaign_GetAllEmailCampaigns: function () {
        return e.apiClient
            .request({
            url: "/api/admin/email-campaigns/campaigns",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsAdminEmailCampaignViewModel_1.LELodasoftCommonModelsAdminEmailCampaignViewModelIO)));
    },
    EmailCampaign_InsertEmailCampaign: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsAdminEmailCampaignViewModel_1.LELodasoftCommonModelsAdminEmailCampaignViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/admin/email-campaigns/campaigns",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsAdminEmailCampaignViewModel_1.LELodasoftCommonModelsAdminEmailCampaignViewModelIO));
    },
    EmailCampaign_GetEmailCampaignById: function (emailCampaignId) {
        return e.apiClient
            .request({
            url: "/api/admin/email-campaigns/campaigns/" + encodeURIComponent(io_ts_1.number.encode(emailCampaignId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsAdminEmailCampaignViewModel_1.LELodasoftCommonModelsAdminEmailCampaignViewModelIO));
    },
    EmailCampaign_UpdateEmailCampaign: function (emailCampaignId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsAdminEmailCampaignViewModel_1.LELodasoftCommonModelsAdminEmailCampaignViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/admin/email-campaigns/campaigns/" + encodeURIComponent(io_ts_1.number.encode(emailCampaignId).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsAdminEmailCampaignViewModel_1.LELodasoftCommonModelsAdminEmailCampaignViewModelIO));
    },
    EmailCampaign_DeleteEmailCampaign: function (emailCampaignId) {
        return e.apiClient
            .request({
            url: "/api/admin/email-campaigns/campaigns/" + encodeURIComponent(io_ts_1.number.encode(emailCampaignId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    EmailCampaign_GetAllEmailTemplates: function () {
        return e.apiClient
            .request({
            url: "/api/admin/email-campaigns/templates",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsAdminEmailTemplateViewModel_1.LELodasoftCommonModelsAdminEmailTemplateViewModelIO)));
    },
    EmailCampaign_InsertEmailTemplate: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsAdminEmailTemplateViewModel_1.LELodasoftCommonModelsAdminEmailTemplateViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/admin/email-campaigns/templates",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsAdminEmailTemplateViewModel_1.LELodasoftCommonModelsAdminEmailTemplateViewModelIO));
    },
    EmailCampaign_GetAllManualEmailTemplates: function (parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ emailTemplateType: io_ts_types_1.createOptionFromNullable(io_ts_1.string) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/admin/email-campaigns/manual-templates",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsAdminEmailTemplateViewModel_1.LELodasoftCommonModelsAdminEmailTemplateViewModelIO)));
    },
    EmailCampaign_GetManualEmailTemplateById: function (emailTemplateId, parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ loanId: io_ts_types_1.createOptionFromNullable(io_ts_1.number), leadId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/admin/email-campaigns/manual-templates/" + encodeURIComponent(io_ts_1.number.encode(emailTemplateId).toString()),
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsAdminEmailTemplateViewModel_1.LELodasoftCommonModelsAdminEmailTemplateViewModelIO));
    },
    EmailCampaign_GetEmailTemplateById: function (emailTemplateId) {
        return e.apiClient
            .request({
            url: "/api/admin/email-campaigns/templates/" + encodeURIComponent(io_ts_1.number.encode(emailTemplateId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsAdminEmailTemplateViewModel_1.LELodasoftCommonModelsAdminEmailTemplateViewModelIO));
    },
    EmailCampaign_UpdateEmailTemplate: function (emailTemplateId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsAdminEmailTemplateViewModel_1.LELodasoftCommonModelsAdminEmailTemplateViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/admin/email-campaigns/templates/" + encodeURIComponent(io_ts_1.number.encode(emailTemplateId).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsAdminEmailTemplateViewModel_1.LELodasoftCommonModelsAdminEmailTemplateViewModelIO));
    },
    EmailCampaign_DeleteEmailTemplate: function (emailTemplateId) {
        return e.apiClient
            .request({
            url: "/api/admin/email-campaigns/templates/" + encodeURIComponent(io_ts_1.number.encode(emailTemplateId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
}); });
//# sourceMappingURL=EmailCampaignController.js.map