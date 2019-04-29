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
	LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModel,
	LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModel';
import {
	LELodasoftCommonModelsConfigurationWizardWizardConfigViewModel,
	LELodasoftCommonModelsConfigurationWizardWizardConfigViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationWizardWizardConfigViewModel';
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
	 * @deprecated
	 * @param { string } companyGuid undefined
	 */
	readonly OnlineApp_GetAllWizardConfigs: (
		companyGuid: string,
	) => Observable<Array<LELodasoftCommonModelsConfigurationWizardWizardConfigViewModel>>;

	/**
	 * @deprecated
	 * @param { string } companyGuid undefined
	 * @param { number } wizardConfigId undefined
	 */
	readonly OnlineApp_GetExtractedWizardConfigById: (
		companyGuid: string,
		wizardConfigId: number,
	) => Observable<LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModel>;

	/**
	 * @deprecated
	 * @param { string } companyGuid undefined
	 * @param { object } parameters
	 */
	readonly OnlineApp_InitializeFormFreeByCompanyGuid: (
		companyGuid: string,
		parameters: { body: LELodasoftApiControllersInitializeFormFreeRequest },
	) => Observable<LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponse>;

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
};

export const onlineAppController = asks(
	(e: { apiClient: TAPIClient }): OnlineAppController => ({
		OnlineApp_GetFeatureFlags: loanId => {
			return e.apiClient
				.request({
					url: `/api/online-app/feature-flags/${encodeURIComponent(number.encode(loanId).toString())}`,
					method: 'GET',
				})
				.pipe(decodeAndMap(LELodasoftApiModelsOnlineAppFeatureFlagsIO));
		},

		OnlineApp_GetLoanTypes: loanId => {
			return e.apiClient
				.request({
					url: `/api/online-app/loantypes/${encodeURIComponent(number.encode(loanId).toString())}`,
					method: 'GET',
				})
				.pipe(decodeAndMap(array(LELodasoftDataAccessDbModelsConfigurationLoanTypeModelIO)));
		},

		OnlineApp_GetApplicationViewModel: loanId => {
			return e.apiClient
				.request({
					url: `/api/online-app/get-application/${encodeURIComponent(number.encode(loanId).toString())}`,
					method: 'GET',
				})
				.pipe(decodeAndMap(LELodasoftCommonModelsConfigurationApplicationViewModelIO));
		},

		OnlineApp_UpdateLoanType: (loanId, loanTypeId) => {
			return e.apiClient
				.request({
					url: `/api/online-app/loantype/${encodeURIComponent(
						number.encode(loanId).toString(),
					)}/${encodeURIComponent(number.encode(loanTypeId).toString())}`,
					method: 'POST',
				})
				.pipe(decodeAndMap(LELodasoftApiModelsBorrowerApplicationViewModelIO));
		},

		OnlineApp_GetStatus: loanId => {
			return e.apiClient
				.request({
					url: `/api/online-app/status/${encodeURIComponent(number.encode(loanId).toString())}`,
					method: 'GET',
				})
				.pipe(decodeAndMap(LELodasoftCommonModelsOnlineAppOnlineAppProgressViewModelIO));
		},

		OnlineApp_UpdateStatus: (loanId, mortgageId, currentStatusId) => {
			return e.apiClient
				.request({
					url: `/api/online-app/status/${encodeURIComponent(
						number.encode(loanId).toString(),
					)}/${encodeURIComponent(number.encode(mortgageId).toString())}/${encodeURIComponent(
						number.encode(currentStatusId).toString(),
					)}`,
					method: 'POST',
				})
				.pipe(decodeAndMap(LELodasoftCommonModelsOnlineAppOnlineAppProgressViewModelIO));
		},

		OnlineApp_SubmitOnlineApp: loanId => {
			return e.apiClient
				.request({
					url: `/api/online-app/submit-app/${encodeURIComponent(number.encode(loanId).toString())}`,
					method: 'POST',
				})
				.pipe(decodeAndMap(unknownType));
		},

		OnlineApp_CreateBorrowerAccountAndMortgage: (companyGuid, parameters) => {
			const encoded = partial({
				body: LELodasoftCommonModelsOnlineAppCreateBorrowerAccountMortgageRequestIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/online-app/${encodeURIComponent(
						string.encode(companyGuid).toString(),
					)}/CreateBorrowerAndApplication`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(decodeAndMap(LELodasoftCommonModelsOnlineAppCreateBorrowerAccountMortgageResponseIO));
		},

		OnlineApp_GetAllWizardConfigs: companyGuid => {
			return e.apiClient
				.request({
					url: `/api/online-app/${encodeURIComponent(string.encode(companyGuid).toString())}`,
					method: 'GET',
				})
				.pipe(decodeAndMap(array(LELodasoftCommonModelsConfigurationWizardWizardConfigViewModelIO)));
		},

		OnlineApp_GetExtractedWizardConfigById: (companyGuid, wizardConfigId) => {
			return e.apiClient
				.request({
					url: `/api/online-app/${encodeURIComponent(
						string.encode(companyGuid).toString(),
					)}/${encodeURIComponent(number.encode(wizardConfigId).toString())}/extracted`,
					method: 'GET',
				})
				.pipe(decodeAndMap(LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModelIO));
		},

		OnlineApp_InitializeFormFreeByCompanyGuid: (companyGuid, parameters) => {
			const encoded = partial({ body: LELodasoftApiControllersInitializeFormFreeRequestIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/online-app/${encodeURIComponent(
						string.encode(companyGuid).toString(),
					)}/InitializeFormFree`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(decodeAndMap(LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponseIO));
		},

		OnlineApp_InitializeFormFree: (loanId, parameters) => {
			const encoded = partial({ body: LELodasoftApiControllersInitializeFormFreeRequestIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/online-app/InitializeFormFree/${encodeURIComponent(number.encode(loanId).toString())}`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(decodeAndMap(LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponseIO));
		},

		OnlineApp_InitializeFormFreeForBorrower: (loanId, borrowerId) => {
			return e.apiClient
				.request({
					url: `/api/online-app/InitializeFormFreeForBorrower/${encodeURIComponent(
						number.encode(loanId).toString(),
					)}/${encodeURIComponent(number.encode(borrowerId).toString())}`,
					method: 'POST',
				})
				.pipe(decodeAndMap(LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponseIO));
		},

		OnlineApp_MarkFormFreeForBorrowerComplete: (loanId, borrowerId) => {
			return e.apiClient
				.request({
					url: `/api/online-app/MarkFormFreeForBorrowerComplete/${encodeURIComponent(
						number.encode(loanId).toString(),
					)}/${encodeURIComponent(number.encode(borrowerId).toString())}`,
					method: 'POST',
				})
				.pipe(decodeAndMap(unknownType));
		},
	}),
);
