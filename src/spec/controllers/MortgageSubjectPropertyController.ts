import { TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsMortgageAddressViewModel,
	LELodasoftCommonModelsMortgageAddressViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageAddressViewModel';
import {
	LELodasoftCommonModelsMortgageSubjectPropertyViewModel,
	LELodasoftCommonModelsMortgageSubjectPropertyViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageSubjectPropertyViewModel';
import { decodeAndMap, unknownType } from '../utils/utils';
import { asks } from 'fp-ts/lib/Reader';
import { number, partial } from 'io-ts';
import { Observable } from 'rxjs';

export type MortgageSubjectPropertyController = {
	/**
	 * @param { number } subjectPropertyId undefined
	 */
	readonly MortgageSubjectProperty_GetSubjectPropertyById: (
		subjectPropertyId: number,
	) => Observable<LELodasoftCommonModelsMortgageSubjectPropertyViewModel>;

	/**
	 * @param { number } subjectPropertyId undefined
	 * @param { object } parameters
	 */
	readonly MortgageSubjectProperty_UpdateSubjectProperty: (
		subjectPropertyId: number,
		parameters: { body: LELodasoftCommonModelsMortgageSubjectPropertyViewModel },
	) => Observable<LELodasoftCommonModelsMortgageSubjectPropertyViewModel>;

	/**
	 * @param { number } subjectPropertyId undefined
	 */
	readonly MortgageSubjectProperty_DeleteSubjectProperty: (subjectPropertyId: number) => Observable<unknown>;

	/**
	 * @param { number } subjectPropertyId undefined
	 * @param { object } parameters
	 */
	readonly MortgageSubjectProperty_InsertAddress: (
		subjectPropertyId: number,
		parameters: { body: LELodasoftCommonModelsMortgageAddressViewModel },
	) => Observable<LELodasoftCommonModelsMortgageAddressViewModel>;
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
				.pipe(decodeAndMap(LELodasoftCommonModelsMortgageSubjectPropertyViewModelIO));
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
				.pipe(decodeAndMap(LELodasoftCommonModelsMortgageSubjectPropertyViewModelIO));
		},

		MortgageSubjectProperty_DeleteSubjectProperty: subjectPropertyId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/subjectproperties/${encodeURIComponent(
						number.encode(subjectPropertyId).toString(),
					)}`,
					method: 'DELETE',
				})
				.pipe(decodeAndMap(unknownType));
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
				.pipe(decodeAndMap(LELodasoftCommonModelsMortgageAddressViewModelIO));
		},
	}),
);
