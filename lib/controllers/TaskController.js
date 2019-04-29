"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftApiControllersTaskNoteModel_1 = require("../definitions/LELodasoftApiControllersTaskNoteModel");
var LELodasoftApiModelsBorrowerLoanDocTaskUpsertModel_1 = require("../definitions/LELodasoftApiModelsBorrowerLoanDocTaskUpsertModel");
var LELodasoftApiModelsBorrowerLoanDocTask_DashBoardView_1 = require("../definitions/LELodasoftApiModelsBorrowerLoanDocTask_DashBoardView");
var LELodasoftCommonModelsAdminTrackingViewModel_1 = require("../definitions/LELodasoftCommonModelsAdminTrackingViewModel");
var LELodasoftCommonModelsLoanLoanDocTaskViewModel_1 = require("../definitions/LELodasoftCommonModelsLoanLoanDocTaskViewModel");
var LELodasoftDataAccessDbModelsAdminLoanDocTaskModel_1 = require("../definitions/LELodasoftDataAccessDbModelsAdminLoanDocTaskModel");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
exports.taskController = Reader_1.asks(function (e) { return ({
    Task_UpsertLoanDocTask: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftApiModelsBorrowerLoanDocTaskUpsertModel_1.LELodasoftApiModelsBorrowerLoanDocTaskUpsertModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Task/UpsertLoanDocTask",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessDbModelsAdminLoanDocTaskModel_1.LELodasoftDataAccessDbModelsAdminLoanDocTaskModelIO));
    },
    Task_GetLoanDocTask: function (loanDocTaskId) {
        return e.apiClient
            .request({
            url: "/api/Task/" + encodeURIComponent(io_ts_1.number.encode(loanDocTaskId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsLoanLoanDocTaskViewModel_1.LELodasoftCommonModelsLoanLoanDocTaskViewModelIO));
    },
    Task_TrackingFile: function (loanDocTaskId) {
        return e.apiClient
            .request({
            url: "/api/Task/tracking/" + encodeURIComponent(io_ts_1.number.encode(loanDocTaskId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsAdminTrackingViewModel_1.LELodasoftCommonModelsAdminTrackingViewModelIO)));
    },
    Task_AddTaskNote: function (loandoctaskid, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftApiControllersTaskNoteModel_1.LELodasoftApiControllersTaskNoteModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Task/" + encodeURIComponent(io_ts_1.number.encode(loandoctaskid).toString()) + "/AddTaskNote",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.void));
    },
    Task_UpdateFollowUp: function (loandoctaskid, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ followup: io_ts_1.string }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Task/" + encodeURIComponent(io_ts_1.number.encode(loandoctaskid).toString()) + "/UpdateFollowUp",
            method: 'POST',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.void));
    },
    Task_UpdateFollowUpBulk: function (parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ followup: io_ts_1.string }), body: io_ts_1.array(io_ts_1.number) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Task/UpdateFollowUpBulk",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Task_SetTaskStatus: function (loandoctaskId, status) {
        return e.apiClient
            .request({
            url: "/api/Task/" + encodeURIComponent(io_ts_1.number.encode(loandoctaskId).toString()) + "/SetTaskStatus/" + encodeURIComponent(io_ts_1.string.encode(status).toString()),
            method: 'POST',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.void));
    },
    Task_SetConditionStatus: function (loandoctaskId, status) {
        return e.apiClient
            .request({
            url: "/api/Task/" + encodeURIComponent(io_ts_1.number.encode(loandoctaskId).toString()) + "/SetConditionStatus/" + encodeURIComponent(io_ts_1.number.encode(status).toString()),
            method: 'POST',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessDbModelsAdminLoanDocTaskModel_1.LELodasoftDataAccessDbModelsAdminLoanDocTaskModelIO));
    },
    Task_ChangeResponsibleMultiTasks: function (userId, parameters) {
        var encoded = io_ts_1.partial({ body: io_ts_1.array(io_ts_1.number) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Task/ChangeResponsibleMultiTasks/" + encodeURIComponent(io_ts_1.string.encode(userId).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.void));
    },
    Task_DeleteLoanDocTask: function (loandoctaskid) {
        return e.apiClient
            .request({
            url: "/api/Task/" + encodeURIComponent(io_ts_1.number.encode(loandoctaskid).toString()) + "/DeleteLoanDocTask",
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.void));
    },
    Task_DeleteMultiTasks: function (parameters) {
        var encoded = io_ts_1.partial({ body: io_ts_1.array(io_ts_1.number) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Task/DeleteMultiTasks",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.void));
    },
    Task_GetTaskDashboardViewById: function (loandoctaskid) {
        return e.apiClient
            .request({
            url: "/api/Task/" + encodeURIComponent(io_ts_1.number.encode(loandoctaskid).toString()) + "/GetTaskDashboardViewById",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftApiModelsBorrowerLoanDocTask_DashBoardView_1.LELodasoftApiModelsBorrowerLoanDocTask_DashBoardViewIO));
    },
    Task_DownloadTemplateFile: function (taskTypeId, currentUserId) {
        return e.apiClient
            .request({
            url: "/api/Task/DownloadTemplateFile/" + encodeURIComponent(io_ts_1.string.encode(taskTypeId).toString()) + "/" + encodeURIComponent(io_ts_1.string.encode(currentUserId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Task_ViewTemplateFile: function (taskTypeId, currentUserId) {
        return e.apiClient
            .request({
            url: "/api/Task/ViewTemplateFile/" + encodeURIComponent(io_ts_1.string.encode(taskTypeId).toString()) + "/" + encodeURIComponent(io_ts_1.string.encode(currentUserId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
}); });
//# sourceMappingURL=TaskController.js.map