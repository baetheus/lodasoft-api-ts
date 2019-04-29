import { TAPIClient } from '../client/client';
import {
	LELodasoftApiModelsSystemVersionResult,
	LELodasoftApiModelsSystemVersionResultIO,
} from '../definitions/LELodasoftApiModelsSystemVersionResult';
import { decodeAndMap } from '../utils/utils';
import { asks } from 'fp-ts/lib/Reader';
import { Observable } from 'rxjs';

export type SystemController = {
	/**
	 * Get System Version
	 */
	readonly System_GetVersion: () => Observable<LELodasoftApiModelsSystemVersionResult>;
};

export const systemController = asks(
	(e: { API_CLIENT: TAPIClient; PREFIX: string }): SystemController => ({
		System_GetVersion: () => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/System/Version`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftApiModelsSystemVersionResultIO));
		},
	}),
);
