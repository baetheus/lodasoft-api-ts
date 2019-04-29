import { asks } from 'fp-ts/lib/Reader';
import { number, partial } from 'io-ts';
import { Observable } from 'rxjs';

import { TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsMortgageGovernmentMonitorViewModel,
	LELodasoftCommonModelsMortgageGovernmentMonitorViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageGovernmentMonitorViewModel';
import { decodeAndMap, unknownType } from '../utils/utils';

export type MortgageGovernmentMonitorController = {
	/**
	 * @param { number } governmentMonitorId undefined
	 */
	readonly MortgageGovernmentMonitor_GetGovernmentMonitorById: (
		governmentMonitorId: number,
	) => Observable<LELodasoftCommonModelsMortgageGovernmentMonitorViewModel>;

	/**
	 * @param { number } governmentMonitorId undefined
	 * @param { object } parameters
	 */
	readonly MortgageGovernmentMonitor_UpdateGovernmentMonitor: (
		governmentMonitorId: number,
		parameters: { body: LELodasoftCommonModelsMortgageGovernmentMonitorViewModel },
	) => Observable<LELodasoftCommonModelsMortgageGovernmentMonitorViewModel>;

	/**
	 * @param { number } governmentMonitorId undefined
	 */
	readonly MortgageGovernmentMonitor_DeleteGovernmentMonitor: (governmentMonitorId: number) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly MortgageGovernmentMonitor_InsertGovernmentMonitor: (parameters: {
		body: LELodasoftCommonModelsMortgageGovernmentMonitorViewModel;
	}) => Observable<LELodasoftCommonModelsMortgageGovernmentMonitorViewModel>;
};

export const mortgageGovernmentMonitorController = asks(
	(e: { apiClient: TAPIClient }): MortgageGovernmentMonitorController => ({
		MortgageGovernmentMonitor_GetGovernmentMonitorById: governmentMonitorId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/governmentmonitors/${encodeURIComponent(
						number.encode(governmentMonitorId).toString(),
					)}`,
					method: 'GET',
				})
				.pipe(decodeAndMap(LELodasoftCommonModelsMortgageGovernmentMonitorViewModelIO));
		},

		MortgageGovernmentMonitor_UpdateGovernmentMonitor: (governmentMonitorId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageGovernmentMonitorViewModelIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/mortgage/governmentmonitors/${encodeURIComponent(
						number.encode(governmentMonitorId).toString(),
					)}`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(decodeAndMap(LELodasoftCommonModelsMortgageGovernmentMonitorViewModelIO));
		},

		MortgageGovernmentMonitor_DeleteGovernmentMonitor: governmentMonitorId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/governmentmonitors/${encodeURIComponent(
						number.encode(governmentMonitorId).toString(),
					)}`,
					method: 'DELETE',
				})
				.pipe(decodeAndMap(unknownType));
		},

		MortgageGovernmentMonitor_InsertGovernmentMonitor: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageGovernmentMonitorViewModelIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/mortgage/governmentmonitors`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(decodeAndMap(LELodasoftCommonModelsMortgageGovernmentMonitorViewModelIO));
		},
	}),
);
