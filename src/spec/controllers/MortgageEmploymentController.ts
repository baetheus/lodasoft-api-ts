import { ResponseValiationError, TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsMortgageAddressViewModel,
	LELodasoftCommonModelsMortgageAddressViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageAddressViewModel';
import {
	LELodasoftCommonModelsMortgageEmploymentViewModel,
	LELodasoftCommonModelsMortgageEmploymentViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageEmploymentViewModel';
import { unknownType } from '../utils/utils';
import { fromEither, AsyncData } from '@nll/dux';
import { asks } from 'fp-ts/lib/Reader';
import { number, partial } from 'io-ts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type MortgageEmploymentController = {
	/**
	 * @param { number } employmentId undefined
	 */
	readonly MortgageEmployment_GetEmploymentById: (
		employmentId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageEmploymentViewModel>>;

	/**
	 * @param { number } employmentId undefined
	 * @param { object } parameters
	 */
	readonly MortgageEmployment_UpdateEmployment: (
		employmentId: number,
		parameters: { body: LELodasoftCommonModelsMortgageEmploymentViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageEmploymentViewModel>>;

	/**
	 * @param { number } employmentId undefined
	 */
	readonly MortgageEmployment_DeleteEmployment: (employmentId: number) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly MortgageEmployment_InsertEmployment: (parameters: {
		body: LELodasoftCommonModelsMortgageEmploymentViewModel;
	}) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageEmploymentViewModel>>;

	/**
	 * @param { number } employmentId undefined
	 * @param { object } parameters
	 */
	readonly MortgageEmployment_InsertAddress: (
		employmentId: number,
		parameters: { body: LELodasoftCommonModelsMortgageAddressViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageAddressViewModel>>;
};

export const mortgageEmploymentController = asks(
	(e: { apiClient: TAPIClient }): MortgageEmploymentController => ({
		MortgageEmployment_GetEmploymentById: employmentId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/employments/${encodeURIComponent(number.encode(employmentId).toString())}`,
					method: 'GET',
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

		MortgageEmployment_UpdateEmployment: (employmentId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageEmploymentViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/employments/${encodeURIComponent(number.encode(employmentId).toString())}`,
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

		MortgageEmployment_DeleteEmployment: employmentId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/employments/${encodeURIComponent(number.encode(employmentId).toString())}`,
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

		MortgageEmployment_InsertEmployment: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageEmploymentViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/employments`,
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

		MortgageEmployment_InsertAddress: (employmentId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageAddressViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/employments/${encodeURIComponent(
						number.encode(employmentId).toString(),
					)}/address`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageAddressViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},
	}),
);
