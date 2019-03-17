import { ResponseValiationError, TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsMortgagePurchaseCreditViewModel,
	LELodasoftCommonModelsMortgagePurchaseCreditViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgagePurchaseCreditViewModel';
import { unknownType } from '../utils/utils';
import { fromEither, AsyncData } from '@nll/dux';
import { asks } from 'fp-ts/lib/Reader';
import { number, partial } from 'io-ts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type MortgagePurchaseCreditController = {
	/**
	 * @param { number } purchaseCreditId undefined
	 */
	readonly MortgagePurchaseCredit_GetPurchaseCreditById: (
		purchaseCreditId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgagePurchaseCreditViewModel>>;

	/**
	 * @param { number } purchaseCreditId undefined
	 * @param { object } parameters
	 */
	readonly MortgagePurchaseCredit_UpdatePurchaseCredit: (
		purchaseCreditId: number,
		parameters: { body: LELodasoftCommonModelsMortgagePurchaseCreditViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgagePurchaseCreditViewModel>>;

	/**
	 * @param { number } purchaseCreditId undefined
	 */
	readonly MortgagePurchaseCredit_DeletePurchaseCredit: (
		purchaseCreditId: number,
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly MortgagePurchaseCredit_InsertPurchaseCredit: (parameters: {
		body: LELodasoftCommonModelsMortgagePurchaseCreditViewModel;
	}) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgagePurchaseCreditViewModel>>;
};

export const mortgagePurchaseCreditController = asks(
	(e: { apiClient: TAPIClient }): MortgagePurchaseCreditController => ({
		MortgagePurchaseCredit_GetPurchaseCreditById: purchaseCreditId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/purchasecredits/${encodeURIComponent(
						number.encode(purchaseCreditId).toString(),
					)}`,
					method: 'GET',
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

		MortgagePurchaseCredit_UpdatePurchaseCredit: (purchaseCreditId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgagePurchaseCreditViewModelIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/mortgage/purchasecredits/${encodeURIComponent(
						number.encode(purchaseCreditId).toString(),
					)}`,
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

		MortgagePurchaseCredit_DeletePurchaseCredit: purchaseCreditId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/purchasecredits/${encodeURIComponent(
						number.encode(purchaseCreditId).toString(),
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

		MortgagePurchaseCredit_InsertPurchaseCredit: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgagePurchaseCreditViewModelIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/mortgage/purchasecredits`,
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
