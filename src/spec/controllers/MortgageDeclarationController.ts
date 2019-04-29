import { TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsMortgageDeclarationViewModel,
	LELodasoftCommonModelsMortgageDeclarationViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageDeclarationViewModel';
import { decodeAndMap, unknownType } from '../utils/utils';
import { asks } from 'fp-ts/lib/Reader';
import { number, partial } from 'io-ts';
import { Observable } from 'rxjs';

export type MortgageDeclarationController = {
	/**
	 * @param { number } declarationId undefined
	 */
	readonly MortgageDeclaration_GetDeclarationById: (
		declarationId: number,
	) => Observable<LELodasoftCommonModelsMortgageDeclarationViewModel>;

	/**
	 * @param { number } declarationId undefined
	 * @param { object } parameters
	 */
	readonly MortgageDeclaration_UpdateDeclaration: (
		declarationId: number,
		parameters: { body: LELodasoftCommonModelsMortgageDeclarationViewModel },
	) => Observable<LELodasoftCommonModelsMortgageDeclarationViewModel>;

	/**
	 * @param { number } declarationId undefined
	 */
	readonly MortgageDeclaration_DeleteDeclaration: (declarationId: number) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly MortgageDeclaration_InsertDeclaration: (parameters: {
		body: LELodasoftCommonModelsMortgageDeclarationViewModel;
	}) => Observable<LELodasoftCommonModelsMortgageDeclarationViewModel>;
};

export const mortgageDeclarationController = asks(
	(e: { API_CLIENT: TAPIClient; PREFIX: string }): MortgageDeclarationController => ({
		MortgageDeclaration_GetDeclarationById: declarationId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/mortgage/declarations/${encodeURIComponent(
					number.encode(declarationId).toString(),
				)}`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftCommonModelsMortgageDeclarationViewModelIO));
		},

		MortgageDeclaration_UpdateDeclaration: (declarationId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageDeclarationViewModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/mortgage/declarations/${encodeURIComponent(
					number.encode(declarationId).toString(),
				)}`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsMortgageDeclarationViewModelIO));
		},

		MortgageDeclaration_DeleteDeclaration: declarationId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/mortgage/declarations/${encodeURIComponent(
					number.encode(declarationId).toString(),
				)}`,
				method: 'DELETE',
			}).pipe(decodeAndMap(unknownType));
		},

		MortgageDeclaration_InsertDeclaration: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsMortgageDeclarationViewModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/mortgage/declarations`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsMortgageDeclarationViewModelIO));
		},
	}),
);
