"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LELodasoftCommonModelsAdminRecentApplicationView_1 = require("../definitions/LELodasoftCommonModelsAdminRecentApplicationView");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
exports.LELodasoftApiModelsAdminPermissionMenuIO = io_ts_1.type({
    superAdmin: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    admin: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    creditMonitoringEnabled: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    creditReportingEnabled: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    docEditingEnabled: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    docGenerationEnabled: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    full1003Enabled: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    inviteBorrowerCheckedByDefault: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    leadManagementEnabled: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    multipleCredentialSupportEnabled: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    onlineApplicationEnabled: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    prequalGenerationEnabled: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    digitalAssetVerificationEnabled: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    digitalEmploymentVerificationEnabled: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    ausEnabled: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    losEnabled: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    smsAlertsEnabled: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    showNewSubmissionForm: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    bulkEditTasks: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    readOnlyTasks: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    userNormal: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
    companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    stackingOrderId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
    userId: io_ts_types_1.createOptionFromNullable(io_ts_1.string),
    recentApplications: io_ts_types_1.createOptionFromNullable(io_ts_1.array(LELodasoftCommonModelsAdminRecentApplicationView_1.LELodasoftCommonModelsAdminRecentApplicationViewIO)),
});
//# sourceMappingURL=LELodasoftApiModelsAdminPermissionMenu.js.map