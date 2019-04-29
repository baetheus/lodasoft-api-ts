import { TAPIClient } from '../client/client';
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
import { decodeAndMap, unknownType } from '../utils/utils';
import { asks } from 'fp-ts/lib/Reader';
import { number, partial, array } from 'io-ts';
import { Observable } from 'rxjs';

export type MortgageBorrowerController = {
	/**
	 * @param { number } borrowerId undefined
	 */
	readonly MortgageBorrower_GetBorrowerById: (
		borrowerId: number,
	) => Observable<LELodasoftCommonModelsMortgageMortgageBorrowerViewModel>;

	/**
	 * @param { number } borrowerId undefined
	 * @param { object } parameters
	 */
	readonly MortgageBorrower_UpdateBorrower: (
		borrowerId: number,
		parameters: { body: LELodasoftCommonModelsMortgageMortgageBorrowerViewModel },
	) => Observable<LELodasoftCommonModelsMortgageMortgageBorrowerViewModel>;

	/**
	 * @param { number } borrowerId undefined
	 */
	readonly MortgageBorrower_DeleteBorrower: (borrowerId: number) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly MortgageBorrower_InsertBorrower: (parameters: {
		body: LELodasoftCommonModelsMortgageMortgageBorrowerViewModel;
	}) => Observable<LELodasoftCommonModelsMortgageMortgageBorrowerViewModel>;

	/**
	 * @param { number } borrowerId undefined
	 */
	readonly MortgageBorrower_GetAssetsByBorrowerId: (
		borrowerId: number,
	) => Observable<Array<LELodasoftCommonModelsMortgageAssetViewModel>>;

	/**
	 * @param { number } borrowerId undefined
	 * @param { object } parameters
	 */
	readonly MortgageBorrower_InsertAsset: (
		borrowerId: number,
		parameters: { body: LELodasoftCommonModelsMortgageAssetViewModel },
	) => Observable<LELodasoftCommonModelsMortgageAssetViewModel>;

	/**
	 * @param { number } borrowerId undefined
	 */
	readonly MortgageBorrower_GetDeclarationsByBorrowerId: (
		borrowerId: number,
	) => Observable<Array<LELodasoftCommonModelsMortgageDeclarationViewModel>>;

	/**
	 * @param { number } borrowerId undefined
	 * @param { object } parameters
	 */
	readonly MortgageBorrower_InsertDeclaration: (
		borrowerId: number,
		parameters: { body: LELodasoftCommonModelsMortgageDeclarationViewModel },
	) => Observable<LELodasoftCommonModelsMortgageDeclarationViewModel>;

	/**
	 * @param { number } borrowerId undefined
	 */
	readonly MortgageBorrower_GetDependentsByBorrowerId: (
		borrowerId: number,
	) => Observable<Array<LELodasoftCommonModelsMortgageDependentViewModel>>;

	/**
	 * @param { number } borrowerId undefined
	 * @param { object } parameters
	 */
	readonly MortgageBorrower_InsertDependent: (
		borrowerId: number,
		parameters: { body: LELodasoftCommonModelsMortgageDependentViewModel },
	) => Observable<LELodasoftCommonModelsMortgageDependentViewModel>;

	/**
	 * @param { number } borrowerId undefined
	 */
	readonly MortgageBorrower_GetEmailsByBorrowerId: (
		borrowerId: number,
	) => Observable<Array<LELodasoftCommonModelsMortgageEmailViewModel>>;

	/**
	 * @param { number } borrowerId undefined
	 * @param { object } parameters
	 */
	readonly MortgageBorrower_InsertEmail: (
		borrowerId: number,
		parameters: { body: LELodasoftCommonModelsMortgageEmailViewModel },
	) => Observable<LELodasoftCommonModelsMortgageEmailViewModel>;

	/**
	 * @param { number } borrowerId undefined
	 */
	readonly MortgageBorrower_GetEmploymentsByBorrowerId: (
		borrowerId: number,
	) => Observable<Array<LELodasoftCommonModelsMortgageEmploymentViewModel>>;

	/**
	 * @param { number } borrowerId undefined
	 * @param { object } parameters
	 */
	readonly MortgageBorrower_InsertEmployment: (
		borrowerId: number,
		parameters: { body: LELodasoftCommonModelsMortgageEmploymentViewModel },
	) => Observable<LELodasoftCommonModelsMortgageEmploymentViewModel>;

	/**
	 * @param { number } borrowerId undefined
	 */
	readonly MortgageBorrower_GetExpensesByBorrowerId: (
		borrowerId: number,
	) => Observable<Array<LELodasoftCommonModelsMortgageExpenseViewModel>>;

	/**
	 * @param { number } borrowerId undefined
	 * @param { object } parameters
	 */
	readonly MortgageBorrower_InsertExpense: (
		borrowerId: number,
		parameters: { body: LELodasoftCommonModelsMortgageExpenseViewModel },
	) => Observable<LELodasoftCommonModelsMortgageExpenseViewModel>;

	/**
	 * @param { number } borrowerId undefined
	 */
	readonly MortgageBorrower_GetGovernmentMonitorsByBorrowerId: (
		borrowerId: number,
	) => Observable<Array<LELodasoftCommonModelsMortgageGovernmentMonitorViewModel>>;

	/**
	 * @param { number } borrowerId undefined
	 * @param { object } parameters
	 */
	readonly MortgageBorrower_InsertGovernmentMonitor: (
		borrowerId: number,
		parameters: { body: LELodasoftCommonModelsMortgageGovernmentMonitorViewModel },
	) => Observable<LELodasoftCommonModelsMortgageGovernmentMonitorViewModel>;

	/**
	 * @param { number } borrowerId undefined
	 */
	readonly MortgageBorrower_GetIncomesByBorrowerId: (
		borrowerId: number,
	) => Observable<Array<LELodasoftCommonModelsMortgageIncomeViewModel>>;

	/**
	 * @param { number } borrowerId undefined
	 * @param { object } parameters
	 */
	readonly MortgageBorrower_InsertIncome: (
		borrowerId: number,
		parameters: { body: LELodasoftCommonModelsMortgageIncomeViewModel },
	) => Observable<LELodasoftCommonModelsMortgageIncomeViewModel>;

	/**
	 * @param { number } borrowerId undefined
	 */
	readonly MortgageBorrower_GetLiabilitiesByBorrowerId: (
		borrowerId: number,
	) => Observable<Array<LELodasoftCommonModelsMortgageLiabilityViewModel>>;

	/**
	 * @param { number } borrowerId undefined
	 * @param { object } parameters
	 */
	readonly MortgageBorrower_InsertLiability: (
		borrowerId: number,
		parameters: { body: LELodasoftCommonModelsMortgageLiabilityViewModel },
	) => Observable<LELodasoftCommonModelsMortgageLiabilityViewModel>;

	/**
	 * @param { number } borrowerId undefined
	 */
	readonly MortgageBorrower_GetPhonesByBorrowerId: (
		borrowerId: number,
	) => Observable<Array<LELodasoftCommonModelsMortgagePhoneViewModel>>;

	/**
	 * @param { number } borrowerId undefined
	 * @param { object } parameters
	 */
	readonly MortgageBorrower_InsertPhone: (
		borrowerId: number,
		parameters: { body: LELodasoftCommonModelsMortgagePhoneViewModel },
	) => Observable<LELodasoftCommonModelsMortgagePhoneViewModel>;

	/**
	 * @param { number } borrowerId undefined
	 */
	readonly MortgageBorrower_GetReosByBorrowerId: (
		borrowerId: number,
	) => Observable<Array<LELodasoftCommonModelsMortgageReoViewModel>>;

	/**
	 * @param { number } borrowerId undefined
	 * @param { object } parameters
	 */
	readonly MortgageBorrower_InsertReo: (
		borrowerId: number,
		parameters: { body: LELodasoftCommonModelsMortgageReoViewModel },
	) => Observable<LELodasoftCommonModelsMortgageReoViewModel>;

	/**
	 * @param { number } borrowerId undefined
	 */
	readonly MortgageBorrower_GetResidencyAddressesByBorrowerId: (
		borrowerId: number,
	) => Observable<Array<LELodasoftCommonModelsMortgageResidencyAddressViewModel>>;

	/**
	 * @param { number } borrowerId undefined
	 * @param { object } parameters
	 */
	readonly MortgageBorrower_InsertResidencyAddress: (
		borrowerId: number,
		parameters: { body: LELodasoftCommonModelsMortgageResidencyAddressViewModel },
	) => Observable<LELodasoftCommonModelsMortgageResidencyAddressViewModel>;
};

