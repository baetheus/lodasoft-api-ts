import { ResponseValiationError, TAPIClient } from '../client/client';
import {
	LELodasoftApiControllersInitializeFormFreeRequest,
	LELodasoftApiControllersInitializeFormFreeRequestIO,
} from '../definitions/LELodasoftApiControllersInitializeFormFreeRequest';
import {
	LELodasoftApiModelsWizardModelsWizardQuestionDataViewModel,
	LELodasoftApiModelsWizardModelsWizardQuestionDataViewModelIO,
} from '../definitions/LELodasoftApiModelsWizardModelsWizardQuestionDataViewModel';
import {
	LELodasoftCommonModelsConfigurationWizardDataIdViewModel,
	LELodasoftCommonModelsConfigurationWizardDataIdViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationWizardDataIdViewModel';
import {
	LELodasoftCommonModelsConfigurationWizardDataViewModel,
	LELodasoftCommonModelsConfigurationWizardDataViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationWizardDataViewModel';
import {
	LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModel,
	LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModel';
import {
	LELodasoftCommonModelsConfigurationWizardGroupIdViewModel,
	LELodasoftCommonModelsConfigurationWizardGroupIdViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationWizardGroupIdViewModel';
import {
	LELodasoftCommonModelsConfigurationWizardGroupViewModel,
	LELodasoftCommonModelsConfigurationWizardGroupViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationWizardGroupViewModel';
import {
	LELodasoftCommonModelsConfigurationWizardTreeViewModel,
	LELodasoftCommonModelsConfigurationWizardTreeViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationWizardTreeViewModel';
import {
	LELodasoftCommonModelsConfigurationWizardValidViewModel,
	LELodasoftCommonModelsConfigurationWizardValidViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationWizardValidViewModel';
import {
	LELodasoftCommonModelsConfigurationWizardWizardConfigViewModel,
	LELodasoftCommonModelsConfigurationWizardWizardConfigViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationWizardWizardConfigViewModel';
import {
	LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel,
	LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModelIO,
} from '../definitions/LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel';
import {
	LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponse,
	LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponseIO,
} from '../definitions/LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponse';
import { unknownType } from '../utils/utils';
import { fromEither, AsyncData } from '@nll/dux';
import { asks } from 'fp-ts/lib/Reader';
import { array, partial, number, type, string } from 'io-ts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type WizardController = {
	readonly Wizard_GetAllWizardConfigs: () => Observable<
		AsyncData<Error, Array<LELodasoftCommonModelsConfigurationWizardWizardConfigViewModel>>
	>;

	/**
	 * @param { object } parameters
	 */
	readonly Wizard_UpsertWizardConfig: (parameters: {
		body: LELodasoftCommonModelsConfigurationWizardWizardConfigViewModel;
	}) => Observable<AsyncData<Error, LELodasoftCommonModelsConfigurationWizardWizardConfigViewModel>>;

	/**
	 * @param { number } wizardConfigId undefined
	 */
	readonly Wizard_GetWizardConfigById: (
		wizardConfigId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsConfigurationWizardWizardConfigViewModel>>;

	/**
	 * @param { number } wizardConfigId undefined
	 */
	readonly Wizard_DeleteWizardConfig: (wizardConfigId: number) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } wizardConfigId undefined
	 */
	readonly Wizard_GetExtractedWizardConfigById: (
		wizardConfigId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModel>>;

	/**
	 * @param { object } parameters
	 */
	readonly Wizard_UpsertExtractedWizardConfig: (parameters: {
		body: LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModel;
	}) => Observable<AsyncData<Error, LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModel>>;

	/**
	 * @param { number } wizardConfigId undefined
	 */
	readonly Wizard_GetDataIdListByWizardConfigId: (
		wizardConfigId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsConfigurationWizardDataIdViewModel>>>;

	/**
	 * @param { number } wizardConfigId undefined
	 * @param { object } parameters
	 */
	readonly Wizard_UpsertDataIdAndDataByWizardConfigId: (
		wizardConfigId: number,
		parameters: { body: LELodasoftCommonModelsConfigurationWizardDataIdViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsConfigurationWizardDataIdViewModel>>;

	/**
	 * @param { number } wizardConfigId undefined
	 * @param { number } dataIdId undefined
	 */
	readonly Wizard_GetDataIdByWizardConfigId: (
		wizardConfigId: number,
		dataIdId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsConfigurationWizardDataIdViewModel>>;

	/**
	 * @param { number } wizardConfigId undefined
	 * @param { number } dataIdId undefined
	 */
	readonly Wizard_DeleteDataIdByWizardConfigId: (
		wizardConfigId: number,
		dataIdId: number,
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } wizardConfigId undefined
	 */
	readonly Wizard_GetDataListByWizardConfigId: (
		wizardConfigId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsConfigurationWizardDataViewModel>>>;

	/**
	 * @param { number } wizardConfigId undefined
	 * @param { number } dataId undefined
	 * @param { object } parameters
	 */
	readonly Wizard_GetDataByWizardConfigId: (
		wizardConfigId: number,
		dataId: number,
		parameters: { query: { category: number } },
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsConfigurationWizardDataViewModel>>>;

	/**
	 * @param { number } wizardConfigId undefined
	 * @param { number } dataId undefined
	 */
	readonly Wizard_DeleteDataByWizardConfigId: (
		wizardConfigId: number,
		dataId: number,
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } wizardConfigId undefined
	 */
	readonly Wizard_GetGroupIdListByWizardConfigId: (
		wizardConfigId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsConfigurationWizardGroupIdViewModel>>>;

	/**
	 * @param { number } wizardConfigId undefined
	 * @param { object } parameters
	 */
	readonly Wizard_UpsertGroupIdAndGroupByWizardConfigId: (
		wizardConfigId: number,
		parameters: { body: LELodasoftCommonModelsConfigurationWizardGroupIdViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsConfigurationWizardGroupIdViewModel>>;

	/**
	 * @param { number } wizardConfigId undefined
	 * @param { number } groupIdId undefined
	 */
	readonly Wizard_GetGroupIdByWizardConfigId: (
		wizardConfigId: number,
		groupIdId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsConfigurationWizardGroupIdViewModel>>;

	/**
	 * @param { number } wizardConfigId undefined
	 * @param { number } groupIdId undefined
	 */
	readonly Wizard_DeleteGroupIdByWizardConfigId: (
		wizardConfigId: number,
		groupIdId: number,
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } wizardConfigId undefined
	 */
	readonly Wizard_GetGroupListByWizardConfigId: (
		wizardConfigId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsConfigurationWizardGroupViewModel>>>;

	/**
	 * @param { number } wizardConfigId undefined
	 * @param { number } groupId undefined
	 */
	readonly Wizard_GetGroupByWizardConfigId: (
		wizardConfigId: number,
		groupId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsConfigurationWizardGroupViewModel>>;

	/**
	 * @param { number } wizardConfigId undefined
	 * @param { number } groupId undefined
	 */
	readonly Wizard_DeleteGroupByWizardConfigId: (
		wizardConfigId: number,
		groupId: number,
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } wizardConfigId undefined
	 */
	readonly Wizard_GetValidListByWizardConfigId: (
		wizardConfigId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsConfigurationWizardValidViewModel>>>;

	/**
	 * @param { number } wizardConfigId undefined
	 * @param { number } validId undefined
	 */
	readonly Wizard_GetValidByWizardConfigId: (
		wizardConfigId: number,
		validId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsConfigurationWizardValidViewModel>>;

	/**
	 * @param { number } wizardConfigId undefined
	 * @param { number } validId undefined
	 */
	readonly Wizard_DeleteValidByWizardConfigId: (
		wizardConfigId: number,
		validId: number,
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } wizardConfigId undefined
	 */
	readonly Wizard_GetTreeListByWizardConfigId: (
		wizardConfigId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsConfigurationWizardTreeViewModel>>>;

	/**
	 * @param { number } wizardConfigId undefined
	 * @param { object } parameters
	 */
	readonly Wizard_UpsertTreeByWizardConfigId: (
		wizardConfigId: number,
		parameters: { body: Array<LELodasoftCommonModelsConfigurationWizardTreeViewModel> },
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsConfigurationWizardTreeViewModel>>>;

	readonly Wizard_GetAllWizardQuestions: () => Observable<
		AsyncData<Error, Array<LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel>>
	>;

	/**
	 * @param { object } parameters
	 */
	readonly Wizard_UpsertWizardQuestion: (parameters: {
		body: LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel;
	}) => Observable<AsyncData<Error, LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel>>;

	/**
	 * @param { number } questionId undefined
	 */
	readonly Wizard_GetWizardQuestionById: (
		questionId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel>>;

	/**
	 * @param { number } questionId undefined
	 */
	readonly Wizard_DeleteWizardQuestion: (questionId: number) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } wizardConfigId undefined
	 */
	readonly Wizard_GetWizardQuestionListByWizardConfigId: (
		wizardConfigId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel>>>;

	/**
	 * @param { number } wizardConfigId undefined
	 * @param { object } parameters
	 */
	readonly Wizard_UpsertWizardQuestionDataByWizardConfigId: (
		wizardConfigId: number,
		parameters: { body: LELodasoftApiModelsWizardModelsWizardQuestionDataViewModel },
	) => Observable<AsyncData<Error, LELodasoftApiModelsWizardModelsWizardQuestionDataViewModel>>;

	/**
	 * @param { number } wizardConfigId undefined
	 * @param { number } questionId undefined
	 */
	readonly Wizard_GetWizardQuestionDataById: (
		wizardConfigId: number,
		questionId: number,
	) => Observable<AsyncData<Error, LELodasoftApiModelsWizardModelsWizardQuestionDataViewModel>>;

	/**
	 * @param { number } wizardConfigId undefined
	 * @param { number } questionId undefined
	 */
	readonly Wizard_DeleteWizardQuestionData: (
		wizardConfigId: number,
		questionId: number,
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { string } companyGuid undefined
	 * @param { object } parameters
	 */
	readonly Wizard_InitializeFormFree: (
		companyGuid: string,
		parameters: { body: LELodasoftApiControllersInitializeFormFreeRequest },
	) => Observable<AsyncData<Error, LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponse>>;
};

export const wizardController = asks(
	(e: { apiClient: TAPIClient }): WizardController => ({
		Wizard_GetAllWizardConfigs: () => {
			return e.apiClient
				.request({
					url: `/api/wizardconfigs`,
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

		Wizard_UpsertWizardConfig: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsConfigurationWizardWizardConfigViewModelIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/wizardconfigs`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsConfigurationWizardWizardConfigViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Wizard_GetWizardConfigById: wizardConfigId => {
			return e.apiClient
				.request({
					url: `/api/wizardconfigs/${encodeURIComponent(number.encode(wizardConfigId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsConfigurationWizardWizardConfigViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Wizard_DeleteWizardConfig: wizardConfigId => {
			return e.apiClient
				.request({
					url: `/api/wizardconfigs/${encodeURIComponent(number.encode(wizardConfigId).toString())}`,
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

		Wizard_GetExtractedWizardConfigById: wizardConfigId => {
			return e.apiClient
				.request({
					url: `/api/wizardconfigs/${encodeURIComponent(number.encode(wizardConfigId).toString())}/extracted`,
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

		Wizard_UpsertExtractedWizardConfig: parameters => {
			const encoded = partial({
				body: LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/wizardconfigs/extracted`,
					method: 'POST',

					body: encoded.body,
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

		Wizard_GetDataIdListByWizardConfigId: wizardConfigId => {
			return e.apiClient
				.request({
					url: `/api/wizardconfigs/${encodeURIComponent(number.encode(wizardConfigId).toString())}/dataids`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsConfigurationWizardDataIdViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Wizard_UpsertDataIdAndDataByWizardConfigId: (wizardConfigId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsConfigurationWizardDataIdViewModelIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/wizardconfigs/${encodeURIComponent(number.encode(wizardConfigId).toString())}/dataids`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsConfigurationWizardDataIdViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Wizard_GetDataIdByWizardConfigId: (wizardConfigId, dataIdId) => {
			return e.apiClient
				.request({
					url: `/api/wizardconfigs/${encodeURIComponent(
						number.encode(wizardConfigId).toString(),
					)}/dataids/${encodeURIComponent(number.encode(dataIdId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsConfigurationWizardDataIdViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Wizard_DeleteDataIdByWizardConfigId: (wizardConfigId, dataIdId) => {
			return e.apiClient
				.request({
					url: `/api/wizardconfigs/${encodeURIComponent(
						number.encode(wizardConfigId).toString(),
					)}/dataids/${encodeURIComponent(number.encode(dataIdId).toString())}`,
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

		Wizard_GetDataListByWizardConfigId: wizardConfigId => {
			return e.apiClient
				.request({
					url: `/api/wizardconfigs/${encodeURIComponent(number.encode(wizardConfigId).toString())}/datas`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsConfigurationWizardDataViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Wizard_GetDataByWizardConfigId: (wizardConfigId, dataId, parameters) => {
			const encoded = partial({ query: type({ category: number }) }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/wizardconfigs/${encodeURIComponent(
						number.encode(wizardConfigId).toString(),
					)}/datas/${encodeURIComponent(number.encode(dataId).toString())}`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsConfigurationWizardDataViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Wizard_DeleteDataByWizardConfigId: (wizardConfigId, dataId) => {
			return e.apiClient
				.request({
					url: `/api/wizardconfigs/${encodeURIComponent(
						number.encode(wizardConfigId).toString(),
					)}/datas/${encodeURIComponent(number.encode(dataId).toString())}`,
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

		Wizard_GetGroupIdListByWizardConfigId: wizardConfigId => {
			return e.apiClient
				.request({
					url: `/api/wizardconfigs/${encodeURIComponent(number.encode(wizardConfigId).toString())}/groupids`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsConfigurationWizardGroupIdViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Wizard_UpsertGroupIdAndGroupByWizardConfigId: (wizardConfigId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsConfigurationWizardGroupIdViewModelIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/wizardconfigs/${encodeURIComponent(number.encode(wizardConfigId).toString())}/groupids`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsConfigurationWizardGroupIdViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Wizard_GetGroupIdByWizardConfigId: (wizardConfigId, groupIdId) => {
			return e.apiClient
				.request({
					url: `/api/wizardconfigs/${encodeURIComponent(
						number.encode(wizardConfigId).toString(),
					)}/groupids/${encodeURIComponent(number.encode(groupIdId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsConfigurationWizardGroupIdViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Wizard_DeleteGroupIdByWizardConfigId: (wizardConfigId, groupIdId) => {
			return e.apiClient
				.request({
					url: `/api/wizardconfigs/${encodeURIComponent(
						number.encode(wizardConfigId).toString(),
					)}/groupids/${encodeURIComponent(number.encode(groupIdId).toString())}`,
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

		Wizard_GetGroupListByWizardConfigId: wizardConfigId => {
			return e.apiClient
				.request({
					url: `/api/wizardconfigs/${encodeURIComponent(number.encode(wizardConfigId).toString())}/groups`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsConfigurationWizardGroupViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Wizard_GetGroupByWizardConfigId: (wizardConfigId, groupId) => {
			return e.apiClient
				.request({
					url: `/api/wizardconfigs/${encodeURIComponent(
						number.encode(wizardConfigId).toString(),
					)}/groups/${encodeURIComponent(number.encode(groupId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsConfigurationWizardGroupViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Wizard_DeleteGroupByWizardConfigId: (wizardConfigId, groupId) => {
			return e.apiClient
				.request({
					url: `/api/wizardconfigs/${encodeURIComponent(
						number.encode(wizardConfigId).toString(),
					)}/groups/${encodeURIComponent(number.encode(groupId).toString())}`,
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

		Wizard_GetValidListByWizardConfigId: wizardConfigId => {
			return e.apiClient
				.request({
					url: `/api/wizardconfigs/${encodeURIComponent(number.encode(wizardConfigId).toString())}/valids`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsConfigurationWizardValidViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Wizard_GetValidByWizardConfigId: (wizardConfigId, validId) => {
			return e.apiClient
				.request({
					url: `/api/wizardconfigs/${encodeURIComponent(
						number.encode(wizardConfigId).toString(),
					)}/valids/${encodeURIComponent(number.encode(validId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsConfigurationWizardValidViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Wizard_DeleteValidByWizardConfigId: (wizardConfigId, validId) => {
			return e.apiClient
				.request({
					url: `/api/wizardconfigs/${encodeURIComponent(
						number.encode(wizardConfigId).toString(),
					)}/valids/${encodeURIComponent(number.encode(validId).toString())}`,
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

		Wizard_GetTreeListByWizardConfigId: wizardConfigId => {
			return e.apiClient
				.request({
					url: `/api/wizardconfigs/${encodeURIComponent(number.encode(wizardConfigId).toString())}/tree`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsConfigurationWizardTreeViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Wizard_UpsertTreeByWizardConfigId: (wizardConfigId, parameters) => {
			const encoded = partial({ body: array(LELodasoftCommonModelsConfigurationWizardTreeViewModelIO) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/wizardconfigs/${encodeURIComponent(number.encode(wizardConfigId).toString())}/tree`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsConfigurationWizardTreeViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Wizard_GetAllWizardQuestions: () => {
			return e.apiClient
				.request({
					url: `/api/wizardconfigs/questions`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Wizard_UpsertWizardQuestion: parameters => {
			const encoded = partial({
				body: LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModelIO,
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/wizardconfigs/questions`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModelIO.decode(
									value,
								).mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Wizard_GetWizardQuestionById: questionId => {
			return e.apiClient
				.request({
					url: `/api/wizardconfigs/questions/${encodeURIComponent(number.encode(questionId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModelIO.decode(
									value,
								).mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Wizard_DeleteWizardQuestion: questionId => {
			return e.apiClient
				.request({
					url: `/api/wizardconfigs/questions/${encodeURIComponent(number.encode(questionId).toString())}`,
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

		Wizard_GetWizardQuestionListByWizardConfigId: wizardConfigId => {
			return e.apiClient
				.request({
					url: `/api/wizardconfigs/${encodeURIComponent(number.encode(wizardConfigId).toString())}/questions`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Wizard_UpsertWizardQuestionDataByWizardConfigId: (wizardConfigId, parameters) => {
			const encoded = partial({ body: LELodasoftApiModelsWizardModelsWizardQuestionDataViewModelIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/wizardconfigs/${encodeURIComponent(number.encode(wizardConfigId).toString())}/questions`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftApiModelsWizardModelsWizardQuestionDataViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Wizard_GetWizardQuestionDataById: (wizardConfigId, questionId) => {
			return e.apiClient
				.request({
					url: `/api/wizardconfigs/${encodeURIComponent(
						number.encode(wizardConfigId).toString(),
					)}/questions/${encodeURIComponent(number.encode(questionId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftApiModelsWizardModelsWizardQuestionDataViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Wizard_DeleteWizardQuestionData: (wizardConfigId, questionId) => {
			return e.apiClient
				.request({
					url: `/api/wizardconfigs/${encodeURIComponent(
						number.encode(wizardConfigId).toString(),
					)}/questions/${encodeURIComponent(number.encode(questionId).toString())}`,
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

		Wizard_InitializeFormFree: (companyGuid, parameters) => {
			const encoded = partial({ body: LELodasoftApiControllersInitializeFormFreeRequestIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/wizardconfigs/InitializeFormFree/${encodeURIComponent(
						string.encode(companyGuid).toString(),
					)}`,
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
	}),
);
