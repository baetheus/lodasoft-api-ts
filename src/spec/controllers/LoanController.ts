import { ResponseValiationError, TAPIClient } from '../client/client';
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
import { unknownType } from '../utils/utils';
import { fromEither, AsyncData } from '@nll/dux';
import { asks } from 'fp-ts/lib/Reader';
import { number, array, boolean, type, partial } from 'io-ts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type LoanController = {
	/**
	 * @param { number } loanId undefined
	 */
	readonly Loan_GetBorrowersByLoanId: (
		loanId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftDataAccessModelsAdminBorrowerBorrowerDto>>>;

	/**
	 * @param { number } loanId undefined
	 */
	readonly Loan_GetBorrowerNotOwnedByLoan: (
		loanId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftDataAccessModelsAdminBorrowerBorrowerDto>>>;

	/**
	 * @param { number } loanId undefined
	 * @param { number } borrowerId undefined
	 */
	readonly Loan_SelectBorrower: (loanId: number, borrowerId: number) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } loanId undefined
	 * @param { number } borrowerId undefined
	 */
	readonly Loan_GetFirstBorrowerAddress: (
		loanId: number,
		borrowerId: number,
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } loanId undefined
	 * @param { number } borrowerId undefined
	 */
	readonly Loan_SetBorrowerAsPrimaryOnLoan: (
		loanId: number,
		borrowerId: number,
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } loanId undefined
	 * @param { number } borrowerId undefined
	 * @param { boolean } allow undefined
	 */
	readonly Loan_SetAllowPrimaryToStatisfyFlagOnLoan: (
		loanId: number,
		borrowerId: number,
		allow: boolean,
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } loanId undefined
	 * @param { number } borrowerId undefined
	 */
	readonly Loan_RemoveBorrowerFromLoan: (loanId: number, borrowerId: number) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } loanId undefined
	 */
	readonly Loan_AllExternalContacts: (
		loanId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftApiModelsBorrowerExternalContactView>>>;

	/**
	 * @param { number } loanId undefined
	 */
	readonly Loan_AllRemainExternalContacts: (
		loanId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsAdminAgentViewModel>>>;

	/**
	 * @param { number } loanId undefined
	 * @param { number } agentId undefined
	 * @param { object } parameters
	 */
	readonly Loan_SelectAgentForExternalContact: (
		loanId: number,
		agentId: number,
		parameters: { query: { agentTypeId: number } },
	) => Observable<AsyncData<Error, boolean>>;

	/**
	 * @param { number } loanId undefined
	 * @param { number } agentId undefined
	 */
	readonly Loan_RemoveAgentFromExternalContact: (
		loanId: number,
		agentId: number,
	) => Observable<AsyncData<Error, boolean>>;

	/**
	 * @param { number } loanId undefined
	 */
	readonly Loan_InternalContacts: (loanId: number) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } loanId undefined
	 * @param { object } parameters
	 */
	readonly Loan_UpsertInternalContacts: (
		loanId: number,
		parameters: { body: Array<LELodasoftDataAccessDbModelsAdminInternalContactModel> },
	) => Observable<AsyncData<Error, Array<LELodasoftDataAccessDbModelsAdminInternalContactModel>>>;

	/**
	 * @param { number } loanId undefined
	 */
	readonly Loan_CurrentLoanInfo: (
		loanId: number,
	) => Observable<AsyncData<Error, LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModel>>;

	/**
	 * @param { number } loanId undefined
	 * @param { object } parameters
	 */
	readonly Loan_UpsertCurrentLoanInfo: (
		loanId: number,
		parameters: { body: LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModel },
	) => Observable<AsyncData<Error, LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModel>>;

	/**
	 * @param { number } loanId undefined
	 */
	readonly Loan_GetLoanCharacteristic: (
		loanId: number,
	) => Observable<AsyncData<Error, LELodasoftApiModelsBorrowerLoanCharacteristicView>>;

	/**
	 * @param { number } loanId undefined
	 * @param { object } parameters
	 */
	readonly Loan_UpsertLoanCharacteristicPreview: (
		loanId: number,
		parameters: { body: LELodasoftApiModelsBorrowerLoanCharacteristicView },
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsLoanLoanDocTaskViewModel>>>;

	/**
	 * @param { number } loanId undefined
	 * @param { object } parameters
	 */
	readonly Loan_UpsertLoanCharacteristic: (
		loanId: number,
		parameters: { body: LELodasoftApiModelsBorrowerUpsertLoanCharacteristicView },
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } loanId undefined
	 */
	readonly Loan_GetBorrowerCharacteristics: (
		loanId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftApiModelsBorrowerBorrowerCharacteristicView>>>;

	/**
	 * @param { number } loanId undefined
	 * @param { object } parameters
	 */
	readonly Loan_UpsertBorrowerCharacteristicsPreview: (
		loanId: number,
		parameters: { body: Array<LELodasoftApiModelsBorrowerBorrowerCharacteristicView> },
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsLoanLoanDocTaskViewModel>>>;

	/**
	 * @param { number } loanId undefined
	 * @param { object } parameters
	 */
	readonly Loan_UpsertBorrowerCharacteristics: (
		loanId: number,
		parameters: { body: LELodasoftApiModelsBorrowerUpsertBorrowerCharacteristicsView },
	) => Observable<AsyncData<Error, Array<LELodasoftApiModelsBorrowerBorrowerCharacteristicView>>>;

	/**
	 * @param { number } loanId undefined
	 */
	readonly Loan_GetAllLoanDocs: (
		loanId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftDataAccessDbModelsAdminLoanDocModel>>>;

	/**
	 * @param { number } loanId undefined
	 * @param { object } parameters
	 */
	readonly Loan_UpsertLoanDoc: (
		loanId: number,
		parameters: { body: LELodasoftDataAccessDbModelsAdminLoanDocModel },
	) => Observable<AsyncData<Error, LELodasoftApiModelsBorrowerLoanDocDto>>;

	/**
	 * @param { number } loanId undefined
	 */
	readonly Loan_GetAllDocFiles: (
		loanId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsLoanDocFileViewModel>>>;

	/**
	 * @param { number } loanId undefined
	 */
	readonly Loan_GetTaskCountByApplicationID: (
		loanId: number,
	) => Observable<AsyncData<Error, LELodasoftDataAccessModelsTaskCountModel>>;

	/**
	 * @param { number } loanId undefined
	 */
	readonly Loan_GetAllLoanDocTaskConditions: (
		loanId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsLoanLoanDocTaskViewModel>>>;

	/**
	 * @param { number } loanId undefined
	 * @param { object } parameters
	 */
	readonly Loan_SaveFirstLoanStatusByLoanPurpose: (
		loanId: number,
		parameters: { body: Array<LELodasoftCommonModelsLoanLoanDocTaskViewModel> },
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } loanId undefined
	 * @param { number } loanStatusId undefined
	 * @param { object } parameters
	 */
	readonly Loan_UpdateLoanStatus: (
		loanId: number,
		loanStatusId: number,
		parameters: { body: Array<LELodasoftCommonModelsLoanLoanDocTaskViewModel> },
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } loanId undefined
	 */
	readonly Loan_ViewLoanStatusHistory: (
		loanId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsAdminTrackingViewModel>>>;

	/**
	 * @param { number } loanId undefined
	 * @param { object } parameters
	 */
	readonly Loan_SaveLoanInfo: (
		loanId: number,
		parameters: { body: LELodasoftApiModelsBorrowerLoanInfo },
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } loanId undefined
	 */
	readonly Loan_GetLoanInfo: (
		loanId: number,
	) => Observable<AsyncData<Error, LELodasoftApiModelsBorrowerNewApplicationRequest>>;

	/**
	 * @param { object } parameters
	 */
	readonly Loan_DeActivateLoan: (parameters: {
		query: { applicationId: number };
	}) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } loanId undefined
	 * @param { object } parameters
	 */
	readonly Loan_UpsertSubjectProperty: (
		loanId: number,
		parameters: { body: LELodasoftApiModelsSharedAddressView },
	) => Observable<AsyncData<Error, LELodasoftDataAccessDbModelsAdminApplicationModel>>;
};

export const loanController = asks(
	(e: { apiClient: TAPIClient }): LoanController => ({
		Loan_GetBorrowersByLoanId: loanId => {
			return e.apiClient
				.request({
					url: `/api/Loan/${encodeURIComponent(number.encode(loanId).toString())}/Borrowers`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftDataAccessModelsAdminBorrowerBorrowerDtoIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Loan_GetBorrowerNotOwnedByLoan: loanId => {
			return e.apiClient
				.request({
					url: `/api/Loan/${encodeURIComponent(number.encode(loanId).toString())}/BorrowersNotOwnedByLoan`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftDataAccessModelsAdminBorrowerBorrowerDtoIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Loan_SelectBorrower: (loanId, borrowerId) => {
			return e.apiClient
				.request({
					url: `/api/Loan/${encodeURIComponent(
						number.encode(loanId).toString(),
					)}/SelectBorrower/${encodeURIComponent(number.encode(borrowerId).toString())}`,
					method: 'POST',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Loan_GetFirstBorrowerAddress: (loanId, borrowerId) => {
			return e.apiClient
				.request({
					url: `/api/Loan/${encodeURIComponent(
						number.encode(loanId).toString(),
					)}/GetFirstBorrowerAddress/${encodeURIComponent(number.encode(borrowerId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Loan_SetBorrowerAsPrimaryOnLoan: (loanId, borrowerId) => {
			return e.apiClient
				.request({
					url: `/api/Loan/${encodeURIComponent(
						number.encode(loanId).toString(),
					)}/SetBorrowerAsPrimaryOnLoan/${encodeURIComponent(number.encode(borrowerId).toString())}`,
					method: 'POST',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Loan_SetAllowPrimaryToStatisfyFlagOnLoan: (loanId, borrowerId, allow) => {
			return e.apiClient
				.request({
					url: `/api/Loan/${encodeURIComponent(
						number.encode(loanId).toString(),
					)}/SetAllowPrimaryToStatisfyFlagOnLoan/${encodeURIComponent(
						number.encode(borrowerId).toString(),
					)}/${encodeURIComponent(boolean.encode(allow).toString())}`,
					method: 'POST',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Loan_RemoveBorrowerFromLoan: (loanId, borrowerId) => {
			return e.apiClient
				.request({
					url: `/api/Loan/${encodeURIComponent(
						number.encode(loanId).toString(),
					)}/RemoveBorrowerFromLoan/${encodeURIComponent(number.encode(borrowerId).toString())}`,
					method: 'POST',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Loan_AllExternalContacts: loanId => {
			return e.apiClient
				.request({
					url: `/api/Loan/${encodeURIComponent(number.encode(loanId).toString())}/AllExternalContacts`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftApiModelsBorrowerExternalContactViewIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Loan_AllRemainExternalContacts: loanId => {
			return e.apiClient
				.request({
					url: `/api/Loan/${encodeURIComponent(number.encode(loanId).toString())}/AllRemainExternalContacts`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsAdminAgentViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Loan_SelectAgentForExternalContact: (loanId, agentId, parameters) => {
			const encoded = partial({ query: type({ agentTypeId: number }) }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Loan/${encodeURIComponent(
						number.encode(loanId).toString(),
					)}/SelectAgentForExternalContact/${encodeURIComponent(number.encode(agentId).toString())}`,
					method: 'POST',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value => fromEither(boolean.decode(value).mapLeft(ResponseValiationError.create))),
					),
				);
		},

		Loan_RemoveAgentFromExternalContact: (loanId, agentId) => {
			return e.apiClient
				.request({
					url: `/api/Loan/${encodeURIComponent(
						number.encode(loanId).toString(),
					)}/RemoveAgentFromExternalContact/${encodeURIComponent(number.encode(agentId).toString())}`,
					method: 'DELETE',
				})
				.pipe(
					map(data =>
						data.chain(value => fromEither(boolean.decode(value).mapLeft(ResponseValiationError.create))),
					),
				);
		},

		Loan_InternalContacts: loanId => {
			return e.apiClient
				.request({
					url: `/api/Loan/${encodeURIComponent(number.encode(loanId).toString())}/InternalContacts`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Loan_UpsertInternalContacts: (loanId, parameters) => {
			const encoded = partial({ body: array(LELodasoftDataAccessDbModelsAdminInternalContactModelIO) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Loan/${encodeURIComponent(number.encode(loanId).toString())}/UpsertInternalContacts`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftDataAccessDbModelsAdminInternalContactModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Loan_CurrentLoanInfo: loanId => {
			return e.apiClient
				.request({
					url: `/api/Loan/${encodeURIComponent(number.encode(loanId).toString())}/CurrentLoanInfo`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Loan_UpsertCurrentLoanInfo: (loanId, parameters) => {
			const encoded = partial({ body: LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModelIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Loan/${encodeURIComponent(number.encode(loanId).toString())}/UpsertCurrentLoanInfo`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Loan_GetLoanCharacteristic: loanId => {
			return e.apiClient
				.request({
					url: `/api/Loan/${encodeURIComponent(number.encode(loanId).toString())}/GetLoanCharacteristic`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftApiModelsBorrowerLoanCharacteristicViewIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Loan_UpsertLoanCharacteristicPreview: (loanId, parameters) => {
			const encoded = partial({ body: LELodasoftApiModelsBorrowerLoanCharacteristicViewIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Loan/${encodeURIComponent(
						number.encode(loanId).toString(),
					)}/UpsertLoanCharacteristicPreview`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsLoanLoanDocTaskViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Loan_UpsertLoanCharacteristic: (loanId, parameters) => {
			const encoded = partial({ body: LELodasoftApiModelsBorrowerUpsertLoanCharacteristicViewIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Loan/${encodeURIComponent(number.encode(loanId).toString())}/UpsertLoanCharacteristic`,
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

		Loan_GetBorrowerCharacteristics: loanId => {
			return e.apiClient
				.request({
					url: `/api/Loan/${encodeURIComponent(number.encode(loanId).toString())}/GetBorrowerCharacteristics`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftApiModelsBorrowerBorrowerCharacteristicViewIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Loan_UpsertBorrowerCharacteristicsPreview: (loanId, parameters) => {
			const encoded = partial({ body: array(LELodasoftApiModelsBorrowerBorrowerCharacteristicViewIO) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Loan/${encodeURIComponent(
						number.encode(loanId).toString(),
					)}/UpsertBorrowerCharacteristicsPreview`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsLoanLoanDocTaskViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Loan_UpsertBorrowerCharacteristics: (loanId, parameters) => {
			const encoded = partial({ body: LELodasoftApiModelsBorrowerUpsertBorrowerCharacteristicsViewIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Loan/${encodeURIComponent(
						number.encode(loanId).toString(),
					)}/UpsertBorrowerCharacteristics`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftApiModelsBorrowerBorrowerCharacteristicViewIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Loan_GetAllLoanDocs: loanId => {
			return e.apiClient
				.request({
					url: `/api/Loan/${encodeURIComponent(number.encode(loanId).toString())}/GetAllLoanDocs`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftDataAccessDbModelsAdminLoanDocModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Loan_UpsertLoanDoc: (loanId, parameters) => {
			const encoded = partial({ body: LELodasoftDataAccessDbModelsAdminLoanDocModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Loan/${encodeURIComponent(number.encode(loanId).toString())}/UpsertLoanDoc`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftApiModelsBorrowerLoanDocDtoIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Loan_GetAllDocFiles: loanId => {
			return e.apiClient
				.request({
					url: `/api/Loan/${encodeURIComponent(number.encode(loanId).toString())}/GetAllDocFiles`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsLoanDocFileViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Loan_GetTaskCountByApplicationID: loanId => {
			return e.apiClient
				.request({
					url: `/api/Loan/${encodeURIComponent(
						number.encode(loanId).toString(),
					)}/GetTaskCountByApplicationID`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftDataAccessModelsTaskCountModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Loan_GetAllLoanDocTaskConditions: loanId => {
			return e.apiClient
				.request({
					url: `/api/Loan/${encodeURIComponent(
						number.encode(loanId).toString(),
					)}/GetAllLoanDocTaskConditions`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsLoanLoanDocTaskViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Loan_SaveFirstLoanStatusByLoanPurpose: (loanId, parameters) => {
			const encoded = partial({ body: array(LELodasoftCommonModelsLoanLoanDocTaskViewModelIO) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Loan/${encodeURIComponent(
						number.encode(loanId).toString(),
					)}/SaveFirstLoanStatusByLoanPurpose`,
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

		Loan_UpdateLoanStatus: (loanId, loanStatusId, parameters) => {
			const encoded = partial({ body: array(LELodasoftCommonModelsLoanLoanDocTaskViewModelIO) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Loan/${encodeURIComponent(
						number.encode(loanId).toString(),
					)}/UpdateLoanStatus/${encodeURIComponent(number.encode(loanStatusId).toString())}`,
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

		Loan_ViewLoanStatusHistory: loanId => {
			return e.apiClient
				.request({
					url: `/api/Loan/${encodeURIComponent(number.encode(loanId).toString())}/ViewLoanStatusHistory`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsAdminTrackingViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Loan_SaveLoanInfo: (loanId, parameters) => {
			const encoded = partial({ body: LELodasoftApiModelsBorrowerLoanInfoIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Loan/${encodeURIComponent(number.encode(loanId).toString())}/SaveLoanInfo`,
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

		Loan_GetLoanInfo: loanId => {
			return e.apiClient
				.request({
					url: `/api/Loan/${encodeURIComponent(number.encode(loanId).toString())}/GetLoanInfo`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftApiModelsBorrowerNewApplicationRequestIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Loan_DeActivateLoan: parameters => {
			const encoded = partial({ query: type({ applicationId: number }) }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Loan/DeActivateLoan`,
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

		Loan_UpsertSubjectProperty: (loanId, parameters) => {
			const encoded = partial({ body: LELodasoftApiModelsSharedAddressViewIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Loan/${encodeURIComponent(number.encode(loanId).toString())}/UpsertSubjectProperty`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftDataAccessDbModelsAdminApplicationModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},
	}),
);
