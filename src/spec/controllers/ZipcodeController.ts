import { TAPIClient } from '../client/client';
import {
	LELodasoftApiModelsZipcodeLookupResult,
	LELodasoftApiModelsZipcodeLookupResultIO,
} from '../definitions/LELodasoftApiModelsZipcodeLookupResult';
import { decodeAndMap, unknownType } from '../utils/utils';
import { asks } from 'fp-ts/lib/Reader';
import { string, array, type, partial } from 'io-ts';
import { Observable } from 'rxjs';

export type ZipcodeController = {
	/**
	 * Lookup a Zip Code
	 * @param { string } zip -
	 */
	readonly Zipcode_ZipcodeLookup: (zip: string) => Observable<Array<LELodasoftApiModelsZipcodeLookupResult>>;

	/**
	 * Lookup a Zip Code
	 * @param { string } zip -
	 */
	readonly Zipcode_ZipcodeLookuAnonymousp: (zip: string) => Observable<Array<LELodasoftApiModelsZipcodeLookupResult>>;

	/**
	 * @param { string } toUserId undefined
	 * @param { object } parameters
	 */
	readonly Zipcode_Send: (toUserId: string, parameters: { query: { message: string } }) => Observable<unknown>;
};

export const zipcodeController = asks(
	(e: { apiClient: TAPIClient }): ZipcodeController => ({
		Zipcode_ZipcodeLookup: zip => {
			return e.apiClient
				.request({
					url: `/api/Zipcode/Lookup/${encodeURIComponent(string.encode(zip).toString())}`,
					method: 'GET',
				})
				.pipe(decodeAndMap(array(LELodasoftApiModelsZipcodeLookupResultIO)));
		},

		Zipcode_ZipcodeLookuAnonymousp: zip => {
			return e.apiClient
				.request({
					url: `/api/Zipcode/${encodeURIComponent(string.encode(zip).toString())}`,
					method: 'GET',
				})
				.pipe(decodeAndMap(array(LELodasoftApiModelsZipcodeLookupResultIO)));
		},

		Zipcode_Send: (toUserId, parameters) => {
			const encoded = partial({ query: type({ message: string }) }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Zipcode/send/${encodeURIComponent(string.encode(toUserId).toString())}`,
					method: 'PUT',
					query: encoded.query,
				})
				.pipe(decodeAndMap(unknownType));
		},
	}),
);
