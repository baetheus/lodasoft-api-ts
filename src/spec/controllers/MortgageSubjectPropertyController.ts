import { ResponseValiationError, TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsMortgageAddressViewModel,
	LELodasoftCommonModelsMortgageAddressViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageAddressViewModel';
import {
	LELodasoftCommonModelsMortgageSubjectPropertyViewModel,
	LELodasoftCommonModelsMortgageSubjectPropertyViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageSubjectPropertyViewModel';
import { unknownType } from '../utils/utils';
import { fromEither, AsyncData } from '@nll/dux';
import { asks } from 'fp-ts/lib/Reader';
import { number, partial } from 'io-ts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type MortgageSubjectPropertyController = {
	/**
	 * @param { number } subjectPropertyId undefined
	 */
	readonly MortgageSubjectProperty_GetSubjectPropertyById: (
		subjectPropertyId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageSubjectPropertyViewModel>>;

	/**
	 * @param { number } subjectPropertyId undefined
	 * @param { object } parameters
	 */
	readonly MortgageSubjectProperty_UpdateSubjectProperty: (
		subjectPropertyId: number,
		parameters: { body: LELodasoftCommonModelsMortgageSubjectPropertyViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageSubjectPropertyViewModel>>;

	/**
	 * @param { number } subjectPropertyId undefined
	 */
	readonly MortgageSubjectProperty_DeleteSubjectProperty: (
		subjectPropertyId: number,
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } subjectPropertyId undefined
	 * @param { object } parameters
	 */
	readonly MortgageSubjectProperty_InsertAddress: (
		subjectPropertyId: number,
		parameters: { body: LELodasoftCommonModelsMortgageAddressViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageAddressViewModel>>;
};

export const mortgageSubjectPropertyController = asks(
	(e: { apiClient: TAPIClient }): MortgageSubjectPropertyController => ({
		MortgageSubjectProperty_GetSubjectPropertyById: subjectPropertyId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/subjectproperties/${encodeURIComponent(
						number.encode(subjectPropertyId).toString(),
					)}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageSubjectPropertyViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		MortgageSubjectProperty_UpdateSubjectProperty: (subjectPropertyId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageSubjectPropertyViewModelIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/mortgage/subjectproperties/${encodeURIComponent(
						number.encode(subjectPropertyId).toString(),
					)}`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageSubjectPropertyViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		MortgageSubjectProperty_DeleteSubjectProperty: subjectPropertyId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/subjectproperties/${encodeURIComponent(
						number.encode(subjectPropertyId).toString(),
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

		MortgageSubjectProperty_InsertAddress: (subjectPropertyId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageAddressViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/subjectproperties/${encodeURIComponent(
						number.encode(subjectPropertyId).toString(),
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
