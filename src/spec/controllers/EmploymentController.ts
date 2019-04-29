import { TAPIClient } from '../client/client';
import {
	LELodasoftDataAccessDbModelsConfigurationEmploymentInfoModel,
	LELodasoftDataAccessDbModelsConfigurationEmploymentInfoModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationEmploymentInfoModel';
import { decodeAndMap } from '../utils/utils';
import { asks } from 'fp-ts/lib/Reader';
import { partial, number, boolean } from 'io-ts';
import { Observable } from 'rxjs';

export type EmploymentController = {
	/**
	 * @param { object } parameters
	 */
	readonly Employment_UpsertEmploymentInfo: (parameters: {
		body: LELodasoftDataAccessDbModelsConfigurationEmploymentInfoModel;
	}) => Observable<LELodasoftDataAccessDbModelsConfigurationEmploymentInfoModel>;

	/**
	 * @param { number } employmentId undefined
	 */
	readonly Employment_DeleteEmploymentInfo: (employmentId: number) => Observable<boolean>;
};

export const employmentController = asks(
	(e: { apiClient: TAPIClient }): EmploymentController => ({
		Employment_UpsertEmploymentInfo: parameters => {
			const encoded = partial({ body: LELodasoftDataAccessDbModelsConfigurationEmploymentInfoModelIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Employment/UpsertEmploymentInfo`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(decodeAndMap(LELodasoftDataAccessDbModelsConfigurationEmploymentInfoModelIO));
		},

		Employment_DeleteEmploymentInfo: employmentId => {
			return e.apiClient
				.request({
					url: `/api/Employment/${encodeURIComponent(number.encode(employmentId).toString())}`,
					method: 'DELETE',
				})
				.pipe(decodeAndMap(boolean));
		},
	}),
);
