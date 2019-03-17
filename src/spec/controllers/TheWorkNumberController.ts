import { ResponseValiationError, TAPIClient } from '../client/client';
import {
	LELodasoftThirdPartyTheWorkNumberModelsVerificationRequest,
	LELodasoftThirdPartyTheWorkNumberModelsVerificationRequestIO,
} from '../definitions/LELodasoftThirdPartyTheWorkNumberModelsVerificationRequest';
import {
	LELodasoftThirdPartyTheWorkNumberModelsVerificationResponse,
	LELodasoftThirdPartyTheWorkNumberModelsVerificationResponseIO,
} from '../definitions/LELodasoftThirdPartyTheWorkNumberModelsVerificationResponse';
import { fromEither, AsyncData } from '@nll/dux';
import { asks } from 'fp-ts/lib/Reader';
import { partial } from 'io-ts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type TheWorkNumberController = {
	/**
	 * Request VOE/VOI from TheWorkNumber (by Equifax)
	 * @param { object } parameters
	 */
	readonly TheWorkNumber_RequestVerification: (parameters: {
		body: LELodasoftThirdPartyTheWorkNumberModelsVerificationRequest;
	}) => Observable<AsyncData<Error, LELodasoftThirdPartyTheWorkNumberModelsVerificationResponse>>;
};

export const theWorkNumberController = asks(
	(e: { apiClient: TAPIClient }): TheWorkNumberController => ({
		TheWorkNumber_RequestVerification: parameters => {
			const encoded = partial({ body: LELodasoftThirdPartyTheWorkNumberModelsVerificationRequestIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/twn/verification`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftThirdPartyTheWorkNumberModelsVerificationResponseIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},
	}),
);
