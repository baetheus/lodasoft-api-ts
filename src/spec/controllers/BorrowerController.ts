import { TAPIClient } from '../client/client';
import {
	LELodasoftApiModelsBorrowerApplicationViewModel,
	LELodasoftApiModelsBorrowerApplicationViewModelIO,
} from '../definitions/LELodasoftApiModelsBorrowerApplicationViewModel';
import {
	LELodasoftApiModelsBorrowerBorrowerFull,
	LELodasoftApiModelsBorrowerBorrowerFullIO,
} from '../definitions/LELodasoftApiModelsBorrowerBorrowerFull';
import {
	LELodasoftApiModelsBorrowerNewApplicationRequest,
	LELodasoftApiModelsBorrowerNewApplicationRequestIO,
} from '../definitions/LELodasoftApiModelsBorrowerNewApplicationRequest';
import {
	LELodasoftApiModelsBorrowerUpsertApplicationInfoView,
	LELodasoftApiModelsBorrowerUpsertApplicationInfoViewIO,
} from '../definitions/LELodasoftApiModelsBorrowerUpsertApplicationInfoView';
import {
	LELodasoftCommonModelsLoanCreditViewModel,
	LELodasoftCommonModelsLoanCreditViewModelIO,
} from '../definitions/LELodasoftCommonModelsLoanCreditViewModel';
import {
	LELodasoftDataAccessDbModelsAdminApplicationModel,
	LELodasoftDataAccessDbModelsAdminApplicationModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsAdminApplicationModel';
import {
	LELodasoftDataAccessDbModelsAdminLoanDocTaskModel,
	LELodasoftDataAccessDbModelsAdminLoanDocTaskModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsAdminLoanDocTaskModel';
import {
	LELodasoftDataAccessDbModelsConfigurationEmploymentInfoModel,
	LELodasoftDataAccessDbModelsConfigurationEmploymentInfoModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationEmploymentInfoModel';
import {
	LELodasoftDataAccessModelsAdminBorrowerBorrowerDto,
	LELodasoftDataAccessModelsAdminBorrowerBorrowerDtoIO,
} from '../definitions/LELodasoftDataAccessModelsAdminBorrowerBorrowerDto';
import { decodeAndMap, unknownType } from '../utils/utils';
import { asks } from 'fp-ts/lib/Reader';
import { array, boolean, partial, number } from 'io-ts';
import { Observable } from 'rxjs';

export type BorrowerController = {
	readonly Borrower_GetAllBorrower: () => Observable<Array<LELodasoftDataAccessModelsAdminBorrowerBorrowerDto>>;

	/**
	 * @param { boolean } sendInvite undefined
	 * @param { object } parameters
	 */
	readonly Borrower_UpsertBorrower: (
		sendInvite: boolean,
		parameters: { body: LELodasoftApiModelsBorrowerBorrowerFull },
	) => Observable<LELodasoftApiModelsBorrowerBorrowerFull>;

	/**
	 * @param { number } borrowerId undefined
	 */
	readonly Borrower_InviteBorrower: (borrowerId: number) => Observable<unknown>;

	/**
	 * @param { number } borrowerId undefined
	 * @param { boolean } isAdmin undefined
	 */
	readonly Borrower_GetBorrower: (
		borrowerId: number,
		isAdmin: boolean,
	) => Observable<LELodasoftApiModelsBorrowerBorrowerFull>;

	/**
	 * @param { number } borrowerId undefined
	 */
	readonly Borrower_DeleteBorrower: (borrowerId: number) => Observable<unknown>;

	/**
	 * @param { number } borrowerId undefined
	 * @param { boolean } shouldSendCoBorrInvite undefined
	 * @param { object } parameters
	 */
	readonly Borrower_AddNewApplication: (
		borrowerId: number,
		shouldSendCoBorrInvite: boolean,
		parameters: { body: LELodasoftApiModelsBorrowerNewApplicationRequest },
	) => Observable<LELodasoftDataAccessDbModelsAdminApplicationModel>;

	/**
	 * @param { number } borrowerId undefined
	 */
	readonly Borrower_GetAllApplicationInfo: (
		borrowerId: number,
	) => Observable<Array<LELodasoftApiModelsBorrowerApplicationViewModel>>;

	/**
	 * @param { number } borrowerId undefined
	 * @param { object } parameters
	 */
	readonly Borrower_UpsertApplicationInfo: (
		borrowerId: number,
		parameters: { body: LELodasoftApiModelsBorrowerUpsertApplicationInfoView },
	) => Observable<LELodasoftDataAccessDbModelsAdminLoanDocTaskModel>;

	/**
	 * @param { number } borrowerId undefined
	 */
	readonly Borrower_AllEmploymentInfo: (
		borrowerId: number,
	) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationEmploymentInfoModel>>;

	/**
	 * @param { number } borrowerId undefined
	 */
	readonly Borrower_AllCreditInfo: (borrowerId: number) => Observable<LELodasoftCommonModelsLoanCreditViewModel>;
};

export const borrowerController = asks(
	(e: { API_CLIENT: TAPIClient; PREFIX: string }): BorrowerController => ({
		Borrower_GetAllBorrower: () => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Borrower/AllBorrower`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftDataAccessModelsAdminBorrowerBorrowerDtoIO)));
		},

		Borrower_UpsertBorrower: (sendInvite, parameters) => {
			const encoded = partial({ body: LELodasoftApiModelsBorrowerBorrowerFullIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Borrower/UpsertBorrower/${encodeURIComponent(
					boolean.encode(sendInvite).toString(),
				)}`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftApiModelsBorrowerBorrowerFullIO));
		},

		Borrower_InviteBorrower: borrowerId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Borrower/InviteBorrower/${encodeURIComponent(
					number.encode(borrowerId).toString(),
				)}`,
				method: 'POST',
			}).pipe(decodeAndMap(unknownType));
		},

		Borrower_GetBorrower: (borrowerId, isAdmin) => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Borrower/${encodeURIComponent(
					number.encode(borrowerId).toString(),
				)}/${encodeURIComponent(boolean.encode(isAdmin).toString())}`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftApiModelsBorrowerBorrowerFullIO));
		},

		Borrower_DeleteBorrower: borrowerId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Borrower/${encodeURIComponent(number.encode(borrowerId).toString())}`,
				method: 'DELETE',
			}).pipe(decodeAndMap(unknownType));
		},

		Borrower_AddNewApplication: (borrowerId, shouldSendCoBorrInvite, parameters) => {
			const encoded = partial({ body: LELodasoftApiModelsBorrowerNewApplicationRequestIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Borrower/${encodeURIComponent(
					number.encode(borrowerId).toString(),
				)}/AddNewApplication/${encodeURIComponent(boolean.encode(shouldSendCoBorrInvite).toString())}`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftDataAccessDbModelsAdminApplicationModelIO));
		},

		Borrower_GetAllApplicationInfo: borrowerId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Borrower/${encodeURIComponent(
					number.encode(borrowerId).toString(),
				)}/GetAllApplicationInfo`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftApiModelsBorrowerApplicationViewModelIO)));
		},

		Borrower_UpsertApplicationInfo: (borrowerId, parameters) => {
			const encoded = partial({ body: LELodasoftApiModelsBorrowerUpsertApplicationInfoViewIO }).encode(
				parameters,
			);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Borrower/${encodeURIComponent(
					number.encode(borrowerId).toString(),
				)}/UpsertApplicationInfo`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftDataAccessDbModelsAdminLoanDocTaskModelIO));
		},

		Borrower_AllEmploymentInfo: borrowerId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Borrower/${encodeURIComponent(
					number.encode(borrowerId).toString(),
				)}/AllEmploymentInfo`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftDataAccessDbModelsConfigurationEmploymentInfoModelIO)));
		},

		Borrower_AllCreditInfo: borrowerId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Borrower/${encodeURIComponent(
					number.encode(borrowerId).toString(),
				)}/AllCreditInfo`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftCommonModelsLoanCreditViewModelIO));
		},
	}),
);
