import { Option } from 'fp-ts/lib/Option';
import { asks } from 'fp-ts/lib/Reader';
import { array, boolean, dictionary, number, partial, string, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';
import { Observable } from 'rxjs';

import { TAPIClient } from '../client/client';
import {
	LELodasoftApiControllersAdminControllerCheckRegisterModel,
	LELodasoftApiControllersAdminControllerCheckRegisterModelIO,
} from '../definitions/LELodasoftApiControllersAdminControllerCheckRegisterModel';
import {
	LELodasoftApiModelsAdminEmailCampaignTriggerModelView,
	LELodasoftApiModelsAdminEmailCampaignTriggerModelViewIO,
} from '../definitions/LELodasoftApiModelsAdminEmailCampaignTriggerModelView';
import {
	LELodasoftApiModelsAdminGetAllEmailCampaignTrigger,
	LELodasoftApiModelsAdminGetAllEmailCampaignTriggerIO,
} from '../definitions/LELodasoftApiModelsAdminGetAllEmailCampaignTrigger';
import {
	LELodasoftApiModelsAdminInviteViewModel,
	LELodasoftApiModelsAdminInviteViewModelIO,
} from '../definitions/LELodasoftApiModelsAdminInviteViewModel';
import {
	LELodasoftApiModelsAdminLenderModelView,
	LELodasoftApiModelsAdminLenderModelViewIO,
} from '../definitions/LELodasoftApiModelsAdminLenderModelView';
import {
	LELodasoftApiModelsAdminOrgChartModel,
	LELodasoftApiModelsAdminOrgChartModelIO,
} from '../definitions/LELodasoftApiModelsAdminOrgChartModel';
import {
	LELodasoftApiModelsAdminPermissionMenu,
	LELodasoftApiModelsAdminPermissionMenuIO,
} from '../definitions/LELodasoftApiModelsAdminPermissionMenu';
import {
	LELodasoftApiModelsAdminQuestionTaskAnswerDto,
	LELodasoftApiModelsAdminQuestionTaskAnswerDtoIO,
} from '../definitions/LELodasoftApiModelsAdminQuestionTaskAnswerDto';
import {
	LELodasoftApiModelsAdminSystemLevel,
	LELodasoftApiModelsAdminSystemLevelIO,
} from '../definitions/LELodasoftApiModelsAdminSystemLevel';
import {
	LELodasoftApiModelsAdminUser_View_AdminPage,
	LELodasoftApiModelsAdminUser_View_AdminPageIO,
} from '../definitions/LELodasoftApiModelsAdminUser_View_AdminPage';
import {
	LELodasoftApiModelsAdminWizardEverythingElseRequestModel,
	LELodasoftApiModelsAdminWizardEverythingElseRequestModelIO,
} from '../definitions/LELodasoftApiModelsAdminWizardEverythingElseRequestModel';
import {
	LELodasoftApiModelsUserProfileModel,
	LELodasoftApiModelsUserProfileModelIO,
} from '../definitions/LELodasoftApiModelsUserProfileModel';
import {
	LELodasoftCommonModelsConfigurationCustomTaskViewModel,
	LELodasoftCommonModelsConfigurationCustomTaskViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationCustomTaskViewModel';
import {
	LELodasoftCommonModelsConfigurationTaskViewModel,
	LELodasoftCommonModelsConfigurationTaskViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationTaskViewModel';
import {
	LELodasoftCommonModelsReleaseNotesReleaseNotesViewModel,
	LELodasoftCommonModelsReleaseNotesReleaseNotesViewModelIO,
} from '../definitions/LELodasoftCommonModelsReleaseNotesReleaseNotesViewModel';
import {
	LELodasoftDataAccessDbModelsAdminStackingOrderModel,
	LELodasoftDataAccessDbModelsAdminStackingOrderModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsAdminStackingOrderModel';
import {
	LELodasoftDataAccessDbModelsConfigurationAgentTypeModel,
	LELodasoftDataAccessDbModelsConfigurationAgentTypeModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationAgentTypeModel';
import {
	LELodasoftDataAccessDbModelsConfigurationCharacteristicModel,
	LELodasoftDataAccessDbModelsConfigurationCharacteristicModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationCharacteristicModel';
import {
	LELodasoftDataAccessDbModelsConfigurationChecklistItemModel,
	LELodasoftDataAccessDbModelsConfigurationChecklistItemModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationChecklistItemModel';
import {
	LELodasoftDataAccessDbModelsConfigurationChecklistModel,
	LELodasoftDataAccessDbModelsConfigurationChecklistModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationChecklistModel';
import {
	LELodasoftDataAccessDbModelsConfigurationCompanyModel,
	LELodasoftDataAccessDbModelsConfigurationCompanyModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationCompanyModel';
import {
	LELodasoftDataAccessDbModelsConfigurationConfigurationModel,
	LELodasoftDataAccessDbModelsConfigurationConfigurationModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationConfigurationModel';
import {
	LELodasoftDataAccessDbModelsConfigurationCustomTaskModel,
	LELodasoftDataAccessDbModelsConfigurationCustomTaskModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationCustomTaskModel';
import {
	LELodasoftDataAccessDbModelsConfigurationDocumentTypeModel,
	LELodasoftDataAccessDbModelsConfigurationDocumentTypeModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationDocumentTypeModel';
import {
	LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModel,
	LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModel';
import {
	LELodasoftDataAccessDbModelsConfigurationLoanPurposeModel,
	LELodasoftDataAccessDbModelsConfigurationLoanPurposeModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationLoanPurposeModel';
import {
	LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel,
	LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel';
import {
	LELodasoftDataAccessDbModelsConfigurationLoanStatusModel,
	LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationLoanStatusModel';
import {
	LELodasoftDataAccessDbModelsConfigurationLoanTypeModel,
	LELodasoftDataAccessDbModelsConfigurationLoanTypeModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationLoanTypeModel';
import {
	LELodasoftDataAccessDbModelsConfigurationProductModel,
	LELodasoftDataAccessDbModelsConfigurationProductModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationProductModel';
import {
	LELodasoftDataAccessDbModelsConfigurationQATaskModel,
	LELodasoftDataAccessDbModelsConfigurationQATaskModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationQATaskModel';
import {
	LELodasoftDataAccessDbModelsConfigurationQuestionModel,
	LELodasoftDataAccessDbModelsConfigurationQuestionModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationQuestionModel';
import {
	LELodasoftDataAccessDbModelsConfigurationRoleModel,
	LELodasoftDataAccessDbModelsConfigurationRoleModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationRoleModel';
import {
	LELodasoftDataAccessDbModelsConfigurationSetupReferenceModel,
	LELodasoftDataAccessDbModelsConfigurationSetupReferenceModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationSetupReferenceModel';
import {
	LELodasoftDataAccessDbModelsUserProfile,
	LELodasoftDataAccessDbModelsUserProfileIO,
} from '../definitions/LELodasoftDataAccessDbModelsUserProfile';
import { decodeAndMap, unknownType } from '../utils/utils';

export type AdminController = {
	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllByCompanyId: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationProductModel>>;

	/**
	 * @param { number } productId undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_GetProductById: (
		productId: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<LELodasoftDataAccessDbModelsConfigurationProductModel>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateProduct: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationProductModel;
	}) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertProduct: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationProductModel;
	}) => Observable<unknown>;

	/**
	 * @param { number } id undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteProduct: (
		id: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<unknown>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllQuestion: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationQuestionModel>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateQuestion: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationQuestionModel;
	}) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertQuestion: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationQuestionModel;
	}) => Observable<unknown>;

	/**
	 * @param { number } id undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteQuestion: (
		id: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<unknown>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_QuestionAnswerGroupByQuestion: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<unknown>;

	/**
	 * @param { number } questionId undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllQuestionAnswer: (
		questionId: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<Array<LELodasoftApiModelsAdminQuestionTaskAnswerDto>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateQuestionAnswer: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftApiModelsAdminQuestionTaskAnswerDto;
	}) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertQuestionAnswer: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftApiModelsAdminQuestionTaskAnswerDto;
	}) => Observable<unknown>;

	/**
	 * @param { number } id undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteQuestionAnswer: (
		id: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<unknown>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllQATaskModel: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationQATaskModel>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateQATaskModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationQATaskModel;
	}) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertQATaskModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationQATaskModel;
	}) => Observable<LELodasoftDataAccessDbModelsConfigurationQATaskModel>;

	/**
	 * @param { number } id undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteQATaskModel: (
		id: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<unknown>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllCheckListItem: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationChecklistItemModel>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateCheckListItem: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationChecklistItemModel;
	}) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertCheckListItem: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationChecklistItemModel;
	}) => Observable<LELodasoftDataAccessDbModelsConfigurationChecklistItemModel>;

	/**
	 * @param { number } id undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteCheckListItem: (
		id: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<unknown>;

	/**
	 * @param { number } TemplateCompanyId undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_GetSetupReferenceByTemplateCompany_CompanyId: (
		TemplateCompanyId: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationSetupReferenceModel>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpsertSetupReference: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationSetupReferenceModel;
	}) => Observable<LELodasoftDataAccessDbModelsConfigurationSetupReferenceModel>;

	/**
	 * @param { string } page undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_GetPageResource: (
		page: string,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<unknown>;

	/**
	 * @param { string } userId undefined
	 */
	readonly Admin_GetProfile: (userId: string) => Observable<LELodasoftApiModelsUserProfileModel>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_PostSaveProfile: (parameters: { body: LELodasoftApiModelsUserProfileModel }) => Observable<unknown>;

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
		query: { releaseNotesVersion: string };
	}) => Observable<LELodasoftCommonModelsReleaseNotesReleaseNotesViewModel>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_ViewedReleaseNotes: (parameters: { query: { releaseNotesVersion: string } }) => Observable<unknown>;

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
	readonly Admin_UpdateReleaseNotes: (
		id: number,
		parameters: { body: LELodasoftCommonModelsReleaseNotesReleaseNotesViewModel },
	) => Observable<LELodasoftCommonModelsReleaseNotesReleaseNotesViewModel>;

	/**
	 * @param { number } id undefined
	 */
	readonly Admin_DeleteReleaseNotes: (id: number) => Observable<unknown>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetPermissionMenu: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<LELodasoftApiModelsAdminPermissionMenu>;

	readonly Admin_GetAllTable: () => Observable<{ [key: string]: { [key: string]: string } }>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllUserModel: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<Array<LELodasoftApiModelsAdminUser_View_AdminPage>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateUserModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsUserProfile;
	}) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertUserModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsUserProfile;
	}) => Observable<LELodasoftDataAccessDbModelsUserProfile>;

	/**
	 * @param { string } id undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteUserModel: (
		id: string,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<string>;

	readonly Admin_GetAllCompanyModel: () => Observable<Array<LELodasoftDataAccessDbModelsConfigurationCompanyModel>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateCompanyModel: (parameters: {
		query?: { companyId: Option<number> };
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
	readonly Admin_DeleteInvite: (
		userId: string,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<unknown>;

	/**
	 * @param { string } userId undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_ResendInvite: (
		userId: string,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InviteUser: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftApiModelsAdminInviteViewModel;
	}) => Observable<LELodasoftDataAccessDbModelsUserProfile>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllInvite: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<Array<LELodasoftApiModelsAdminInviteViewModel>>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_ImportListUserForCompany: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<LELodasoftApiModelsAdminInviteViewModel>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllRoleModel: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationRoleModel>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateRoleModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationRoleModel;
	}) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertRoleModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationRoleModel;
	}) => Observable<LELodasoftDataAccessDbModelsConfigurationRoleModel>;

	/**
	 * @param { number } id undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteRoleModel: (
		id: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateRoleOrder: (parameters: {
		query?: { companyId: Option<number> };
		body: Array<unknown>;
	}) => Observable<unknown>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetCompanyAndRoleAndUserAligment: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<unknown>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllAlignmentModel: (parameters: { query?: { companyId: Option<number> } }) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateAlignmentModel: (parameters: {
		query?: { companyId: Option<number> };
		body: unknown;
	}) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertAlignmentModel: (parameters: {
		query?: { companyId: Option<number> };
		body: unknown;
	}) => Observable<unknown>;

	/**
	 * @param { string } groupnumber undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteAlignmentModel: (
		groupnumber: string,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<unknown>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllLeadStatusModel: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationLoanStatusModel>>;

	/**
	 * @param { number } leadStatusId undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_GetLeadStatus: (
		leadStatusId: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<unknown>;

	/**
	 * @param { number } LoanPurposeId undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_GetLeadStatusByLoanPurposeId: (
		LoanPurposeId: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationLoanStatusModel>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateLeadStatusModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationLoanStatusModel;
	}) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertLeadStatusModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationLoanStatusModel;
	}) => Observable<LELodasoftDataAccessDbModelsConfigurationLoanStatusModel>;

	/**
	 * @param { number } loanStatusId undefined
	 * @param { number } loanPurposeId undefined
	 * @param { string } associate undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_SaveAssociateLeadStatus: (
		loanStatusId: number,
		loanPurposeId: number,
		associate: string,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_SaveLeadStatusFlow: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel;
	}) => Observable<LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel>;

	/**
	 * @param { number } id undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteLeadStatusModel: (
		id: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateLeadOrder: (parameters: {
		query?: { companyId: Option<number> };
		body: Array<unknown>;
	}) => Observable<unknown>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllLoanStatusModel: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationLoanStatusModel>>;

	/**
	 * @param { number } loanStatusId undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_GetLoanStatus: (
		loanStatusId: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<unknown>;

	/**
	 * @param { number } LoanPurposeId undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_GetLoanStatusByLoanTypeId: (
		LoanPurposeId: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationLoanStatusModel>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateLoanStatusModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationLoanStatusModel;
	}) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertLoanStatusModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationLoanStatusModel;
	}) => Observable<LELodasoftDataAccessDbModelsConfigurationLoanStatusModel>;

	/**
	 * @param { number } loanPurposeId undefined
	 * @param { number } loanStatusId undefined
	 * @param { string } associate undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_SaveAssociateLoanStatus: (
		loanPurposeId: number,
		loanStatusId: number,
		associate: string,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_SaveLoanStatusFlow: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel;
	}) => Observable<LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel>;

	/**
	 * @param { number } id undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteLoanStatusModel: (
		id: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateLoanOrder: (parameters: {
		query?: { companyId: Option<number>; leadStatus: Option<boolean> };
		body: Array<unknown>;
	}) => Observable<unknown>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllLoanTypeModel: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationLoanTypeModel>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateLoanTypeModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationLoanTypeModel;
	}) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertLoanTypeModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationLoanTypeModel;
	}) => Observable<LELodasoftDataAccessDbModelsConfigurationLoanTypeModel>;

	/**
	 * @param { number } id undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteLoanTypeModel: (
		id: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateLoanTypeOrder: (parameters: {
		query?: { companyId: Option<number> };
		body: Array<unknown>;
	}) => Observable<unknown>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllLoanPurposeModel: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationLoanPurposeModel>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateLoanPurposeModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationLoanPurposeModel;
	}) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertLoanPurposeModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationLoanPurposeModel;
	}) => Observable<LELodasoftDataAccessDbModelsConfigurationLoanPurposeModel>;

	/**
	 * @param { number } id undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteLoanPurposeModel: (
		id: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateLoanPurposeOrder: (parameters: {
		query?: { companyId: Option<number> };
		body: Array<unknown>;
	}) => Observable<unknown>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllLeadStatusAssociations: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel>>;

	/**
	 * @param { number } loanPurposeId undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllLeadStatusAssociationsByLoanPurpose: (
		loanPurposeId: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateLeadStatusAssociation: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel;
	}) => Observable<unknown>;

	/**
	 * @param { number } id undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteLeadStatusAssociation: (
		id: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertLeadStatusAssociation: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel;
	}) => Observable<LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel>;

	/**
	 * @param { number } loanPurposeId undefined
	 * @param { object } parameters
	 */
	readonly Admin_UpdateLeadStatusFlowOrder: (
		loanPurposeId: number,
		parameters: { query?: { companyId: Option<number> }; body: Array<unknown> },
	) => Observable<unknown>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllLoanStatusAssociations: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel>>;

	/**
	 * @param { number } loanPurposeId undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllLoanStatusAssociationsByLoanPurpose: (
		loanPurposeId: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateLoanStatusAssociation: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel;
	}) => Observable<unknown>;

	/**
	 * @param { number } id undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteLoanStatusAssociation: (
		id: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertLoanStatusAssociation: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel;
	}) => Observable<LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel>;

	/**
	 * @param { number } loanPurposeId undefined
	 * @param { object } parameters
	 */
	readonly Admin_UpdateLoanStatusFlowOrder: (
		loanPurposeId: number,
		parameters: { query?: { companyId: Option<number> }; body: Array<unknown> },
	) => Observable<unknown>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllTaskModel: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<Array<LELodasoftCommonModelsConfigurationTaskViewModel>>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetLeadAllTaskModel: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<Array<LELodasoftCommonModelsConfigurationTaskViewModel>>;

	/**
	 * @param { number } taskId undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_GetTaskById: (
		taskId: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateTaskModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftCommonModelsConfigurationTaskViewModel;
	}) => Observable<unknown>;

	/**
	 * @param { number } taskId undefined
	 * @param { string } subTasks undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_UpdateTaskSubTask: (
		taskId: number,
		subTasks: string,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertTaskModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftCommonModelsConfigurationTaskViewModel;
	}) => Observable<LELodasoftCommonModelsConfigurationTaskViewModel>;

	/**
	 * @param { number } templateCompanyId undefined
	 * @param { number } templateTaskId undefined
	 * @param { object } parameters
	 */
	readonly Admin_InsertTaskModelFromTemplate: (
		templateCompanyId: number,
		templateTaskId: number,
		parameters: { query?: { companyId: Option<number> }; body: LELodasoftCommonModelsConfigurationTaskViewModel },
	) => Observable<LELodasoftCommonModelsConfigurationTaskViewModel>;

	/**
	 * @param { number } id undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteTaskModel: (
		id: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<unknown>;

	readonly Admin_GetGlobalEmailMergeFieldsModel: () => Observable<
		Array<LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModel>
	>;

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
		query?: { companyId: Option<number> };
	}) => Observable<Array<LELodasoftApiModelsAdminGetAllEmailCampaignTrigger>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateEmailCampaignTriggerModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftApiModelsAdminEmailCampaignTriggerModelView;
	}) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertEmailCampaignTrigger: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftApiModelsAdminEmailCampaignTriggerModelView;
	}) => Observable<LELodasoftApiModelsAdminEmailCampaignTriggerModelView>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertChildEmailCampaignTrigger: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftApiModelsAdminEmailCampaignTriggerModelView;
	}) => Observable<LELodasoftApiModelsAdminEmailCampaignTriggerModelView>;

	/**
	 * @param { number } id undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteEmailCampaignTriggerModel: (
		id: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<unknown>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllTaskCategoryModel: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationCharacteristicModel>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertTaskCategoryModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationCharacteristicModel;
	}) => Observable<LELodasoftDataAccessDbModelsConfigurationCharacteristicModel>;

	/**
	 * @param { number } id undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteTaskCategoryModel: (
		id: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateTaskCategoryModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationCharacteristicModel;
	}) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateTaskCategoryOrder: (parameters: {
		query?: { companyId: Option<number> };
		body: Array<unknown>;
	}) => Observable<unknown>;

	/**
	 * @param { string } type undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_GetCustomTaskModelByType: (
		type: string,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationCustomTaskModel>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertCustomTaskModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftCommonModelsConfigurationCustomTaskViewModel;
	}) => Observable<LELodasoftCommonModelsConfigurationCustomTaskViewModel>;

	/**
	 * @param { number } id undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteCustomTaskModel: (
		id: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateCustomTaskModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftCommonModelsConfigurationCustomTaskViewModel;
	}) => Observable<unknown>;

	/**
	 * @param { boolean } dbOnly undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllDocumentModel: (
		dbOnly: boolean,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationDocumentTypeModel>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateDocumentModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationDocumentTypeModel;
	}) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertDocumentModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationDocumentTypeModel;
	}) => Observable<LELodasoftDataAccessDbModelsConfigurationDocumentTypeModel>;

	/**
	 * @param { number } id undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteDocumentModel: (
		id: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateDocumentOrder: (parameters: {
		query?: { companyId: Option<number> };
		body: Array<unknown>;
	}) => Observable<unknown>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllAgentType: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationAgentTypeModel>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateAgentType: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationAgentTypeModel;
	}) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertAgentType: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationAgentTypeModel;
	}) => Observable<LELodasoftDataAccessDbModelsConfigurationAgentTypeModel>;

	/**
	 * @param { number } id undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteAgentType: (
		id: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateAgentTypeOrder: (parameters: {
		query?: { companyId: Option<number> };
		body: Array<unknown>;
	}) => Observable<unknown>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllLender: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<Array<LELodasoftApiModelsAdminLenderModelView>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateLender: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftApiModelsAdminLenderModelView;
	}) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertLender: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftApiModelsAdminLenderModelView;
	}) => Observable<LELodasoftApiModelsAdminLenderModelView>;

	/**
	 * @param { number } id undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteLender: (
		id: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<unknown>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllStackingOrder: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<Array<LELodasoftDataAccessDbModelsAdminStackingOrderModel>>;

	/**
	 * @param { number } id undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_GetStackingOrderInfo: (
		id: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<LELodasoftDataAccessDbModelsAdminStackingOrderModel>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateStackingOrder: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsAdminStackingOrderModel;
	}) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertStackingOrder: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsAdminStackingOrderModel;
	}) => Observable<LELodasoftDataAccessDbModelsAdminStackingOrderModel>;

	/**
	 * @param { number } id undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteStackingOrder: (
		id: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_PostSaveOrgChart: (parameters: {
		query?: { companyId: Option<number> };
		body: Array<LELodasoftApiModelsAdminOrgChartModel>;
	}) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_SaveSystemLevel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftApiModelsAdminSystemLevel;
	}) => Observable<LELodasoftApiModelsAdminSystemLevel>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetSystemLevel: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<LELodasoftApiModelsAdminSystemLevel>;

	/**
	 * @param { number } companyId undefined
	 */
	readonly Admin_GetExportFileNaming: (
		companyId: number,
	) => Observable<LELodasoftDataAccessDbModelsConfigurationConfigurationModel>;

	/**
	 * @param { number } CheckListItemId undefined
	 * @param { object } parameters
	 */
	readonly Admin_UpdateCheckList: (
		CheckListItemId: number,
		parameters: {
			query?: { companyId: Option<number> };
			body: Array<LELodasoftDataAccessDbModelsConfigurationChecklistModel>;
		},
	) => Observable<unknown>;

	/**
	 * @param { number } CheckListItemId undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_AllCheckList: (
		CheckListItemId: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<unknown>;
};

export const adminController = asks(
	(e: { API_CLIENT: TAPIClient; PREFIX: string }): AdminController => ({
		Admin_GetAllByCompanyId: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/GetAllProductByCompanyId`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(array(LELodasoftDataAccessDbModelsConfigurationProductModelIO)));
		},

		Admin_GetProductById: (productId, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/GetProductById/${encodeURIComponent(number.encode(productId).toString())}`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(LELodasoftDataAccessDbModelsConfigurationProductModelIO));
		},

		Admin_UpdateProduct: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftDataAccessDbModelsConfigurationProductModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/UpdateProduct`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_InsertProduct: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftDataAccessDbModelsConfigurationProductModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/InsertProduct`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_DeleteProduct: (id, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/DeleteProduct/${encodeURIComponent(number.encode(id).toString())}`,
				method: 'DELETE',
				query: encoded.query,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_GetAllQuestion: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/AllQuestion`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(array(LELodasoftDataAccessDbModelsConfigurationQuestionModelIO)));
		},

		Admin_UpdateQuestion: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftDataAccessDbModelsConfigurationQuestionModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/UpdateQuestion`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_InsertQuestion: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftDataAccessDbModelsConfigurationQuestionModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/InsertQuestion`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_DeleteQuestion: (id, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/DeleteQuestion/${encodeURIComponent(number.encode(id).toString())}`,
				method: 'DELETE',
				query: encoded.query,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_QuestionAnswerGroupByQuestion: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/QuestionAnswerGroupByQuestion`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_GetAllQuestionAnswer: (questionId, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/AllQuestionAnswer/${encodeURIComponent(
					number.encode(questionId).toString(),
				)}`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(array(LELodasoftApiModelsAdminQuestionTaskAnswerDtoIO)));
		},

		Admin_UpdateQuestionAnswer: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftApiModelsAdminQuestionTaskAnswerDtoIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/UpdateQuestionAnswer`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_InsertQuestionAnswer: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftApiModelsAdminQuestionTaskAnswerDtoIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/InsertQuestionAnswer`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_DeleteQuestionAnswer: (id, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/DeleteQuestionAnswer/${encodeURIComponent(number.encode(id).toString())}`,
				method: 'DELETE',
				query: encoded.query,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_GetAllQATaskModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/AllQATaskModel`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(array(LELodasoftDataAccessDbModelsConfigurationQATaskModelIO)));
		},

		Admin_UpdateQATaskModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftDataAccessDbModelsConfigurationQATaskModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/UpdateQATaskModel`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_InsertQATaskModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftDataAccessDbModelsConfigurationQATaskModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/InsertQATaskModel`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftDataAccessDbModelsConfigurationQATaskModelIO));
		},

		Admin_DeleteQATaskModel: (id, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/DeleteQATaskModel/${encodeURIComponent(number.encode(id).toString())}`,
				method: 'DELETE',
				query: encoded.query,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_GetAllCheckListItem: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/AllCheckListItem`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(array(LELodasoftDataAccessDbModelsConfigurationChecklistItemModelIO)));
		},

		Admin_UpdateCheckListItem: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftDataAccessDbModelsConfigurationChecklistItemModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/UpdateCheckListItem`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_InsertCheckListItem: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftDataAccessDbModelsConfigurationChecklistItemModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/InsertCheckListItem`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftDataAccessDbModelsConfigurationChecklistItemModelIO));
		},

		Admin_DeleteCheckListItem: (id, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/DeleteCheckListItem/${encodeURIComponent(number.encode(id).toString())}`,
				method: 'DELETE',
				query: encoded.query,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_GetSetupReferenceByTemplateCompany_CompanyId: (TemplateCompanyId, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/GetSetupReferenceByTemplateCompany_CompanyId/${encodeURIComponent(
					number.encode(TemplateCompanyId).toString(),
				)}`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(array(LELodasoftDataAccessDbModelsConfigurationSetupReferenceModelIO)));
		},

		Admin_UpsertSetupReference: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftDataAccessDbModelsConfigurationSetupReferenceModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/UpsertSetupReference`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftDataAccessDbModelsConfigurationSetupReferenceModelIO));
		},

		Admin_GetPageResource: (page, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/PageResource/${encodeURIComponent(string.encode(page).toString())}`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_GetProfile: userId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/Profile/${encodeURIComponent(string.encode(userId).toString())}`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftApiModelsUserProfileModelIO));
		},

		Admin_PostSaveProfile: parameters => {
			const encoded = partial({ body: LELodasoftApiModelsUserProfileModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/SaveProfile`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_WizardEverythingElse: parameters => {
			const encoded = partial({ body: LELodasoftApiModelsAdminWizardEverythingElseRequestModelIO }).encode(
				parameters,
			);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/WizardEverythingElse`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_GetCurrentReleaseNotes: parameters => {
			const encoded = partial({ query: type({ releaseNotesVersion: string }) }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/CurrentReleaseNotes`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(LELodasoftCommonModelsReleaseNotesReleaseNotesViewModelIO));
		},

		Admin_ViewedReleaseNotes: parameters => {
			const encoded = partial({ query: type({ releaseNotesVersion: string }) }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/ViewedReleaseNotes`,
				method: 'POST',
				query: encoded.query,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_GetReleaseNotes: () => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/AllReleaseNotes`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsReleaseNotesReleaseNotesViewModelIO)));
		},

		Admin_InsertReleaseNotes: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsReleaseNotesReleaseNotesViewModelIO }).encode(
				parameters,
			);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/ReleaseNotes`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsReleaseNotesReleaseNotesViewModelIO));
		},

		Admin_UpdateReleaseNotes: (id, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsReleaseNotesReleaseNotesViewModelIO }).encode(
				parameters,
			);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/ReleaseNotes/${encodeURIComponent(number.encode(id).toString())}`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsReleaseNotesReleaseNotesViewModelIO));
		},

		Admin_DeleteReleaseNotes: id => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/ReleaseNotes/${encodeURIComponent(number.encode(id).toString())}`,
				method: 'DELETE',
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_GetPermissionMenu: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/PermissionMenu`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(LELodasoftApiModelsAdminPermissionMenuIO));
		},

		Admin_GetAllTable: () => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/AllTable`,
				method: 'GET',
			}).pipe(decodeAndMap(dictionary(string, dictionary(string, string))));
		},

		Admin_GetAllUserModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/AllUserModel`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(array(LELodasoftApiModelsAdminUser_View_AdminPageIO)));
		},

		Admin_UpdateUserModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftDataAccessDbModelsUserProfileIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/UpdateUserModel`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_InsertUserModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftDataAccessDbModelsUserProfileIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/InsertUserModel`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftDataAccessDbModelsUserProfileIO));
		},

		Admin_DeleteUserModel: (id, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/DeleteUserModel/${encodeURIComponent(string.encode(id).toString())}`,
				method: 'DELETE',
				query: encoded.query,
			}).pipe(decodeAndMap(string));
		},

		Admin_GetAllCompanyModel: () => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/AllCompanyModel`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftDataAccessDbModelsConfigurationCompanyModelIO)));
		},

		Admin_UpdateCompanyModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftDataAccessDbModelsConfigurationCompanyModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/UpdateCompanyModel`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_InsertCompanyModel: parameters => {
			const encoded = partial({ body: LELodasoftDataAccessDbModelsConfigurationCompanyModelIO }).encode(
				parameters,
			);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/InsertCompanyModel`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftDataAccessDbModelsConfigurationCompanyModelIO));
		},

		Admin_DeleteCompanyModel: id => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/DeleteCompanyModel/${encodeURIComponent(number.encode(id).toString())}`,
				method: 'DELETE',
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_GetCheckRegister: parameters => {
			const encoded = partial({ body: LELodasoftApiControllersAdminControllerCheckRegisterModelIO }).encode(
				parameters,
			);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/CheckRegister`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_DeleteInvite: (userId, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/DeleteInvite/${encodeURIComponent(string.encode(userId).toString())}`,
				method: 'DELETE',
				query: encoded.query,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_ResendInvite: (userId, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/ResendInvite/${encodeURIComponent(string.encode(userId).toString())}`,
				method: 'POST',
				query: encoded.query,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_InviteUser: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftApiModelsAdminInviteViewModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/InviteUser`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftDataAccessDbModelsUserProfileIO));
		},

		Admin_GetAllInvite: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/AllInvite`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(array(LELodasoftApiModelsAdminInviteViewModelIO)));
		},

		Admin_ImportListUserForCompany: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/ImportListUserForCompany`,
				method: 'POST',
				query: encoded.query,
			}).pipe(decodeAndMap(LELodasoftApiModelsAdminInviteViewModelIO));
		},

		Admin_GetAllRoleModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/AllRoleModel`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(array(LELodasoftDataAccessDbModelsConfigurationRoleModelIO)));
		},

		Admin_UpdateRoleModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftDataAccessDbModelsConfigurationRoleModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/UpdateRoleModel`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_InsertRoleModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftDataAccessDbModelsConfigurationRoleModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/InsertRoleModel`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftDataAccessDbModelsConfigurationRoleModelIO));
		},

		Admin_DeleteRoleModel: (id, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/DeleteRoleModel/${encodeURIComponent(number.encode(id).toString())}`,
				method: 'DELETE',
				query: encoded.query,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_UpdateRoleOrder: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: array(unknownType),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/UpdateRoleOrder`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_GetCompanyAndRoleAndUserAligment: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/CompanyAndRoleAndUserForAligment`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_GetAllAlignmentModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/AllAlignmentModel`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_UpdateAlignmentModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: unknownType,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/UpdateAlignmentModel`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_InsertAlignmentModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: unknownType,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/InsertAlignmentModel`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_DeleteAlignmentModel: (groupnumber, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/DeleteAlignmentModel/${encodeURIComponent(
					string.encode(groupnumber).toString(),
				)}`,
				method: 'DELETE',
				query: encoded.query,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_GetAllLeadStatusModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/AllLeadStatusModel`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(array(LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO)));
		},

		Admin_GetLeadStatus: (leadStatusId, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/GetLeadStatus/${encodeURIComponent(
					number.encode(leadStatusId).toString(),
				)}`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_GetLeadStatusByLoanPurposeId: (LoanPurposeId, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/GetLeadStatusByLoanPurposeId/${encodeURIComponent(
					number.encode(LoanPurposeId).toString(),
				)}`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(array(LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO)));
		},

		Admin_UpdateLeadStatusModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/UpdateLeadStatusModel`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_InsertLeadStatusModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/InsertLeadStatusModel`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO));
		},

		Admin_SaveAssociateLeadStatus: (loanStatusId, loanPurposeId, associate, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/SaveAssociateLeadStatus/${encodeURIComponent(
					number.encode(loanPurposeId).toString(),
				)}/${encodeURIComponent(number.encode(loanStatusId).toString())}/${encodeURIComponent(
					string.encode(associate).toString(),
				)}`,
				method: 'POST',
				query: encoded.query,
			}).pipe(decodeAndMap(LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO));
		},

		Admin_SaveLeadStatusFlow: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/SaveLeadStatusFlow`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO));
		},

		Admin_DeleteLeadStatusModel: (id, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/DeleteLeadStatusModel/${encodeURIComponent(number.encode(id).toString())}`,
				method: 'DELETE',
				query: encoded.query,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_UpdateLeadOrder: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: array(unknownType),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/UpdateLeadOrder`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_GetAllLoanStatusModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/AllLoanStatusModel`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(array(LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO)));
		},

		Admin_GetLoanStatus: (loanStatusId, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/GetLoanStatus/${encodeURIComponent(
					number.encode(loanStatusId).toString(),
				)}`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_GetLoanStatusByLoanTypeId: (LoanPurposeId, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/GetLoanStatusByLoanPurposeId/${encodeURIComponent(
					number.encode(LoanPurposeId).toString(),
				)}`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(array(LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO)));
		},

		Admin_UpdateLoanStatusModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/UpdateLoanStatusModel`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_InsertLoanStatusModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/InsertLoanStatusModel`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO));
		},

		Admin_SaveAssociateLoanStatus: (loanPurposeId, loanStatusId, associate, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/SaveAssociateLoanStatus/${encodeURIComponent(
					number.encode(loanPurposeId).toString(),
				)}/${encodeURIComponent(number.encode(loanStatusId).toString())}/${encodeURIComponent(
					string.encode(associate).toString(),
				)}`,
				method: 'POST',
				query: encoded.query,
			}).pipe(decodeAndMap(LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO));
		},

		Admin_SaveLoanStatusFlow: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/SaveLoanStatusFlow`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO));
		},

		Admin_DeleteLoanStatusModel: (id, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/DeleteLoanStatusModel/${encodeURIComponent(number.encode(id).toString())}`,
				method: 'DELETE',
				query: encoded.query,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_UpdateLoanOrder: parameters => {
			const encoded = partial({
				query: type({
					companyId: createOptionFromOptional(number, 'companyId'),
					leadStatus: createOptionFromOptional(boolean, 'leadStatus'),
				}),
				body: array(unknownType),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/UpdateLoanOrder`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_GetAllLoanTypeModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/AllLoanTypeModel`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(array(LELodasoftDataAccessDbModelsConfigurationLoanTypeModelIO)));
		},

		Admin_UpdateLoanTypeModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftDataAccessDbModelsConfigurationLoanTypeModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/UpdateLoanTypeModel`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_InsertLoanTypeModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftDataAccessDbModelsConfigurationLoanTypeModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/InsertLoanTypeModel`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftDataAccessDbModelsConfigurationLoanTypeModelIO));
		},

		Admin_DeleteLoanTypeModel: (id, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/DeleteLoanTypeModel/${encodeURIComponent(number.encode(id).toString())}`,
				method: 'DELETE',
				query: encoded.query,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_UpdateLoanTypeOrder: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: array(unknownType),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/UpdateLoanTypeOrder`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_GetAllLoanPurposeModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/AllLoanPurposeModel`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(array(LELodasoftDataAccessDbModelsConfigurationLoanPurposeModelIO)));
		},

		Admin_UpdateLoanPurposeModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftDataAccessDbModelsConfigurationLoanPurposeModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/UpdateLoanPurposeModel`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_InsertLoanPurposeModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftDataAccessDbModelsConfigurationLoanPurposeModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/InsertLoanPurposeModel`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftDataAccessDbModelsConfigurationLoanPurposeModelIO));
		},

		Admin_DeleteLoanPurposeModel: (id, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/DeleteLoanPurposeModel/${encodeURIComponent(number.encode(id).toString())}`,
				method: 'DELETE',
				query: encoded.query,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_UpdateLoanPurposeOrder: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: array(unknownType),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/UpdateLoanPurposeOrder`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_GetAllLeadStatusAssociations: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/GetAllLeadStatusAssociations`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(array(LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO)));
		},

		Admin_GetAllLeadStatusAssociationsByLoanPurpose: (loanPurposeId, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/GetAllLeadStatusAssociationsByLoanPurpose/${encodeURIComponent(
					number.encode(loanPurposeId).toString(),
				)}`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(array(LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO)));
		},

		Admin_UpdateLeadStatusAssociation: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/UpdateLeadStatusAssociation`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_DeleteLeadStatusAssociation: (id, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/DeleteLeadStatusAssociation/${encodeURIComponent(
					number.encode(id).toString(),
				)}`,
				method: 'DELETE',
				query: encoded.query,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_InsertLeadStatusAssociation: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/InsertLeadStatusAssociation`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO));
		},

		Admin_UpdateLeadStatusFlowOrder: (loanPurposeId, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: array(unknownType),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/UpdateLeadStatusFlowOrder/${encodeURIComponent(
					number.encode(loanPurposeId).toString(),
				)}`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_GetAllLoanStatusAssociations: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/GetAllLoanStatusAssociations`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(array(LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO)));
		},

		Admin_GetAllLoanStatusAssociationsByLoanPurpose: (loanPurposeId, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/GetAllLoanStatusAssociationsByLoanPurpose/${encodeURIComponent(
					number.encode(loanPurposeId).toString(),
				)}`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(array(LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO)));
		},

		Admin_UpdateLoanStatusAssociation: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/UpdateLoanStatusAssociation`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_DeleteLoanStatusAssociation: (id, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/DeleteLoanStatusAssociation/${encodeURIComponent(
					number.encode(id).toString(),
				)}`,
				method: 'DELETE',
				query: encoded.query,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_InsertLoanStatusAssociation: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/InsertLoanStatusAssociation`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO));
		},

		Admin_UpdateLoanStatusFlowOrder: (loanPurposeId, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: array(unknownType),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/UpdateLoanStatusFlowOrder/${encodeURIComponent(
					number.encode(loanPurposeId).toString(),
				)}`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_GetAllTaskModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/AllTaskModel`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsConfigurationTaskViewModelIO)));
		},

		Admin_GetLeadAllTaskModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/GetLeadAllTaskModel`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsConfigurationTaskViewModelIO)));
		},

		Admin_GetTaskById: (taskId, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/GetTaskById/${encodeURIComponent(number.encode(taskId).toString())}`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_UpdateTaskModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftCommonModelsConfigurationTaskViewModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/UpdateTaskModel`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_UpdateTaskSubTask: (taskId, subTasks, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/UpdateTaskSubTask/${encodeURIComponent(
					number.encode(taskId).toString(),
				)}/${encodeURIComponent(string.encode(subTasks).toString())}`,
				method: 'POST',
				query: encoded.query,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_InsertTaskModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftCommonModelsConfigurationTaskViewModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/InsertTaskModel`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsConfigurationTaskViewModelIO));
		},

		Admin_InsertTaskModelFromTemplate: (templateCompanyId, templateTaskId, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftCommonModelsConfigurationTaskViewModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/InsertTaskModelFromTemplate/${encodeURIComponent(
					number.encode(templateCompanyId).toString(),
				)}/${encodeURIComponent(number.encode(templateTaskId).toString())}`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsConfigurationTaskViewModelIO));
		},

		Admin_DeleteTaskModel: (id, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/DeleteTaskModel/${encodeURIComponent(number.encode(id).toString())}`,
				method: 'DELETE',
				query: encoded.query,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_GetGlobalEmailMergeFieldsModel: () => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/AllGlobalEmailMergeFieldsModel`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModelIO)));
		},

		Admin_UpdateGlobalEmailMergeFieldsModel: parameters => {
			const encoded = partial({
				body: LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/UpdateGlobalEmailMergeFieldsModel`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_InsertGlobalEmailMergeFieldsModel: parameters => {
			const encoded = partial({
				body: LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/InsertGlobalEmailMergeFieldsModel`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModelIO));
		},

		Admin_DeleteGlobalEmailMergeFieldsModel: id => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/DeleteGlobalEmailMergeFieldsModel/${encodeURIComponent(
					number.encode(id).toString(),
				)}`,
				method: 'DELETE',
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_GetAllEmailCampaignTriggerModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/AllEmailCampaignTriggerModel`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(array(LELodasoftApiModelsAdminGetAllEmailCampaignTriggerIO)));
		},

		Admin_UpdateEmailCampaignTriggerModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftApiModelsAdminEmailCampaignTriggerModelViewIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/UpdateEmailCampaignTriggerModel`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_InsertEmailCampaignTrigger: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftApiModelsAdminEmailCampaignTriggerModelViewIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/InsertEmailCampaignTrigger`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftApiModelsAdminEmailCampaignTriggerModelViewIO));
		},

		Admin_InsertChildEmailCampaignTrigger: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftApiModelsAdminEmailCampaignTriggerModelViewIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/InsertChildEmailCampaignTrigger`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftApiModelsAdminEmailCampaignTriggerModelViewIO));
		},

		Admin_DeleteEmailCampaignTriggerModel: (id, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/DeleteEmailCampaignTriggerModel/${encodeURIComponent(
					number.encode(id).toString(),
				)}`,
				method: 'DELETE',
				query: encoded.query,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_GetAllTaskCategoryModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/AllTaskCategoryModel`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(array(LELodasoftDataAccessDbModelsConfigurationCharacteristicModelIO)));
		},

		Admin_InsertTaskCategoryModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftDataAccessDbModelsConfigurationCharacteristicModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/InsertTaskCategoryModel`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftDataAccessDbModelsConfigurationCharacteristicModelIO));
		},

		Admin_DeleteTaskCategoryModel: (id, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/DeleteTaskCategoryModel/${encodeURIComponent(
					number.encode(id).toString(),
				)}`,
				method: 'DELETE',
				query: encoded.query,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_UpdateTaskCategoryModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftDataAccessDbModelsConfigurationCharacteristicModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/UpdateTaskCategoryModel`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_UpdateTaskCategoryOrder: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: array(unknownType),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/UpdateTaskCategoryOrder`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_GetCustomTaskModelByType: (taskType, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/GetCustomTaskModelByType/${encodeURIComponent(
					string.encode(taskType).toString(),
				)}`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(array(LELodasoftDataAccessDbModelsConfigurationCustomTaskModelIO)));
		},

		Admin_InsertCustomTaskModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftCommonModelsConfigurationCustomTaskViewModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/InsertCustomTaskModel`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsConfigurationCustomTaskViewModelIO));
		},

		Admin_DeleteCustomTaskModel: (id, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/DeleteCustomTaskModel/${encodeURIComponent(number.encode(id).toString())}`,
				method: 'DELETE',
				query: encoded.query,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_UpdateCustomTaskModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftCommonModelsConfigurationCustomTaskViewModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/UpdateCustomTaskModel`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_GetAllDocumentModel: (dbOnly, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/AllDocumentModel/${encodeURIComponent(boolean.encode(dbOnly).toString())}`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(array(LELodasoftDataAccessDbModelsConfigurationDocumentTypeModelIO)));
		},

		Admin_UpdateDocumentModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftDataAccessDbModelsConfigurationDocumentTypeModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/UpdateDocumentModel`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_InsertDocumentModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftDataAccessDbModelsConfigurationDocumentTypeModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/InsertDocumentModel`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftDataAccessDbModelsConfigurationDocumentTypeModelIO));
		},

		Admin_DeleteDocumentModel: (id, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/DeleteDocumentModel/${encodeURIComponent(number.encode(id).toString())}`,
				method: 'DELETE',
				query: encoded.query,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_UpdateDocumentOrder: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: array(unknownType),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/UpdateDocumentOrder`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_GetAllAgentType: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/AllAgentType`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(array(LELodasoftDataAccessDbModelsConfigurationAgentTypeModelIO)));
		},

		Admin_UpdateAgentType: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftDataAccessDbModelsConfigurationAgentTypeModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/UpdateAgentType`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_InsertAgentType: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftDataAccessDbModelsConfigurationAgentTypeModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/InsertAgentType`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftDataAccessDbModelsConfigurationAgentTypeModelIO));
		},

		Admin_DeleteAgentType: (id, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/DeleteAgentType/${encodeURIComponent(number.encode(id).toString())}`,
				method: 'DELETE',
				query: encoded.query,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_UpdateAgentTypeOrder: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: array(unknownType),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/UpdateAgentTypeOrder`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_GetAllLender: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/AllLender`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(array(LELodasoftApiModelsAdminLenderModelViewIO)));
		},

		Admin_UpdateLender: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftApiModelsAdminLenderModelViewIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/UpdateLender`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_InsertLender: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftApiModelsAdminLenderModelViewIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/InsertLender`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftApiModelsAdminLenderModelViewIO));
		},

		Admin_DeleteLender: (id, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/DeleteLender/${encodeURIComponent(number.encode(id).toString())}`,
				method: 'DELETE',
				query: encoded.query,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_GetAllStackingOrder: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/AllStackingOrder`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(array(LELodasoftDataAccessDbModelsAdminStackingOrderModelIO)));
		},

		Admin_GetStackingOrderInfo: (id, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/StackingOrderInfo/${encodeURIComponent(number.encode(id).toString())}`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(LELodasoftDataAccessDbModelsAdminStackingOrderModelIO));
		},

		Admin_UpdateStackingOrder: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftDataAccessDbModelsAdminStackingOrderModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/UpdateStackingOrder`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_InsertStackingOrder: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftDataAccessDbModelsAdminStackingOrderModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/InsertStackingOrder`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftDataAccessDbModelsAdminStackingOrderModelIO));
		},

		Admin_DeleteStackingOrder: (id, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/DeleteStackingOrder/${encodeURIComponent(number.encode(id).toString())}`,
				method: 'DELETE',
				query: encoded.query,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_PostSaveOrgChart: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: array(LELodasoftApiModelsAdminOrgChartModelIO),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/SaveOrgChart`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_SaveSystemLevel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: LELodasoftApiModelsAdminSystemLevelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/SaveSystemLevel`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftApiModelsAdminSystemLevelIO));
		},

		Admin_GetSystemLevel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/GetSystemLevel`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(LELodasoftApiModelsAdminSystemLevelIO));
		},

		Admin_GetExportFileNaming: companyId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/GetExportFileNaming/${encodeURIComponent(
					number.encode(companyId).toString(),
				)}`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftDataAccessDbModelsConfigurationConfigurationModelIO));
		},

		Admin_UpdateCheckList: (CheckListItemId, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
				body: array(LELodasoftDataAccessDbModelsConfigurationChecklistModelIO),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/UpdateCheckList/${encodeURIComponent(
					number.encode(CheckListItemId).toString(),
				)}`,
				method: 'POST',
				query: encoded.query,
				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Admin_AllCheckList: (CheckListItemId, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Admin/AllCheckList/${encodeURIComponent(
					number.encode(CheckListItemId).toString(),
				)}`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(unknownType));
		},
	}),
);
