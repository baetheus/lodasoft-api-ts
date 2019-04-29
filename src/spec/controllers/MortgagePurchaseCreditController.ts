import { TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsMortgagePurchaseCreditViewModel,
	LELodasoftCommonModelsMortgagePurchaseCreditViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgagePurchaseCreditViewModel';
import { decodeAndMap, unknownType } from '../utils/utils';
import { asks } from 'fp-ts/lib/Reader';
import { number, partial } from 'io-ts';
import { Observable } from 'rxjs';

export type MortgagePurchaseCreditController = {
	/**
	 * @param { number } purchaseCreditId undefined
	 */
	readonly MortgagePurchaseCredit_GetPurchaseCreditById: (
		purchaseCreditId: number,
	) => Observable<LELodasoftCommonModelsMortgagePurchaseCreditViewModel>;

	/**
	 * @param { number } purchaseCreditId undefined
	 * @param { object } parameters
	 */
	readonly MortgagePurchaseCredit_UpdatePurchaseCredit: (
		purchaseCreditId: number,
		parameters: { body: LELodasoftCommonModelsMortgagePurchaseCreditViewModel },
	) => Observable<LELodasoftCommonModelsMortgagePurchaseCreditViewModel>;

	/**
	 * @param { number } purchaseCreditId undefined
	 */
	readonly MortgagePurchaseCredit_DeletePurchaseCredit: (purchaseCreditId: number) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly MortgagePurchaseCredit_InsertPurchaseCredit: (parameters: {
		body: LELodasoftCommonModelsMortgagePurchaseCreditViewModel;
	}) => Observable<LELodasoftCommonModelsMortgagePurchaseCreditViewModel>;
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
				.pipe(decodeAndMap(LELodasoftCommonModelsMortgagePurchaseCreditViewModelIO));
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
				.pipe(decodeAndMap(LELodasoftCommonModelsMortgagePurchaseCreditViewModelIO));
		},

		MortgagePurchaseCredit_DeletePurchaseCredit: purchaseCreditId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/purchasecredits/${encodeURIComponent(
						number.encode(purchaseCreditId).toString(),
					)}`,
					method: 'DELETE',
				})
				.pipe(decodeAndMap(unknownType));
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
				.pipe(decodeAndMap(LELodasoftCommonModelsMortgagePurchaseCreditViewModelIO));
		},
	}),
);
