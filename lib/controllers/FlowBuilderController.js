"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
var LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel_1 = require("../definitions/LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel");
var utils_1 = require("../utils/utils");
exports.flowBuilderController = Reader_1.asks(function (e) { return ({
    FlowBuilder_GetFlowsFiltered: function (parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyIdFilter: io_ts_1.number, flowTypeFilter: io_ts_1.string }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/flow-builder",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel_1.LELodasoftCommonModelsFlowBuilderFlowBuilderViewModelIO)));
    },
    FlowBuilder_InsertFlow: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel_1.LELodasoftCommonModelsFlowBuilderFlowBuilderViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/flow-builder",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel_1.LELodasoftCommonModelsFlowBuilderFlowBuilderViewModelIO));
    },
    FlowBuilder_GetFlow: function (flowId) {
        return e.apiClient
            .request({
            url: "/api/flow-builder/" + encodeURIComponent(io_ts_1.number.encode(flowId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel_1.LELodasoftCommonModelsFlowBuilderFlowBuilderViewModelIO));
    },
    FlowBuilder_UpdateFlow: function (flowId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel_1.LELodasoftCommonModelsFlowBuilderFlowBuilderViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/flow-builder/" + encodeURIComponent(io_ts_1.number.encode(flowId).toString()),
            method: 'PUT',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel_1.LELodasoftCommonModelsFlowBuilderFlowBuilderViewModelIO));
    },
    FlowBuilder_DeleteFlow: function (flowId) {
        return e.apiClient
            .request({
            url: "/api/flow-builder/" + encodeURIComponent(io_ts_1.number.encode(flowId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    FlowBuilder_GetFlowByGuid: function (flowguid) {
        return e.apiClient
            .request({
            url: "/api/flow-builder/by-guid/" + encodeURIComponent(io_ts_1.string.encode(flowguid).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel_1.LELodasoftCommonModelsFlowBuilderFlowBuilderViewModelIO));
    },
    FlowBuilder_UpdateFlowByGuid: function (flowGuid, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel_1.LELodasoftCommonModelsFlowBuilderFlowBuilderViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/flow-builder/by-guid/" + encodeURIComponent(io_ts_1.string.encode(flowGuid).toString()),
            method: 'PUT',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel_1.LELodasoftCommonModelsFlowBuilderFlowBuilderViewModelIO));
    },
    FlowBuilder_DeleteFlowByGuid: function (flowGuid) {
        return e.apiClient
            .request({
            url: "/api/flow-builder/by-guid/" + encodeURIComponent(io_ts_1.string.encode(flowGuid).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    FlowBuilder_InsertFlowByGuid: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel_1.LELodasoftCommonModelsFlowBuilderFlowBuilderViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/flow-builder/by-guid",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel_1.LELodasoftCommonModelsFlowBuilderFlowBuilderViewModelIO));
    },
}); });
//# sourceMappingURL=FlowBuilderController.js.map