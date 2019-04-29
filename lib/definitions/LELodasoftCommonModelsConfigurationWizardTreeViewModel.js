"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsConfigurationWizardDataViewModel_1 = require("../definitions/LELodasoftCommonModelsConfigurationWizardDataViewModel");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsConfigurationWizardTreeViewModelIO = io_ts_1.type({
    parentQuestionId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    parentRefId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    questionId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    questionRefId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    questionCategoryId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    questionAnswerId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    checkListItemId: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    questionText: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    answer: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    answerValue: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    answerList: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsConfigurationWizardDataViewModel_1.LELodasoftCommonModelsConfigurationWizardDataViewModelIO)),
});
//# sourceMappingURL=LELodasoftCommonModelsConfigurationWizardTreeViewModel.js.map