export const mortgageBorrowerController = asks(
	(e: { apiClient: TAPIClient }): MortgageBorrowerController => ({
		MortgageBorrower_GetBorrowerById: borrowerId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(number.encode(borrowerId).toString())}`,
					method: 'GET',
				})
				.pipe(decodeAndMap(LELodasoftCommonModelsMortgageMortgageBorrowerViewModelIO));
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
				.pipe(decodeAndMap(LELodasoftCommonModelsMortgageMortgageBorrowerViewModelIO));
		},

		MortgageBorrower_DeleteBorrower: borrowerId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(number.encode(borrowerId).toString())}`,
					method: 'DELETE',
				})
				.pipe(decodeAndMap(unknownType));
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
				.pipe(decodeAndMap(LELodasoftCommonModelsMortgageMortgageBorrowerViewModelIO));
		},

		MortgageBorrower_GetAssetsByBorrowerId: borrowerId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(number.encode(borrowerId).toString())}/assets`,
					method: 'GET',
				})
				.pipe(decodeAndMap(array(LELodasoftCommonModelsMortgageAssetViewModelIO)));
		},

		MortgageBorrower_InsertAsset: (borrowerId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageAssetViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(number.encode(borrowerId).toString())}/assets`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(decodeAndMap(LELodasoftCommonModelsMortgageAssetViewModelIO));
		},

		MortgageBorrower_GetDeclarationsByBorrowerId: borrowerId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(
						number.encode(borrowerId).toString(),
					)}/declarations`,
					method: 'GET',
				})
				.pipe(decodeAndMap(array(LELodasoftCommonModelsMortgageDeclarationViewModelIO)));
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
				.pipe(decodeAndMap(LELodasoftCommonModelsMortgageDeclarationViewModelIO));
		},

		MortgageBorrower_GetDependentsByBorrowerId: borrowerId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(
						number.encode(borrowerId).toString(),
					)}/dependents`,
					method: 'GET',
				})
				.pipe(decodeAndMap(array(LELodasoftCommonModelsMortgageDependentViewModelIO)));
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
				.pipe(decodeAndMap(LELodasoftCommonModelsMortgageDependentViewModelIO));
		},

		MortgageBorrower_GetEmailsByBorrowerId: borrowerId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(number.encode(borrowerId).toString())}/emails`,
					method: 'GET',
				})
				.pipe(decodeAndMap(array(LELodasoftCommonModelsMortgageEmailViewModelIO)));
		},

		MortgageBorrower_InsertEmail: (borrowerId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageEmailViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(number.encode(borrowerId).toString())}/emails`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(decodeAndMap(LELodasoftCommonModelsMortgageEmailViewModelIO));
		},

		MortgageBorrower_GetEmploymentsByBorrowerId: borrowerId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(
						number.encode(borrowerId).toString(),
					)}/employments`,
					method: 'GET',
				})
				.pipe(decodeAndMap(array(LELodasoftCommonModelsMortgageEmploymentViewModelIO)));
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
				.pipe(decodeAndMap(LELodasoftCommonModelsMortgageEmploymentViewModelIO));
		},

		MortgageBorrower_GetExpensesByBorrowerId: borrowerId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(number.encode(borrowerId).toString())}/expenses`,
					method: 'GET',
				})
				.pipe(decodeAndMap(array(LELodasoftCommonModelsMortgageExpenseViewModelIO)));
		},

		MortgageBorrower_InsertExpense: (borrowerId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageExpenseViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(number.encode(borrowerId).toString())}/expenses`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(decodeAndMap(LELodasoftCommonModelsMortgageExpenseViewModelIO));
		},

		MortgageBorrower_GetGovernmentMonitorsByBorrowerId: borrowerId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(
						number.encode(borrowerId).toString(),
					)}/governmentmonitors`,
					method: 'GET',
				})
				.pipe(decodeAndMap(array(LELodasoftCommonModelsMortgageGovernmentMonitorViewModelIO)));
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
				.pipe(decodeAndMap(LELodasoftCommonModelsMortgageGovernmentMonitorViewModelIO));
		},

		MortgageBorrower_GetIncomesByBorrowerId: borrowerId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(number.encode(borrowerId).toString())}/incomes`,
					method: 'GET',
				})
				.pipe(decodeAndMap(array(LELodasoftCommonModelsMortgageIncomeViewModelIO)));
		},

		MortgageBorrower_InsertIncome: (borrowerId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageIncomeViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(number.encode(borrowerId).toString())}/incomes`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(decodeAndMap(LELodasoftCommonModelsMortgageIncomeViewModelIO));
		},

		MortgageBorrower_GetLiabilitiesByBorrowerId: borrowerId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(
						number.encode(borrowerId).toString(),
					)}/liabilities`,
					method: 'GET',
				})
				.pipe(decodeAndMap(array(LELodasoftCommonModelsMortgageLiabilityViewModelIO)));
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
				.pipe(decodeAndMap(LELodasoftCommonModelsMortgageLiabilityViewModelIO));
		},

		MortgageBorrower_GetPhonesByBorrowerId: borrowerId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(number.encode(borrowerId).toString())}/phones`,
					method: 'GET',
				})
				.pipe(decodeAndMap(array(LELodasoftCommonModelsMortgagePhoneViewModelIO)));
		},

		MortgageBorrower_InsertPhone: (borrowerId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgagePhoneViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(number.encode(borrowerId).toString())}/phones`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(decodeAndMap(LELodasoftCommonModelsMortgagePhoneViewModelIO));
		},

		MortgageBorrower_GetReosByBorrowerId: borrowerId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(number.encode(borrowerId).toString())}/reos`,
					method: 'GET',
				})
				.pipe(decodeAndMap(array(LELodasoftCommonModelsMortgageReoViewModelIO)));
		},

		MortgageBorrower_InsertReo: (borrowerId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageReoViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(number.encode(borrowerId).toString())}/reos`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(decodeAndMap(LELodasoftCommonModelsMortgageReoViewModelIO));
		},

		MortgageBorrower_GetResidencyAddressesByBorrowerId: borrowerId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/borrowers/${encodeURIComponent(
						number.encode(borrowerId).toString(),
					)}/residencyaddresses`,
					method: 'GET',
				})
				.pipe(decodeAndMap(array(LELodasoftCommonModelsMortgageResidencyAddressViewModelIO)));
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
				.pipe(decodeAndMap(LELodasoftCommonModelsMortgageResidencyAddressViewModelIO));
		},
	}),
);
