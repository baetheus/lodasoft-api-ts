import { ResponseValiationError, TAPIClient } from '../client/client';
import {
	LELodasoftDataAccessDbModelsConfigurationEmploymentInfoModel,
	LELodasoftDataAccessDbModelsConfigurationEmploymentInfoModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationEmploymentInfoModel';
import { fromEither, AsyncData } from '@nll/dux';
import { asks } from 'fp-ts/lib/Reader';
import { partial, number, boolean } from 'io-ts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type EmploymentController = {
	/**
	 * @param { object } parameters
	 */
	readonly Employment_UpsertEmploymentInfo: (parameters: {
		body: LELodasoftDataAccessDbModelsConfigurationEmploymentInfoModel;
	}) => Observable<AsyncData<Error, LELodasoftDataAccessDbModelsConfigurationEmploymentInfoModel>>;

	/**
	 * @param { number } employmentId undefined
	 */
	readonly Employment_DeleteEmploymentInfo: (employmentId: number) => Observable<AsyncData<Error, boolean>>;
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
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftDataAccessDbModelsConfigurationEmploymentInfoModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Employment_DeleteEmploymentInfo: employmentId => {
			return e.apiClient
				.request({
					url: `/api/Employment/${encodeURIComponent(number.encode(employmentId).toString())}`,
					method: 'DELETE',
				})
				.pipe(
					map(data =>
						data.chain(value => fromEither(boolean.decode(value).mapLeft(ResponseValiationError.create))),
					),
				);
		},
	}),
);
