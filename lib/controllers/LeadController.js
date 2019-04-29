"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsLeadsLeadCampaignViewModel_1 = require("../definitions/LELodasoftCommonModelsLeadsLeadCampaignViewModel");
var LELodasoftCommonModelsLeadsLeadCreditViewModel_1 = require("../definitions/LELodasoftCommonModelsLeadsLeadCreditViewModel");
var LELodasoftCommonModelsLeadsLeadEmploymentViewModel_1 = require("../definitions/LELodasoftCommonModelsLeadsLeadEmploymentViewModel");
var LELodasoftCommonModelsLeadsLeadEventViewModel_1 = require("../definitions/LELodasoftCommonModelsLeadsLeadEventViewModel");
var LELodasoftCommonModelsLeadsLeadListViewModel_1 = require("../definitions/LELodasoftCommonModelsLeadsLeadListViewModel");
var LELodasoftCommonModelsLeadsLeadViewModel_1 = require("../definitions/LELodasoftCommonModelsLeadsLeadViewModel");
var LELodasoftCommonModelsLeadsReportsLeadMilestonesReportResponse_1 = require("../definitions/LELodasoftCommonModelsLeadsReportsLeadMilestonesReportResponse");
var LELodasoftCommonModelsLeadsReportsLeadPerformanceReportDetailResponse_1 = require("../definitions/LELodasoftCommonModelsLeadsReportsLeadPerformanceReportDetailResponse");
var LELodasoftCommonModelsLeadsReportsLeadPerformanceReportResponse_1 = require("../definitions/LELodasoftCommonModelsLeadsReportsLeadPerformanceReportResponse");
var LELodasoftCommonModelsLeadsReportsLeadStatusReportResponse_1 = require("../definitions/LELodasoftCommonModelsLeadsReportsLeadStatusReportResponse");
var LELodasoftDataAccessModelsTaskCountModel_1 = require("../definitions/LELodasoftDataAccessModelsTaskCountModel");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.leadController = Reader_1.asks(function (e) { return ({
    Lead_GetAllLeads: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({
                showArchived: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
                campaignId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
                dateInsertedStart: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
                dateInsertedEnd: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
            }),
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/leads/all",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsLeadsLeadViewModel_1.LELodasoftCommonModelsLeadsLeadViewModelIO)));
    },
    Lead_GetAllUnassignedLeads: function (parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ showArchived: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/leads/unassigned",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsLeadsLeadViewModel_1.LELodasoftCommonModelsLeadsLeadViewModelIO)));
    },
    Lead_GetLeadById: function (leadId) {
        return e.apiClient
            .request({
            url: "/api/leads/" + encodeURIComponent(io_ts_1.number.encode(leadId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsLeadsLeadViewModel_1.LELodasoftCommonModelsLeadsLeadViewModelIO));
    },
    Lead_UpdateLead: function (leadId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsLeadsLeadViewModel_1.LELodasoftCommonModelsLeadsLeadViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/leads/" + encodeURIComponent(io_ts_1.number.encode(leadId).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsLeadsLeadViewModel_1.LELodasoftCommonModelsLeadsLeadViewModelIO));
    },
    Lead_DeleteLead: function (leadId) {
        return e.apiClient
            .request({
            url: "/api/leads/" + encodeURIComponent(io_ts_1.number.encode(leadId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Lead_InsertLead: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsLeadsLeadViewModel_1.LELodasoftCommonModelsLeadsLeadViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/leads",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsLeadsLeadViewModel_1.LELodasoftCommonModelsLeadsLeadViewModelIO));
    },
    Lead_ConvertLeadToBorrower: function (leadId, referralSourceType) {
        return e.apiClient
            .request({
            url: "/api/leads/" + encodeURIComponent(io_ts_1.number.encode(leadId).toString()) + "/convert/" + encodeURIComponent(io_ts_1.number.encode(referralSourceType).toString()),
            method: 'POST',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Lead_ImportListUserForCompany: function (parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/leads/import-leads",
            method: 'POST',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsLeadsLeadViewModel_1.LELodasoftCommonModelsLeadsLeadViewModelIO));
    },
    Lead_ExportLeads: function () {
        return e.apiClient
            .request({
            url: "/api/leads/export-leads",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Lead_GetLeadEventsByLeadId: function (leadId) {
        return e.apiClient
            .request({
            url: "/api/leads/" + encodeURIComponent(io_ts_1.number.encode(leadId).toString()) + "/events",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsLeadsLeadEventViewModel_1.LELodasoftCommonModelsLeadsLeadEventViewModelIO)));
    },
    Lead_InsertLeadEvent: function (leadId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsLeadsLeadEventViewModel_1.LELodasoftCommonModelsLeadsLeadEventViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/leads/" + encodeURIComponent(io_ts_1.number.encode(leadId).toString()) + "/events",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsLeadsLeadEventViewModel_1.LELodasoftCommonModelsLeadsLeadEventViewModelIO));
    },
    Lead_GetLeadEventById: function (leadEventId) {
        return e.apiClient
            .request({
            url: "/api/leads/events/" + encodeURIComponent(io_ts_1.number.encode(leadEventId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsLeadsLeadEventViewModel_1.LELodasoftCommonModelsLeadsLeadEventViewModelIO));
    },
    Lead_UpdateLeadEvent: function (leadEventId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsLeadsLeadEventViewModel_1.LELodasoftCommonModelsLeadsLeadEventViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/leads/events/" + encodeURIComponent(io_ts_1.number.encode(leadEventId).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsLeadsLeadEventViewModel_1.LELodasoftCommonModelsLeadsLeadEventViewModelIO));
    },
    Lead_DeleteLeadEvent: function (leadEventId) {
        return e.apiClient
            .request({
            url: "/api/leads/events/" + encodeURIComponent(io_ts_1.number.encode(leadEventId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Lead_GetLeadEmploymentsByLeadId: function (leadId) {
        return e.apiClient
            .request({
            url: "/api/leads/" + encodeURIComponent(io_ts_1.number.encode(leadId).toString()) + "/employments",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsLeadsLeadEmploymentViewModel_1.LELodasoftCommonModelsLeadsLeadEmploymentViewModelIO)));
    },
    Lead_InsertLeadEmployment: function (leadId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsLeadsLeadEmploymentViewModel_1.LELodasoftCommonModelsLeadsLeadEmploymentViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/leads/" + encodeURIComponent(io_ts_1.number.encode(leadId).toString()) + "/employments",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsLeadsLeadEmploymentViewModel_1.LELodasoftCommonModelsLeadsLeadEmploymentViewModelIO));
    },
    Lead_GetLeadEmploymentById: function (leadEmploymentId) {
        return e.apiClient
            .request({
            url: "/api/leads/employments/" + encodeURIComponent(io_ts_1.number.encode(leadEmploymentId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsLeadsLeadEmploymentViewModel_1.LELodasoftCommonModelsLeadsLeadEmploymentViewModelIO));
    },
    Lead_UpdateLeadEmployment: function (leadEmploymentId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsLeadsLeadEmploymentViewModel_1.LELodasoftCommonModelsLeadsLeadEmploymentViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/leads/employments/" + encodeURIComponent(io_ts_1.number.encode(leadEmploymentId).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsLeadsLeadEmploymentViewModel_1.LELodasoftCommonModelsLeadsLeadEmploymentViewModelIO));
    },
    Lead_DeleteLeadEmployment: function (leadEmploymentId) {
        return e.apiClient
            .request({
            url: "/api/leads/employments/" + encodeURIComponent(io_ts_1.number.encode(leadEmploymentId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Lead_GetLeadCreditsByLeadId: function (leadId) {
        return e.apiClient
            .request({
            url: "/api/leads/" + encodeURIComponent(io_ts_1.number.encode(leadId).toString()) + "/credits",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsLeadsLeadCreditViewModel_1.LELodasoftCommonModelsLeadsLeadCreditViewModelIO)));
    },
    Lead_InsertLeadCredit: function (leadId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsLeadsLeadCreditViewModel_1.LELodasoftCommonModelsLeadsLeadCreditViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/leads/" + encodeURIComponent(io_ts_1.number.encode(leadId).toString()) + "/credits",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsLeadsLeadCreditViewModel_1.LELodasoftCommonModelsLeadsLeadCreditViewModelIO));
    },
    Lead_GetLeadCreditById: function (leadCreditId) {
        return e.apiClient
            .request({
            url: "/api/leads/credits/" + encodeURIComponent(io_ts_1.number.encode(leadCreditId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsLeadsLeadCreditViewModel_1.LELodasoftCommonModelsLeadsLeadCreditViewModelIO));
    },
    Lead_UpdateLeadCredit: function (leadCreditId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsLeadsLeadCreditViewModel_1.LELodasoftCommonModelsLeadsLeadCreditViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/leads/credits/" + encodeURIComponent(io_ts_1.number.encode(leadCreditId).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsLeadsLeadCreditViewModel_1.LELodasoftCommonModelsLeadsLeadCreditViewModelIO));
    },
    Lead_DeleteLeadCredit: function (leadCreditId) {
        return e.apiClient
            .request({
            url: "/api/leads/credits/" + encodeURIComponent(io_ts_1.number.encode(leadCreditId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Lead_GetAllLeadCampaigns: function () {
        return e.apiClient
            .request({
            url: "/api/leads/campaigns",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsLeadsLeadCampaignViewModel_1.LELodasoftCommonModelsLeadsLeadCampaignViewModelIO)));
    },
    Lead_InsertLeadCampaign: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsLeadsLeadCampaignViewModel_1.LELodasoftCommonModelsLeadsLeadCampaignViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/leads/campaigns",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsLeadsLeadCampaignViewModel_1.LELodasoftCommonModelsLeadsLeadCampaignViewModelIO));
    },
    Lead_GetLeadCampaignById: function (leadCampaignId) {
        return e.apiClient
            .request({
            url: "/api/leads/campaigns/" + encodeURIComponent(io_ts_1.number.encode(leadCampaignId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsLeadsLeadCampaignViewModel_1.LELodasoftCommonModelsLeadsLeadCampaignViewModelIO));
    },
    Lead_UpdateLeadCampaign: function (leadCampaignId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsLeadsLeadCampaignViewModel_1.LELodasoftCommonModelsLeadsLeadCampaignViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/leads/campaigns/" + encodeURIComponent(io_ts_1.number.encode(leadCampaignId).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsLeadsLeadCampaignViewModel_1.LELodasoftCommonModelsLeadsLeadCampaignViewModelIO));
    },
    Lead_DeleteLeadCampaign: function (leadCampaignId) {
        return e.apiClient
            .request({
            url: "/api/leads/campaigns/" + encodeURIComponent(io_ts_1.number.encode(leadCampaignId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Lead_GetAllLeadLists: function () {
        return e.apiClient
            .request({
            url: "/api/leads/lists",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsLeadsLeadListViewModel_1.LELodasoftCommonModelsLeadsLeadListViewModelIO)));
    },
    Lead_InsertLeadList: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsLeadsLeadListViewModel_1.LELodasoftCommonModelsLeadsLeadListViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/leads/lists",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsLeadsLeadListViewModel_1.LELodasoftCommonModelsLeadsLeadListViewModelIO));
    },
    Lead_GetLeadListsByLeadId: function (leadId) {
        return e.apiClient
            .request({
            url: "/api/leads/" + encodeURIComponent(io_ts_1.number.encode(leadId).toString()) + "/lists",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsLeadsLeadListViewModel_1.LELodasoftCommonModelsLeadsLeadListViewModelIO)));
    },
    Lead_GetLeadListById: function (leadListId) {
        return e.apiClient
            .request({
            url: "/api/leads/lists/" + encodeURIComponent(io_ts_1.number.encode(leadListId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsLeadsLeadListViewModel_1.LELodasoftCommonModelsLeadsLeadListViewModelIO));
    },
    Lead_UpdateLeadList: function (leadListId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsLeadsLeadListViewModel_1.LELodasoftCommonModelsLeadsLeadListViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/leads/lists/" + encodeURIComponent(io_ts_1.number.encode(leadListId).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsLeadsLeadListViewModel_1.LELodasoftCommonModelsLeadsLeadListViewModelIO));
    },
    Lead_DeleteLeadList: function (leadListId) {
        return e.apiClient
            .request({
            url: "/api/leads/lists/" + encodeURIComponent(io_ts_1.number.encode(leadListId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Lead_GetLeadsByLeadListId: function (leadListId) {
        return e.apiClient
            .request({
            url: "/api/leads/lists/" + encodeURIComponent(io_ts_1.number.encode(leadListId).toString()) + "/leads",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsLeadsLeadViewModel_1.LELodasoftCommonModelsLeadsLeadViewModelIO)));
    },
    Lead_AddLeadToLeadList: function (leadListId, leadId) {
        return e.apiClient
            .request({
            url: "/api/leads/lists/" + encodeURIComponent(io_ts_1.number.encode(leadListId).toString()) + "/leads/" + encodeURIComponent(io_ts_1.number.encode(leadId).toString()),
            method: 'POST',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Lead_RemoveLeadFromLeadList: function (leadListId, leadId) {
        return e.apiClient
            .request({
            url: "/api/leads/lists/" + encodeURIComponent(io_ts_1.number.encode(leadListId).toString()) + "/leads/" + encodeURIComponent(io_ts_1.number.encode(leadId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Lead_GetLeadMilestonesReport: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({
                campaignId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
                dateCreatedStart: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
                dateCreatedEnd: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
            }),
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/leads/reports/milestones",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsLeadsReportsLeadMilestonesReportResponse_1.LELodasoftCommonModelsLeadsReportsLeadMilestonesReportResponseIO));
    },
    Lead_GetLeadPerformanceReport: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({
                campaignId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
                dateCreatedStart: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
                dateCreatedEnd: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
            }),
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/leads/reports/performance",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsLeadsReportsLeadPerformanceReportResponse_1.LELodasoftCommonModelsLeadsReportsLeadPerformanceReportResponseIO));
    },
    Lead_GetLeadPerformanceReportDetail: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({
                campaignId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
                dateCreatedStart: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
                dateCreatedEnd: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
            }),
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/leads/reports/performance-detail",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsLeadsReportsLeadPerformanceReportDetailResponse_1.LELodasoftCommonModelsLeadsReportsLeadPerformanceReportDetailResponseIO));
    },
    Lead_GetLeadStatusReport: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({
                CampaignId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
                DateCreatedStart: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
                DateCreatedEnd: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
            }),
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/leads/reports/status",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsLeadsReportsLeadStatusReportResponse_1.LELodasoftCommonModelsLeadsReportsLeadStatusReportResponseIO));
    },
    Lead_GetTaskCountByLeadId: function (leadId) {
        return e.apiClient
            .request({
            url: "/api/leads/" + encodeURIComponent(io_ts_1.number.encode(leadId).toString()) + "/GetTaskCountByLeadId",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessModelsTaskCountModel_1.LELodasoftDataAccessModelsTaskCountModelIO));
    },
}); });
//# sourceMappingURL=LeadController.js.map