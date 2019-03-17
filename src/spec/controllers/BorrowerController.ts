import { ResponseValiationError, TAPIClient } from '../client/client';
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
import { unknownType } from '../utils/utils';
import { fromEither, AsyncData } from '@nll/dux';
import { asks } from 'fp-ts/lib/Reader';
import { array, boolean, partial, number } from 'io-ts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type BorrowerController = {
	readonly Borrower_GetAllBorrower: () => Observable<
		AsyncData<Error, Array<LELodasoftDataAccessModelsAdminBorrowerBorrowerDto>>
	>;

	/**
	 * @param { boolean } sendInvite undefined
	 * @param { object } parameters
	 */
	readonly Borrower_UpsertBorrower: (
		sendInvite: boolean,
		parameters: { body: LELodasoftApiModelsBorrowerBorrowerFull },
	) => Observable<AsyncData<Error, LELodasoftApiModelsBorrowerBorrowerFull>>;

	/**
	 * @param { number } borrowerId undefined
	 */
	readonly Borrower_InviteBorrower: (borrowerId: number) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } borrowerId undefined
	 * @param { boolean } isAdmin undefined
	 */
	readonly Borrower_GetBorrower: (
		borrowerId: number,
		isAdmin: boolean,
	) => Observable<AsyncData<Error, LELodasoftApiModelsBorrowerBorrowerFull>>;

	/**
	 * @param { number } borrowerId undefined
	 */
	readonly Borrower_DeleteBorrower: (borrowerId: number) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } borrowerId undefined
	 * @param { boolean } shouldSendCoBorrInvite undefined
	 * @param { object } parameters
	 */
	readonly Borrower_AddNewApplication: (
		borrowerId: number,
		shouldSendCoBorrInvite: boolean,
		parameters: { body: LELodasoftApiModelsBorrowerNewApplicationRequest },
	) => Observable<AsyncData<Error, LELodasoftDataAccessDbModelsAdminApplicationModel>>;

	/**
	 * @param { number } borrowerId undefined
	 */
	readonly Borrower_GetAllApplicationInfo: (
		borrowerId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftApiModelsBorrowerApplicationViewModel>>>;

	/**
	 * @param { number } borrowerId undefined
	 * @param { object } parameters
	 */
	readonly Borrower_UpsertApplicationInfo: (
		borrowerId: number,
		parameters: { body: LELodasoftApiModelsBorrowerUpsertApplicationInfoView },
	) => Observable<AsyncData<Error, LELodasoftDataAccessDbModelsAdminLoanDocTaskModel>>;

	/**
	 * @param { number } borrowerId undefined
	 */
	readonly Borrower_AllEmploymentInfo: (
		borrowerId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftDataAccessDbModelsConfigurationEmploymentInfoModel>>>;

	/**
	 * @param { number } borrowerId undefined
	 */
	readonly Borrower_AllCreditInfo: (
		borrowerId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsLoanCreditViewModel>>;
};

export const borrowerController = asks(
	(e: { apiClient: TAPIClient }): BorrowerController => ({
		Borrower_GetAllBorrower: () => {
			return e.apiClient
				.request({
					url: `/api/Borrower/AllBorrower`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftDataAccessModelsAdminBorrowerBorrowerDtoIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Borrower_UpsertBorrower: (sendInvite, parameters) => {
			const encoded = partial({ body: LELodasoftApiModelsBorrowerBorrowerFullIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Borrower/UpsertBorrower/${encodeURIComponent(boolean.encode(sendInvite).toString())}`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftApiModelsBorrowerBorrowerFullIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Borrower_InviteBorrower: borrowerId => {
			return e.apiClient
				.request({
					url: `/api/Borrower/InviteBorrower/${encodeURIComponent(number.encode(borrowerId).toString())}`,
					method: 'POST',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Borrower_GetBorrower: (borrowerId, isAdmin) => {
			return e.apiClient
				.request({
					url: `/api/Borrower/${encodeURIComponent(
						number.encode(borrowerId).toString(),
					)}/${encodeURIComponent(boolean.encode(isAdmin).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftApiModelsBorrowerBorrowerFullIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Borrower_DeleteBorrower: borrowerId => {
			return e.apiClient
				.request({
					url: `/api/Borrower/${encodeURIComponent(number.encode(borrowerId).toString())}`,
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

		Borrower_AddNewApplication: (borrowerId, shouldSendCoBorrInvite, parameters) => {
			const encoded = partial({ body: LELodasoftApiModelsBorrowerNewApplicationRequestIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Borrower/${encodeURIComponent(
						number.encode(borrowerId).toString(),
					)}/AddNewApplication/${encodeURIComponent(boolean.encode(shouldSendCoBorrInvite).toString())}`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftDataAccessDbModelsAdminApplicationModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Borrower_GetAllApplicationInfo: borrowerId => {
			return e.apiClient
				.request({
					url: `/api/Borrower/${encodeURIComponent(
						number.encode(borrowerId).toString(),
					)}/GetAllApplicationInfo`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftApiModelsBorrowerApplicationViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Borrower_UpsertApplicationInfo: (borrowerId, parameters) => {
			const encoded = partial({ body: LELodasoftApiModelsBorrowerUpsertApplicationInfoViewIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Borrower/${encodeURIComponent(
						number.encode(borrowerId).toString(),
					)}/UpsertApplicationInfo`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftDataAccessDbModelsAdminLoanDocTaskModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Borrower_AllEmploymentInfo: borrowerId => {
			return e.apiClient
				.request({
					url: `/api/Borrower/${encodeURIComponent(number.encode(borrowerId).toString())}/AllEmploymentInfo`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftDataAccessDbModelsConfigurationEmploymentInfoModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Borrower_AllCreditInfo: borrowerId => {
			return e.apiClient
				.request({
					url: `/api/Borrower/${encodeURIComponent(number.encode(borrowerId).toString())}/AllCreditInfo`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsLoanCreditViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},
	}),
);
