import { ResponseValiationError, TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsMortgageGovernmentMonitorViewModel,
	LELodasoftCommonModelsMortgageGovernmentMonitorViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageGovernmentMonitorViewModel';
import { unknownType } from '../utils/utils';
import { fromEither, AsyncData } from '@nll/dux';
import { asks } from 'fp-ts/lib/Reader';
import { number, partial } from 'io-ts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type MortgageGovernmentMonitorController = {
	/**
	 * @param { number } governmentMonitorId undefined
	 */
	readonly MortgageGovernmentMonitor_GetGovernmentMonitorById: (
		governmentMonitorId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageGovernmentMonitorViewModel>>;

	/**
	 * @param { number } governmentMonitorId undefined
	 * @param { object } parameters
	 */
	readonly MortgageGovernmentMonitor_UpdateGovernmentMonitor: (
		governmentMonitorId: number,
		parameters: { body: LELodasoftCommonModelsMortgageGovernmentMonitorViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageGovernmentMonitorViewModel>>;

	/**
	 * @param { number } governmentMonitorId undefined
	 */
	readonly MortgageGovernmentMonitor_DeleteGovernmentMonitor: (
		governmentMonitorId: number,
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly MortgageGovernmentMonitor_InsertGovernmentMonitor: (parameters: {
		body: LELodasoftCommonModelsMortgageGovernmentMonitorViewModel;
	}) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageGovernmentMonitorViewModel>>;
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

		MortgageGovernmentMonitor_DeleteGovernmentMonitor: governmentMonitorId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/governmentmonitors/${encodeURIComponent(
						number.encode(governmentMonitorId).toString(),
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
	}),
);
