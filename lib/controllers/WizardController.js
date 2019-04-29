"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftApiControllersInitializeFormFreeRequest_1 = require("../definitions/LELodasoftApiControllersInitializeFormFreeRequest");
var LELodasoftApiModelsWizardModelsWizardQuestionDataViewModel_1 = require("../definitions/LELodasoftApiModelsWizardModelsWizardQuestionDataViewModel");
var LELodasoftCommonModelsConfigurationWizardDataIdViewModel_1 = require("../definitions/LELodasoftCommonModelsConfigurationWizardDataIdViewModel");
var LELodasoftCommonModelsConfigurationWizardDataViewModel_1 = require("../definitions/LELodasoftCommonModelsConfigurationWizardDataViewModel");
var LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModel_1 = require("../definitions/LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModel");
var LELodasoftCommonModelsConfigurationWizardGroupIdViewModel_1 = require("../definitions/LELodasoftCommonModelsConfigurationWizardGroupIdViewModel");
var LELodasoftCommonModelsConfigurationWizardGroupViewModel_1 = require("../definitions/LELodasoftCommonModelsConfigurationWizardGroupViewModel");
var LELodasoftCommonModelsConfigurationWizardTreeViewModel_1 = require("../definitions/LELodasoftCommonModelsConfigurationWizardTreeViewModel");
var LELodasoftCommonModelsConfigurationWizardValidViewModel_1 = require("../definitions/LELodasoftCommonModelsConfigurationWizardValidViewModel");
var LELodasoftCommonModelsConfigurationWizardWizardConfigViewModel_1 = require("../definitions/LELodasoftCommonModelsConfigurationWizardWizardConfigViewModel");
var LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel_1 = require("../definitions/LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel");
var LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponse_1 = require("../definitions/LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponse");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
exports.wizardController = Reader_1.asks(function (e) { return ({
    Wizard_GetAllWizardConfigs: function () {
        return e.apiClient
            .request({
            url: "/api/wizardconfigs",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsConfigurationWizardWizardConfigViewModel_1.LELodasoftCommonModelsConfigurationWizardWizardConfigViewModelIO)));
    },
    Wizard_UpsertWizardConfig: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsConfigurationWizardWizardConfigViewModel_1.LELodasoftCommonModelsConfigurationWizardWizardConfigViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/wizardconfigs",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsConfigurationWizardWizardConfigViewModel_1.LELodasoftCommonModelsConfigurationWizardWizardConfigViewModelIO));
    },
    Wizard_GetWizardConfigById: function (wizardConfigId) {
        return e.apiClient
            .request({
            url: "/api/wizardconfigs/" + encodeURIComponent(io_ts_1.number.encode(wizardConfigId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsConfigurationWizardWizardConfigViewModel_1.LELodasoftCommonModelsConfigurationWizardWizardConfigViewModelIO));
    },
    Wizard_DeleteWizardConfig: function (wizardConfigId) {
        return e.apiClient
            .request({
            url: "/api/wizardconfigs/" + encodeURIComponent(io_ts_1.number.encode(wizardConfigId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Wizard_GetExtractedWizardConfigById: function (wizardConfigId) {
        return e.apiClient
            .request({
            url: "/api/wizardconfigs/" + encodeURIComponent(io_ts_1.number.encode(wizardConfigId).toString()) + "/extracted",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModel_1.LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModelIO));
    },
    Wizard_UpsertExtractedWizardConfig: function (parameters) {
        var encoded = io_ts_1.partial({
            body: LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModel_1.LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/wizardconfigs/extracted",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModel_1.LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModelIO));
    },
    Wizard_GetDataIdListByWizardConfigId: function (wizardConfigId) {
        return e.apiClient
            .request({
            url: "/api/wizardconfigs/" + encodeURIComponent(io_ts_1.number.encode(wizardConfigId).toString()) + "/dataids",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsConfigurationWizardDataIdViewModel_1.LELodasoftCommonModelsConfigurationWizardDataIdViewModelIO)));
    },
    Wizard_UpsertDataIdAndDataByWizardConfigId: function (wizardConfigId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsConfigurationWizardDataIdViewModel_1.LELodasoftCommonModelsConfigurationWizardDataIdViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/wizardconfigs/" + encodeURIComponent(io_ts_1.number.encode(wizardConfigId).toString()) + "/dataids",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsConfigurationWizardDataIdViewModel_1.LELodasoftCommonModelsConfigurationWizardDataIdViewModelIO));
    },
    Wizard_GetDataIdByWizardConfigId: function (wizardConfigId, dataIdId) {
        return e.apiClient
            .request({
            url: "/api/wizardconfigs/" + encodeURIComponent(io_ts_1.number.encode(wizardConfigId).toString()) + "/dataids/" + encodeURIComponent(io_ts_1.number.encode(dataIdId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsConfigurationWizardDataIdViewModel_1.LELodasoftCommonModelsConfigurationWizardDataIdViewModelIO));
    },
    Wizard_DeleteDataIdByWizardConfigId: function (wizardConfigId, dataIdId) {
        return e.apiClient
            .request({
            url: "/api/wizardconfigs/" + encodeURIComponent(io_ts_1.number.encode(wizardConfigId).toString()) + "/dataids/" + encodeURIComponent(io_ts_1.number.encode(dataIdId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Wizard_GetDataListByWizardConfigId: function (wizardConfigId) {
        return e.apiClient
            .request({
            url: "/api/wizardconfigs/" + encodeURIComponent(io_ts_1.number.encode(wizardConfigId).toString()) + "/datas",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsConfigurationWizardDataViewModel_1.LELodasoftCommonModelsConfigurationWizardDataViewModelIO)));
    },
    Wizard_GetDataByWizardConfigId: function (wizardConfigId, dataId, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ category: io_ts_1.number }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/wizardconfigs/" + encodeURIComponent(io_ts_1.number.encode(wizardConfigId).toString()) + "/datas/" + encodeURIComponent(io_ts_1.number.encode(dataId).toString()),
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsConfigurationWizardDataViewModel_1.LELodasoftCommonModelsConfigurationWizardDataViewModelIO)));
    },
    Wizard_DeleteDataByWizardConfigId: function (wizardConfigId, dataId) {
        return e.apiClient
            .request({
            url: "/api/wizardconfigs/" + encodeURIComponent(io_ts_1.number.encode(wizardConfigId).toString()) + "/datas/" + encodeURIComponent(io_ts_1.number.encode(dataId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Wizard_GetGroupIdListByWizardConfigId: function (wizardConfigId) {
        return e.apiClient
            .request({
            url: "/api/wizardconfigs/" + encodeURIComponent(io_ts_1.number.encode(wizardConfigId).toString()) + "/groupids",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsConfigurationWizardGroupIdViewModel_1.LELodasoftCommonModelsConfigurationWizardGroupIdViewModelIO)));
    },
    Wizard_UpsertGroupIdAndGroupByWizardConfigId: function (wizardConfigId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsConfigurationWizardGroupIdViewModel_1.LELodasoftCommonModelsConfigurationWizardGroupIdViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/wizardconfigs/" + encodeURIComponent(io_ts_1.number.encode(wizardConfigId).toString()) + "/groupids",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsConfigurationWizardGroupIdViewModel_1.LELodasoftCommonModelsConfigurationWizardGroupIdViewModelIO));
    },
    Wizard_GetGroupIdByWizardConfigId: function (wizardConfigId, groupIdId) {
        return e.apiClient
            .request({
            url: "/api/wizardconfigs/" + encodeURIComponent(io_ts_1.number.encode(wizardConfigId).toString()) + "/groupids/" + encodeURIComponent(io_ts_1.number.encode(groupIdId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsConfigurationWizardGroupIdViewModel_1.LELodasoftCommonModelsConfigurationWizardGroupIdViewModelIO));
    },
    Wizard_DeleteGroupIdByWizardConfigId: function (wizardConfigId, groupIdId) {
        return e.apiClient
            .request({
            url: "/api/wizardconfigs/" + encodeURIComponent(io_ts_1.number.encode(wizardConfigId).toString()) + "/groupids/" + encodeURIComponent(io_ts_1.number.encode(groupIdId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Wizard_GetGroupListByWizardConfigId: function (wizardConfigId) {
        return e.apiClient
            .request({
            url: "/api/wizardconfigs/" + encodeURIComponent(io_ts_1.number.encode(wizardConfigId).toString()) + "/groups",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsConfigurationWizardGroupViewModel_1.LELodasoftCommonModelsConfigurationWizardGroupViewModelIO)));
    },
    Wizard_GetGroupByWizardConfigId: function (wizardConfigId, groupId) {
        return e.apiClient
            .request({
            url: "/api/wizardconfigs/" + encodeURIComponent(io_ts_1.number.encode(wizardConfigId).toString()) + "/groups/" + encodeURIComponent(io_ts_1.number.encode(groupId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsConfigurationWizardGroupViewModel_1.LELodasoftCommonModelsConfigurationWizardGroupViewModelIO));
    },
    Wizard_DeleteGroupByWizardConfigId: function (wizardConfigId, groupId) {
        return e.apiClient
            .request({
            url: "/api/wizardconfigs/" + encodeURIComponent(io_ts_1.number.encode(wizardConfigId).toString()) + "/groups/" + encodeURIComponent(io_ts_1.number.encode(groupId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Wizard_GetValidListByWizardConfigId: function (wizardConfigId) {
        return e.apiClient
            .request({
            url: "/api/wizardconfigs/" + encodeURIComponent(io_ts_1.number.encode(wizardConfigId).toString()) + "/valids",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsConfigurationWizardValidViewModel_1.LELodasoftCommonModelsConfigurationWizardValidViewModelIO)));
    },
    Wizard_GetValidByWizardConfigId: function (wizardConfigId, validId) {
        return e.apiClient
            .request({
            url: "/api/wizardconfigs/" + encodeURIComponent(io_ts_1.number.encode(wizardConfigId).toString()) + "/valids/" + encodeURIComponent(io_ts_1.number.encode(validId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsConfigurationWizardValidViewModel_1.LELodasoftCommonModelsConfigurationWizardValidViewModelIO));
    },
    Wizard_DeleteValidByWizardConfigId: function (wizardConfigId, validId) {
        return e.apiClient
            .request({
            url: "/api/wizardconfigs/" + encodeURIComponent(io_ts_1.number.encode(wizardConfigId).toString()) + "/valids/" + encodeURIComponent(io_ts_1.number.encode(validId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Wizard_GetTreeListByWizardConfigId: function (wizardConfigId) {
        return e.apiClient
            .request({
            url: "/api/wizardconfigs/" + encodeURIComponent(io_ts_1.number.encode(wizardConfigId).toString()) + "/tree",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsConfigurationWizardTreeViewModel_1.LELodasoftCommonModelsConfigurationWizardTreeViewModelIO)));
    },
    Wizard_UpsertTreeByWizardConfigId: function (wizardConfigId, parameters) {
        var encoded = io_ts_1.partial({ body: io_ts_1.array(LELodasoftCommonModelsConfigurationWizardTreeViewModel_1.LELodasoftCommonModelsConfigurationWizardTreeViewModelIO) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/wizardconfigs/" + encodeURIComponent(io_ts_1.number.encode(wizardConfigId).toString()) + "/tree",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsConfigurationWizardTreeViewModel_1.LELodasoftCommonModelsConfigurationWizardTreeViewModelIO)));
    },
    Wizard_GetAllWizardQuestions: function () {
        return e.apiClient
            .request({
            url: "/api/wizardconfigs/questions",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel_1.LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModelIO)));
    },
    Wizard_UpsertWizardQuestion: function (parameters) {
        var encoded = io_ts_1.partial({
            body: LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel_1.LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/wizardconfigs/questions",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel_1.LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModelIO));
    },
    Wizard_GetWizardQuestionById: function (questionId) {
        return e.apiClient
            .request({
            url: "/api/wizardconfigs/questions/" + encodeURIComponent(io_ts_1.number.encode(questionId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel_1.LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModelIO));
    },
    Wizard_DeleteWizardQuestion: function (questionId) {
        return e.apiClient
            .request({
            url: "/api/wizardconfigs/questions/" + encodeURIComponent(io_ts_1.number.encode(questionId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Wizard_GetWizardQuestionListByWizardConfigId: function (wizardConfigId) {
        return e.apiClient
            .request({
            url: "/api/wizardconfigs/" + encodeURIComponent(io_ts_1.number.encode(wizardConfigId).toString()) + "/questions",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel_1.LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModelIO)));
    },
    Wizard_UpsertWizardQuestionDataByWizardConfigId: function (wizardConfigId, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftApiModelsWizardModelsWizardQuestionDataViewModel_1.LELodasoftApiModelsWizardModelsWizardQuestionDataViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/wizardconfigs/" + encodeURIComponent(io_ts_1.number.encode(wizardConfigId).toString()) + "/questions",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftApiModelsWizardModelsWizardQuestionDataViewModel_1.LELodasoftApiModelsWizardModelsWizardQuestionDataViewModelIO));
    },
    Wizard_GetWizardQuestionDataById: function (wizardConfigId, questionId) {
        return e.apiClient
            .request({
            url: "/api/wizardconfigs/" + encodeURIComponent(io_ts_1.number.encode(wizardConfigId).toString()) + "/questions/" + encodeURIComponent(io_ts_1.number.encode(questionId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftApiModelsWizardModelsWizardQuestionDataViewModel_1.LELodasoftApiModelsWizardModelsWizardQuestionDataViewModelIO));
    },
    Wizard_DeleteWizardQuestionData: function (wizardConfigId, questionId) {
        return e.apiClient
            .request({
            url: "/api/wizardconfigs/" + encodeURIComponent(io_ts_1.number.encode(wizardConfigId).toString()) + "/questions/" + encodeURIComponent(io_ts_1.number.encode(questionId).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Wizard_InitializeFormFree: function (companyGuid, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftApiControllersInitializeFormFreeRequest_1.LELodasoftApiControllersInitializeFormFreeRequestIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/wizardconfigs/InitializeFormFree/" + encodeURIComponent(io_ts_1.string.encode(companyGuid).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponse_1.LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponseIO));
    },
}); });
//# sourceMappingURL=WizardController.js.map