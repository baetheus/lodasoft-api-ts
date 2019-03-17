import { AsyncData, fromEither } from '@nll/dux';
import { asks } from 'fp-ts/lib/Reader';
import { array, number, partial, string } from 'io-ts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ResponseValiationError, TAPIClient } from '../client/client';
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
  LELodasoftCommonModelsLoanLoanDocTaskViewModel,
  LELodasoftCommonModelsLoanLoanDocTaskViewModelIO,
} from '../definitions/LELodasoftCommonModelsLoanLoanDocTaskViewModel';
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
import { unknownType } from '../utils/utils';

export type OnlineAppController = {
	/**
	 * Get feature flags for Online App
	 * @param { number } loanId - loan id
	 */
	readonly OnlineApp_GetFeatureFlags: (
		loanId: number,
	) => Observable<AsyncData<Error, LELodasoftApiModelsOnlineAppFeatureFlags>>;

	/**
	 * Get loan types for online application
	 * @param { number } loanId - loan / application id
	 */
	readonly OnlineApp_GetLoanTypes: (
		loanId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftDataAccessDbModelsConfigurationLoanTypeModel>>>;

	/**
	 * Get application view model
	 * @param { number } loanId - loan / application id
	 */
	readonly OnlineApp_GetApplicationViewModel: (
		loanId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsConfigurationApplicationViewModel>>;

	/**
	 * Update Loan type on an application
	 * @param { number } loanId - loan / application id
	 * @param { number } loanTypeId - loan type id
	 */
	readonly OnlineApp_UpdateLoanType: (
		loanId: number,
		loanTypeId: number,
	) => Observable<AsyncData<Error, LELodasoftApiModelsBorrowerApplicationViewModel>>;

	/**
	 * Update online application status
	 * @param { number } loanId - loan / application id
	 */
	readonly OnlineApp_GetStatus: (
		loanId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsOnlineAppOnlineAppProgressViewModel>>;

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
	) => Observable<AsyncData<Error, LELodasoftCommonModelsOnlineAppOnlineAppProgressViewModel>>;

	/**
	 * Submit Online Application
	 * @param { number } loanId - loan / application id
	 */
	readonly OnlineApp_SubmitOnlineApp: (loanId: number) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { string } companyGuid undefined
	 * @param { object } parameters
	 */
	readonly OnlineApp_CreateBorrowerAccountAndMortgage: (
		companyGuid: string,
		parameters: { body: LELodasoftCommonModelsOnlineAppCreateBorrowerAccountMortgageRequest },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsOnlineAppCreateBorrowerAccountMortgageResponse>>;

	/**
	 * Add Online Application Task for Application
	 * @param { number } loanId - loan / application id
	 */
	readonly OnlineApp_AddOnlineApplicationTask: (
		loanId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsLoanLoanDocTaskViewModel>>;

	/**
	 * @deprecated
	 * @param { string } companyGuid undefined
	 */
	readonly OnlineApp_GetAllWizardConfigs: (
		companyGuid: string,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsConfigurationWizardWizardConfigViewModel>>>;

	/**
	 * @deprecated
	 * @param { string } companyGuid undefined
	 * @param { number } wizardConfigId undefined
	 */
	readonly OnlineApp_GetExtractedWizardConfigById: (
		companyGuid: string,
		wizardConfigId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModel>>;

	/**
	 * @deprecated
	 * @param { string } companyGuid undefined
	 * @param { object } parameters
	 */
	readonly OnlineApp_InitializeFormFree: (
		companyGuid: string,
		parameters: { body: LELodasoftApiControllersInitializeFormFreeRequest },
	) => Observable<AsyncData<Error, LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponse>>;

	/**
	 * Initialize Form Free for Online Application (authed). This will link the request to the loanid and the borrowerId passed.
	 * @param { number } loanId - the loan id
	 * @param { number } borrowerId - id of the borrower to initialize form free for
	 */
	readonly OnlineApp_MarkFormFreeForBorrowerComplete: (
		loanId: number,
		borrowerId: number,
	) => Observable<AsyncData<Error, unknown>>;
};

export const onlineAppController = asks(
	(e: { apiClient: TAPIClient }): OnlineAppController => ({
		OnlineApp_GetFeatureFlags: loanId => {
			return e.apiClient
				.request({
					url: `/api/online-app/feature-flags/${encodeURIComponent(number.encode(loanId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftApiModelsOnlineAppFeatureFlagsIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		OnlineApp_GetLoanTypes: loanId => {
			return e.apiClient
				.request({
					url: `/api/online-app/loantypes/${encodeURIComponent(number.encode(loanId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftDataAccessDbModelsConfigurationLoanTypeModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		OnlineApp_GetApplicationViewModel: loanId => {
			return e.apiClient
				.request({
					url: `/api/online-app/get-application/${encodeURIComponent(number.encode(loanId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsConfigurationApplicationViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		OnlineApp_UpdateLoanType: (loanId, loanTypeId) => {
			return e.apiClient
				.request({
					url: `/api/online-app/loantype/${encodeURIComponent(
						number.encode(loanId).toString(),
					)}/${encodeURIComponent(number.encode(loanTypeId).toString())}`,
					method: 'POST',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftApiModelsBorrowerApplicationViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		OnlineApp_GetStatus: loanId => {
			return e.apiClient
				.request({
					url: `/api/online-app/status/${encodeURIComponent(number.encode(loanId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsOnlineAppOnlineAppProgressViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
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
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsOnlineAppOnlineAppProgressViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		OnlineApp_SubmitOnlineApp: loanId => {
			return e.apiClient
				.request({
					url: `/api/online-app/submit-app/${encodeURIComponent(number.encode(loanId).toString())}`,
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
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsOnlineAppCreateBorrowerAccountMortgageResponseIO.decode(
									value,
								).mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		OnlineApp_AddOnlineApplicationTask: loanId => {
			return e.apiClient
				.request({
					url: `/api/online-app/add-online-app-task/${encodeURIComponent(number.encode(loanId).toString())}`,
					method: 'POST',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsLoanLoanDocTaskViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		OnlineApp_GetAllWizardConfigs: companyGuid => {
			return e.apiClient
				.request({
					url: `/api/online-app/${encodeURIComponent(string.encode(companyGuid).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsConfigurationWizardWizardConfigViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		OnlineApp_GetExtractedWizardConfigById: (companyGuid, wizardConfigId) => {
			return e.apiClient
				.request({
					url: `/api/online-app/${encodeURIComponent(
						string.encode(companyGuid).toString(),
					)}/${encodeURIComponent(number.encode(wizardConfigId).toString())}/extracted`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModelIO.decode(
									value,
								).mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		OnlineApp_InitializeFormFree: (companyGuid, parameters) => {
			const encoded = partial({ body: LELodasoftApiControllersInitializeFormFreeRequestIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/online-app/${encodeURIComponent(
						string.encode(companyGuid).toString(),
					)}/InitializeFormFree`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponseIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		OnlineApp_MarkFormFreeForBorrowerComplete: (loanId, borrowerId) => {
			return e.apiClient
				.request({
					url: `/api/online-app/MarkFormFreeForBorrowerComplete/${encodeURIComponent(
						number.encode(loanId).toString(),
					)}/${encodeURIComponent(number.encode(borrowerId).toString())}`,
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
	}),
);
