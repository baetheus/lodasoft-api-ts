import { ResponseValiationError, TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsMortgagePurchaseCreditViewModel,
	LELodasoftCommonModelsMortgagePurchaseCreditViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgagePurchaseCreditViewModel';
import {
	LELodasoftCommonModelsMortgageTransactionDetailViewModel,
	LELodasoftCommonModelsMortgageTransactionDetailViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageTransactionDetailViewModel';
import { unknownType } from '../utils/utils';
import { fromEither, AsyncData } from '@nll/dux';
import { asks } from 'fp-ts/lib/Reader';
import { number, partial, array } from 'io-ts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type MortgageTransactionDetailController = {
	/**
	 * @param { number } transactionDetailId undefined
	 */
	readonly MortgageTransactionDetail_GetTransactionDetailById: (
		transactionDetailId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageTransactionDetailViewModel>>;

	/**
	 * @param { number } transactionDetailId undefined
	 * @param { object } parameters
	 */
	readonly MortgageTransactionDetail_UpdateTransactionDetail: (
		transactionDetailId: number,
		parameters: { body: LELodasoftCommonModelsMortgageTransactionDetailViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageTransactionDetailViewModel>>;

	/**
	 * @param { number } transactionDetailId undefined
	 */
	readonly MortgageTransactionDetail_DeleteTransactionDetail: (
		transactionDetailId: number,
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } transactionDetailId undefined
	 */
	readonly MortgageTransactionDetail_GetPurchaseCreditsByTransactionDetailId: (
		transactionDetailId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsMortgagePurchaseCreditViewModel>>>;

	/**
	 * @param { number } transactionDetailId undefined
	 * @param { object } parameters
	 */
	readonly MortgageTransactionDetail_InsertPurchaseCredit: (
		transactionDetailId: number,
		parameters: { body: LELodasoftCommonModelsMortgagePurchaseCreditViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgagePurchaseCreditViewModel>>;
};

export const mortgageTransactionDetailController = asks(
	(e: { apiClient: TAPIClient }): MortgageTransactionDetailController => ({
		MortgageTransactionDetail_GetTransactionDetailById: transactionDetailId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/transactiondetails/${encodeURIComponent(
						number.encode(transactionDetailId).toString(),
					)}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageTransactionDetailViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		MortgageTransactionDetail_UpdateTransactionDetail: (transactionDetailId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageTransactionDetailViewModelIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/mortgage/transactiondetails/${encodeURIComponent(
						number.encode(transactionDetailId).toString(),
					)}`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageTransactionDetailViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		MortgageTransactionDetail_DeleteTransactionDetail: transactionDetailId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/transactiondetails/${encodeURIComponent(
						number.encode(transactionDetailId).toString(),
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

		MortgageTransactionDetail_GetPurchaseCreditsByTransactionDetailId: transactionDetailId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/transactiondetails/${encodeURIComponent(
						number.encode(transactionDetailId).toString(),
					)}/purchasecredits`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsMortgagePurchaseCreditViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		MortgageTransactionDetail_InsertPurchaseCredit: (transactionDetailId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgagePurchaseCreditViewModelIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/mortgage/transactiondetails/${encodeURIComponent(
						number.encode(transactionDetailId).toString(),
					)}/purchasecredits`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgagePurchaseCreditViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},
	}),
);
