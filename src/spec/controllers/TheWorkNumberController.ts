import { TAPIClient } from '../client/client';
import {
	LELodasoftThirdPartyTheWorkNumberModelsVerificationRequest,
	LELodasoftThirdPartyTheWorkNumberModelsVerificationRequestIO,
} from '../definitions/LELodasoftThirdPartyTheWorkNumberModelsVerificationRequest';
import {
	LELodasoftThirdPartyTheWorkNumberModelsVerificationResponse,
	LELodasoftThirdPartyTheWorkNumberModelsVerificationResponseIO,
} from '../definitions/LELodasoftThirdPartyTheWorkNumberModelsVerificationResponse';
import { decodeAndMap } from '../utils/utils';
import { asks } from 'fp-ts/lib/Reader';
import { partial } from 'io-ts';
import { Observable } from 'rxjs';

export type TheWorkNumberController = {
	/**
	 * Request VOE/VOI from TheWorkNumber (by Equifax)
	 * @param { object } parameters
	 */
	readonly TheWorkNumber_RequestVerification: (parameters: {
		body: LELodasoftThirdPartyTheWorkNumberModelsVerificationRequest;
	}) => Observable<LELodasoftThirdPartyTheWorkNumberModelsVerificationResponse>;
};

export const theWorkNumberController = asks(
	(e: { API_CLIENT: TAPIClient; PREFIX: string }): TheWorkNumberController => ({
		TheWorkNumber_RequestVerification: parameters => {
			const encoded = partial({ body: LELodasoftThirdPartyTheWorkNumberModelsVerificationRequestIO }).encode(
				parameters,
			);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/twn/verification`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftThirdPartyTheWorkNumberModelsVerificationResponseIO));
		},
	}),
);
