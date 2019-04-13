import { AsyncData, fromEither } from '@nll/dux';
import { Option } from 'fp-ts/lib/Option';
import { asks } from 'fp-ts/lib/Reader';
import { array, boolean, dictionary, number, partial, string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ResponseValiationError, TAPIClient } from '../client/client';
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
import { unknownType } from '../utils/utils';

export type AdminController = {
	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllByCompanyId: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<AsyncData<Error, Array<LELodasoftDataAccessDbModelsConfigurationProductModel>>>;

	/**
	 * @param { number } productId undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_GetProductById: (
		productId: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<AsyncData<Error, LELodasoftDataAccessDbModelsConfigurationProductModel>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateProduct: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationProductModel;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertProduct: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationProductModel;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } id undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteProduct: (
		id: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllQuestion: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<AsyncData<Error, Array<LELodasoftDataAccessDbModelsConfigurationQuestionModel>>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateQuestion: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationQuestionModel;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertQuestion: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationQuestionModel;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } id undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteQuestion: (
		id: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_QuestionAnswerGroupByQuestion: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } questionId undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllQuestionAnswer: (
		questionId: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<AsyncData<Error, Array<LELodasoftApiModelsAdminQuestionTaskAnswerDto>>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateQuestionAnswer: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftApiModelsAdminQuestionTaskAnswerDto;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertQuestionAnswer: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftApiModelsAdminQuestionTaskAnswerDto;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } id undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteQuestionAnswer: (
		id: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllQATaskModel: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<AsyncData<Error, Array<LELodasoftDataAccessDbModelsConfigurationQATaskModel>>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateQATaskModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationQATaskModel;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertQATaskModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationQATaskModel;
	}) => Observable<AsyncData<Error, LELodasoftDataAccessDbModelsConfigurationQATaskModel>>;

	/**
	 * @param { number } id undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteQATaskModel: (
		id: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllCheckListItem: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<AsyncData<Error, Array<LELodasoftDataAccessDbModelsConfigurationChecklistItemModel>>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateCheckListItem: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationChecklistItemModel;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertCheckListItem: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationChecklistItemModel;
	}) => Observable<AsyncData<Error, LELodasoftDataAccessDbModelsConfigurationChecklistItemModel>>;

	/**
	 * @param { number } id undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteCheckListItem: (
		id: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } TemplateCompanyId undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_GetSetupReferenceByTemplateCompany_CompanyId: (
		TemplateCompanyId: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<AsyncData<Error, Array<LELodasoftDataAccessDbModelsConfigurationSetupReferenceModel>>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpsertSetupReference: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationSetupReferenceModel;
	}) => Observable<AsyncData<Error, LELodasoftDataAccessDbModelsConfigurationSetupReferenceModel>>;

	/**
	 * @param { string } page undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_GetPageResource: (
		page: string,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { string } userId undefined
	 */
	readonly Admin_GetProfile: (userId: string) => Observable<AsyncData<Error, LELodasoftApiModelsUserProfileModel>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_PostSaveProfile: (parameters: {
		body: LELodasoftApiModelsUserProfileModel;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_WizardEverythingElse: (parameters: {
		body: LELodasoftApiModelsAdminWizardEverythingElseRequestModel;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_GetCurrentReleaseNotes: (parameters: {
		query: { releaseNotesVersion: string };
	}) => Observable<AsyncData<Error, LELodasoftCommonModelsReleaseNotesReleaseNotesViewModel>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_ViewedReleaseNotes: (parameters: {
		query: { releaseNotesVersion: string };
	}) => Observable<AsyncData<Error, unknown>>;

	readonly Admin_GetReleaseNotes: () => Observable<
		AsyncData<Error, Array<LELodasoftCommonModelsReleaseNotesReleaseNotesViewModel>>
	>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertReleaseNotes: (parameters: {
		body: LELodasoftCommonModelsReleaseNotesReleaseNotesViewModel;
	}) => Observable<AsyncData<Error, LELodasoftCommonModelsReleaseNotesReleaseNotesViewModel>>;

	/**
	 * @param { number } id undefined
	 * @param { object } parameters
	 */
	readonly Admin_UpdateReleaseNotes: (
		id: number,
		parameters: { body: LELodasoftCommonModelsReleaseNotesReleaseNotesViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsReleaseNotesReleaseNotesViewModel>>;

	/**
	 * @param { number } id undefined
	 */
	readonly Admin_DeleteReleaseNotes: (id: number) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetPermissionMenu: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<AsyncData<Error, LELodasoftApiModelsAdminPermissionMenu>>;

	readonly Admin_GetAllTable: () => Observable<AsyncData<Error, { [key: string]: { [key: string]: string } }>>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllUserModel: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<AsyncData<Error, Array<LELodasoftApiModelsAdminUser_View_AdminPage>>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateUserModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsUserProfile;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertUserModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsUserProfile;
	}) => Observable<AsyncData<Error, LELodasoftDataAccessDbModelsUserProfile>>;

	/**
	 * @param { string } id undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteUserModel: (
		id: string,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<AsyncData<Error, string>>;

	readonly Admin_GetAllCompanyModel: () => Observable<
		AsyncData<Error, Array<LELodasoftDataAccessDbModelsConfigurationCompanyModel>>
	>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateCompanyModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationCompanyModel;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertCompanyModel: (parameters: {
		body: LELodasoftDataAccessDbModelsConfigurationCompanyModel;
	}) => Observable<AsyncData<Error, LELodasoftDataAccessDbModelsConfigurationCompanyModel>>;

	/**
	 * @param { number } id undefined
	 */
	readonly Admin_DeleteCompanyModel: (id: number) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_GetCheckRegister: (parameters: {
		body: LELodasoftApiControllersAdminControllerCheckRegisterModel;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { string } userId undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteInvite: (
		userId: string,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { string } userId undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_ResendInvite: (
		userId: string,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InviteUser: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftApiModelsAdminInviteViewModel;
	}) => Observable<AsyncData<Error, LELodasoftApiModelsAdminInviteViewModel>>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllInvite: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<AsyncData<Error, Array<LELodasoftApiModelsAdminInviteViewModel>>>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_ImportListUserForCompany: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<AsyncData<Error, LELodasoftApiModelsAdminInviteViewModel>>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllRoleModel: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<AsyncData<Error, Array<LELodasoftDataAccessDbModelsConfigurationRoleModel>>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateRoleModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationRoleModel;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertRoleModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationRoleModel;
	}) => Observable<AsyncData<Error, LELodasoftDataAccessDbModelsConfigurationRoleModel>>;

	/**
	 * @param { number } id undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteRoleModel: (
		id: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateRoleOrder: (parameters: {
		query?: { companyId: Option<number> };
		body: Array<unknown>;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetCompanyAndRoleAndUserAligment: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllAlignmentModel: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateAlignmentModel: (parameters: {
		query?: { companyId: Option<number> };
		body: unknown;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertAlignmentModel: (parameters: {
		query?: { companyId: Option<number> };
		body: unknown;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { string } groupnumber undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteAlignmentModel: (
		groupnumber: string,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllLeadStatusModel: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<AsyncData<Error, Array<LELodasoftDataAccessDbModelsConfigurationLoanStatusModel>>>;

	/**
	 * @param { number } leadStatusId undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_GetLeadStatus: (
		leadStatusId: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } LoanPurposeId undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_GetLeadStatusByLoanPurposeId: (
		LoanPurposeId: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<AsyncData<Error, Array<LELodasoftDataAccessDbModelsConfigurationLoanStatusModel>>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateLeadStatusModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationLoanStatusModel;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertLeadStatusModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationLoanStatusModel;
	}) => Observable<AsyncData<Error, LELodasoftDataAccessDbModelsConfigurationLoanStatusModel>>;

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
	) => Observable<AsyncData<Error, LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_SaveLeadStatusFlow: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel;
	}) => Observable<AsyncData<Error, LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel>>;

	/**
	 * @param { number } id undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteLeadStatusModel: (
		id: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateLeadOrder: (parameters: {
		query?: { companyId: Option<number> };
		body: Array<unknown>;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllLoanStatusModel: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<AsyncData<Error, Array<LELodasoftDataAccessDbModelsConfigurationLoanStatusModel>>>;

	/**
	 * @param { number } loanStatusId undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_GetLoanStatus: (
		loanStatusId: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } LoanPurposeId undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_GetLoanStatusByLoanTypeId: (
		LoanPurposeId: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<AsyncData<Error, Array<LELodasoftDataAccessDbModelsConfigurationLoanStatusModel>>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateLoanStatusModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationLoanStatusModel;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertLoanStatusModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationLoanStatusModel;
	}) => Observable<AsyncData<Error, LELodasoftDataAccessDbModelsConfigurationLoanStatusModel>>;

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
	) => Observable<AsyncData<Error, LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_SaveLoanStatusFlow: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel;
	}) => Observable<AsyncData<Error, LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel>>;

	/**
	 * @param { number } id undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteLoanStatusModel: (
		id: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateLoanOrder: (parameters: {
		query?: { companyId: Option<number>; leadStatus: Option<boolean> };
		body: Array<unknown>;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllLoanTypeModel: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<AsyncData<Error, Array<LELodasoftDataAccessDbModelsConfigurationLoanTypeModel>>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateLoanTypeModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationLoanTypeModel;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertLoanTypeModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationLoanTypeModel;
	}) => Observable<AsyncData<Error, LELodasoftDataAccessDbModelsConfigurationLoanTypeModel>>;

	/**
	 * @param { number } id undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteLoanTypeModel: (
		id: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateLoanTypeOrder: (parameters: {
		query?: { companyId: Option<number> };
		body: Array<unknown>;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllLoanPurposeModel: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<AsyncData<Error, Array<LELodasoftDataAccessDbModelsConfigurationLoanPurposeModel>>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateLoanPurposeModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationLoanPurposeModel;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertLoanPurposeModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationLoanPurposeModel;
	}) => Observable<AsyncData<Error, LELodasoftDataAccessDbModelsConfigurationLoanPurposeModel>>;

	/**
	 * @param { number } id undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteLoanPurposeModel: (
		id: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateLoanPurposeOrder: (parameters: {
		query?: { companyId: Option<number> };
		body: Array<unknown>;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllLeadStatusAssociations: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<AsyncData<Error, Array<LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel>>>;

	/**
	 * @param { number } loanPurposeId undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllLeadStatusAssociationsByLoanPurpose: (
		loanPurposeId: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<AsyncData<Error, Array<LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel>>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateLeadStatusAssociation: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } id undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteLeadStatusAssociation: (
		id: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertLeadStatusAssociation: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel;
	}) => Observable<AsyncData<Error, LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel>>;

	/**
	 * @param { number } loanPurposeId undefined
	 * @param { object } parameters
	 */
	readonly Admin_UpdateLeadStatusFlowOrder: (
		loanPurposeId: number,
		parameters: { query?: { companyId: Option<number> }; body: Array<unknown> },
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllLoanStatusAssociations: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<AsyncData<Error, Array<LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel>>>;

	/**
	 * @param { number } loanPurposeId undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllLoanStatusAssociationsByLoanPurpose: (
		loanPurposeId: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<AsyncData<Error, Array<LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel>>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateLoanStatusAssociation: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } id undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteLoanStatusAssociation: (
		id: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertLoanStatusAssociation: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel;
	}) => Observable<AsyncData<Error, LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel>>;

	/**
	 * @param { number } loanPurposeId undefined
	 * @param { object } parameters
	 */
	readonly Admin_UpdateLoanStatusFlowOrder: (
		loanPurposeId: number,
		parameters: { query?: { companyId: Option<number> }; body: Array<unknown> },
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllTaskModel: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsConfigurationTaskViewModel>>>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetLeadAllTaskModel: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsConfigurationTaskViewModel>>>;

	/**
	 * @param { number } taskId undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_GetTaskById: (
		taskId: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateTaskModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftCommonModelsConfigurationTaskViewModel;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } taskId undefined
	 * @param { string } subTasks undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_UpdateTaskSubTask: (
		taskId: number,
		subTasks: string,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertTaskModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftCommonModelsConfigurationTaskViewModel;
	}) => Observable<AsyncData<Error, LELodasoftCommonModelsConfigurationTaskViewModel>>;

	/**
	 * @param { number } templateCompanyId undefined
	 * @param { number } templateTaskId undefined
	 * @param { object } parameters
	 */
	readonly Admin_InsertTaskModelFromTemplate: (
		templateCompanyId: number,
		templateTaskId: number,
		parameters: { query?: { companyId: Option<number> }; body: LELodasoftCommonModelsConfigurationTaskViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsConfigurationTaskViewModel>>;

	/**
	 * @param { number } id undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteTaskModel: (
		id: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<AsyncData<Error, unknown>>;

	readonly Admin_GetGlobalEmailMergeFieldsModel: () => Observable<
		AsyncData<Error, Array<LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModel>>
	>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateGlobalEmailMergeFieldsModel: (parameters: {
		body: LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModel;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertGlobalEmailMergeFieldsModel: (parameters: {
		body: LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModel;
	}) => Observable<AsyncData<Error, LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModel>>;

	/**
	 * @param { number } id undefined
	 */
	readonly Admin_DeleteGlobalEmailMergeFieldsModel: (id: number) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllEmailCampaignTriggerModel: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<AsyncData<Error, Array<LELodasoftApiModelsAdminGetAllEmailCampaignTrigger>>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateEmailCampaignTriggerModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftApiModelsAdminEmailCampaignTriggerModelView;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertEmailCampaignTrigger: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftApiModelsAdminEmailCampaignTriggerModelView;
	}) => Observable<AsyncData<Error, LELodasoftApiModelsAdminEmailCampaignTriggerModelView>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertChildEmailCampaignTrigger: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftApiModelsAdminEmailCampaignTriggerModelView;
	}) => Observable<AsyncData<Error, LELodasoftApiModelsAdminEmailCampaignTriggerModelView>>;

	/**
	 * @param { number } id undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteEmailCampaignTriggerModel: (
		id: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllTaskCategoryModel: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<AsyncData<Error, Array<LELodasoftDataAccessDbModelsConfigurationCharacteristicModel>>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertTaskCategoryModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationCharacteristicModel;
	}) => Observable<AsyncData<Error, LELodasoftDataAccessDbModelsConfigurationCharacteristicModel>>;

	/**
	 * @param { number } id undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteTaskCategoryModel: (
		id: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateTaskCategoryModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationCharacteristicModel;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateTaskCategoryOrder: (parameters: {
		query?: { companyId: Option<number> };
		body: Array<unknown>;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { string } type undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_GetCustomTaskModelByType: (
		type: string,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<AsyncData<Error, Array<LELodasoftDataAccessDbModelsConfigurationCustomTaskModel>>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertCustomTaskModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftCommonModelsConfigurationCustomTaskViewModel;
	}) => Observable<AsyncData<Error, LELodasoftCommonModelsConfigurationCustomTaskViewModel>>;

	/**
	 * @param { number } id undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteCustomTaskModel: (
		id: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateCustomTaskModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftCommonModelsConfigurationCustomTaskViewModel;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { boolean } dbOnly undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllDocumentModel: (
		dbOnly: boolean,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<AsyncData<Error, Array<LELodasoftDataAccessDbModelsConfigurationDocumentTypeModel>>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateDocumentModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationDocumentTypeModel;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertDocumentModel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationDocumentTypeModel;
	}) => Observable<AsyncData<Error, LELodasoftDataAccessDbModelsConfigurationDocumentTypeModel>>;

	/**
	 * @param { number } id undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteDocumentModel: (
		id: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateDocumentOrder: (parameters: {
		query?: { companyId: Option<number> };
		body: Array<unknown>;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllAgentType: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<AsyncData<Error, Array<LELodasoftDataAccessDbModelsConfigurationAgentTypeModel>>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateAgentType: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationAgentTypeModel;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertAgentType: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsConfigurationAgentTypeModel;
	}) => Observable<AsyncData<Error, LELodasoftDataAccessDbModelsConfigurationAgentTypeModel>>;

	/**
	 * @param { number } id undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteAgentType: (
		id: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateAgentTypeOrder: (parameters: {
		query?: { companyId: Option<number> };
		body: Array<unknown>;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllLender: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<AsyncData<Error, Array<LELodasoftApiModelsAdminLenderModelView>>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateLender: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftApiModelsAdminLenderModelView;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertLender: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftApiModelsAdminLenderModelView;
	}) => Observable<AsyncData<Error, LELodasoftApiModelsAdminLenderModelView>>;

	/**
	 * @param { number } id undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteLender: (
		id: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetAllStackingOrder: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<AsyncData<Error, Array<LELodasoftDataAccessDbModelsAdminStackingOrderModel>>>;

	/**
	 * @param { number } id undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_GetStackingOrderInfo: (
		id: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<AsyncData<Error, LELodasoftDataAccessDbModelsAdminStackingOrderModel>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_UpdateStackingOrder: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsAdminStackingOrderModel;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_InsertStackingOrder: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftDataAccessDbModelsAdminStackingOrderModel;
	}) => Observable<AsyncData<Error, LELodasoftDataAccessDbModelsAdminStackingOrderModel>>;

	/**
	 * @param { number } id undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_DeleteStackingOrder: (
		id: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_PostSaveOrgChart: (parameters: {
		query?: { companyId: Option<number> };
		body: Array<LELodasoftApiModelsAdminOrgChartModel>;
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Admin_SaveSystemLevel: (parameters: {
		query?: { companyId: Option<number> };
		body: LELodasoftApiModelsAdminSystemLevel;
	}) => Observable<AsyncData<Error, LELodasoftApiModelsAdminSystemLevel>>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Admin_GetSystemLevel: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<AsyncData<Error, LELodasoftApiModelsAdminSystemLevel>>;

	/**
	 * @param { number } companyId undefined
	 */
	readonly Admin_GetExportFileNaming: (
		companyId: number,
	) => Observable<AsyncData<Error, LELodasoftDataAccessDbModelsConfigurationConfigurationModel>>;

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
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } CheckListItemId undefined
	 * @param { object } [parameters]
	 */
	readonly Admin_AllCheckList: (
		CheckListItemId: number,
		parameters: { query?: { companyId: Option<number> } },
	) => Observable<AsyncData<Error, unknown>>;
};

export const adminController = asks(
	(e: { apiClient: TAPIClient }): AdminController => ({
		Admin_GetAllByCompanyId: parameters => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/GetAllProductByCompanyId`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftDataAccessDbModelsConfigurationProductModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Admin_GetProductById: (productId, parameters) => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/GetProductById/${encodeURIComponent(number.encode(productId).toString())}`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftDataAccessDbModelsConfigurationProductModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Admin_UpdateProduct: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftDataAccessDbModelsConfigurationProductModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/UpdateProduct`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_InsertProduct: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftDataAccessDbModelsConfigurationProductModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/InsertProduct`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_DeleteProduct: (id, parameters) => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/DeleteProduct/${encodeURIComponent(number.encode(id).toString())}`,
					method: 'DELETE',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_GetAllQuestion: parameters => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/AllQuestion`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftDataAccessDbModelsConfigurationQuestionModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Admin_UpdateQuestion: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftDataAccessDbModelsConfigurationQuestionModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/UpdateQuestion`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_InsertQuestion: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftDataAccessDbModelsConfigurationQuestionModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/InsertQuestion`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_DeleteQuestion: (id, parameters) => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/DeleteQuestion/${encodeURIComponent(number.encode(id).toString())}`,
					method: 'DELETE',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_QuestionAnswerGroupByQuestion: parameters => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/QuestionAnswerGroupByQuestion`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_GetAllQuestionAnswer: (questionId, parameters) => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/AllQuestionAnswer/${encodeURIComponent(number.encode(questionId).toString())}`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftApiModelsAdminQuestionTaskAnswerDtoIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Admin_UpdateQuestionAnswer: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftApiModelsAdminQuestionTaskAnswerDtoIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/UpdateQuestionAnswer`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_InsertQuestionAnswer: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftApiModelsAdminQuestionTaskAnswerDtoIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/InsertQuestionAnswer`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_DeleteQuestionAnswer: (id, parameters) => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/DeleteQuestionAnswer/${encodeURIComponent(number.encode(id).toString())}`,
					method: 'DELETE',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_GetAllQATaskModel: parameters => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/AllQATaskModel`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftDataAccessDbModelsConfigurationQATaskModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Admin_UpdateQATaskModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftDataAccessDbModelsConfigurationQATaskModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/UpdateQATaskModel`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_InsertQATaskModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftDataAccessDbModelsConfigurationQATaskModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/InsertQATaskModel`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftDataAccessDbModelsConfigurationQATaskModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Admin_DeleteQATaskModel: (id, parameters) => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/DeleteQATaskModel/${encodeURIComponent(number.encode(id).toString())}`,
					method: 'DELETE',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_GetAllCheckListItem: parameters => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/AllCheckListItem`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftDataAccessDbModelsConfigurationChecklistItemModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Admin_UpdateCheckListItem: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftDataAccessDbModelsConfigurationChecklistItemModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/UpdateCheckListItem`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_InsertCheckListItem: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftDataAccessDbModelsConfigurationChecklistItemModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/InsertCheckListItem`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftDataAccessDbModelsConfigurationChecklistItemModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Admin_DeleteCheckListItem: (id, parameters) => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/DeleteCheckListItem/${encodeURIComponent(number.encode(id).toString())}`,
					method: 'DELETE',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_GetSetupReferenceByTemplateCompany_CompanyId: (TemplateCompanyId, parameters) => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/GetSetupReferenceByTemplateCompany_CompanyId/${encodeURIComponent(
						number.encode(TemplateCompanyId).toString(),
					)}`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftDataAccessDbModelsConfigurationSetupReferenceModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Admin_UpsertSetupReference: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftDataAccessDbModelsConfigurationSetupReferenceModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/UpsertSetupReference`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftDataAccessDbModelsConfigurationSetupReferenceModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Admin_GetPageResource: (page, parameters) => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/PageResource/${encodeURIComponent(string.encode(page).toString())}`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_GetProfile: userId => {
			return e.apiClient
				.request({
					url: `/api/Admin/Profile/${encodeURIComponent(string.encode(userId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftApiModelsUserProfileModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Admin_PostSaveProfile: parameters => {
			const encoded = partial({ body: LELodasoftApiModelsUserProfileModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/SaveProfile`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_WizardEverythingElse: parameters => {
			const encoded = partial({ body: LELodasoftApiModelsAdminWizardEverythingElseRequestModelIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/WizardEverythingElse`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_GetCurrentReleaseNotes: parameters => {
			const encoded = partial({ query: type({ releaseNotesVersion: string }) }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/CurrentReleaseNotes`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsReleaseNotesReleaseNotesViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Admin_ViewedReleaseNotes: parameters => {
			const encoded = partial({ query: type({ releaseNotesVersion: string }) }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/ViewedReleaseNotes`,
					method: 'POST',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_GetReleaseNotes: () => {
			return e.apiClient
				.request({
					url: `/api/Admin/AllReleaseNotes`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsReleaseNotesReleaseNotesViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Admin_InsertReleaseNotes: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsReleaseNotesReleaseNotesViewModelIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/ReleaseNotes`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsReleaseNotesReleaseNotesViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Admin_UpdateReleaseNotes: (id, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsReleaseNotesReleaseNotesViewModelIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/ReleaseNotes/${encodeURIComponent(number.encode(id).toString())}`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsReleaseNotesReleaseNotesViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Admin_DeleteReleaseNotes: id => {
			return e.apiClient
				.request({
					url: `/api/Admin/ReleaseNotes/${encodeURIComponent(number.encode(id).toString())}`,
					method: 'DELETE',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_GetPermissionMenu: parameters => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/PermissionMenu`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftApiModelsAdminPermissionMenuIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Admin_GetAllTable: () => {
			return e.apiClient
				.request({
					url: `/api/Admin/AllTable`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								dictionary(string, dictionary(string, string))
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Admin_GetAllUserModel: parameters => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/AllUserModel`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftApiModelsAdminUser_View_AdminPageIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Admin_UpdateUserModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftDataAccessDbModelsUserProfileIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/UpdateUserModel`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_InsertUserModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftDataAccessDbModelsUserProfileIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/InsertUserModel`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftDataAccessDbModelsUserProfileIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Admin_DeleteUserModel: (id, parameters) => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/DeleteUserModel/${encodeURIComponent(string.encode(id).toString())}`,
					method: 'DELETE',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value => fromEither(string.decode(value).mapLeft(ResponseValiationError.create))),
					),
				);
		},

		Admin_GetAllCompanyModel: () => {
			return e.apiClient
				.request({
					url: `/api/Admin/AllCompanyModel`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftDataAccessDbModelsConfigurationCompanyModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Admin_UpdateCompanyModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftDataAccessDbModelsConfigurationCompanyModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/UpdateCompanyModel`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_InsertCompanyModel: parameters => {
			const encoded = partial({ body: LELodasoftDataAccessDbModelsConfigurationCompanyModelIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/InsertCompanyModel`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftDataAccessDbModelsConfigurationCompanyModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Admin_DeleteCompanyModel: id => {
			return e.apiClient
				.request({
					url: `/api/Admin/DeleteCompanyModel/${encodeURIComponent(number.encode(id).toString())}`,
					method: 'DELETE',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_GetCheckRegister: parameters => {
			const encoded = partial({ body: LELodasoftApiControllersAdminControllerCheckRegisterModelIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/CheckRegister`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_DeleteInvite: (userId, parameters) => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/DeleteInvite/${encodeURIComponent(string.encode(userId).toString())}`,
					method: 'DELETE',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_ResendInvite: (userId, parameters) => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/ResendInvite/${encodeURIComponent(string.encode(userId).toString())}`,
					method: 'POST',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_InviteUser: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftApiModelsAdminInviteViewModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/InviteUser`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftApiModelsAdminInviteViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Admin_GetAllInvite: parameters => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/AllInvite`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftApiModelsAdminInviteViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Admin_ImportListUserForCompany: parameters => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/ImportListUserForCompany`,
					method: 'POST',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftApiModelsAdminInviteViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Admin_GetAllRoleModel: parameters => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/AllRoleModel`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftDataAccessDbModelsConfigurationRoleModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Admin_UpdateRoleModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftDataAccessDbModelsConfigurationRoleModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/UpdateRoleModel`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_InsertRoleModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftDataAccessDbModelsConfigurationRoleModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/InsertRoleModel`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftDataAccessDbModelsConfigurationRoleModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Admin_DeleteRoleModel: (id, parameters) => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/DeleteRoleModel/${encodeURIComponent(number.encode(id).toString())}`,
					method: 'DELETE',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_UpdateRoleOrder: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: array(unknownType),
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/UpdateRoleOrder`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_GetCompanyAndRoleAndUserAligment: parameters => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/CompanyAndRoleAndUserForAligment`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_GetAllAlignmentModel: parameters => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/AllAlignmentModel`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_UpdateAlignmentModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: unknownType,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/UpdateAlignmentModel`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_InsertAlignmentModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: unknownType,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/InsertAlignmentModel`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_DeleteAlignmentModel: (groupnumber, parameters) => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/DeleteAlignmentModel/${encodeURIComponent(string.encode(groupnumber).toString())}`,
					method: 'DELETE',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_GetAllLeadStatusModel: parameters => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/AllLeadStatusModel`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Admin_GetLeadStatus: (leadStatusId, parameters) => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/GetLeadStatus/${encodeURIComponent(number.encode(leadStatusId).toString())}`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_GetLeadStatusByLoanPurposeId: (LoanPurposeId, parameters) => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/GetLeadStatusByLoanPurposeId/${encodeURIComponent(
						number.encode(LoanPurposeId).toString(),
					)}`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Admin_UpdateLeadStatusModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/UpdateLeadStatusModel`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_InsertLeadStatusModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/InsertLeadStatusModel`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Admin_SaveAssociateLeadStatus: (loanStatusId, loanPurposeId, associate, parameters) => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/SaveAssociateLeadStatus/${encodeURIComponent(
						number.encode(loanPurposeId).toString(),
					)}/${encodeURIComponent(number.encode(loanStatusId).toString())}/${encodeURIComponent(
						string.encode(associate).toString(),
					)}`,
					method: 'POST',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO.decode(
									value,
								).mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Admin_SaveLeadStatusFlow: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/SaveLeadStatusFlow`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO.decode(
									value,
								).mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Admin_DeleteLeadStatusModel: (id, parameters) => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/DeleteLeadStatusModel/${encodeURIComponent(number.encode(id).toString())}`,
					method: 'DELETE',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_UpdateLeadOrder: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: array(unknownType),
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/UpdateLeadOrder`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_GetAllLoanStatusModel: parameters => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/AllLoanStatusModel`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Admin_GetLoanStatus: (loanStatusId, parameters) => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/GetLoanStatus/${encodeURIComponent(number.encode(loanStatusId).toString())}`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_GetLoanStatusByLoanTypeId: (LoanPurposeId, parameters) => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/GetLoanStatusByLoanPurposeId/${encodeURIComponent(
						number.encode(LoanPurposeId).toString(),
					)}`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Admin_UpdateLoanStatusModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/UpdateLoanStatusModel`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_InsertLoanStatusModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/InsertLoanStatusModel`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Admin_SaveAssociateLoanStatus: (loanPurposeId, loanStatusId, associate, parameters) => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/SaveAssociateLoanStatus/${encodeURIComponent(
						number.encode(loanPurposeId).toString(),
					)}/${encodeURIComponent(number.encode(loanStatusId).toString())}/${encodeURIComponent(
						string.encode(associate).toString(),
					)}`,
					method: 'POST',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO.decode(
									value,
								).mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Admin_SaveLoanStatusFlow: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/SaveLoanStatusFlow`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO.decode(
									value,
								).mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Admin_DeleteLoanStatusModel: (id, parameters) => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/DeleteLoanStatusModel/${encodeURIComponent(number.encode(id).toString())}`,
					method: 'DELETE',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_UpdateLoanOrder: parameters => {
			const encoded = partial({
				query: type({
					companyId: createOptionFromNullable(number),
					leadStatus: createOptionFromNullable(boolean),
				}),
				body: array(unknownType),
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/UpdateLoanOrder`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_GetAllLoanTypeModel: parameters => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/AllLoanTypeModel`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftDataAccessDbModelsConfigurationLoanTypeModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Admin_UpdateLoanTypeModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftDataAccessDbModelsConfigurationLoanTypeModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/UpdateLoanTypeModel`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_InsertLoanTypeModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftDataAccessDbModelsConfigurationLoanTypeModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/InsertLoanTypeModel`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftDataAccessDbModelsConfigurationLoanTypeModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Admin_DeleteLoanTypeModel: (id, parameters) => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/DeleteLoanTypeModel/${encodeURIComponent(number.encode(id).toString())}`,
					method: 'DELETE',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_UpdateLoanTypeOrder: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: array(unknownType),
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/UpdateLoanTypeOrder`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_GetAllLoanPurposeModel: parameters => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/AllLoanPurposeModel`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftDataAccessDbModelsConfigurationLoanPurposeModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Admin_UpdateLoanPurposeModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftDataAccessDbModelsConfigurationLoanPurposeModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/UpdateLoanPurposeModel`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_InsertLoanPurposeModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftDataAccessDbModelsConfigurationLoanPurposeModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/InsertLoanPurposeModel`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftDataAccessDbModelsConfigurationLoanPurposeModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Admin_DeleteLoanPurposeModel: (id, parameters) => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/DeleteLoanPurposeModel/${encodeURIComponent(number.encode(id).toString())}`,
					method: 'DELETE',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_UpdateLoanPurposeOrder: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: array(unknownType),
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/UpdateLoanPurposeOrder`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_GetAllLeadStatusAssociations: parameters => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/GetAllLeadStatusAssociations`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Admin_GetAllLeadStatusAssociationsByLoanPurpose: (loanPurposeId, parameters) => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/GetAllLeadStatusAssociationsByLoanPurpose/${encodeURIComponent(
						number.encode(loanPurposeId).toString(),
					)}`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Admin_UpdateLeadStatusAssociation: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/UpdateLeadStatusAssociation`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_DeleteLeadStatusAssociation: (id, parameters) => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/DeleteLeadStatusAssociation/${encodeURIComponent(number.encode(id).toString())}`,
					method: 'DELETE',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_InsertLeadStatusAssociation: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/InsertLeadStatusAssociation`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO.decode(
									value,
								).mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Admin_UpdateLeadStatusFlowOrder: (loanPurposeId, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: array(unknownType),
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/UpdateLeadStatusFlowOrder/${encodeURIComponent(
						number.encode(loanPurposeId).toString(),
					)}`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_GetAllLoanStatusAssociations: parameters => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/GetAllLoanStatusAssociations`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Admin_GetAllLoanStatusAssociationsByLoanPurpose: (loanPurposeId, parameters) => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/GetAllLoanStatusAssociationsByLoanPurpose/${encodeURIComponent(
						number.encode(loanPurposeId).toString(),
					)}`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Admin_UpdateLoanStatusAssociation: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/UpdateLoanStatusAssociation`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_DeleteLoanStatusAssociation: (id, parameters) => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/DeleteLoanStatusAssociation/${encodeURIComponent(number.encode(id).toString())}`,
					method: 'DELETE',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_InsertLoanStatusAssociation: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/InsertLoanStatusAssociation`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO.decode(
									value,
								).mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Admin_UpdateLoanStatusFlowOrder: (loanPurposeId, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: array(unknownType),
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/UpdateLoanStatusFlowOrder/${encodeURIComponent(
						number.encode(loanPurposeId).toString(),
					)}`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_GetAllTaskModel: parameters => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/AllTaskModel`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsConfigurationTaskViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Admin_GetLeadAllTaskModel: parameters => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/GetLeadAllTaskModel`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsConfigurationTaskViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Admin_GetTaskById: (taskId, parameters) => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/GetTaskById/${encodeURIComponent(number.encode(taskId).toString())}`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_UpdateTaskModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftCommonModelsConfigurationTaskViewModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/UpdateTaskModel`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_UpdateTaskSubTask: (taskId, subTasks, parameters) => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/UpdateTaskSubTask/${encodeURIComponent(
						number.encode(taskId).toString(),
					)}/${encodeURIComponent(string.encode(subTasks).toString())}`,
					method: 'POST',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_InsertTaskModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftCommonModelsConfigurationTaskViewModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/InsertTaskModel`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsConfigurationTaskViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Admin_InsertTaskModelFromTemplate: (templateCompanyId, templateTaskId, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftCommonModelsConfigurationTaskViewModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/InsertTaskModelFromTemplate/${encodeURIComponent(
						number.encode(templateCompanyId).toString(),
					)}/${encodeURIComponent(number.encode(templateTaskId).toString())}`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsConfigurationTaskViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Admin_DeleteTaskModel: (id, parameters) => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/DeleteTaskModel/${encodeURIComponent(number.encode(id).toString())}`,
					method: 'DELETE',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_GetGlobalEmailMergeFieldsModel: () => {
			return e.apiClient
				.request({
					url: `/api/Admin/AllGlobalEmailMergeFieldsModel`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Admin_UpdateGlobalEmailMergeFieldsModel: parameters => {
			const encoded = partial({
				body: LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/UpdateGlobalEmailMergeFieldsModel`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_InsertGlobalEmailMergeFieldsModel: parameters => {
			const encoded = partial({
				body: LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/InsertGlobalEmailMergeFieldsModel`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftDataAccessDbModelsConfigurationGlobalEmailMergeFieldModelIO.decode(
									value,
								).mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Admin_DeleteGlobalEmailMergeFieldsModel: id => {
			return e.apiClient
				.request({
					url: `/api/Admin/DeleteGlobalEmailMergeFieldsModel/${encodeURIComponent(
						number.encode(id).toString(),
					)}`,
					method: 'DELETE',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_GetAllEmailCampaignTriggerModel: parameters => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/AllEmailCampaignTriggerModel`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftApiModelsAdminGetAllEmailCampaignTriggerIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Admin_UpdateEmailCampaignTriggerModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftApiModelsAdminEmailCampaignTriggerModelViewIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/UpdateEmailCampaignTriggerModel`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_InsertEmailCampaignTrigger: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftApiModelsAdminEmailCampaignTriggerModelViewIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/InsertEmailCampaignTrigger`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftApiModelsAdminEmailCampaignTriggerModelViewIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Admin_InsertChildEmailCampaignTrigger: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftApiModelsAdminEmailCampaignTriggerModelViewIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/InsertChildEmailCampaignTrigger`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftApiModelsAdminEmailCampaignTriggerModelViewIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Admin_DeleteEmailCampaignTriggerModel: (id, parameters) => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/DeleteEmailCampaignTriggerModel/${encodeURIComponent(
						number.encode(id).toString(),
					)}`,
					method: 'DELETE',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_GetAllTaskCategoryModel: parameters => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/AllTaskCategoryModel`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftDataAccessDbModelsConfigurationCharacteristicModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Admin_InsertTaskCategoryModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftDataAccessDbModelsConfigurationCharacteristicModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/InsertTaskCategoryModel`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftDataAccessDbModelsConfigurationCharacteristicModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Admin_DeleteTaskCategoryModel: (id, parameters) => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/DeleteTaskCategoryModel/${encodeURIComponent(number.encode(id).toString())}`,
					method: 'DELETE',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_UpdateTaskCategoryModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftDataAccessDbModelsConfigurationCharacteristicModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/UpdateTaskCategoryModel`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_UpdateTaskCategoryOrder: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: array(unknownType),
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/UpdateTaskCategoryOrder`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_GetCustomTaskModelByType: (typeParam, parameters) => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/GetCustomTaskModelByType/${encodeURIComponent(string.encode(typeParam).toString())}`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftDataAccessDbModelsConfigurationCustomTaskModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Admin_InsertCustomTaskModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftCommonModelsConfigurationCustomTaskViewModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/InsertCustomTaskModel`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsConfigurationCustomTaskViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Admin_DeleteCustomTaskModel: (id, parameters) => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/DeleteCustomTaskModel/${encodeURIComponent(number.encode(id).toString())}`,
					method: 'DELETE',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_UpdateCustomTaskModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftCommonModelsConfigurationCustomTaskViewModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/UpdateCustomTaskModel`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_GetAllDocumentModel: (dbOnly, parameters) => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/AllDocumentModel/${encodeURIComponent(boolean.encode(dbOnly).toString())}`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftDataAccessDbModelsConfigurationDocumentTypeModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Admin_UpdateDocumentModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftDataAccessDbModelsConfigurationDocumentTypeModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/UpdateDocumentModel`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_InsertDocumentModel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftDataAccessDbModelsConfigurationDocumentTypeModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/InsertDocumentModel`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftDataAccessDbModelsConfigurationDocumentTypeModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Admin_DeleteDocumentModel: (id, parameters) => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/DeleteDocumentModel/${encodeURIComponent(number.encode(id).toString())}`,
					method: 'DELETE',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_UpdateDocumentOrder: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: array(unknownType),
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/UpdateDocumentOrder`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_GetAllAgentType: parameters => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/AllAgentType`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftDataAccessDbModelsConfigurationAgentTypeModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Admin_UpdateAgentType: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftDataAccessDbModelsConfigurationAgentTypeModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/UpdateAgentType`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_InsertAgentType: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftDataAccessDbModelsConfigurationAgentTypeModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/InsertAgentType`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftDataAccessDbModelsConfigurationAgentTypeModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Admin_DeleteAgentType: (id, parameters) => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/DeleteAgentType/${encodeURIComponent(number.encode(id).toString())}`,
					method: 'DELETE',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_UpdateAgentTypeOrder: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: array(unknownType),
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/UpdateAgentTypeOrder`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_GetAllLender: parameters => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/AllLender`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftApiModelsAdminLenderModelViewIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Admin_UpdateLender: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftApiModelsAdminLenderModelViewIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/UpdateLender`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_InsertLender: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftApiModelsAdminLenderModelViewIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/InsertLender`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftApiModelsAdminLenderModelViewIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Admin_DeleteLender: (id, parameters) => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/DeleteLender/${encodeURIComponent(number.encode(id).toString())}`,
					method: 'DELETE',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_GetAllStackingOrder: parameters => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/AllStackingOrder`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftDataAccessDbModelsAdminStackingOrderModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Admin_GetStackingOrderInfo: (id, parameters) => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/StackingOrderInfo/${encodeURIComponent(number.encode(id).toString())}`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftDataAccessDbModelsAdminStackingOrderModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Admin_UpdateStackingOrder: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftDataAccessDbModelsAdminStackingOrderModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/UpdateStackingOrder`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_InsertStackingOrder: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftDataAccessDbModelsAdminStackingOrderModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/InsertStackingOrder`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftDataAccessDbModelsAdminStackingOrderModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Admin_DeleteStackingOrder: (id, parameters) => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/DeleteStackingOrder/${encodeURIComponent(number.encode(id).toString())}`,
					method: 'DELETE',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_PostSaveOrgChart: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: array(LELodasoftApiModelsAdminOrgChartModelIO),
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/SaveOrgChart`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_SaveSystemLevel: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: LELodasoftApiModelsAdminSystemLevelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/SaveSystemLevel`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftApiModelsAdminSystemLevelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Admin_GetSystemLevel: parameters => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/GetSystemLevel`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftApiModelsAdminSystemLevelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Admin_GetExportFileNaming: companyId => {
			return e.apiClient
				.request({
					url: `/api/Admin/GetExportFileNaming/${encodeURIComponent(number.encode(companyId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftDataAccessDbModelsConfigurationConfigurationModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Admin_UpdateCheckList: (CheckListItemId, parameters) => {
			const encoded = partial({
				query: type({ companyId: createOptionFromNullable(number) }),
				body: array(LELodasoftDataAccessDbModelsConfigurationChecklistModelIO),
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Admin/UpdateCheckList/${encodeURIComponent(number.encode(CheckListItemId).toString())}`,
					method: 'POST',
					query: encoded.query,
					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Admin_AllCheckList: (CheckListItemId, parameters) => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Admin/AllCheckList/${encodeURIComponent(number.encode(CheckListItemId).toString())}`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},
	}),
);
