import { Option } from 'fp-ts/lib/Option';
import { Observable } from 'rxjs';
import { TAPIClient } from '../client/client';
import { LELodasoftApiControllersAdminControllerCheckRegisterModel } from '../definitions/LELodasoftApiControllersAdminControllerCheckRegisterModel';
import { LELodasoftApiModelsAdminEmailCampaignTriggerModelView } from '../definitions/LELodasoftApiModelsAdminEmailCampaignTriggerModelView';
import { LELodasoftApiModelsAdminGetAllEmailCampaignTrigger } from '../definitions/LELodasoftApiModelsAdminGetAllEmailCampaignTrigger';
import { LELodasoftApiModelsAdminInviteViewModel } from '../definitions/LELodasoftApiModelsAdminInviteViewModel';
import { LELodasoftApiModelsAdminLenderModelView } from '../definitions/LELodasoftApiModelsAdminLenderModelView';
import { LELodasoftApiModelsAdminOrgChartModel } from '../definitions/LELodasoftApiModelsAdminOrgChartModel';
import { LELodasoftApiModelsAdminPermissionMenu } from '../definitions/LELodasoftApiModelsAdminPermissionMenu';
import { LELodasoftApiModelsAdminQuestionTaskAnswerDto } from '../definitions/LELodasoftApiModelsAdminQuestionTaskAnswerDto';
import { LELodasoftApiModelsAdminSystemLevel } from '../definitions/LELodasoftApiModelsAdminSystemLevel';
import { LELodasoftApiModelsAdminUser_View_AdminPage } from '../definitions/LELodasoftApiModelsAdminUser_View_AdminPage';
import { LELodasoftApiModelsAdminWizardEverythingElseRequestModel } from '../definitions/LELodasoftApiModelsAdminWizardEverythingElseRequestModel';
import { LELodasoftApiModelsUserProfileModel } from '../definitions/LELodasoftApiModelsUserProfileModel';
import { LELodasoftCommonModelsConfigurationCustomTaskViewModel } from '../definitions/LELodasoftCommonModelsConfigurationCustomTaskViewModel';
import { LELodasoftCommonModelsConfigurationTaskViewModel } from '../definitions/LELodasoftCommonModelsConfigurationTaskViewModel';
import { LELodasoftCommonModelsReleaseNotesReleaseNotesViewModel } from '../definitions/LELodasoftCommonModelsReleaseNotesReleaseNotesViewModel';
import { LELodasoftDataAccessDbModelsAdminStackingOrderModel } from '../definitions/LELodasoftDataAccessDbModelsAdminStackingOrderModel';
import { LELodasoftDataAccessDbModelsConfigurationAgentTypeModel } from '../definitions/LELodasoftDataAccessDbModelsConfigurationAgentTypeModel';
import { LELodasoftDataAccessDbModelsConfigurationCharacteristicModel } from '../definitions/LELodasoftDataAccessDbModelsConfigurationCharacteristicModel';
import { LELodasoftDataAccessDbModelsConfigurationChecklistItemModel } from '../definitions/LELodasoftDataAccessDbModelsConfigurationChecklistItemModel';
import { LELodasoftDataAccessDbModelsConfigurationChecklistModel } from '../definitions/LELodasoftDataAccessDbModelsConfigurationChecklistModel';
import { LELodasoftDataAccessDbModelsConfigurationCompanyModel } from '../definitions/LELodasoftDataAccessDbModelsConfigurationCompanyModel';
import { LELodasoftDataAccessDbModelsConfigurationConfigurationModel } from '../definitions/LELodasoftDataAccessDbModelsConfigurationConfigurationModel';
import { LELodasoftDataAccessDbModelsConfigurationCustomTaskModel } from '../definitions/LELodasoftDataAccessDbModelsConfigurationCustomTaskModel';
import { LELodasoftDataAccessDbModelsConfigurationDocumentTypeModel } from '../definitions/LELodasoftDataAccessDbModelsConfigurationDocumentTypeModel';
import { LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModel } from '../definitions/LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModel';
import { LELodasoftDataAccessDbModelsConfigurationLoanPurposeModel } from '../definitions/LELodasoftDataAccessDbModelsConfigurationLoanPurposeModel';
import { LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel } from '../definitions/LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel';
import { LELodasoftDataAccessDbModelsConfigurationLoanStatusModel } from '../definitions/LELodasoftDataAccessDbModelsConfigurationLoanStatusModel';
import { LELodasoftDataAccessDbModelsConfigurationLoanTypeModel } from '../definitions/LELodasoftDataAccessDbModelsConfigurationLoanTypeModel';
import { LELodasoftDataAccessDbModelsConfigurationProductModel } from '../definitions/LELodasoftDataAccessDbModelsConfigurationProductModel';
import { LELodasoftDataAccessDbModelsConfigurationQATaskModel } from '../definitions/LELodasoftDataAccessDbModelsConfigurationQATaskModel';
import { LELodasoftDataAccessDbModelsConfigurationQuestionModel } from '../definitions/LELodasoftDataAccessDbModelsConfigurationQuestionModel';
import { LELodasoftDataAccessDbModelsConfigurationRoleModel } from '../definitions/LELodasoftDataAccessDbModelsConfigurationRoleModel';
import { LELodasoftDataAccessDbModelsConfigurationSetupReferenceModel } from '../definitions/LELodasoftDataAccessDbModelsConfigurationSetupReferenceModel';
import { LELodasoftDataAccessDbModelsUserProfile } from '../definitions/LELodasoftDataAccessDbModelsUserProfile';
export declare type AdminController = {
    /**
     * @param { object } [parameters]
     */
    readonly Admin_GetAllByCompanyId: (parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationProductModel>>;
    /**
     * @param { number } productId undefined
     * @param { object } [parameters]
     */
    readonly Admin_GetProductById: (productId: number, parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<LELodasoftDataAccessDbModelsConfigurationProductModel>;
    /**
     * @param { object } parameters
     */
    readonly Admin_UpdateProduct: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftDataAccessDbModelsConfigurationProductModel;
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Admin_InsertProduct: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftDataAccessDbModelsConfigurationProductModel;
    }) => Observable<unknown>;
    /**
     * @param { number } id undefined
     * @param { object } [parameters]
     */
    readonly Admin_DeleteProduct: (id: number, parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<unknown>;
    /**
     * @param { object } [parameters]
     */
    readonly Admin_GetAllQuestion: (parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationQuestionModel>>;
    /**
     * @param { object } parameters
     */
    readonly Admin_UpdateQuestion: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftDataAccessDbModelsConfigurationQuestionModel;
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Admin_InsertQuestion: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftDataAccessDbModelsConfigurationQuestionModel;
    }) => Observable<unknown>;
    /**
     * @param { number } id undefined
     * @param { object } [parameters]
     */
    readonly Admin_DeleteQuestion: (id: number, parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<unknown>;
    /**
     * @param { object } [parameters]
     */
    readonly Admin_QuestionAnswerGroupByQuestion: (parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<unknown>;
    /**
     * @param { number } questionId undefined
     * @param { object } [parameters]
     */
    readonly Admin_GetAllQuestionAnswer: (questionId: number, parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<Array<LELodasoftApiModelsAdminQuestionTaskAnswerDto>>;
    /**
     * @param { object } parameters
     */
    readonly Admin_UpdateQuestionAnswer: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftApiModelsAdminQuestionTaskAnswerDto;
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Admin_InsertQuestionAnswer: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftApiModelsAdminQuestionTaskAnswerDto;
    }) => Observable<unknown>;
    /**
     * @param { number } id undefined
     * @param { object } [parameters]
     */
    readonly Admin_DeleteQuestionAnswer: (id: number, parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<unknown>;
    /**
     * @param { object } [parameters]
     */
    readonly Admin_GetAllQATaskModel: (parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationQATaskModel>>;
    /**
     * @param { object } parameters
     */
    readonly Admin_UpdateQATaskModel: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftDataAccessDbModelsConfigurationQATaskModel;
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Admin_InsertQATaskModel: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftDataAccessDbModelsConfigurationQATaskModel;
    }) => Observable<LELodasoftDataAccessDbModelsConfigurationQATaskModel>;
    /**
     * @param { number } id undefined
     * @param { object } [parameters]
     */
    readonly Admin_DeleteQATaskModel: (id: number, parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<unknown>;
    /**
     * @param { object } [parameters]
     */
    readonly Admin_GetAllCheckListItem: (parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationChecklistItemModel>>;
    /**
     * @param { object } parameters
     */
    readonly Admin_UpdateCheckListItem: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftDataAccessDbModelsConfigurationChecklistItemModel;
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Admin_InsertCheckListItem: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftDataAccessDbModelsConfigurationChecklistItemModel;
    }) => Observable<LELodasoftDataAccessDbModelsConfigurationChecklistItemModel>;
    /**
     * @param { number } id undefined
     * @param { object } [parameters]
     */
    readonly Admin_DeleteCheckListItem: (id: number, parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<unknown>;
    /**
     * @param { number } TemplateCompanyId undefined
     * @param { object } [parameters]
     */
    readonly Admin_GetSetupReferenceByTemplateCompany_CompanyId: (TemplateCompanyId: number, parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationSetupReferenceModel>>;
    /**
     * @param { object } parameters
     */
    readonly Admin_UpsertSetupReference: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftDataAccessDbModelsConfigurationSetupReferenceModel;
    }) => Observable<LELodasoftDataAccessDbModelsConfigurationSetupReferenceModel>;
    /**
     * @param { string } page undefined
     * @param { object } [parameters]
     */
    readonly Admin_GetPageResource: (page: string, parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<unknown>;
    /**
     * @param { string } userId undefined
     */
    readonly Admin_GetProfile: (userId: string) => Observable<LELodasoftApiModelsUserProfileModel>;
    /**
     * @param { object } parameters
     */
    readonly Admin_PostSaveProfile: (parameters: {
        body: LELodasoftApiModelsUserProfileModel;
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Admin_WizardEverythingElse: (parameters: {
        body: LELodasoftApiModelsAdminWizardEverythingElseRequestModel;
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Admin_GetCurrentReleaseNotes: (parameters: {
        query: {
            releaseNotesVersion: string;
        };
    }) => Observable<LELodasoftCommonModelsReleaseNotesReleaseNotesViewModel>;
    /**
     * @param { object } parameters
     */
    readonly Admin_ViewedReleaseNotes: (parameters: {
        query: {
            releaseNotesVersion: string;
        };
    }) => Observable<unknown>;
    readonly Admin_GetReleaseNotes: () => Observable<Array<LELodasoftCommonModelsReleaseNotesReleaseNotesViewModel>>;
    /**
     * @param { object } parameters
     */
    readonly Admin_InsertReleaseNotes: (parameters: {
        body: LELodasoftCommonModelsReleaseNotesReleaseNotesViewModel;
    }) => Observable<LELodasoftCommonModelsReleaseNotesReleaseNotesViewModel>;
    /**
     * @param { number } id undefined
     * @param { object } parameters
     */
    readonly Admin_UpdateReleaseNotes: (id: number, parameters: {
        body: LELodasoftCommonModelsReleaseNotesReleaseNotesViewModel;
    }) => Observable<LELodasoftCommonModelsReleaseNotesReleaseNotesViewModel>;
    /**
     * @param { number } id undefined
     */
    readonly Admin_DeleteReleaseNotes: (id: number) => Observable<unknown>;
    /**
     * @param { object } [parameters]
     */
    readonly Admin_GetPermissionMenu: (parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<LELodasoftApiModelsAdminPermissionMenu>;
    readonly Admin_GetAllTable: () => Observable<{
        [key: string]: {
            [key: string]: string;
        };
    }>;
    /**
     * @param { object } [parameters]
     */
    readonly Admin_GetAllUserModel: (parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<Array<LELodasoftApiModelsAdminUser_View_AdminPage>>;
    /**
     * @param { object } parameters
     */
    readonly Admin_UpdateUserModel: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftDataAccessDbModelsUserProfile;
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Admin_InsertUserModel: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftDataAccessDbModelsUserProfile;
    }) => Observable<LELodasoftDataAccessDbModelsUserProfile>;
    /**
     * @param { string } id undefined
     * @param { object } [parameters]
     */
    readonly Admin_DeleteUserModel: (id: string, parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<string>;
    readonly Admin_GetAllCompanyModel: () => Observable<Array<LELodasoftDataAccessDbModelsConfigurationCompanyModel>>;
    /**
     * @param { object } parameters
     */
    readonly Admin_UpdateCompanyModel: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftDataAccessDbModelsConfigurationCompanyModel;
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Admin_InsertCompanyModel: (parameters: {
        body: LELodasoftDataAccessDbModelsConfigurationCompanyModel;
    }) => Observable<LELodasoftDataAccessDbModelsConfigurationCompanyModel>;
    /**
     * @param { number } id undefined
     */
    readonly Admin_DeleteCompanyModel: (id: number) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Admin_GetCheckRegister: (parameters: {
        body: LELodasoftApiControllersAdminControllerCheckRegisterModel;
    }) => Observable<unknown>;
    /**
     * @param { string } userId undefined
     * @param { object } [parameters]
     */
    readonly Admin_DeleteInvite: (userId: string, parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<unknown>;
    /**
     * @param { string } userId undefined
     * @param { object } [parameters]
     */
    readonly Admin_ResendInvite: (userId: string, parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Admin_InviteUser: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftApiModelsAdminInviteViewModel;
    }) => Observable<LELodasoftDataAccessDbModelsUserProfile>;
    /**
     * @param { object } [parameters]
     */
    readonly Admin_GetAllInvite: (parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<Array<LELodasoftApiModelsAdminInviteViewModel>>;
    /**
     * @param { object } [parameters]
     */
    readonly Admin_ImportListUserForCompany: (parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<LELodasoftApiModelsAdminInviteViewModel>;
    /**
     * @param { object } [parameters]
     */
    readonly Admin_GetAllRoleModel: (parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationRoleModel>>;
    /**
     * @param { object } parameters
     */
    readonly Admin_UpdateRoleModel: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftDataAccessDbModelsConfigurationRoleModel;
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Admin_InsertRoleModel: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftDataAccessDbModelsConfigurationRoleModel;
    }) => Observable<LELodasoftDataAccessDbModelsConfigurationRoleModel>;
    /**
     * @param { number } id undefined
     * @param { object } [parameters]
     */
    readonly Admin_DeleteRoleModel: (id: number, parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Admin_UpdateRoleOrder: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: Array<unknown>;
    }) => Observable<unknown>;
    /**
     * @param { object } [parameters]
     */
    readonly Admin_GetCompanyAndRoleAndUserAligment: (parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<unknown>;
    /**
     * @param { object } [parameters]
     */
    readonly Admin_GetAllAlignmentModel: (parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Admin_UpdateAlignmentModel: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: unknown;
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Admin_InsertAlignmentModel: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: unknown;
    }) => Observable<unknown>;
    /**
     * @param { string } groupnumber undefined
     * @param { object } [parameters]
     */
    readonly Admin_DeleteAlignmentModel: (groupnumber: string, parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<unknown>;
    /**
     * @param { object } [parameters]
     */
    readonly Admin_GetAllLeadStatusModel: (parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationLoanStatusModel>>;
    /**
     * @param { number } leadStatusId undefined
     * @param { object } [parameters]
     */
    readonly Admin_GetLeadStatus: (leadStatusId: number, parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<unknown>;
    /**
     * @param { number } LoanPurposeId undefined
     * @param { object } [parameters]
     */
    readonly Admin_GetLeadStatusByLoanPurposeId: (LoanPurposeId: number, parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationLoanStatusModel>>;
    /**
     * @param { object } parameters
     */
    readonly Admin_UpdateLeadStatusModel: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftDataAccessDbModelsConfigurationLoanStatusModel;
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Admin_InsertLeadStatusModel: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftDataAccessDbModelsConfigurationLoanStatusModel;
    }) => Observable<LELodasoftDataAccessDbModelsConfigurationLoanStatusModel>;
    /**
     * @param { number } loanStatusId undefined
     * @param { number } loanPurposeId undefined
     * @param { string } associate undefined
     * @param { object } [parameters]
     */
    readonly Admin_SaveAssociateLeadStatus: (loanStatusId: number, loanPurposeId: number, associate: string, parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel>;
    /**
     * @param { object } parameters
     */
    readonly Admin_SaveLeadStatusFlow: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel;
    }) => Observable<LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel>;
    /**
     * @param { number } id undefined
     * @param { object } [parameters]
     */
    readonly Admin_DeleteLeadStatusModel: (id: number, parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Admin_UpdateLeadOrder: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: Array<unknown>;
    }) => Observable<unknown>;
    /**
     * @param { object } [parameters]
     */
    readonly Admin_GetAllLoanStatusModel: (parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationLoanStatusModel>>;
    /**
     * @param { number } loanStatusId undefined
     * @param { object } [parameters]
     */
    readonly Admin_GetLoanStatus: (loanStatusId: number, parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<unknown>;
    /**
     * @param { number } LoanPurposeId undefined
     * @param { object } [parameters]
     */
    readonly Admin_GetLoanStatusByLoanTypeId: (LoanPurposeId: number, parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationLoanStatusModel>>;
    /**
     * @param { object } parameters
     */
    readonly Admin_UpdateLoanStatusModel: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftDataAccessDbModelsConfigurationLoanStatusModel;
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Admin_InsertLoanStatusModel: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftDataAccessDbModelsConfigurationLoanStatusModel;
    }) => Observable<LELodasoftDataAccessDbModelsConfigurationLoanStatusModel>;
    /**
     * @param { number } loanPurposeId undefined
     * @param { number } loanStatusId undefined
     * @param { string } associate undefined
     * @param { object } [parameters]
     */
    readonly Admin_SaveAssociateLoanStatus: (loanPurposeId: number, loanStatusId: number, associate: string, parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel>;
    /**
     * @param { object } parameters
     */
    readonly Admin_SaveLoanStatusFlow: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel;
    }) => Observable<LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel>;
    /**
     * @param { number } id undefined
     * @param { object } [parameters]
     */
    readonly Admin_DeleteLoanStatusModel: (id: number, parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Admin_UpdateLoanOrder: (parameters: {
        query?: {
            companyId: Option<number>;
            leadStatus: Option<boolean>;
        };
        body: Array<unknown>;
    }) => Observable<unknown>;
    /**
     * @param { object } [parameters]
     */
    readonly Admin_GetAllLoanTypeModel: (parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationLoanTypeModel>>;
    /**
     * @param { object } parameters
     */
    readonly Admin_UpdateLoanTypeModel: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftDataAccessDbModelsConfigurationLoanTypeModel;
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Admin_InsertLoanTypeModel: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftDataAccessDbModelsConfigurationLoanTypeModel;
    }) => Observable<LELodasoftDataAccessDbModelsConfigurationLoanTypeModel>;
    /**
     * @param { number } id undefined
     * @param { object } [parameters]
     */
    readonly Admin_DeleteLoanTypeModel: (id: number, parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Admin_UpdateLoanTypeOrder: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: Array<unknown>;
    }) => Observable<unknown>;
    /**
     * @param { object } [parameters]
     */
    readonly Admin_GetAllLoanPurposeModel: (parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationLoanPurposeModel>>;
    /**
     * @param { object } parameters
     */
    readonly Admin_UpdateLoanPurposeModel: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftDataAccessDbModelsConfigurationLoanPurposeModel;
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Admin_InsertLoanPurposeModel: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftDataAccessDbModelsConfigurationLoanPurposeModel;
    }) => Observable<LELodasoftDataAccessDbModelsConfigurationLoanPurposeModel>;
    /**
     * @param { number } id undefined
     * @param { object } [parameters]
     */
    readonly Admin_DeleteLoanPurposeModel: (id: number, parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Admin_UpdateLoanPurposeOrder: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: Array<unknown>;
    }) => Observable<unknown>;
    /**
     * @param { object } [parameters]
     */
    readonly Admin_GetAllLeadStatusAssociations: (parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel>>;
    /**
     * @param { number } loanPurposeId undefined
     * @param { object } [parameters]
     */
    readonly Admin_GetAllLeadStatusAssociationsByLoanPurpose: (loanPurposeId: number, parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel>>;
    /**
     * @param { object } parameters
     */
    readonly Admin_UpdateLeadStatusAssociation: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel;
    }) => Observable<unknown>;
    /**
     * @param { number } id undefined
     * @param { object } [parameters]
     */
    readonly Admin_DeleteLeadStatusAssociation: (id: number, parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Admin_InsertLeadStatusAssociation: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel;
    }) => Observable<LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel>;
    /**
     * @param { number } loanPurposeId undefined
     * @param { object } parameters
     */
    readonly Admin_UpdateLeadStatusFlowOrder: (loanPurposeId: number, parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: Array<unknown>;
    }) => Observable<unknown>;
    /**
     * @param { object } [parameters]
     */
    readonly Admin_GetAllLoanStatusAssociations: (parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel>>;
    /**
     * @param { number } loanPurposeId undefined
     * @param { object } [parameters]
     */
    readonly Admin_GetAllLoanStatusAssociationsByLoanPurpose: (loanPurposeId: number, parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel>>;
    /**
     * @param { object } parameters
     */
    readonly Admin_UpdateLoanStatusAssociation: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel;
    }) => Observable<unknown>;
    /**
     * @param { number } id undefined
     * @param { object } [parameters]
     */
    readonly Admin_DeleteLoanStatusAssociation: (id: number, parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Admin_InsertLoanStatusAssociation: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel;
    }) => Observable<LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel>;
    /**
     * @param { number } loanPurposeId undefined
     * @param { object } parameters
     */
    readonly Admin_UpdateLoanStatusFlowOrder: (loanPurposeId: number, parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: Array<unknown>;
    }) => Observable<unknown>;
    /**
     * @param { object } [parameters]
     */
    readonly Admin_GetAllTaskModel: (parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<Array<LELodasoftCommonModelsConfigurationTaskViewModel>>;
    /**
     * @param { object } [parameters]
     */
    readonly Admin_GetLeadAllTaskModel: (parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<Array<LELodasoftCommonModelsConfigurationTaskViewModel>>;
    /**
     * @param { number } taskId undefined
     * @param { object } [parameters]
     */
    readonly Admin_GetTaskById: (taskId: number, parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Admin_UpdateTaskModel: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftCommonModelsConfigurationTaskViewModel;
    }) => Observable<unknown>;
    /**
     * @param { number } taskId undefined
     * @param { string } subTasks undefined
     * @param { object } [parameters]
     */
    readonly Admin_UpdateTaskSubTask: (taskId: number, subTasks: string, parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Admin_InsertTaskModel: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftCommonModelsConfigurationTaskViewModel;
    }) => Observable<LELodasoftCommonModelsConfigurationTaskViewModel>;
    /**
     * @param { number } templateCompanyId undefined
     * @param { number } templateTaskId undefined
     * @param { object } parameters
     */
    readonly Admin_InsertTaskModelFromTemplate: (templateCompanyId: number, templateTaskId: number, parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftCommonModelsConfigurationTaskViewModel;
    }) => Observable<LELodasoftCommonModelsConfigurationTaskViewModel>;
    /**
     * @param { number } id undefined
     * @param { object } [parameters]
     */
    readonly Admin_DeleteTaskModel: (id: number, parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<unknown>;
    readonly Admin_GetGlobalEmailMergeFieldsModel: () => Observable<Array<LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModel>>;
    /**
     * @param { object } parameters
     */
    readonly Admin_UpdateGlobalEmailMergeFieldsModel: (parameters: {
        body: LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModel;
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Admin_InsertGlobalEmailMergeFieldsModel: (parameters: {
        body: LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModel;
    }) => Observable<LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModel>;
    /**
     * @param { number } id undefined
     */
    readonly Admin_DeleteGlobalEmailMergeFieldsModel: (id: number) => Observable<unknown>;
    /**
     * @param { object } [parameters]
     */
    readonly Admin_GetAllEmailCampaignTriggerModel: (parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<Array<LELodasoftApiModelsAdminGetAllEmailCampaignTrigger>>;
    /**
     * @param { object } parameters
     */
    readonly Admin_UpdateEmailCampaignTriggerModel: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftApiModelsAdminEmailCampaignTriggerModelView;
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Admin_InsertEmailCampaignTrigger: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftApiModelsAdminEmailCampaignTriggerModelView;
    }) => Observable<LELodasoftApiModelsAdminEmailCampaignTriggerModelView>;
    /**
     * @param { object } parameters
     */
    readonly Admin_InsertChildEmailCampaignTrigger: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftApiModelsAdminEmailCampaignTriggerModelView;
    }) => Observable<LELodasoftApiModelsAdminEmailCampaignTriggerModelView>;
    /**
     * @param { number } id undefined
     * @param { object } [parameters]
     */
    readonly Admin_DeleteEmailCampaignTriggerModel: (id: number, parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<unknown>;
    /**
     * @param { object } [parameters]
     */
    readonly Admin_GetAllTaskCategoryModel: (parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationCharacteristicModel>>;
    /**
     * @param { object } parameters
     */
    readonly Admin_InsertTaskCategoryModel: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftDataAccessDbModelsConfigurationCharacteristicModel;
    }) => Observable<LELodasoftDataAccessDbModelsConfigurationCharacteristicModel>;
    /**
     * @param { number } id undefined
     * @param { object } [parameters]
     */
    readonly Admin_DeleteTaskCategoryModel: (id: number, parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Admin_UpdateTaskCategoryModel: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftDataAccessDbModelsConfigurationCharacteristicModel;
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Admin_UpdateTaskCategoryOrder: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: Array<unknown>;
    }) => Observable<unknown>;
    /**
     * @param { string } type undefined
     * @param { object } [parameters]
     */
    readonly Admin_GetCustomTaskModelByType: (type: string, parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationCustomTaskModel>>;
    /**
     * @param { object } parameters
     */
    readonly Admin_InsertCustomTaskModel: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftCommonModelsConfigurationCustomTaskViewModel;
    }) => Observable<LELodasoftCommonModelsConfigurationCustomTaskViewModel>;
    /**
     * @param { number } id undefined
     * @param { object } [parameters]
     */
    readonly Admin_DeleteCustomTaskModel: (id: number, parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Admin_UpdateCustomTaskModel: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftCommonModelsConfigurationCustomTaskViewModel;
    }) => Observable<unknown>;
    /**
     * @param { boolean } dbOnly undefined
     * @param { object } [parameters]
     */
    readonly Admin_GetAllDocumentModel: (dbOnly: boolean, parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationDocumentTypeModel>>;
    /**
     * @param { object } parameters
     */
    readonly Admin_UpdateDocumentModel: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftDataAccessDbModelsConfigurationDocumentTypeModel;
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Admin_InsertDocumentModel: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftDataAccessDbModelsConfigurationDocumentTypeModel;
    }) => Observable<LELodasoftDataAccessDbModelsConfigurationDocumentTypeModel>;
    /**
     * @param { number } id undefined
     * @param { object } [parameters]
     */
    readonly Admin_DeleteDocumentModel: (id: number, parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Admin_UpdateDocumentOrder: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: Array<unknown>;
    }) => Observable<unknown>;
    /**
     * @param { object } [parameters]
     */
    readonly Admin_GetAllAgentType: (parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationAgentTypeModel>>;
    /**
     * @param { object } parameters
     */
    readonly Admin_UpdateAgentType: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftDataAccessDbModelsConfigurationAgentTypeModel;
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Admin_InsertAgentType: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftDataAccessDbModelsConfigurationAgentTypeModel;
    }) => Observable<LELodasoftDataAccessDbModelsConfigurationAgentTypeModel>;
    /**
     * @param { number } id undefined
     * @param { object } [parameters]
     */
    readonly Admin_DeleteAgentType: (id: number, parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Admin_UpdateAgentTypeOrder: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: Array<unknown>;
    }) => Observable<unknown>;
    /**
     * @param { object } [parameters]
     */
    readonly Admin_GetAllLender: (parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<Array<LELodasoftApiModelsAdminLenderModelView>>;
    /**
     * @param { object } parameters
     */
    readonly Admin_UpdateLender: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftApiModelsAdminLenderModelView;
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Admin_InsertLender: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftApiModelsAdminLenderModelView;
    }) => Observable<LELodasoftApiModelsAdminLenderModelView>;
    /**
     * @param { number } id undefined
     * @param { object } [parameters]
     */
    readonly Admin_DeleteLender: (id: number, parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<unknown>;
    /**
     * @param { object } [parameters]
     */
    readonly Admin_GetAllStackingOrder: (parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<Array<LELodasoftDataAccessDbModelsAdminStackingOrderModel>>;
    /**
     * @param { number } id undefined
     * @param { object } [parameters]
     */
    readonly Admin_GetStackingOrderInfo: (id: number, parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<LELodasoftDataAccessDbModelsAdminStackingOrderModel>;
    /**
     * @param { object } parameters
     */
    readonly Admin_UpdateStackingOrder: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftDataAccessDbModelsAdminStackingOrderModel;
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Admin_InsertStackingOrder: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftDataAccessDbModelsAdminStackingOrderModel;
    }) => Observable<LELodasoftDataAccessDbModelsAdminStackingOrderModel>;
    /**
     * @param { number } id undefined
     * @param { object } [parameters]
     */
    readonly Admin_DeleteStackingOrder: (id: number, parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Admin_PostSaveOrgChart: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: Array<LELodasoftApiModelsAdminOrgChartModel>;
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Admin_SaveSystemLevel: (parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: LELodasoftApiModelsAdminSystemLevel;
    }) => Observable<LELodasoftApiModelsAdminSystemLevel>;
    /**
     * @param { object } [parameters]
     */
    readonly Admin_GetSystemLevel: (parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<LELodasoftApiModelsAdminSystemLevel>;
    /**
     * @param { number } companyId undefined
     */
    readonly Admin_GetExportFileNaming: (companyId: number) => Observable<LELodasoftDataAccessDbModelsConfigurationConfigurationModel>;
    /**
     * @param { number } CheckListItemId undefined
     * @param { object } parameters
     */
    readonly Admin_UpdateCheckList: (CheckListItemId: number, parameters: {
        query?: {
            companyId: Option<number>;
        };
        body: Array<LELodasoftDataAccessDbModelsConfigurationChecklistModel>;
    }) => Observable<unknown>;
    /**
     * @param { number } CheckListItemId undefined
     * @param { object } [parameters]
     */
    readonly Admin_AllCheckList: (CheckListItemId: number, parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<unknown>;
};
export declare const adminController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, AdminController>;
