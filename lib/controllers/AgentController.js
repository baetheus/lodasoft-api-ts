"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftApiModelsAgentAgentFull_1 = require("../definitions/LELodasoftApiModelsAgentAgentFull");
var LELodasoftApiModelsAgentReferralSourceModel_1 = require("../definitions/LELodasoftApiModelsAgentReferralSourceModel");
var LELodasoftCommonModelsAdminAgentListViewModel_1 = require("../definitions/LELodasoftCommonModelsAdminAgentListViewModel");
var LELodasoftCommonModelsAdminAgentNoteViewModel_1 = require("../definitions/LELodasoftCommonModelsAdminAgentNoteViewModel");
var LELodasoftCommonModelsAdminAgentViewModel_1 = require("../definitions/LELodasoftCommonModelsAdminAgentViewModel");
var LELodasoftCommonModelsPipelinePipelineApplicationView_1 = require("../definitions/LELodasoftCommonModelsPipelinePipelineApplicationView");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
exports.agentController = Reader_1.asks(function (e) { return ({
    Agent_GetAllAgent: function () {
        return e.apiClient
            .request({
            url: "/api/Agent/AllAgent",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsAdminAgentViewModel_1.LELodasoftCommonModelsAdminAgentViewModelIO)));
    },
    Agent_GetAllReferralSources: function () {
        return e.apiClient
            .request({
            url: "/api/Agent/AllReferralSources",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftApiModelsAgentReferralSourceModel_1.LELodasoftApiModelsAgentReferralSourceModelIO)));
    },
    Agent_GetAgentbyId: function (id) {
        return e.apiClient
            .request({
            url: "/api/Agent/GetAgent/" + encodeURIComponent(io_ts_1.number.encode(id).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftApiModelsAgentAgentFull_1.LELodasoftApiModelsAgentAgentFullIO));
    },
    Agent_UpsertAgent: function (sendInvite, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftApiModelsAgentAgentFull_1.LELodasoftApiModelsAgentAgentFullIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Agent/UpsertAgent/" + encodeURIComponent(io_ts_1.boolean.encode(sendInvite).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftApiModelsAgentAgentFull_1.LELodasoftApiModelsAgentAgentFullIO));
    },
    Agent_InviteAgent: function (agentId) {
        return e.apiClient
            .request({
            url: "/api/Agent/InviteAgent/" + encodeURIComponent(io_ts_1.number.encode(agentId).toString()),
            method: 'POST',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Agent_DeleteAgent: function (agentId) {
        return e.apiClient
            .request({
            url: "/api/Agent/DeleteAgent/" + encodeURIComponent(io_ts_1.number.encode(agentId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Agent_GetAllApplicationInfo: function (agentId) {
        return e.apiClient
            .request({
            url: "/api/Agent/" + encodeURIComponent(io_ts_1.number.encode(agentId).toString()) + "/GetAllApplicationInfo",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsPipelinePipelineApplicationView_1.LELodasoftCommonModelsPipelinePipelineApplicationViewIO)));
    },
    Agent_GetAllAgentLists: function () {
        return e.apiClient
            .request({
            url: "/api/Agent/lists",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsAdminAgentListViewModel_1.LELodasoftCommonModelsAdminAgentListViewModelIO)));
    },
    Agent_InsertAgentList: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsAdminAgentListViewModel_1.LELodasoftCommonModelsAdminAgentListViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Agent/lists",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsAdminAgentListViewModel_1.LELodasoftCommonModelsAdminAgentListViewModelIO));
    },
    Agent_GetAgentListsByAgentId: function (agentId) {
        return e.apiClient
            .request({
            url: "/api/Agent/" + encodeURIComponent(io_ts_1.number.encode(agentId).toString()) + "/lists",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsAdminAgentListViewModel_1.LELodasoftCommonModelsAdminAgentListViewModelIO)));
    },
    Agent_GetAgentListById: function (agentListId) {
        return e.apiClient
            .request({
            url: "/api/Agent/lists/" + encodeURIComponent(io_ts_1.number.encode(agentListId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsAdminAgentListViewModel_1.LELodasoftCommonModelsAdminAgentListViewModelIO));
    },
    Agent_UpdateAgentList: function (agentListId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsAdminAgentListViewModel_1.LELodasoftCommonModelsAdminAgentListViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Agent/lists/" + encodeURIComponent(io_ts_1.number.encode(agentListId).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsAdminAgentListViewModel_1.LELodasoftCommonModelsAdminAgentListViewModelIO));
    },
    Agent_DeleteAgentList: function (agentListId) {
        return e.apiClient
            .request({
            url: "/api/Agent/lists/" + encodeURIComponent(io_ts_1.number.encode(agentListId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Agent_GetAgentsByAgentListId: function (agentListId) {
        return e.apiClient
            .request({
            url: "/api/Agent/lists/" + encodeURIComponent(io_ts_1.number.encode(agentListId).toString()) + "/agents",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsAdminAgentViewModel_1.LELodasoftCommonModelsAdminAgentViewModelIO)));
    },
    Agent_AddAgentToAgentList: function (agentListId, agentId) {
        return e.apiClient
            .request({
            url: "/api/Agent/lists/" + encodeURIComponent(io_ts_1.number.encode(agentListId).toString()) + "/agents/" + encodeURIComponent(io_ts_1.number.encode(agentId).toString()),
            method: 'POST',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Agent_RemoveAgentFromAgentList: function (agentListId, agentId) {
        return e.apiClient
            .request({
            url: "/api/Agent/lists/" + encodeURIComponent(io_ts_1.number.encode(agentListId).toString()) + "/agents/" + encodeURIComponent(io_ts_1.number.encode(agentId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Agent_AddAgentNote: function (agentId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsAdminAgentNoteViewModel_1.LELodasoftCommonModelsAdminAgentNoteViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Agent/" + encodeURIComponent(io_ts_1.number.encode(agentId).toString()) + "/note",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Agent_GetAgentNotes: function (agentId) {
        return e.apiClient
            .request({
            url: "/api/Agent/" + encodeURIComponent(io_ts_1.number.encode(agentId).toString()) + "/notes",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsAdminAgentNoteViewModel_1.LELodasoftCommonModelsAdminAgentNoteViewModelIO)));
    },
}); });
//# sourceMappingURL=AgentController.js.map