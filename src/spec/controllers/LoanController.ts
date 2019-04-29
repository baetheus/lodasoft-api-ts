import { TAPIClient } from '../client/client';
import {
	LELodasoftApiModelsBorrowerBorrowerCharacteristicView,
	LELodasoftApiModelsBorrowerBorrowerCharacteristicViewIO,
} from '../definitions/LELodasoftApiModelsBorrowerBorrowerCharacteristicView';
import {
	LELodasoftApiModelsBorrowerExternalContactView,
	LELodasoftApiModelsBorrowerExternalContactViewIO,
} from '../definitions/LELodasoftApiModelsBorrowerExternalContactView';
import {
	LELodasoftApiModelsBorrowerLoanCharacteristicView,
	LELodasoftApiModelsBorrowerLoanCharacteristicViewIO,
} from '../definitions/LELodasoftApiModelsBorrowerLoanCharacteristicView';
import {
	LELodasoftApiModelsBorrowerLoanDocDto,
	LELodasoftApiModelsBorrowerLoanDocDtoIO,
} from '../definitions/LELodasoftApiModelsBorrowerLoanDocDto';
import {
	LELodasoftApiModelsBorrowerLoanInfo,
	LELodasoftApiModelsBorrowerLoanInfoIO,
} from '../definitions/LELodasoftApiModelsBorrowerLoanInfo';
import {
	LELodasoftApiModelsBorrowerNewApplicationRequest,
	LELodasoftApiModelsBorrowerNewApplicationRequestIO,
} from '../definitions/LELodasoftApiModelsBorrowerNewApplicationRequest';
import {
	LELodasoftApiModelsBorrowerUpsertBorrowerCharacteristicsView,
	LELodasoftApiModelsBorrowerUpsertBorrowerCharacteristicsViewIO,
} from '../definitions/LELodasoftApiModelsBorrowerUpsertBorrowerCharacteristicsView';
import {
	LELodasoftApiModelsBorrowerUpsertLoanCharacteristicView,
	LELodasoftApiModelsBorrowerUpsertLoanCharacteristicViewIO,
} from '../definitions/LELodasoftApiModelsBorrowerUpsertLoanCharacteristicView';
import {
	LELodasoftApiModelsSharedAddressView,
	LELodasoftApiModelsSharedAddressViewIO,
} from '../definitions/LELodasoftApiModelsSharedAddressView';
import {
	LELodasoftCommonModelsAdminActivityLogViewModel,
	LELodasoftCommonModelsAdminActivityLogViewModelIO,
} from '../definitions/LELodasoftCommonModelsAdminActivityLogViewModel';
import {
	LELodasoftCommonModelsAdminAgentViewModel,
	LELodasoftCommonModelsAdminAgentViewModelIO,
} from '../definitions/LELodasoftCommonModelsAdminAgentViewModel';
import {
	LELodasoftCommonModelsAdminTrackingViewModel,
	LELodasoftCommonModelsAdminTrackingViewModelIO,
} from '../definitions/LELodasoftCommonModelsAdminTrackingViewModel';
import {
	LELodasoftCommonModelsLoanDocFileViewModel,
	LELodasoftCommonModelsLoanDocFileViewModelIO,
} from '../definitions/LELodasoftCommonModelsLoanDocFileViewModel';
import {
	LELodasoftCommonModelsLoanLoanDocTaskViewModel,
	LELodasoftCommonModelsLoanLoanDocTaskViewModelIO,
} from '../definitions/LELodasoftCommonModelsLoanLoanDocTaskViewModel';
import {
	LELodasoftDataAccessDbModelsAdminApplicationModel,
	LELodasoftDataAccessDbModelsAdminApplicationModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsAdminApplicationModel';
import {
	LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModel,
	LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModel';
import {
	LELodasoftDataAccessDbModelsAdminInternalContactModel,
	LELodasoftDataAccessDbModelsAdminInternalContactModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsAdminInternalContactModel';
import {
	LELodasoftDataAccessDbModelsAdminLoanDocModel,
	LELodasoftDataAccessDbModelsAdminLoanDocModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsAdminLoanDocModel';
import {
	LELodasoftDataAccessModelsAdminBorrowerBorrowerDto,
	LELodasoftDataAccessModelsAdminBorrowerBorrowerDtoIO,
} from '../definitions/LELodasoftDataAccessModelsAdminBorrowerBorrowerDto';
import {
	LELodasoftDataAccessModelsTaskCountModel,
	LELodasoftDataAccessModelsTaskCountModelIO,
} from '../definitions/LELodasoftDataAccessModelsTaskCountModel';
import { decodeAndMap, unknownType } from '../utils/utils';
import { asks } from 'fp-ts/lib/Reader';
import { number, array, boolean, type, partial } from 'io-ts';
import { Observable } from 'rxjs';

export type LoanController = {
	/**
	 * @param { number } loanId undefined
	 */
	readonly Loan_GetBorrowersByLoanId: (
		loanId: number,
	) => Observable<Array<LELodasoftDataAccessModelsAdminBorrowerBorrowerDto>>;

	/**
	 * @param { number } loanId undefined
	 */
	readonly Loan_GetBorrowerNotOwnedByLoan: (
		loanId: number,
	) => Observable<Array<LELodasoftDataAccessModelsAdminBorrowerBorrowerDto>>;

	/**
	 * @param { number } loanId undefined
	 * @param { number } borrowerId undefined
	 */
	readonly Loan_SelectBorrower: (loanId: number, borrowerId: number) => Observable<unknown>;

	/**
	 * @param { number } loanId undefined
	 * @param { number } borrowerId undefined
	 */
	readonly Loan_GetFirstBorrowerAddress: (loanId: number, borrowerId: number) => Observable<unknown>;

	/**
	 * @param { number } loanId undefined
	 * @param { number } borrowerId undefined
	 */
	readonly Loan_SetBorrowerAsPrimaryOnLoan: (loanId: number, borrowerId: number) => Observable<unknown>;

	/**
	 * @param { number } loanId undefined
	 * @param { number } borrowerId undefined
	 * @param { boolean } allow undefined
	 */
	readonly Loan_SetAllowPrimaryToStatisfyFlagOnLoan: (
		loanId: number,
		borrowerId: number,
		allow: boolean,
	) => Observable<unknown>;

	/**
	 * @param { number } loanId undefined
	 * @param { number } borrowerId undefined
	 */
	readonly Loan_RemoveBorrowerFromLoan: (loanId: number, borrowerId: number) => Observable<unknown>;

	/**
	 * @param { number } loanId undefined
	 */
	readonly Loan_AllExternalContacts: (
		loanId: number,
	) => Observable<Array<LELodasoftApiModelsBorrowerExternalContactView>>;

	/**
	 * @param { number } loanId undefined
	 */
	readonly Loan_AllRemainExternalContacts: (
		loanId: number,
	) => Observable<Array<LELodasoftCommonModelsAdminAgentViewModel>>;

	/**
	 * @param { number } loanId undefined
	 * @param { number } agentId undefined
	 * @param { object } parameters
	 */
	readonly Loan_SelectAgentForExternalContact: (
		loanId: number,
		agentId: number,
		parameters: { query: { agentTypeId: number } },
	) => Observable<boolean>;

	/**
	 * @param { number } loanId undefined
	 * @param { number } agentId undefined
	 */
	readonly Loan_RemoveAgentFromExternalContact: (loanId: number, agentId: number) => Observable<boolean>;

	/**
	 * @param { number } loanId undefined
	 */
	readonly Loan_InternalContacts: (loanId: number) => Observable<unknown>;

	/**
	 * @param { number } loanId undefined
	 * @param { object } parameters
	 */
	readonly Loan_UpsertInternalContacts: (
		loanId: number,
		parameters: { body: Array<LELodasoftDataAccessDbModelsAdminInternalContactModel> },
	) => Observable<Array<LELodasoftDataAccessDbModelsAdminInternalContactModel>>;

	/**
	 * @param { number } loanId undefined
	 */
	readonly Loan_CurrentLoanInfo: (
		loanId: number,
	) => Observable<LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModel>;

	/**
	 * @param { number } loanId undefined
	 * @param { object } parameters
	 */
	readonly Loan_UpsertCurrentLoanInfo: (
		loanId: number,
		parameters: { body: LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModel },
	) => Observable<LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModel>;

	/**
	 * @param { number } loanId undefined
	 */
	readonly Loan_GetLoanCharacteristic: (
		loanId: number,
	) => Observable<LELodasoftApiModelsBorrowerLoanCharacteristicView>;

	/**
	 * @param { number } loanId undefined
	 * @param { object } parameters
	 */
	readonly Loan_UpsertLoanCharacteristicPreview: (
		loanId: number,
		parameters: { body: LELodasoftApiModelsBorrowerLoanCharacteristicView },
	) => Observable<Array<LELodasoftCommonModelsLoanLoanDocTaskViewModel>>;

	/**
	 * @param { number } loanId undefined
	 * @param { object } parameters
	 */
	readonly Loan_UpsertLoanCharacteristic: (
		loanId: number,
		parameters: { body: LELodasoftApiModelsBorrowerUpsertLoanCharacteristicView },
	) => Observable<unknown>;

	/**
	 * @param { number } loanId undefined
	 */
	readonly Loan_GetBorrowerCharacteristics: (
		loanId: number,
	) => Observable<Array<LELodasoftApiModelsBorrowerBorrowerCharacteristicView>>;

	/**
	 * @param { number } loanId undefined
	 * @param { object } parameters
	 */
	readonly Loan_UpsertBorrowerCharacteristicsPreview: (
		loanId: number,
		parameters: { body: Array<LELodasoftApiModelsBorrowerBorrowerCharacteristicView> },
	) => Observable<Array<LELodasoftCommonModelsLoanLoanDocTaskViewModel>>;

	/**
	 * @param { number } loanId undefined
	 * @param { object } parameters
	 */
	readonly Loan_UpsertBorrowerCharacteristics: (
		loanId: number,
		parameters: { body: LELodasoftApiModelsBorrowerUpsertBorrowerCharacteristicsView },
	) => Observable<Array<LELodasoftApiModelsBorrowerBorrowerCharacteristicView>>;

	/**
	 * @param { number } loanId undefined
	 */
	readonly Loan_GetAllLoanDocs: (loanId: number) => Observable<Array<LELodasoftDataAccessDbModelsAdminLoanDocModel>>;

	/**
	 * @param { number } loanId undefined
	 * @param { object } parameters
	 */
	readonly Loan_UpsertLoanDoc: (
		loanId: number,
		parameters: { body: LELodasoftDataAccessDbModelsAdminLoanDocModel },
	) => Observable<LELodasoftApiModelsBorrowerLoanDocDto>;

	/**
	 * @param { number } loanId undefined
	 */
	readonly Loan_GetAllDocFiles: (loanId: number) => Observable<Array<LELodasoftCommonModelsLoanDocFileViewModel>>;

	/**
	 * @param { number } loanId undefined
	 */
	readonly Loan_GetTaskCountByApplicationID: (loanId: number) => Observable<LELodasoftDataAccessModelsTaskCountModel>;

	/**
	 * @param { number } loanId undefined
	 */
	readonly Loan_GetAllLoanDocTaskConditions: (
		loanId: number,
	) => Observable<Array<LELodasoftCommonModelsLoanLoanDocTaskViewModel>>;

	/**
	 * @param { number } loanId undefined
	 * @param { object } parameters
	 */
	readonly Loan_SaveFirstLoanStatusByLoanPurpose: (
		loanId: number,
		parameters: { body: Array<LELodasoftCommonModelsLoanLoanDocTaskViewModel> },
	) => Observable<unknown>;

	/**
	 * @param { number } loanId undefined
	 * @param { number } loanStatusId undefined
	 * @param { object } parameters
	 */
	readonly Loan_UpdateLoanStatus: (
		loanId: number,
		loanStatusId: number,
		parameters: { body: Array<LELodasoftCommonModelsLoanLoanDocTaskViewModel> },
	) => Observable<unknown>;

	/**
	 * @param { number } loanId undefined
	 */
	readonly Loan_ViewLoanStatusHistory: (
		loanId: number,
	) => Observable<Array<LELodasoftCommonModelsAdminTrackingViewModel>>;

	/**
	 * @param { number } applicationId undefined
	 */
	readonly Loan_ViewLoanStatusHistory1: (
		applicationId: number,
	) => Observable<Array<LELodasoftCommonModelsAdminActivityLogViewModel>>;

	/**
	 * @param { number } loanId undefined
	 * @param { object } parameters
	 */
	readonly Loan_SaveLoanInfo: (
		loanId: number,
		parameters: { body: LELodasoftApiModelsBorrowerLoanInfo },
	) => Observable<unknown>;

	/**
	 * @param { number } loanId undefined
	 */
	readonly Loan_GetLoanInfo: (loanId: number) => Observable<LELodasoftApiModelsBorrowerNewApplicationRequest>;

	/**
	 * @param { object } parameters
	 */
	readonly Loan_DeActivateLoan: (parameters: { query: { applicationId: number } }) => Observable<unknown>;

	/**
	 * @param { number } loanId undefined
	 * @param { object } parameters
	 */
	readonly Loan_UpsertSubjectProperty: (
		loanId: number,
		parameters: { body: LELodasoftApiModelsSharedAddressView },
	) => Observable<LELodasoftDataAccessDbModelsAdminApplicationModel>;

	/**
	 * Add Online Application Task for Application
	 * @param { number } loanId - loan / application id
	 */
	readonly Loan_AddOnlineApplicationTask: (
		loanId: number,
	) => Observable<LELodasoftCommonModelsLoanLoanDocTaskViewModel>;

	/**
	 * Check Online Application Task for Application
	 * @param { number } loanId - loan / application id
	 */
	readonly Loan_CheckForOnlineApplicationTask: (
		loanId: number,
	) => Observable<LELodasoftCommonModelsLoanLoanDocTaskViewModel>;
};

export const loanController = asks(
	(e: { API_CLIENT: TAPIClient; PREFIX: string }): LoanController => ({
		Loan_GetBorrowersByLoanId: loanId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Loan/${encodeURIComponent(number.encode(loanId).toString())}/Borrowers`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftDataAccessModelsAdminBorrowerBorrowerDtoIO)));
		},

		Loan_GetBorrowerNotOwnedByLoan: loanId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Loan/${encodeURIComponent(
					number.encode(loanId).toString(),
				)}/BorrowersNotOwnedByLoan`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftDataAccessModelsAdminBorrowerBorrowerDtoIO)));
		},

		Loan_SelectBorrower: (loanId, borrowerId) => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Loan/${encodeURIComponent(
					number.encode(loanId).toString(),
				)}/SelectBorrower/${encodeURIComponent(number.encode(borrowerId).toString())}`,
				method: 'POST',
			}).pipe(decodeAndMap(unknownType));
		},

		Loan_GetFirstBorrowerAddress: (loanId, borrowerId) => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Loan/${encodeURIComponent(
					number.encode(loanId).toString(),
				)}/GetFirstBorrowerAddress/${encodeURIComponent(number.encode(borrowerId).toString())}`,
				method: 'GET',
			}).pipe(decodeAndMap(unknownType));
		},

		Loan_SetBorrowerAsPrimaryOnLoan: (loanId, borrowerId) => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Loan/${encodeURIComponent(
					number.encode(loanId).toString(),
				)}/SetBorrowerAsPrimaryOnLoan/${encodeURIComponent(number.encode(borrowerId).toString())}`,
				method: 'POST',
			}).pipe(decodeAndMap(unknownType));
		},

		Loan_SetAllowPrimaryToStatisfyFlagOnLoan: (loanId, borrowerId, allow) => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Loan/${encodeURIComponent(
					number.encode(loanId).toString(),
				)}/SetAllowPrimaryToStatisfyFlagOnLoan/${encodeURIComponent(
					number.encode(borrowerId).toString(),
				)}/${encodeURIComponent(boolean.encode(allow).toString())}`,
				method: 'POST',
			}).pipe(decodeAndMap(unknownType));
		},

		Loan_RemoveBorrowerFromLoan: (loanId, borrowerId) => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Loan/${encodeURIComponent(
					number.encode(loanId).toString(),
				)}/RemoveBorrowerFromLoan/${encodeURIComponent(number.encode(borrowerId).toString())}`,
				method: 'POST',
			}).pipe(decodeAndMap(unknownType));
		},

		Loan_AllExternalContacts: loanId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Loan/${encodeURIComponent(number.encode(loanId).toString())}/AllExternalContacts`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftApiModelsBorrowerExternalContactViewIO)));
		},

		Loan_AllRemainExternalContacts: loanId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Loan/${encodeURIComponent(
					number.encode(loanId).toString(),
				)}/AllRemainExternalContacts`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsAdminAgentViewModelIO)));
		},

		Loan_SelectAgentForExternalContact: (loanId, agentId, parameters) => {
			const encoded = partial({ query: type({ agentTypeId: number }) }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Loan/${encodeURIComponent(
					number.encode(loanId).toString(),
				)}/SelectAgentForExternalContact/${encodeURIComponent(number.encode(agentId).toString())}`,
				method: 'POST',
				query: encoded.query,
			}).pipe(decodeAndMap(boolean));
		},

		Loan_RemoveAgentFromExternalContact: (loanId, agentId) => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Loan/${encodeURIComponent(
					number.encode(loanId).toString(),
				)}/RemoveAgentFromExternalContact/${encodeURIComponent(number.encode(agentId).toString())}`,
				method: 'DELETE',
			}).pipe(decodeAndMap(boolean));
		},

		Loan_InternalContacts: loanId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Loan/${encodeURIComponent(number.encode(loanId).toString())}/InternalContacts`,
				method: 'GET',
			}).pipe(decodeAndMap(unknownType));
		},

		Loan_UpsertInternalContacts: (loanId, parameters) => {
			const encoded = partial({ body: array(LELodasoftDataAccessDbModelsAdminInternalContactModelIO) }).encode(
				parameters,
			);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Loan/${encodeURIComponent(
					number.encode(loanId).toString(),
				)}/UpsertInternalContacts`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(array(LELodasoftDataAccessDbModelsAdminInternalContactModelIO)));
		},

		Loan_CurrentLoanInfo: loanId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Loan/${encodeURIComponent(number.encode(loanId).toString())}/CurrentLoanInfo`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModelIO));
		},

		Loan_UpsertCurrentLoanInfo: (loanId, parameters) => {
			const encoded = partial({ body: LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModelIO }).encode(
				parameters,
			);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Loan/${encodeURIComponent(
					number.encode(loanId).toString(),
				)}/UpsertCurrentLoanInfo`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModelIO));
		},

		Loan_GetLoanCharacteristic: loanId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Loan/${encodeURIComponent(
					number.encode(loanId).toString(),
				)}/GetLoanCharacteristic`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftApiModelsBorrowerLoanCharacteristicViewIO));
		},

		Loan_UpsertLoanCharacteristicPreview: (loanId, parameters) => {
			const encoded = partial({ body: LELodasoftApiModelsBorrowerLoanCharacteristicViewIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Loan/${encodeURIComponent(
					number.encode(loanId).toString(),
				)}/UpsertLoanCharacteristicPreview`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsLoanLoanDocTaskViewModelIO)));
		},

		Loan_UpsertLoanCharacteristic: (loanId, parameters) => {
			const encoded = partial({ body: LELodasoftApiModelsBorrowerUpsertLoanCharacteristicViewIO }).encode(
				parameters,
			);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Loan/${encodeURIComponent(
					number.encode(loanId).toString(),
				)}/UpsertLoanCharacteristic`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Loan_GetBorrowerCharacteristics: loanId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Loan/${encodeURIComponent(
					number.encode(loanId).toString(),
				)}/GetBorrowerCharacteristics`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftApiModelsBorrowerBorrowerCharacteristicViewIO)));
		},

		Loan_UpsertBorrowerCharacteristicsPreview: (loanId, parameters) => {
			const encoded = partial({ body: array(LELodasoftApiModelsBorrowerBorrowerCharacteristicViewIO) }).encode(
				parameters,
			);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Loan/${encodeURIComponent(
					number.encode(loanId).toString(),
				)}/UpsertBorrowerCharacteristicsPreview`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsLoanLoanDocTaskViewModelIO)));
		},

		Loan_UpsertBorrowerCharacteristics: (loanId, parameters) => {
			const encoded = partial({ body: LELodasoftApiModelsBorrowerUpsertBorrowerCharacteristicsViewIO }).encode(
				parameters,
			);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Loan/${encodeURIComponent(
					number.encode(loanId).toString(),
				)}/UpsertBorrowerCharacteristics`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(array(LELodasoftApiModelsBorrowerBorrowerCharacteristicViewIO)));
		},

		Loan_GetAllLoanDocs: loanId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Loan/${encodeURIComponent(number.encode(loanId).toString())}/GetAllLoanDocs`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftDataAccessDbModelsAdminLoanDocModelIO)));
		},

		Loan_UpsertLoanDoc: (loanId, parameters) => {
			const encoded = partial({ body: LELodasoftDataAccessDbModelsAdminLoanDocModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Loan/${encodeURIComponent(number.encode(loanId).toString())}/UpsertLoanDoc`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftApiModelsBorrowerLoanDocDtoIO));
		},

		Loan_GetAllDocFiles: loanId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Loan/${encodeURIComponent(number.encode(loanId).toString())}/GetAllDocFiles`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsLoanDocFileViewModelIO)));
		},

		Loan_GetTaskCountByApplicationID: loanId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Loan/${encodeURIComponent(
					number.encode(loanId).toString(),
				)}/GetTaskCountByApplicationID`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftDataAccessModelsTaskCountModelIO));
		},

		Loan_GetAllLoanDocTaskConditions: loanId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Loan/${encodeURIComponent(
					number.encode(loanId).toString(),
				)}/GetAllLoanDocTaskConditions`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsLoanLoanDocTaskViewModelIO)));
		},

		Loan_SaveFirstLoanStatusByLoanPurpose: (loanId, parameters) => {
			const encoded = partial({ body: array(LELodasoftCommonModelsLoanLoanDocTaskViewModelIO) }).encode(
				parameters,
			);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Loan/${encodeURIComponent(
					number.encode(loanId).toString(),
				)}/SaveFirstLoanStatusByLoanPurpose`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Loan_UpdateLoanStatus: (loanId, loanStatusId, parameters) => {
			const encoded = partial({ body: array(LELodasoftCommonModelsLoanLoanDocTaskViewModelIO) }).encode(
				parameters,
			);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Loan/${encodeURIComponent(
					number.encode(loanId).toString(),
				)}/UpdateLoanStatus/${encodeURIComponent(number.encode(loanStatusId).toString())}`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Loan_ViewLoanStatusHistory: loanId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Loan/${encodeURIComponent(
					number.encode(loanId).toString(),
				)}/ViewLoanStatusHistory`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsAdminTrackingViewModelIO)));
		},

		Loan_ViewLoanStatusHistory1: applicationId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Loan/${encodeURIComponent(
					number.encode(applicationId).toString(),
				)}/GetActivityLogs`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsAdminActivityLogViewModelIO)));
		},

		Loan_SaveLoanInfo: (loanId, parameters) => {
			const encoded = partial({ body: LELodasoftApiModelsBorrowerLoanInfoIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Loan/${encodeURIComponent(number.encode(loanId).toString())}/SaveLoanInfo`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(unknownType));
		},

		Loan_GetLoanInfo: loanId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Loan/${encodeURIComponent(number.encode(loanId).toString())}/GetLoanInfo`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftApiModelsBorrowerNewApplicationRequestIO));
		},

		Loan_DeActivateLoan: parameters => {
			const encoded = partial({ query: type({ applicationId: number }) }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Loan/DeActivateLoan`,
				method: 'DELETE',
				query: encoded.query,
			}).pipe(decodeAndMap(unknownType));
		},

		Loan_UpsertSubjectProperty: (loanId, parameters) => {
			const encoded = partial({ body: LELodasoftApiModelsSharedAddressViewIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Loan/${encodeURIComponent(
					number.encode(loanId).toString(),
				)}/UpsertSubjectProperty`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftDataAccessDbModelsAdminApplicationModelIO));
		},

		Loan_AddOnlineApplicationTask: loanId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Loan/${encodeURIComponent(number.encode(loanId).toString())}/add-online-app-task`,
				method: 'POST',
			}).pipe(decodeAndMap(LELodasoftCommonModelsLoanLoanDocTaskViewModelIO));
		},

		Loan_CheckForOnlineApplicationTask: loanId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Loan/${encodeURIComponent(
					number.encode(loanId).toString(),
				)}/check-for-online-app-task`,
				method: 'POST',
			}).pipe(decodeAndMap(LELodasoftCommonModelsLoanLoanDocTaskViewModelIO));
		},
	}),
);
