import { ResponseValiationError, TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsMortgageDeclarationViewModel,
	LELodasoftCommonModelsMortgageDeclarationViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageDeclarationViewModel';
import { unknownType } from '../utils/utils';
import { fromEither, AsyncData } from '@nll/dux';
import { asks } from 'fp-ts/lib/Reader';
import { number, partial } from 'io-ts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type MortgageDeclarationController = {
	/**
	 * @param { number } declarationId undefined
	 */
	readonly MortgageDeclaration_GetDeclarationById: (
		declarationId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageDeclarationViewModel>>;

	/**
	 * @param { number } declarationId undefined
	 * @param { object } parameters
	 */
	readonly MortgageDeclaration_UpdateDeclaration: (
		declarationId: number,
		parameters: { body: LELodasoftCommonModelsMortgageDeclarationViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageDeclarationViewModel>>;

	/**
	 * @param { number } declarationId undefined
	 */
	readonly MortgageDeclaration_DeleteDeclaration: (declarationId: number) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly MortgageDeclaration_InsertDeclaration: (parameters: {
		body: LELodasoftCommonModelsMortgageDeclarationViewModel;
	}) => Observable<AsyncData<Error, LELodasoftCommonModelsMortgageDeclarationViewModel>>;
};

export const mortgageDeclarationController = asks(
	(e: { apiClient: TAPIClient }): MortgageDeclarationController => ({
		MortgageDeclaration_GetDeclarationById: declarationId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/declarations/${encodeURIComponent(number.encode(declarationId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageDeclarationViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		MortgageDeclaration_UpdateDeclaration: (declarationId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageDeclarationViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/declarations/${encodeURIComponent(number.encode(declarationId).toString())}`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageDeclarationViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		MortgageDeclaration_DeleteDeclaration: declarationId => {
			return e.apiClient
				.request({
					url: `/api/mortgage/declarations/${encodeURIComponent(number.encode(declarationId).toString())}`,
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

		MortgageDeclaration_InsertDeclaration: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageDeclarationViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/mortgage/declarations`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsMortgageDeclarationViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},
	}),
);
