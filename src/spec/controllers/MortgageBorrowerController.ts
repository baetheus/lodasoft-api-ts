import { ResponseValiationError, TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsMortgageAssetViewModel,
	LELodasoftCommonModelsMortgageAssetViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageAssetViewModel';
import {
	LELodasoftCommonModelsMortgageDeclarationViewModel,
	LELodasoftCommonModelsMortgageDeclarationViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageDeclarationViewModel';
import {
	LELodasoftCommonModelsMortgageDependentViewModel,
	LELodasoftCommonModelsMortgageDependentViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageDependentViewModel';
import {
	LELodasoftCommonModelsMortgageEmailViewModel,
	LELodasoftCommonModelsMortgageEmailViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageEmailViewModel';
import {
	LELodasoftCommonModelsMortgageEmploymentViewModel,
	LELodasoftCommonModelsMortgageEmploymentViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageEmploymentViewModel';
import {
	LELodasoftCommonModelsMortgageExpenseViewModel,
	LELodasoftCommonModelsMortgageExpenseViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageExpenseViewModel';
import {
	LELodasoftCommonModelsMortgageGovernmentMonitorViewModel,
	LELodasoftCommonModelsMortgageGovernmentMonitorViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageGovernmentMonitorViewModel';
import {
	LELodasoftCommonModelsMortgageIncomeViewModel,
	LELodasoftCommonModelsMortgageIncomeViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageIncomeViewModel';
import {
	LELodasoftCommonModelsMortgageLiabilityViewModel,
	LELodasoftCommonModelsMortgageLiabilityViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageLiabilityViewModel';
import {
	LELodasoftCommonModelsMortgageMortgageBorrowerViewModel,
	LELodasoftCommonModelsMortgageMortgageBorrowerViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageMortgageBorrowerViewModel';
import {
	LELodasoftCommonModelsMortgagePhoneViewModel,
	LELodasoftCommonModelsMortgagePhoneViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgagePhoneViewModel';
import {
	LELodasoftCommonModelsMortgageReoViewModel,
	LELodasoftCommonModelsMortgageReoViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageReoViewModel';
import {
	LELodasoftCommonModelsMortgageResidencyAddressViewModel,
	LELodasoftCommonModelsMortgageResidencyAddressViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageResidencyAddressViewModel';
import { unknownType } from '../utils/utils';
import { fromEither, AsyncData } from '@nll/dux';
import { asks } from 'fp-ts/lib/Reader';
import { number, partial, array } from 'io-ts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type MortgageBorrowerController = {
	/**
	 * @param { number } borrowerId undefined
	 */
	readonly MortgageBorrower_GetBorrowerById: (
		borrowerId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageMortgageBorrowerViewModel>>;

	/**
	 * @param { number } borrowerId undefined
	 * @param { object } parameters
	 */
	readonly MortgageBorrower_UpdateBorrower: (
		borrowerId: number,
		parameters: { body: LELodasoftCommonModelsMortgageMortgageBorrowerViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageMortgageBorrowerViewModel>>;

	/**
	 * @param { number } borrowerId undefined
	 */
	readonly MortgageBorrower_DeleteBorrower: (borrowerId: number) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly MortgageBorrower_InsertBorrower: (parameters: {
		body: LELodasoftCommonModelsMortgageMortgageBorrowerViewModel;
	}) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageMortgageBorrowerViewModel>>;

	/**
	 * @param { number } borrowerId undefined
	 */
	readonly MortgageBorrower_GetAssetsByBorrowerId: (
		borrowerId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsMortgageAssetViewModel>>>;

	/**
	 * @param { number } borrowerId undefined
	 * @param { object } parameters
	 */
	readonly MortgageBorrower_InsertAsset: (
		borrowerId: number,
		parameters: { body: LELodasoftCommonModelsMortgageAssetViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageAssetViewModel>>;

	/**
	 * @param { number } borrowerId undefined
	 */
	readonly MortgageBorrower_GetDeclarationsByBorrowerId: (
		borrowerId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsMortgageDeclarationViewModel>>>;

	/**
	 * @param { number } borrowerId undefined
	 * @param { object } parameters
	 */
	readonly MortgageBorrower_InsertDeclaration: (
		borrowerId: number,
		parameters: { body: LELodasoftCommonModelsMortgageDeclarationViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageDeclarationViewModel>>;

	/**
	 * @param { number } borrowerId undefined
	 */
	readonly MortgageBorrower_GetDependentsByBorrowerId: (
		borrowerId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsMortgageDependentViewModel>>>;

	/**
	 * @param { number } borrowerId undefined
	 * @param { object } parameters
	 */
	readonly MortgageBorrower_InsertDependent: (
		borrowerId: number,
		parameters: { body: LELodasoftCommonModelsMortgageDependentViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageDependentViewModel>>;

	/**
	 * @param { number } borrowerId undefined
	 */
	readonly MortgageBorrower_GetEmailsByBorrowerId: (
		borrowerId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsMortgageEmailViewModel>>>;

	/**
	 * @param { number } borrowerId undefined
	 * @param { object } parameters
	 */
	readonly MortgageBorrower_InsertEmail: (
		borrowerId: number,
		parameters: { body: LELodasoftCommonModelsMortgageEmailViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageEmailViewModel>>;

	/**
	 * @param { number } borrowerId undefined
	 */
	readonly MortgageBorrower_GetEmploymentsByBorrowerId: (
		borrowerId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsMortgageEmploymentViewModel>>>;

	/**
	 * @param { number } borrowerId undefined
	 * @param { object } parameters
	 */
	readonly MortgageBorrower_InsertEmployment: (
		borrowerId: number,
		parameters: { body: LELodasoftCommonModelsMortgageEmploymentViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageEmploymentViewModel>>;

	/**
	 * @param { number } borrowerId undefined
	 */
	readonly MortgageBorrower_GetExpensesByBorrowerId: (
		borrowerId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsMortgageExpenseViewModel>>>;

	/**
	 * @param { number } borrowerId undefined
	 * @param { object } parameters
	 */
	readonly MortgageBorrower_InsertExpense: (
		borrowerId: number,
		parameters: { body: LELodasoftCommonModelsMortgageExpenseViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageExpenseViewModel>>;

	/**
	 * @param { number } borrowerId undefined
	 */
	readonly MortgageBorrower_GetGovernmentMonitorsByBorrowerId: (
		borrowerId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsMortgageGovernmentMonitorViewModel>>>;

	/**
	 * @param { number } borrowerId undefined
	 * @param { object } parameters
	 */
	readonly MortgageBorrower_InsertGovernmentMonitor: (
		borrowerId: number,
		parameters: { body: LELodasoftCommonModelsMortgageGovernmentMonitorViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageGovernmentMonitorViewModel>>;

	/**
	 * @param { number } borrowerId undefined
	 */
	readonly MortgageBorrower_GetIncomesByBorrowerId: (
		borrowerId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsMortgageIncomeViewModel>>>;

	/**
	 * @param { number } borrowerId undefined
	 * @param { object } parameters
	 */
	readonly MortgageBorrower_InsertIncome: (
		borrowerId: number,
		parameters: { body: LELodasoftCommonModelsMortgageIncomeViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageIncomeViewModel>>;

	/**
	 * @param { number } borrowerId undefined
	 */
	readonly MortgageBorrower_GetLiabilitiesByBorrowerId: (
		borrowerId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsMortgageLiabilityViewModel>>>;

	/**
	 * @param { number } borrowerId undefined
	 * @param { object } parameters
	 */
	readonly MortgageBorrower_InsertLiability: (
		borrowerId: number,
		parameters: { body: LELodasoftCommonModelsMortgageLiabilityViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageLiabilityViewModel>>;

	/**
	 * @param { number } borrowerId undefined
	 */
	readonly MortgageBorrower_GetPhonesByBorrowerId: (
		borrowerId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsMortgagePhoneViewModel>>>;

	/**
	 * @param { number } borrowerId undefined
	 * @param { object } parameters
	 */
	readonly MortgageBorrower_InsertPhone: (
		borrowerId: number,
		parameters: { body: LELodasoftCommonModelsMortgagePhoneViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgagePhoneViewModel>>;

	/**
	 * @param { number } borrowerId undefined
	 */
	readonly MortgageBorrower_GetReosByBorrowerId: (
		borrowerId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsMortgageReoViewModel>>>;

	/**
	 * @param { number } borrowerId undefined
	 * @param { object } parameters
	 */
	readonly MortgageBorrower_InsertReo: (
		borrowerId: number,
		parameters: { body: LELodasoftCommonModelsMortgageReoViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageReoViewModel>>;

	/**
	 * @param { number } borrowerId undefined
	 */
	readonly MortgageBorrower_GetResidencyAddressesByBorrowerId: (
		borrowerId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsMortgageResidencyAddressViewModel>>>;

	/**
	 * @param { number } borrowerId undefined
	 * @param { object } parameters
	 */
	readonly MortgageBorrower_InsertResidencyAddress: (
		borrowerId: number,
		parameters: { body: LELodasoftCommonModelsMortgageResidencyAddressViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageResidencyAddressViewModel>>;
};

export const mortgageBorrowerController = asks(
	(e: { apiClient: TAPIClient }): MortgageBorrowerController => ({
		MortgageBorrower_GetBorrowerById: borrowerId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(number.encode(borrowerId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageMortgageBorrowerViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		MortgageBorrower_UpdateBorrower: (borrowerId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageMortgageBorrowerViewModelIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(number.encode(borrowerId).toString())}`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageMortgageBorrowerViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		MortgageBorrower_DeleteBorrower: borrowerId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(number.encode(borrowerId).toString())}`,
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

		MortgageBorrower_InsertBorrower: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageMortgageBorrowerViewModelIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageMortgageBorrowerViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		MortgageBorrower_GetAssetsByBorrowerId: borrowerId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(number.encode(borrowerId).toString())}/assets`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsMortgageAssetViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		MortgageBorrower_InsertAsset: (borrowerId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageAssetViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(number.encode(borrowerId).toString())}/assets`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageAssetViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		MortgageBorrower_GetDeclarationsByBorrowerId: borrowerId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(
						number.encode(borrowerId).toString(),
					)}/declarations`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsMortgageDeclarationViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		MortgageBorrower_InsertDeclaration: (borrowerId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageDeclarationViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(
						number.encode(borrowerId).toString(),
					)}/declarations`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageDeclarationViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		MortgageBorrower_GetDependentsByBorrowerId: borrowerId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(
						number.encode(borrowerId).toString(),
					)}/dependents`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsMortgageDependentViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		MortgageBorrower_InsertDependent: (borrowerId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageDependentViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(
						number.encode(borrowerId).toString(),
					)}/dependents`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageDependentViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		MortgageBorrower_GetEmailsByBorrowerId: borrowerId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(number.encode(borrowerId).toString())}/emails`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsMortgageEmailViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		MortgageBorrower_InsertEmail: (borrowerId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageEmailViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(number.encode(borrowerId).toString())}/emails`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageEmailViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		MortgageBorrower_GetEmploymentsByBorrowerId: borrowerId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(
						number.encode(borrowerId).toString(),
					)}/employments`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsMortgageEmploymentViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		MortgageBorrower_InsertEmployment: (borrowerId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageEmploymentViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(
						number.encode(borrowerId).toString(),
					)}/employments`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageEmploymentViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		MortgageBorrower_GetExpensesByBorrowerId: borrowerId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(number.encode(borrowerId).toString())}/expenses`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsMortgageExpenseViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		MortgageBorrower_InsertExpense: (borrowerId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageExpenseViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(number.encode(borrowerId).toString())}/expenses`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageExpenseViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		MortgageBorrower_GetGovernmentMonitorsByBorrowerId: borrowerId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(
						number.encode(borrowerId).toString(),
					)}/governmentmonitors`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsMortgageGovernmentMonitorViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		MortgageBorrower_InsertGovernmentMonitor: (borrowerId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageGovernmentMonitorViewModelIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(
						number.encode(borrowerId).toString(),
					)}/governmentmonitors`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageGovernmentMonitorViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		MortgageBorrower_GetIncomesByBorrowerId: borrowerId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(number.encode(borrowerId).toString())}/incomes`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsMortgageIncomeViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		MortgageBorrower_InsertIncome: (borrowerId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageIncomeViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(number.encode(borrowerId).toString())}/incomes`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageIncomeViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		MortgageBorrower_GetLiabilitiesByBorrowerId: borrowerId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(
						number.encode(borrowerId).toString(),
					)}/liabilities`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsMortgageLiabilityViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		MortgageBorrower_InsertLiability: (borrowerId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageLiabilityViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(
						number.encode(borrowerId).toString(),
					)}/liabilities`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageLiabilityViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		MortgageBorrower_GetPhonesByBorrowerId: borrowerId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(number.encode(borrowerId).toString())}/phones`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsMortgagePhoneViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		MortgageBorrower_InsertPhone: (borrowerId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgagePhoneViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(number.encode(borrowerId).toString())}/phones`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgagePhoneViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		MortgageBorrower_GetReosByBorrowerId: borrowerId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(number.encode(borrowerId).toString())}/reos`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsMortgageReoViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		MortgageBorrower_InsertReo: (borrowerId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageReoViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(number.encode(borrowerId).toString())}/reos`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageReoViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		MortgageBorrower_GetResidencyAddressesByBorrowerId: borrowerId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(
						number.encode(borrowerId).toString(),
					)}/residencyaddresses`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsMortgageResidencyAddressViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		MortgageBorrower_InsertResidencyAddress: (borrowerId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageResidencyAddressViewModelIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(
						number.encode(borrowerId).toString(),
					)}/residencyaddresses`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageResidencyAddressViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},
	}),
);
