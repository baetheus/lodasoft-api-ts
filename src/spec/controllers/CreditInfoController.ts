import { ResponseValiationError, TAPIClient } from '../client/client';
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
import { unknownType } from '../utils/utils';
import { fromEither, AsyncData } from '@nll/dux';
import { asks } from 'fp-ts/lib/Reader';
import { partial, number, array } from 'io-ts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type CreditInfoController = {
	/**
	 * Submit a credit pull request
	 * @param { object } parameters
	 */
	readonly CreditInfo_PullCreditReport: (parameters: {
		body: LELodasoftCommonModelsThirdPartyCreditCreditRequestModel;
	}) => Observable<AsyncData<Error, LELodasoftCommonModelsThirdPartyCreditCreditResponseModel>>;

	/**
	 * Get Credit Report History
	 * @param { number } loanId - loan id to pull history
	 */
	readonly CreditInfo_PullCreditReportHistory: (
		loanId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsLoanCreditViewModel>>>;

	/**
	 * @param { object } parameters
	 */
	readonly CreditInfo_UpsertCreditInfo: (parameters: {
		body: LELodasoftCommonModelsLoanCreditViewModel;
	}) => Observable<AsyncData<Error, LELodasoftDataAccessDbModelsConfigurationCreditModel>>;

	/**
	 * @param { number } creditInfoId undefined
	 */
	readonly CreditInfo_DeleteCreditModel: (creditInfoId: number) => Observable<AsyncData<Error, unknown>>;
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
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsThirdPartyCreditCreditResponseModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		CreditInfo_PullCreditReportHistory: loanId => {
			return e.apiClient
				.request({
					url: `/api/CreditInfo/history/${encodeURIComponent(number.encode(loanId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsLoanCreditViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		CreditInfo_UpsertCreditInfo: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsLoanCreditViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/CreditInfo/UpsertCreditInfo`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftDataAccessDbModelsConfigurationCreditModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		CreditInfo_DeleteCreditModel: creditInfoId => {
			return e.apiClient
				.request({
					url: `/api/CreditInfo/${encodeURIComponent(number.encode(creditInfoId).toString())}`,
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
	}),
);
