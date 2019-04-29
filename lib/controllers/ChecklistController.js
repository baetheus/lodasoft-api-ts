"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsAdminChecklistAnswerViewModel_1 = require("../definitions/LELodasoftCommonModelsAdminChecklistAnswerViewModel");
var utils_1 = require("../utils/utils");
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
exports.checklistController = Reader_1.asks(function (e) { return ({
    Checklist_GetAllByLoanForChecklist: function (checklistId, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ loanId: io_ts_1.number }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/checklist/answers/" + encodeURIComponent(io_ts_1.number.encode(checklistId).toString()),
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsAdminChecklistAnswerViewModel_1.LELodasoftCommonModelsAdminChecklistAnswerViewModelIO)));
    },
    Checklist_InsertChecklistAnswer: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsAdminChecklistAnswerViewModel_1.LELodasoftCommonModelsAdminChecklistAnswerViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/checklist/answers",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsAdminChecklistAnswerViewModel_1.LELodasoftCommonModelsAdminChecklistAnswerViewModelIO));
    },
}); });
//# sourceMappingURL=ChecklistController.js.map