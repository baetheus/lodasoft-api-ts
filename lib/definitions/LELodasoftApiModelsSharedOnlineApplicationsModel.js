"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftApiModelsSharedOnlineWizardModel_1 = require("../definitions/LELodasoftApiModelsSharedOnlineWizardModel");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftApiModelsSharedOnlineApplicationsModelIO = io_ts_1.type({
    wizardUrls: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftApiModelsSharedOnlineWizardModel_1.LELodasoftApiModelsSharedOnlineWizardModelIO)),
});
//# sourceMappingURL=LELodasoftApiModelsSharedOnlineApplicationsModel.js.map