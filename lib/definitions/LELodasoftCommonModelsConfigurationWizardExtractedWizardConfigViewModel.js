"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsConfigurationWizardDataIdViewModel_1 = require("../definitions/LELodasoftCommonModelsConfigurationWizardDataIdViewModel");
var LELodasoftCommonModelsConfigurationWizardDataViewModel_1 = require("../definitions/LELodasoftCommonModelsConfigurationWizardDataViewModel");
var LELodasoftCommonModelsConfigurationWizardGroupIdViewModel_1 = require("../definitions/LELodasoftCommonModelsConfigurationWizardGroupIdViewModel");
var LELodasoftCommonModelsConfigurationWizardGroupViewModel_1 = require("../definitions/LELodasoftCommonModelsConfigurationWizardGroupViewModel");
var LELodasoftCommonModelsConfigurationWizardTreeViewModel_1 = require("../definitions/LELodasoftCommonModelsConfigurationWizardTreeViewModel");
var LELodasoftCommonModelsConfigurationWizardValidViewModel_1 = require("../definitions/LELodasoftCommonModelsConfigurationWizardValidViewModel");
var LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel_1 = require("../definitions/LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModelIO = io_ts_1.type({
    id: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    name: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    dataId: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsConfigurationWizardDataIdViewModel_1.LELodasoftCommonModelsConfigurationWizardDataIdViewModelIO)),
    data: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsConfigurationWizardDataViewModel_1.LELodasoftCommonModelsConfigurationWizardDataViewModelIO)),
    groupId: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsConfigurationWizardGroupIdViewModel_1.LELodasoftCommonModelsConfigurationWizardGroupIdViewModelIO)),
    group: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsConfigurationWizardGroupViewModel_1.LELodasoftCommonModelsConfigurationWizardGroupViewModelIO)),
    valid: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsConfigurationWizardValidViewModel_1.LELodasoftCommonModelsConfigurationWizardValidViewModelIO)),
    tree: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsConfigurationWizardTreeViewModel_1.LELodasoftCommonModelsConfigurationWizardTreeViewModelIO)),
    question: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel_1.LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModelIO)),
});
//# sourceMappingURL=LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModel.js.map