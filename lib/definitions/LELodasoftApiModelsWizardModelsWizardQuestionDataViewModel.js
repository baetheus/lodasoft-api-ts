"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsConfigurationWizardValidViewModel_1 = require("../definitions/LELodasoftCommonModelsConfigurationWizardValidViewModel");
var LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel_1 = require("../definitions/LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftApiModelsWizardModelsWizardQuestionDataViewModelIO = io_ts_1.type({
    question: io_ts_types_1.createOptionFromNullable(LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel_1.LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModelIO),
    valid: io_ts_types_1.createOptionFromNullable(LELodasoftCommonModelsConfigurationWizardValidViewModel_1.LELodasoftCommonModelsConfigurationWizardValidViewModelIO),
});
//# sourceMappingURL=LELodasoftApiModelsWizardModelsWizardQuestionDataViewModel.js.map