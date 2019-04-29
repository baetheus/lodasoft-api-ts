"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Reader_1 = require("fp-ts/lib/Reader");
var io_ts_1 = require("io-ts");
var io_ts_types_1 = require("io-ts-types");
var LELodasoftApiControllersAdminControllerCheckRegisterModel_1 = require("../definitions/LELodasoftApiControllersAdminControllerCheckRegisterModel");
var LELodasoftApiModelsAdminEmailCampaignTriggerModelView_1 = require("../definitions/LELodasoftApiModelsAdminEmailCampaignTriggerModelView");
var LELodasoftApiModelsAdminGetAllEmailCampaignTrigger_1 = require("../definitions/LELodasoftApiModelsAdminGetAllEmailCampaignTrigger");
var LELodasoftApiModelsAdminInviteViewModel_1 = require("../definitions/LELodasoftApiModelsAdminInviteViewModel");
var LELodasoftApiModelsAdminLenderModelView_1 = require("../definitions/LELodasoftApiModelsAdminLenderModelView");
var LELodasoftApiModelsAdminOrgChartModel_1 = require("../definitions/LELodasoftApiModelsAdminOrgChartModel");
var LELodasoftApiModelsAdminPermissionMenu_1 = require("../definitions/LELodasoftApiModelsAdminPermissionMenu");
var LELodasoftApiModelsAdminQuestionTaskAnswerDto_1 = require("../definitions/LELodasoftApiModelsAdminQuestionTaskAnswerDto");
var LELodasoftApiModelsAdminSystemLevel_1 = require("../definitions/LELodasoftApiModelsAdminSystemLevel");
var LELodasoftApiModelsAdminUser_View_AdminPage_1 = require("../definitions/LELodasoftApiModelsAdminUser_View_AdminPage");
var LELodasoftApiModelsAdminWizardEverythingElseRequestModel_1 = require("../definitions/LELodasoftApiModelsAdminWizardEverythingElseRequestModel");
var LELodasoftApiModelsUserProfileModel_1 = require("../definitions/LELodasoftApiModelsUserProfileModel");
var LELodasoftCommonModelsConfigurationCustomTaskViewModel_1 = require("../definitions/LELodasoftCommonModelsConfigurationCustomTaskViewModel");
var LELodasoftCommonModelsConfigurationTaskViewModel_1 = require("../definitions/LELodasoftCommonModelsConfigurationTaskViewModel");
var LELodasoftCommonModelsReleaseNotesReleaseNotesViewModel_1 = require("../definitions/LELodasoftCommonModelsReleaseNotesReleaseNotesViewModel");
var LELodasoftDataAccessDbModelsAdminStackingOrderModel_1 = require("../definitions/LELodasoftDataAccessDbModelsAdminStackingOrderModel");
var LELodasoftDataAccessDbModelsConfigurationAgentTypeModel_1 = require("../definitions/LELodasoftDataAccessDbModelsConfigurationAgentTypeModel");
var LELodasoftDataAccessDbModelsConfigurationCharacteristicModel_1 = require("../definitions/LELodasoftDataAccessDbModelsConfigurationCharacteristicModel");
var LELodasoftDataAccessDbModelsConfigurationChecklistItemModel_1 = require("../definitions/LELodasoftDataAccessDbModelsConfigurationChecklistItemModel");
var LELodasoftDataAccessDbModelsConfigurationChecklistModel_1 = require("../definitions/LELodasoftDataAccessDbModelsConfigurationChecklistModel");
var LELodasoftDataAccessDbModelsConfigurationCompanyModel_1 = require("../definitions/LELodasoftDataAccessDbModelsConfigurationCompanyModel");
var LELodasoftDataAccessDbModelsConfigurationConfigurationModel_1 = require("../definitions/LELodasoftDataAccessDbModelsConfigurationConfigurationModel");
var LELodasoftDataAccessDbModelsConfigurationCustomTaskModel_1 = require("../definitions/LELodasoftDataAccessDbModelsConfigurationCustomTaskModel");
var LELodasoftDataAccessDbModelsConfigurationDocumentTypeModel_1 = require("../definitions/LELodasoftDataAccessDbModelsConfigurationDocumentTypeModel");
var LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModel_1 = require("../definitions/LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModel");
var LELodasoftDataAccessDbModelsConfigurationLoanPurposeModel_1 = require("../definitions/LELodasoftDataAccessDbModelsConfigurationLoanPurposeModel");
var LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel_1 = require("../definitions/LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel");
var LELodasoftDataAccessDbModelsConfigurationLoanStatusModel_1 = require("../definitions/LELodasoftDataAccessDbModelsConfigurationLoanStatusModel");
var LELodasoftDataAccessDbModelsConfigurationLoanTypeModel_1 = require("../definitions/LELodasoftDataAccessDbModelsConfigurationLoanTypeModel");
var LELodasoftDataAccessDbModelsConfigurationProductModel_1 = require("../definitions/LELodasoftDataAccessDbModelsConfigurationProductModel");
var LELodasoftDataAccessDbModelsConfigurationQATaskModel_1 = require("../definitions/LELodasoftDataAccessDbModelsConfigurationQATaskModel");
var LELodasoftDataAccessDbModelsConfigurationQuestionModel_1 = require("../definitions/LELodasoftDataAccessDbModelsConfigurationQuestionModel");
var LELodasoftDataAccessDbModelsConfigurationRoleModel_1 = require("../definitions/LELodasoftDataAccessDbModelsConfigurationRoleModel");
var LELodasoftDataAccessDbModelsConfigurationSetupReferenceModel_1 = require("../definitions/LELodasoftDataAccessDbModelsConfigurationSetupReferenceModel");
var LELodasoftDataAccessDbModelsUserProfile_1 = require("../definitions/LELodasoftDataAccessDbModelsUserProfile");
var utils_1 = require("../utils/utils");
exports.adminController = Reader_1.asks(function (e) { return ({
    Admin_GetAllByCompanyId: function (parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/GetAllProductByCompanyId",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftDataAccessDbModelsConfigurationProductModel_1.LELodasoftDataAccessDbModelsConfigurationProductModelIO)));
    },
    Admin_GetProductById: function (productId, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/GetProductById/" + encodeURIComponent(io_ts_1.number.encode(productId).toString()),
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessDbModelsConfigurationProductModel_1.LELodasoftDataAccessDbModelsConfigurationProductModelIO));
    },
    Admin_UpdateProduct: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftDataAccessDbModelsConfigurationProductModel_1.LELodasoftDataAccessDbModelsConfigurationProductModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/UpdateProduct",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_InsertProduct: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftDataAccessDbModelsConfigurationProductModel_1.LELodasoftDataAccessDbModelsConfigurationProductModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/InsertProduct",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_DeleteProduct: function (id, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/DeleteProduct/" + encodeURIComponent(io_ts_1.number.encode(id).toString()),
            method: 'DELETE',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_GetAllQuestion: function (parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/AllQuestion",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftDataAccessDbModelsConfigurationQuestionModel_1.LELodasoftDataAccessDbModelsConfigurationQuestionModelIO)));
    },
    Admin_UpdateQuestion: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftDataAccessDbModelsConfigurationQuestionModel_1.LELodasoftDataAccessDbModelsConfigurationQuestionModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/UpdateQuestion",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_InsertQuestion: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftDataAccessDbModelsConfigurationQuestionModel_1.LELodasoftDataAccessDbModelsConfigurationQuestionModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/InsertQuestion",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_DeleteQuestion: function (id, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/DeleteQuestion/" + encodeURIComponent(io_ts_1.number.encode(id).toString()),
            method: 'DELETE',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_QuestionAnswerGroupByQuestion: function (parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/QuestionAnswerGroupByQuestion",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_GetAllQuestionAnswer: function (questionId, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/AllQuestionAnswer/" + encodeURIComponent(io_ts_1.number.encode(questionId).toString()),
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftApiModelsAdminQuestionTaskAnswerDto_1.LELodasoftApiModelsAdminQuestionTaskAnswerDtoIO)));
    },
    Admin_UpdateQuestionAnswer: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftApiModelsAdminQuestionTaskAnswerDto_1.LELodasoftApiModelsAdminQuestionTaskAnswerDtoIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/UpdateQuestionAnswer",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_InsertQuestionAnswer: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftApiModelsAdminQuestionTaskAnswerDto_1.LELodasoftApiModelsAdminQuestionTaskAnswerDtoIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/InsertQuestionAnswer",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_DeleteQuestionAnswer: function (id, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/DeleteQuestionAnswer/" + encodeURIComponent(io_ts_1.number.encode(id).toString()),
            method: 'DELETE',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_GetAllQATaskModel: function (parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/AllQATaskModel",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftDataAccessDbModelsConfigurationQATaskModel_1.LELodasoftDataAccessDbModelsConfigurationQATaskModelIO)));
    },
    Admin_UpdateQATaskModel: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftDataAccessDbModelsConfigurationQATaskModel_1.LELodasoftDataAccessDbModelsConfigurationQATaskModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/UpdateQATaskModel",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_InsertQATaskModel: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftDataAccessDbModelsConfigurationQATaskModel_1.LELodasoftDataAccessDbModelsConfigurationQATaskModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/InsertQATaskModel",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessDbModelsConfigurationQATaskModel_1.LELodasoftDataAccessDbModelsConfigurationQATaskModelIO));
    },
    Admin_DeleteQATaskModel: function (id, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/DeleteQATaskModel/" + encodeURIComponent(io_ts_1.number.encode(id).toString()),
            method: 'DELETE',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_GetAllCheckListItem: function (parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/AllCheckListItem",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftDataAccessDbModelsConfigurationChecklistItemModel_1.LELodasoftDataAccessDbModelsConfigurationChecklistItemModelIO)));
    },
    Admin_UpdateCheckListItem: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftDataAccessDbModelsConfigurationChecklistItemModel_1.LELodasoftDataAccessDbModelsConfigurationChecklistItemModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/UpdateCheckListItem",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_InsertCheckListItem: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftDataAccessDbModelsConfigurationChecklistItemModel_1.LELodasoftDataAccessDbModelsConfigurationChecklistItemModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/InsertCheckListItem",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessDbModelsConfigurationChecklistItemModel_1.LELodasoftDataAccessDbModelsConfigurationChecklistItemModelIO));
    },
    Admin_DeleteCheckListItem: function (id, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/DeleteCheckListItem/" + encodeURIComponent(io_ts_1.number.encode(id).toString()),
            method: 'DELETE',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_GetSetupReferenceByTemplateCompany_CompanyId: function (TemplateCompanyId, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/GetSetupReferenceByTemplateCompany_CompanyId/" + encodeURIComponent(io_ts_1.number.encode(TemplateCompanyId).toString()),
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftDataAccessDbModelsConfigurationSetupReferenceModel_1.LELodasoftDataAccessDbModelsConfigurationSetupReferenceModelIO)));
    },
    Admin_UpsertSetupReference: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftDataAccessDbModelsConfigurationSetupReferenceModel_1.LELodasoftDataAccessDbModelsConfigurationSetupReferenceModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/UpsertSetupReference",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessDbModelsConfigurationSetupReferenceModel_1.LELodasoftDataAccessDbModelsConfigurationSetupReferenceModelIO));
    },
    Admin_GetPageResource: function (page, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/PageResource/" + encodeURIComponent(io_ts_1.string.encode(page).toString()),
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_GetProfile: function (userId) {
        return e.apiClient
            .request({
            url: "/api/Admin/Profile/" + encodeURIComponent(io_ts_1.string.encode(userId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftApiModelsUserProfileModel_1.LELodasoftApiModelsUserProfileModelIO));
    },
    Admin_PostSaveProfile: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftApiModelsUserProfileModel_1.LELodasoftApiModelsUserProfileModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/SaveProfile",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_WizardEverythingElse: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftApiModelsAdminWizardEverythingElseRequestModel_1.LELodasoftApiModelsAdminWizardEverythingElseRequestModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/WizardEverythingElse",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_GetCurrentReleaseNotes: function (parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ releaseNotesVersion: io_ts_1.string }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/CurrentReleaseNotes",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsReleaseNotesReleaseNotesViewModel_1.LELodasoftCommonModelsReleaseNotesReleaseNotesViewModelIO));
    },
    Admin_ViewedReleaseNotes: function (parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ releaseNotesVersion: io_ts_1.string }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/ViewedReleaseNotes",
            method: 'POST',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_GetReleaseNotes: function () {
        return e.apiClient
            .request({
            url: "/api/Admin/AllReleaseNotes",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsReleaseNotesReleaseNotesViewModel_1.LELodasoftCommonModelsReleaseNotesReleaseNotesViewModelIO)));
    },
    Admin_InsertReleaseNotes: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsReleaseNotesReleaseNotesViewModel_1.LELodasoftCommonModelsReleaseNotesReleaseNotesViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/ReleaseNotes",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsReleaseNotesReleaseNotesViewModel_1.LELodasoftCommonModelsReleaseNotesReleaseNotesViewModelIO));
    },
    Admin_UpdateReleaseNotes: function (id, parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftCommonModelsReleaseNotesReleaseNotesViewModel_1.LELodasoftCommonModelsReleaseNotesReleaseNotesViewModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/ReleaseNotes/" + encodeURIComponent(io_ts_1.number.encode(id).toString()),
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsReleaseNotesReleaseNotesViewModel_1.LELodasoftCommonModelsReleaseNotesReleaseNotesViewModelIO));
    },
    Admin_DeleteReleaseNotes: function (id) {
        return e.apiClient
            .request({
            url: "/api/Admin/ReleaseNotes/" + encodeURIComponent(io_ts_1.number.encode(id).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_GetPermissionMenu: function (parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/PermissionMenu",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftApiModelsAdminPermissionMenu_1.LELodasoftApiModelsAdminPermissionMenuIO));
    },
    Admin_GetAllTable: function () {
        return e.apiClient
            .request({
            url: "/api/Admin/AllTable",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.dictionary(io_ts_1.string, io_ts_1.dictionary(io_ts_1.string, io_ts_1.string))));
    },
    Admin_GetAllUserModel: function (parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/AllUserModel",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftApiModelsAdminUser_View_AdminPage_1.LELodasoftApiModelsAdminUser_View_AdminPageIO)));
    },
    Admin_UpdateUserModel: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftDataAccessDbModelsUserProfile_1.LELodasoftDataAccessDbModelsUserProfileIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/UpdateUserModel",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_InsertUserModel: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftDataAccessDbModelsUserProfile_1.LELodasoftDataAccessDbModelsUserProfileIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/InsertUserModel",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessDbModelsUserProfile_1.LELodasoftDataAccessDbModelsUserProfileIO));
    },
    Admin_DeleteUserModel: function (id, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/DeleteUserModel/" + encodeURIComponent(io_ts_1.string.encode(id).toString()),
            method: 'DELETE',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.string));
    },
    Admin_GetAllCompanyModel: function () {
        return e.apiClient
            .request({
            url: "/api/Admin/AllCompanyModel",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftDataAccessDbModelsConfigurationCompanyModel_1.LELodasoftDataAccessDbModelsConfigurationCompanyModelIO)));
    },
    Admin_UpdateCompanyModel: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftDataAccessDbModelsConfigurationCompanyModel_1.LELodasoftDataAccessDbModelsConfigurationCompanyModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/UpdateCompanyModel",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_InsertCompanyModel: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftDataAccessDbModelsConfigurationCompanyModel_1.LELodasoftDataAccessDbModelsConfigurationCompanyModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/InsertCompanyModel",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessDbModelsConfigurationCompanyModel_1.LELodasoftDataAccessDbModelsConfigurationCompanyModelIO));
    },
    Admin_DeleteCompanyModel: function (id) {
        return e.apiClient
            .request({
            url: "/api/Admin/DeleteCompanyModel/" + encodeURIComponent(io_ts_1.number.encode(id).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_GetCheckRegister: function (parameters) {
        var encoded = io_ts_1.partial({ body: LELodasoftApiControllersAdminControllerCheckRegisterModel_1.LELodasoftApiControllersAdminControllerCheckRegisterModelIO }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/CheckRegister",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_DeleteInvite: function (userId, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/DeleteInvite/" + encodeURIComponent(io_ts_1.string.encode(userId).toString()),
            method: 'DELETE',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_ResendInvite: function (userId, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/ResendInvite/" + encodeURIComponent(io_ts_1.string.encode(userId).toString()),
            method: 'POST',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_InviteUser: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftApiModelsAdminInviteViewModel_1.LELodasoftApiModelsAdminInviteViewModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/InviteUser",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessDbModelsUserProfile_1.LELodasoftDataAccessDbModelsUserProfileIO));
    },
    Admin_GetAllInvite: function (parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/AllInvite",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftApiModelsAdminInviteViewModel_1.LELodasoftApiModelsAdminInviteViewModelIO)));
    },
    Admin_ImportListUserForCompany: function (parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/ImportListUserForCompany",
            method: 'POST',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftApiModelsAdminInviteViewModel_1.LELodasoftApiModelsAdminInviteViewModelIO));
    },
    Admin_GetAllRoleModel: function (parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/AllRoleModel",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftDataAccessDbModelsConfigurationRoleModel_1.LELodasoftDataAccessDbModelsConfigurationRoleModelIO)));
    },
    Admin_UpdateRoleModel: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftDataAccessDbModelsConfigurationRoleModel_1.LELodasoftDataAccessDbModelsConfigurationRoleModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/UpdateRoleModel",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_InsertRoleModel: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftDataAccessDbModelsConfigurationRoleModel_1.LELodasoftDataAccessDbModelsConfigurationRoleModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/InsertRoleModel",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessDbModelsConfigurationRoleModel_1.LELodasoftDataAccessDbModelsConfigurationRoleModelIO));
    },
    Admin_DeleteRoleModel: function (id, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/DeleteRoleModel/" + encodeURIComponent(io_ts_1.number.encode(id).toString()),
            method: 'DELETE',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_UpdateRoleOrder: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: io_ts_1.array(utils_1.unknownType),
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/UpdateRoleOrder",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_GetCompanyAndRoleAndUserAligment: function (parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/CompanyAndRoleAndUserForAligment",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_GetAllAlignmentModel: function (parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/AllAlignmentModel",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_UpdateAlignmentModel: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: utils_1.unknownType,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/UpdateAlignmentModel",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_InsertAlignmentModel: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: utils_1.unknownType,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/InsertAlignmentModel",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_DeleteAlignmentModel: function (groupnumber, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/DeleteAlignmentModel/" + encodeURIComponent(io_ts_1.string.encode(groupnumber).toString()),
            method: 'DELETE',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_GetAllLeadStatusModel: function (parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/AllLeadStatusModel",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftDataAccessDbModelsConfigurationLoanStatusModel_1.LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO)));
    },
    Admin_GetLeadStatus: function (leadStatusId, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/GetLeadStatus/" + encodeURIComponent(io_ts_1.number.encode(leadStatusId).toString()),
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_GetLeadStatusByLoanPurposeId: function (LoanPurposeId, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/GetLeadStatusByLoanPurposeId/" + encodeURIComponent(io_ts_1.number.encode(LoanPurposeId).toString()),
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftDataAccessDbModelsConfigurationLoanStatusModel_1.LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO)));
    },
    Admin_UpdateLeadStatusModel: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftDataAccessDbModelsConfigurationLoanStatusModel_1.LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/UpdateLeadStatusModel",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_InsertLeadStatusModel: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftDataAccessDbModelsConfigurationLoanStatusModel_1.LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/InsertLeadStatusModel",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessDbModelsConfigurationLoanStatusModel_1.LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO));
    },
    Admin_SaveAssociateLeadStatus: function (loanStatusId, loanPurposeId, associate, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/SaveAssociateLeadStatus/" + encodeURIComponent(io_ts_1.number.encode(loanPurposeId).toString()) + "/" + encodeURIComponent(io_ts_1.number.encode(loanStatusId).toString()) + "/" + encodeURIComponent(io_ts_1.string.encode(associate).toString()),
            method: 'POST',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel_1.LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO));
    },
    Admin_SaveLeadStatusFlow: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel_1.LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/SaveLeadStatusFlow",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel_1.LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO));
    },
    Admin_DeleteLeadStatusModel: function (id, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/DeleteLeadStatusModel/" + encodeURIComponent(io_ts_1.number.encode(id).toString()),
            method: 'DELETE',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_UpdateLeadOrder: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: io_ts_1.array(utils_1.unknownType),
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/UpdateLeadOrder",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_GetAllLoanStatusModel: function (parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/AllLoanStatusModel",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftDataAccessDbModelsConfigurationLoanStatusModel_1.LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO)));
    },
    Admin_GetLoanStatus: function (loanStatusId, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/GetLoanStatus/" + encodeURIComponent(io_ts_1.number.encode(loanStatusId).toString()),
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_GetLoanStatusByLoanTypeId: function (LoanPurposeId, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/GetLoanStatusByLoanPurposeId/" + encodeURIComponent(io_ts_1.number.encode(LoanPurposeId).toString()),
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftDataAccessDbModelsConfigurationLoanStatusModel_1.LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO)));
    },
    Admin_UpdateLoanStatusModel: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftDataAccessDbModelsConfigurationLoanStatusModel_1.LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/UpdateLoanStatusModel",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_InsertLoanStatusModel: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftDataAccessDbModelsConfigurationLoanStatusModel_1.LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/InsertLoanStatusModel",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessDbModelsConfigurationLoanStatusModel_1.LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO));
    },
    Admin_SaveAssociateLoanStatus: function (loanPurposeId, loanStatusId, associate, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/SaveAssociateLoanStatus/" + encodeURIComponent(io_ts_1.number.encode(loanPurposeId).toString()) + "/" + encodeURIComponent(io_ts_1.number.encode(loanStatusId).toString()) + "/" + encodeURIComponent(io_ts_1.string.encode(associate).toString()),
            method: 'POST',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel_1.LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO));
    },
    Admin_SaveLoanStatusFlow: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel_1.LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/SaveLoanStatusFlow",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel_1.LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO));
    },
    Admin_DeleteLoanStatusModel: function (id, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/DeleteLoanStatusModel/" + encodeURIComponent(io_ts_1.number.encode(id).toString()),
            method: 'DELETE',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_UpdateLoanOrder: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({
                companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number),
                leadStatus: io_ts_types_1.createOptionFromNullable(io_ts_1.boolean),
            }),
            body: io_ts_1.array(utils_1.unknownType),
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/UpdateLoanOrder",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_GetAllLoanTypeModel: function (parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/AllLoanTypeModel",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftDataAccessDbModelsConfigurationLoanTypeModel_1.LELodasoftDataAccessDbModelsConfigurationLoanTypeModelIO)));
    },
    Admin_UpdateLoanTypeModel: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftDataAccessDbModelsConfigurationLoanTypeModel_1.LELodasoftDataAccessDbModelsConfigurationLoanTypeModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/UpdateLoanTypeModel",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_InsertLoanTypeModel: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftDataAccessDbModelsConfigurationLoanTypeModel_1.LELodasoftDataAccessDbModelsConfigurationLoanTypeModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/InsertLoanTypeModel",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessDbModelsConfigurationLoanTypeModel_1.LELodasoftDataAccessDbModelsConfigurationLoanTypeModelIO));
    },
    Admin_DeleteLoanTypeModel: function (id, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/DeleteLoanTypeModel/" + encodeURIComponent(io_ts_1.number.encode(id).toString()),
            method: 'DELETE',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_UpdateLoanTypeOrder: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: io_ts_1.array(utils_1.unknownType),
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/UpdateLoanTypeOrder",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_GetAllLoanPurposeModel: function (parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/AllLoanPurposeModel",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftDataAccessDbModelsConfigurationLoanPurposeModel_1.LELodasoftDataAccessDbModelsConfigurationLoanPurposeModelIO)));
    },
    Admin_UpdateLoanPurposeModel: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftDataAccessDbModelsConfigurationLoanPurposeModel_1.LELodasoftDataAccessDbModelsConfigurationLoanPurposeModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/UpdateLoanPurposeModel",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_InsertLoanPurposeModel: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftDataAccessDbModelsConfigurationLoanPurposeModel_1.LELodasoftDataAccessDbModelsConfigurationLoanPurposeModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/InsertLoanPurposeModel",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessDbModelsConfigurationLoanPurposeModel_1.LELodasoftDataAccessDbModelsConfigurationLoanPurposeModelIO));
    },
    Admin_DeleteLoanPurposeModel: function (id, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/DeleteLoanPurposeModel/" + encodeURIComponent(io_ts_1.number.encode(id).toString()),
            method: 'DELETE',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_UpdateLoanPurposeOrder: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: io_ts_1.array(utils_1.unknownType),
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/UpdateLoanPurposeOrder",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_GetAllLeadStatusAssociations: function (parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/GetAllLeadStatusAssociations",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel_1.LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO)));
    },
    Admin_GetAllLeadStatusAssociationsByLoanPurpose: function (loanPurposeId, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/GetAllLeadStatusAssociationsByLoanPurpose/" + encodeURIComponent(io_ts_1.number.encode(loanPurposeId).toString()),
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel_1.LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO)));
    },
    Admin_UpdateLeadStatusAssociation: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel_1.LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/UpdateLeadStatusAssociation",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_DeleteLeadStatusAssociation: function (id, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/DeleteLeadStatusAssociation/" + encodeURIComponent(io_ts_1.number.encode(id).toString()),
            method: 'DELETE',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_InsertLeadStatusAssociation: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel_1.LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/InsertLeadStatusAssociation",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel_1.LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO));
    },
    Admin_UpdateLeadStatusFlowOrder: function (loanPurposeId, parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: io_ts_1.array(utils_1.unknownType),
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/UpdateLeadStatusFlowOrder/" + encodeURIComponent(io_ts_1.number.encode(loanPurposeId).toString()),
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_GetAllLoanStatusAssociations: function (parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/GetAllLoanStatusAssociations",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel_1.LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO)));
    },
    Admin_GetAllLoanStatusAssociationsByLoanPurpose: function (loanPurposeId, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/GetAllLoanStatusAssociationsByLoanPurpose/" + encodeURIComponent(io_ts_1.number.encode(loanPurposeId).toString()),
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel_1.LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO)));
    },
    Admin_UpdateLoanStatusAssociation: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel_1.LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/UpdateLoanStatusAssociation",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_DeleteLoanStatusAssociation: function (id, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/DeleteLoanStatusAssociation/" + encodeURIComponent(io_ts_1.number.encode(id).toString()),
            method: 'DELETE',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_InsertLoanStatusAssociation: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel_1.LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/InsertLoanStatusAssociation",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel_1.LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO));
    },
    Admin_UpdateLoanStatusFlowOrder: function (loanPurposeId, parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: io_ts_1.array(utils_1.unknownType),
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/UpdateLoanStatusFlowOrder/" + encodeURIComponent(io_ts_1.number.encode(loanPurposeId).toString()),
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_GetAllTaskModel: function (parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/AllTaskModel",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsConfigurationTaskViewModel_1.LELodasoftCommonModelsConfigurationTaskViewModelIO)));
    },
    Admin_GetLeadAllTaskModel: function (parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/GetLeadAllTaskModel",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftCommonModelsConfigurationTaskViewModel_1.LELodasoftCommonModelsConfigurationTaskViewModelIO)));
    },
    Admin_GetTaskById: function (taskId, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/GetTaskById/" + encodeURIComponent(io_ts_1.number.encode(taskId).toString()),
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_UpdateTaskModel: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftCommonModelsConfigurationTaskViewModel_1.LELodasoftCommonModelsConfigurationTaskViewModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/UpdateTaskModel",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_UpdateTaskSubTask: function (taskId, subTasks, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/UpdateTaskSubTask/" + encodeURIComponent(io_ts_1.number.encode(taskId).toString()) + "/" + encodeURIComponent(io_ts_1.string.encode(subTasks).toString()),
            method: 'POST',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_InsertTaskModel: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftCommonModelsConfigurationTaskViewModel_1.LELodasoftCommonModelsConfigurationTaskViewModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/InsertTaskModel",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsConfigurationTaskViewModel_1.LELodasoftCommonModelsConfigurationTaskViewModelIO));
    },
    Admin_InsertTaskModelFromTemplate: function (templateCompanyId, templateTaskId, parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftCommonModelsConfigurationTaskViewModel_1.LELodasoftCommonModelsConfigurationTaskViewModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/InsertTaskModelFromTemplate/" + encodeURIComponent(io_ts_1.number.encode(templateCompanyId).toString()) + "/" + encodeURIComponent(io_ts_1.number.encode(templateTaskId).toString()),
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsConfigurationTaskViewModel_1.LELodasoftCommonModelsConfigurationTaskViewModelIO));
    },
    Admin_DeleteTaskModel: function (id, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/DeleteTaskModel/" + encodeURIComponent(io_ts_1.number.encode(id).toString()),
            method: 'DELETE',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_GetGlobalEmailMergeFieldsModel: function () {
        return e.apiClient
            .request({
            url: "/api/Admin/AllGlobalEmailMergeFieldsModel",
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModel_1.LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModelIO)));
    },
    Admin_UpdateGlobalEmailMergeFieldsModel: function (parameters) {
        var encoded = io_ts_1.partial({
            body: LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModel_1.LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/UpdateGlobalEmailMergeFieldsModel",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_InsertGlobalEmailMergeFieldsModel: function (parameters) {
        var encoded = io_ts_1.partial({
            body: LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModel_1.LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/InsertGlobalEmailMergeFieldsModel",
            method: 'POST',
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModel_1.LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModelIO));
    },
    Admin_DeleteGlobalEmailMergeFieldsModel: function (id) {
        return e.apiClient
            .request({
            url: "/api/Admin/DeleteGlobalEmailMergeFieldsModel/" + encodeURIComponent(io_ts_1.number.encode(id).toString()),
            method: 'DELETE',
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_GetAllEmailCampaignTriggerModel: function (parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/AllEmailCampaignTriggerModel",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftApiModelsAdminGetAllEmailCampaignTrigger_1.LELodasoftApiModelsAdminGetAllEmailCampaignTriggerIO)));
    },
    Admin_UpdateEmailCampaignTriggerModel: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftApiModelsAdminEmailCampaignTriggerModelView_1.LELodasoftApiModelsAdminEmailCampaignTriggerModelViewIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/UpdateEmailCampaignTriggerModel",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_InsertEmailCampaignTrigger: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftApiModelsAdminEmailCampaignTriggerModelView_1.LELodasoftApiModelsAdminEmailCampaignTriggerModelViewIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/InsertEmailCampaignTrigger",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftApiModelsAdminEmailCampaignTriggerModelView_1.LELodasoftApiModelsAdminEmailCampaignTriggerModelViewIO));
    },
    Admin_InsertChildEmailCampaignTrigger: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftApiModelsAdminEmailCampaignTriggerModelView_1.LELodasoftApiModelsAdminEmailCampaignTriggerModelViewIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/InsertChildEmailCampaignTrigger",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftApiModelsAdminEmailCampaignTriggerModelView_1.LELodasoftApiModelsAdminEmailCampaignTriggerModelViewIO));
    },
    Admin_DeleteEmailCampaignTriggerModel: function (id, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/DeleteEmailCampaignTriggerModel/" + encodeURIComponent(io_ts_1.number.encode(id).toString()),
            method: 'DELETE',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_GetAllTaskCategoryModel: function (parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/AllTaskCategoryModel",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftDataAccessDbModelsConfigurationCharacteristicModel_1.LELodasoftDataAccessDbModelsConfigurationCharacteristicModelIO)));
    },
    Admin_InsertTaskCategoryModel: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftDataAccessDbModelsConfigurationCharacteristicModel_1.LELodasoftDataAccessDbModelsConfigurationCharacteristicModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/InsertTaskCategoryModel",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessDbModelsConfigurationCharacteristicModel_1.LELodasoftDataAccessDbModelsConfigurationCharacteristicModelIO));
    },
    Admin_DeleteTaskCategoryModel: function (id, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/DeleteTaskCategoryModel/" + encodeURIComponent(io_ts_1.number.encode(id).toString()),
            method: 'DELETE',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_UpdateTaskCategoryModel: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftDataAccessDbModelsConfigurationCharacteristicModel_1.LELodasoftDataAccessDbModelsConfigurationCharacteristicModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/UpdateTaskCategoryModel",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_UpdateTaskCategoryOrder: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: io_ts_1.array(utils_1.unknownType),
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/UpdateTaskCategoryOrder",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_GetCustomTaskModelByType: function (taskType, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/GetCustomTaskModelByType/" + encodeURIComponent(io_ts_1.string.encode(taskType).toString()),
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftDataAccessDbModelsConfigurationCustomTaskModel_1.LELodasoftDataAccessDbModelsConfigurationCustomTaskModelIO)));
    },
    Admin_InsertCustomTaskModel: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftCommonModelsConfigurationCustomTaskViewModel_1.LELodasoftCommonModelsConfigurationCustomTaskViewModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/InsertCustomTaskModel",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftCommonModelsConfigurationCustomTaskViewModel_1.LELodasoftCommonModelsConfigurationCustomTaskViewModelIO));
    },
    Admin_DeleteCustomTaskModel: function (id, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/DeleteCustomTaskModel/" + encodeURIComponent(io_ts_1.number.encode(id).toString()),
            method: 'DELETE',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_UpdateCustomTaskModel: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftCommonModelsConfigurationCustomTaskViewModel_1.LELodasoftCommonModelsConfigurationCustomTaskViewModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/UpdateCustomTaskModel",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_GetAllDocumentModel: function (dbOnly, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/AllDocumentModel/" + encodeURIComponent(io_ts_1.boolean.encode(dbOnly).toString()),
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftDataAccessDbModelsConfigurationDocumentTypeModel_1.LELodasoftDataAccessDbModelsConfigurationDocumentTypeModelIO)));
    },
    Admin_UpdateDocumentModel: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftDataAccessDbModelsConfigurationDocumentTypeModel_1.LELodasoftDataAccessDbModelsConfigurationDocumentTypeModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/UpdateDocumentModel",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_InsertDocumentModel: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftDataAccessDbModelsConfigurationDocumentTypeModel_1.LELodasoftDataAccessDbModelsConfigurationDocumentTypeModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/InsertDocumentModel",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessDbModelsConfigurationDocumentTypeModel_1.LELodasoftDataAccessDbModelsConfigurationDocumentTypeModelIO));
    },
    Admin_DeleteDocumentModel: function (id, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/DeleteDocumentModel/" + encodeURIComponent(io_ts_1.number.encode(id).toString()),
            method: 'DELETE',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_UpdateDocumentOrder: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: io_ts_1.array(utils_1.unknownType),
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/UpdateDocumentOrder",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_GetAllAgentType: function (parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/AllAgentType",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftDataAccessDbModelsConfigurationAgentTypeModel_1.LELodasoftDataAccessDbModelsConfigurationAgentTypeModelIO)));
    },
    Admin_UpdateAgentType: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftDataAccessDbModelsConfigurationAgentTypeModel_1.LELodasoftDataAccessDbModelsConfigurationAgentTypeModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/UpdateAgentType",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_InsertAgentType: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftDataAccessDbModelsConfigurationAgentTypeModel_1.LELodasoftDataAccessDbModelsConfigurationAgentTypeModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/InsertAgentType",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessDbModelsConfigurationAgentTypeModel_1.LELodasoftDataAccessDbModelsConfigurationAgentTypeModelIO));
    },
    Admin_DeleteAgentType: function (id, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/DeleteAgentType/" + encodeURIComponent(io_ts_1.number.encode(id).toString()),
            method: 'DELETE',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_UpdateAgentTypeOrder: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: io_ts_1.array(utils_1.unknownType),
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/UpdateAgentTypeOrder",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_GetAllLender: function (parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/AllLender",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftApiModelsAdminLenderModelView_1.LELodasoftApiModelsAdminLenderModelViewIO)));
    },
    Admin_UpdateLender: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftApiModelsAdminLenderModelView_1.LELodasoftApiModelsAdminLenderModelViewIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/UpdateLender",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_InsertLender: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftApiModelsAdminLenderModelView_1.LELodasoftApiModelsAdminLenderModelViewIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/InsertLender",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftApiModelsAdminLenderModelView_1.LELodasoftApiModelsAdminLenderModelViewIO));
    },
    Admin_DeleteLender: function (id, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/DeleteLender/" + encodeURIComponent(io_ts_1.number.encode(id).toString()),
            method: 'DELETE',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_GetAllStackingOrder: function (parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/AllStackingOrder",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(io_ts_1.array(LELodasoftDataAccessDbModelsAdminStackingOrderModel_1.LELodasoftDataAccessDbModelsAdminStackingOrderModelIO)));
    },
    Admin_GetStackingOrderInfo: function (id, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/StackingOrderInfo/" + encodeURIComponent(io_ts_1.number.encode(id).toString()),
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessDbModelsAdminStackingOrderModel_1.LELodasoftDataAccessDbModelsAdminStackingOrderModelIO));
    },
    Admin_UpdateStackingOrder: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftDataAccessDbModelsAdminStackingOrderModel_1.LELodasoftDataAccessDbModelsAdminStackingOrderModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/UpdateStackingOrder",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_InsertStackingOrder: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftDataAccessDbModelsAdminStackingOrderModel_1.LELodasoftDataAccessDbModelsAdminStackingOrderModelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/InsertStackingOrder",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessDbModelsAdminStackingOrderModel_1.LELodasoftDataAccessDbModelsAdminStackingOrderModelIO));
    },
    Admin_DeleteStackingOrder: function (id, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/DeleteStackingOrder/" + encodeURIComponent(io_ts_1.number.encode(id).toString()),
            method: 'DELETE',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_PostSaveOrgChart: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: io_ts_1.array(LELodasoftApiModelsAdminOrgChartModel_1.LELodasoftApiModelsAdminOrgChartModelIO),
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/SaveOrgChart",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_SaveSystemLevel: function (parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: LELodasoftApiModelsAdminSystemLevel_1.LELodasoftApiModelsAdminSystemLevelIO,
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/SaveSystemLevel",
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftApiModelsAdminSystemLevel_1.LELodasoftApiModelsAdminSystemLevelIO));
    },
    Admin_GetSystemLevel: function (parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/GetSystemLevel",
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(LELodasoftApiModelsAdminSystemLevel_1.LELodasoftApiModelsAdminSystemLevelIO));
    },
    Admin_GetExportFileNaming: function (companyId) {
        return e.apiClient
            .request({
            url: "/api/Admin/GetExportFileNaming/" + encodeURIComponent(io_ts_1.number.encode(companyId).toString()),
            method: 'GET',
        })
            .pipe(utils_1.decodeAndMap(LELodasoftDataAccessDbModelsConfigurationConfigurationModel_1.LELodasoftDataAccessDbModelsConfigurationConfigurationModelIO));
    },
    Admin_UpdateCheckList: function (CheckListItemId, parameters) {
        var encoded = io_ts_1.partial({
            query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }),
            body: io_ts_1.array(LELodasoftDataAccessDbModelsConfigurationChecklistModel_1.LELodasoftDataAccessDbModelsConfigurationChecklistModelIO),
        }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/UpdateCheckList/" + encodeURIComponent(io_ts_1.number.encode(CheckListItemId).toString()),
            method: 'POST',
            query: encoded.query,
            body: encoded.body,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
    Admin_AllCheckList: function (CheckListItemId, parameters) {
        var encoded = io_ts_1.partial({ query: io_ts_1.type({ companyId: io_ts_types_1.createOptionFromNullable(io_ts_1.number) }) }).encode(parameters);
        return e.apiClient
            .request({
            url: "/api/Admin/AllCheckList/" + encodeURIComponent(io_ts_1.number.encode(CheckListItemId).toString()),
            method: 'GET',
            query: encoded.query,
        })
            .pipe(utils_1.decodeAndMap(utils_1.unknownType));
    },
}); });
//# sourceMappingURL=AdminController.js.map