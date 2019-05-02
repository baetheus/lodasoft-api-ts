import { TAPIClient } from '../client/client';
import {
	LELodasoftApiControllersInitializeFormFreeRequest,
	LELodasoftApiControllersInitializeFormFreeRequestIO,
} from '../definitions/LELodasoftApiControllersInitializeFormFreeRequest';
import {
	LELodasoftApiModelsBorrowerApplicationViewModel,
	LELodasoftApiModelsBorrowerApplicationViewModelIO,
} from '../definitions/LELodasoftApiModelsBorrowerApplicationViewModel';
import {
	LELodasoftApiModelsOnlineAppFeatureFlags,
	LELodasoftApiModelsOnlineAppFeatureFlagsIO,
} from '../definitions/LELodasoftApiModelsOnlineAppFeatureFlags';
import {
	LELodasoftCommonModelsConfigurationApplicationViewModel,
	LELodasoftCommonModelsConfigurationApplicationViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationApplicationViewModel';
import {
	LELodasoftCommonModelsOnlineAppCreateBorrowerAccountMortgageRequest,
	LELodasoftCommonModelsOnlineAppCreateBorrowerAccountMortgageRequestIO,
} from '../definitions/LELodasoftCommonModelsOnlineAppCreateBorrowerAccountMortgageRequest';
import {
	LELodasoftCommonModelsOnlineAppCreateBorrowerAccountMortgageResponse,
	LELodasoftCommonModelsOnlineAppCreateBorrowerAccountMortgageResponseIO,
} from '../definitions/LELodasoftCommonModelsOnlineAppCreateBorrowerAccountMortgageResponse';
import {
	LELodasoftCommonModelsOnlineAppOnlineAppProgressViewModel,
	LELodasoftCommonModelsOnlineAppOnlineAppProgressViewModelIO,
} from '../definitions/LELodasoftCommonModelsOnlineAppOnlineAppProgressViewModel';
import {
	LELodasoftCommonModelsSharedGenerateCreditAuthRequest,
	LELodasoftCommonModelsSharedGenerateCreditAuthRequestIO,
} from '../definitions/LELodasoftCommonModelsSharedGenerateCreditAuthRequest';
import {
	LELodasoftCommonModelsSharedGenerateCreditAuthResponse,
	LELodasoftCommonModelsSharedGenerateCreditAuthResponseIO,
} from '../definitions/LELodasoftCommonModelsSharedGenerateCreditAuthResponse';
import {
	LELodasoftCommonModelsSharedGenerateEConsentRequest,
	LELodasoftCommonModelsSharedGenerateEConsentRequestIO,
} from '../definitions/LELodasoftCommonModelsSharedGenerateEConsentRequest';
import {
	LELodasoftCommonModelsSharedGenerateEConsentResponse,
	LELodasoftCommonModelsSharedGenerateEConsentResponseIO,
} from '../definitions/LELodasoftCommonModelsSharedGenerateEConsentResponse';
import {
	LELodasoftDataAccessDbModelsConfigurationLoanTypeModel,
	LELodasoftDataAccessDbModelsConfigurationLoanTypeModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationLoanTypeModel';
import {
	LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponse,
	LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponseIO,
} from '../definitions/LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponse';
import { decodeAndMap, unknownType } from '../utils/utils';
import { asks } from 'fp-ts/lib/Reader';
import { number, array, string, partial } from 'io-ts';
import { Observable } from 'rxjs';

export type OnlineAppController = {
	/**
	 * Get feature flags for Online App
	 * @param { number } loanId - loan id
	 */
	readonly OnlineApp_GetFeatureFlags: (loanId: number) => Observable<LELodasoftApiModelsOnlineAppFeatureFlags>;

	/**
	 * Get loan types for online application
	 * @param { number } loanId - loan / application id
	 */
	readonly OnlineApp_GetLoanTypes: (
		loanId: number,
	) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationLoanTypeModel>>;

	/**
	 * Get application view model
	 * @param { number } loanId - loan / application id
	 */
	readonly OnlineApp_GetApplicationViewModel: (
		loanId: number,
	) => Observable<LELodasoftCommonModelsConfigurationApplicationViewModel>;

	/**
	 * Update Loan type on an application
	 * @param { number } loanId - loan / application id
	 * @param { number } loanTypeId - loan type id
	 */
	readonly OnlineApp_UpdateLoanType: (
		loanId: number,
		loanTypeId: number,
	) => Observable<LELodasoftApiModelsBorrowerApplicationViewModel>;

	/**
	 * Update online application status
	 * @param { number } loanId - loan / application id
	 */
	readonly OnlineApp_GetStatus: (
		loanId: number,
	) => Observable<LELodasoftCommonModelsOnlineAppOnlineAppProgressViewModel>;

	/**
	 * Update online application status
	 * @param { number } loanId - loan / application id
	 * @param { number } mortgageId - id of the mortgage model
	 * @param { number } currentStatusId - current status to save
	 */
	readonly OnlineApp_UpdateStatus: (
		loanId: number,
		mortgageId: number,
		currentStatusId: number,
	) => Observable<LELodasoftCommonModelsOnlineAppOnlineAppProgressViewModel>;

	/**
	 * Submit Online Application
	 * @param { number } loanId - loan / application id
	 */
	readonly OnlineApp_SubmitOnlineApp: (loanId: number) => Observable<unknown>;

	/**
	 * @param { string } companyGuid undefined
	 * @param { object } parameters
	 */
	readonly OnlineApp_CreateBorrowerAccountAndMortgage: (
		companyGuid: string,
		parameters: { body: LELodasoftCommonModelsOnlineAppCreateBorrowerAccountMortgageRequest },
	) => Observable<LELodasoftCommonModelsOnlineAppCreateBorrowerAccountMortgageResponse>;

	/**
	 * Initialize Form Free for Online Application (authed). This will link the request to the loanid and the primary borrower on that loan.
	 * @param { number } loanId -
	 * @param { object } parameters
	 */
	readonly OnlineApp_InitializeFormFree: (
		loanId: number,
		parameters: { body: LELodasoftApiControllersInitializeFormFreeRequest },
	) => Observable<LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponse>;

	/**
	 * Initialize Form Free for Online Application (authed). This will link the request to the loanid and the borrowerId passed.
	 * @param { number } loanId - the loan id
	 * @param { number } borrowerId - id of the borrower to initialize form free for
	 */
	readonly OnlineApp_InitializeFormFreeForBorrower: (
		loanId: number,
		borrowerId: number,
	) => Observable<LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponse>;

	/**
	 * Initialize Form Free for Online Application (authed). This will link the request to the loanid and the borrowerId passed.
	 * @param { number } loanId - the loan id
	 * @param { number } borrowerId - id of the borrower to initialize form free for
	 */
	readonly OnlineApp_MarkFormFreeForBorrowerComplete: (loanId: number, borrowerId: number) => Observable<unknown>;

	/**
	 * @param { number } loanId undefined
	 * @param { object } parameters
	 */
	readonly OnlineApp_GenerateEConsentDocument: (
		loanId: number,
		parameters: { body: LELodasoftCommonModelsSharedGenerateEConsentRequest },
	) => Observable<LELodasoftCommonModelsSharedGenerateEConsentResponse>;

	/**
	 * @param { number } loanId undefined
	 * @param { object } parameters
	 */
	readonly OnlineApp_GenerateCreditAuthDocument: (
		loanId: number,
		parameters: { body: LELodasoftCommonModelsSharedGenerateCreditAuthRequest },
	) => Observable<LELodasoftCommonModelsSharedGenerateCreditAuthResponse>;
};

export const onlineAppController = asks(
	(e: { API_CLIENT: TAPIClient; PREFIX: string }): OnlineAppController => ({
		OnlineApp_GetFeatureFlags: loanId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/online-app/config/${encodeURIComponent(number.encode(loanId).toString())}`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftApiModelsOnlineAppFeatureFlagsIO));
		},

		OnlineApp_GetLoanTypes: loanId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/online-app/loantypes/${encodeURIComponent(number.encode(loanId).toString())}`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftDataAccessDbModelsConfigurationLoanTypeModelIO)));
		},

		OnlineApp_GetApplicationViewModel: loanId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/online-app/get-application/${encodeURIComponent(
					number.encode(loanId).toString(),
				)}`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftCommonModelsConfigurationApplicationViewModelIO));
		},

		OnlineApp_UpdateLoanType: (loanId, loanTypeId) => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/online-app/loantype/${encodeURIComponent(
					number.encode(loanId).toString(),
				)}/${encodeURIComponent(number.encode(loanTypeId).toString())}`,
				method: 'POST',
			}).pipe(decodeAndMap(LELodasoftApiModelsBorrowerApplicationViewModelIO));
		},

		OnlineApp_GetStatus: loanId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/online-app/status/${encodeURIComponent(number.encode(loanId).toString())}`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftCommonModelsOnlineAppOnlineAppProgressViewModelIO));
		},

		OnlineApp_UpdateStatus: (loanId, mortgageId, currentStatusId) => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/online-app/status/${encodeURIComponent(
					number.encode(loanId).toString(),
				)}/${encodeURIComponent(number.encode(mortgageId).toString())}/${encodeURIComponent(
					number.encode(currentStatusId).toString(),
				)}`,
				method: 'POST',
			}).pipe(decodeAndMap(LELodasoftCommonModelsOnlineAppOnlineAppProgressViewModelIO));
		},

		OnlineApp_SubmitOnlineApp: loanId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/online-app/submit-app/${encodeURIComponent(number.encode(loanId).toString())}`,
				method: 'POST',
			}).pipe(decodeAndMap(unknownType));
		},

		OnlineApp_CreateBorrowerAccountAndMortgage: (companyGuid, parameters) => {
			const encoded = partial({
				body: LELodasoftCommonModelsOnlineAppCreateBorrowerAccountMortgageRequestIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/online-app/${encodeURIComponent(
					string.encode(companyGuid).toString(),
				)}/CreateBorrowerAndApplication`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsOnlineAppCreateBorrowerAccountMortgageResponseIO));
		},

		OnlineApp_InitializeFormFree: (loanId, parameters) => {
			const encoded = partial({ body: LELodasoftApiControllersInitializeFormFreeRequestIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/online-app/InitializeFormFree/${encodeURIComponent(
					number.encode(loanId).toString(),
				)}`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponseIO));
		},

		OnlineApp_InitializeFormFreeForBorrower: (loanId, borrowerId) => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/online-app/InitializeFormFreeForBorrower/${encodeURIComponent(
					number.encode(loanId).toString(),
				)}/${encodeURIComponent(number.encode(borrowerId).toString())}`,
				method: 'POST',
			}).pipe(decodeAndMap(LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponseIO));
		},

		OnlineApp_MarkFormFreeForBorrowerComplete: (loanId, borrowerId) => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/online-app/MarkFormFreeForBorrowerComplete/${encodeURIComponent(
					number.encode(loanId).toString(),
				)}/${encodeURIComponent(number.encode(borrowerId).toString())}`,
				method: 'POST',
			}).pipe(decodeAndMap(unknownType));
		},

		OnlineApp_GenerateEConsentDocument: (loanId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsSharedGenerateEConsentRequestIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/online-app/GenerateEConsentDocument/${encodeURIComponent(
					number.encode(loanId).toString(),
				)}`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsSharedGenerateEConsentResponseIO));
		},

		OnlineApp_GenerateCreditAuthDocument: (loanId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsSharedGenerateCreditAuthRequestIO }).encode(
				parameters,
			);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/online-app/GenerateCreditAuthDocument/${encodeURIComponent(
					number.encode(loanId).toString(),
				)}`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsSharedGenerateCreditAuthResponseIO));
		},
	}),
);
