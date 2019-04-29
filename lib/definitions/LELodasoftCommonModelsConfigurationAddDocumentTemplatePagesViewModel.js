"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsConfigurationDocumentTemplatePageViewModel_1 = require("../definitions/LELodasoftCommonModelsConfigurationDocumentTemplatePageViewModel");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftCommonModelsConfigurationAddDocumentTemplatePagesViewModelIO = io_ts_1.type({
    pages: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsConfigurationDocumentTemplatePageViewModel_1.LELodasoftCommonModelsConfigurationDocumentTemplatePageViewModelIO)),
});
//# sourceMappingURL=LELodasoftCommonModelsConfigurationAddDocumentTemplatePagesViewModel.js.map