import { TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsLoanCreditViewModel,
	LELodasoftCommonModelsLoanCreditViewModelIO,
} from '../definitions/LELodasoftCommonModelsLoanCreditViewModel';
import {
	LELodasoftCommonModelsThirdPartyCreditCreditRequestModel,
	LELodasoftCommonModelsThirdPartyCreditCreditRequestModelIO,
} from '../definitions/LELodasoftCommonModelsThirdPartyCreditCreditRequestModel';
import {
	LELodasoftCommonModelsThirdPartyCreditCreditResponseModel,
	LELodasoftCommonModelsThirdPartyCreditCreditResponseModelIO,
} from '../definitions/LELodasoftCommonModelsThirdPartyCreditCreditResponseModel';
import {
	LELodasoftDataAccessDbModelsConfigurationCreditModel,
	LELodasoftDataAccessDbModelsConfigurationCreditModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationCreditModel';
import { decodeAndMap, unknownType } from '../utils/utils';
import { asks } from 'fp-ts/lib/Reader';
import { partial, number, array } from 'io-ts';
import { Observable } from 'rxjs';

export type CreditInfoController = {
	/**
	 * Submit a credit pull request
	 * @param { object } parameters
	 */
	readonly CreditInfo_PullCreditReport: (parameters: {
		body: LELodasoftCommonModelsThirdPartyCreditCreditRequestModel;
	}) => Observable<LELodasoftCommonModelsThirdPartyCreditCreditResponseModel>;

	/**
	 * Get Credit Report History
	 * @param { number } loanId - loan id to pull history
	 */
	readonly CreditInfo_PullCreditReportHistory: (
		loanId: number,
	) => Observable<Array<LELodasoftCommonModelsLoanCreditViewModel>>;

	/**
	 * @param { object } parameters
	 */
	readonly CreditInfo_UpsertCreditInfo: (parameters: {
		body: LELodasoftCommonModelsLoanCreditViewModel;
	}) => Observable<LELodasoftDataAccessDbModelsConfigurationCreditModel>;

	/**
	 * @param { number } creditInfoId undefined
	 */
	readonly CreditInfo_DeleteCreditModel: (creditInfoId: number) => Observable<unknown>;
};

export const creditInfoController = asks(
	(e: { apiClient: TAPIClient }): CreditInfoController => ({
		CreditInfo_PullCreditReport: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsThirdPartyCreditCreditRequestModelIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/CreditInfo/pull-report`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(decodeAndMap(LELodasoftCommonModelsThirdPartyCreditCreditResponseModelIO));
		},

		CreditInfo_PullCreditReportHistory: loanId => {
			return e.apiClient
				.request({
					url: `/api/CreditInfo/history/${encodeURIComponent(number.encode(loanId).toString())}`,
					method: 'GET',
				})
				.pipe(decodeAndMap(array(LELodasoftCommonModelsLoanCreditViewModelIO)));
		},

		CreditInfo_UpsertCreditInfo: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsLoanCreditViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/CreditInfo/UpsertCreditInfo`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(decodeAndMap(LELodasoftDataAccessDbModelsConfigurationCreditModelIO));
		},

		CreditInfo_DeleteCreditModel: creditInfoId => {
			return e.apiClient
				.request({
					url: `/api/CreditInfo/${encodeURIComponent(number.encode(creditInfoId).toString())}`,
					method: 'DELETE',
				})
				.pipe(decodeAndMap(unknownType));
		},
	}),
);
