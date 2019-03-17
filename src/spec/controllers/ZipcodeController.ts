import { ResponseValiationError, TAPIClient } from '../client/client';
import {
	LELodasoftApiModelsZipcodeLookupResult,
	LELodasoftApiModelsZipcodeLookupResultIO,
} from '../definitions/LELodasoftApiModelsZipcodeLookupResult';
import { unknownType } from '../utils/utils';
import { fromEither, AsyncData } from '@nll/dux';
import { asks } from 'fp-ts/lib/Reader';
import { string, array, type, partial } from 'io-ts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type ZipcodeController = {
	/**
	 * Lookup a Zip Code
	 * @param { string } zip -
	 */
	readonly Zipcode_ZipcodeLookup: (
		zip: string,
	) => Observable<AsyncData<Error, Array<LELodasoftApiModelsZipcodeLookupResult>>>;

	/**
	 * Lookup a Zip Code
	 * @param { string } zip -
	 */
	readonly Zipcode_ZipcodeLookuAnonymousp: (
		zip: string,
	) => Observable<AsyncData<Error, Array<LELodasoftApiModelsZipcodeLookupResult>>>;

	/**
	 * @param { string } toUserId undefined
	 * @param { object } parameters
	 */
	readonly Zipcode_Send: (
		toUserId: string,
		parameters: { query: { message: string } },
	) => Observable<AsyncData<Error, unknown>>;
};

export const zipcodeController = asks(
	(e: { apiClient: TAPIClient }): ZipcodeController => ({
		Zipcode_ZipcodeLookup: zip => {
			return e.apiClient
				.request({
					url: `/api/Zipcode/Lookup/${encodeURIComponent(string.encode(zip).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftApiModelsZipcodeLookupResultIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Zipcode_ZipcodeLookuAnonymousp: zip => {
			return e.apiClient
				.request({
					url: `/api/Zipcode/${encodeURIComponent(string.encode(zip).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftApiModelsZipcodeLookupResultIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Zipcode_Send: (toUserId, parameters) => {
			const encoded = partial({ query: type({ message: string }) }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Zipcode/send/${encodeURIComponent(string.encode(toUserId).toString())}`,
					method: 'PUT',
					query: encoded.query,
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
