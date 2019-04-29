import { TAPIClient } from '../client/client';
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
import { decodeAndMap, unknownType } from '../utils/utils';
import { asks } from 'fp-ts/lib/Reader';
import { array, partial, number, type, string } from 'io-ts';
import { Observable } from 'rxjs';

export type WizardController = {
	readonly Wizard_GetAllWizardConfigs: () => Observable<
		Array<LELodasoftCommonModelsConfigurationWizardWizardConfigViewModel>
	>;

	/**
	 * @param { object } parameters
	 */
	readonly Wizard_UpsertWizardConfig: (parameters: {
		body: LELodasoftCommonModelsConfigurationWizardWizardConfigViewModel;
	}) => Observable<LELodasoftCommonModelsConfigurationWizardWizardConfigViewModel>;

	/**
	 * @param { number } wizardConfigId undefined
	 */
	readonly Wizard_GetWizardConfigById: (
		wizardConfigId: number,
	) => Observable<LELodasoftCommonModelsConfigurationWizardWizardConfigViewModel>;

	/**
	 * @param { number } wizardConfigId undefined
	 */
	readonly Wizard_DeleteWizardConfig: (wizardConfigId: number) => Observable<unknown>;

	/**
	 * @param { number } wizardConfigId undefined
	 */
	readonly Wizard_GetExtractedWizardConfigById: (
		wizardConfigId: number,
	) => Observable<LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModel>;

	/**
	 * @param { object } parameters
	 */
	readonly Wizard_UpsertExtractedWizardConfig: (parameters: {
		body: LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModel;
	}) => Observable<LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModel>;

	/**
	 * @param { number } wizardConfigId undefined
	 */
	readonly Wizard_GetDataIdListByWizardConfigId: (
		wizardConfigId: number,
	) => Observable<Array<LELodasoftCommonModelsConfigurationWizardDataIdViewModel>>;

	/**
	 * @param { number } wizardConfigId undefined
	 * @param { object } parameters
	 */
	readonly Wizard_UpsertDataIdAndDataByWizardConfigId: (
		wizardConfigId: number,
		parameters: { body: LELodasoftCommonModelsConfigurationWizardDataIdViewModel },
	) => Observable<LELodasoftCommonModelsConfigurationWizardDataIdViewModel>;

	/**
	 * @param { number } wizardConfigId undefined
	 * @param { number } dataIdId undefined
	 */
	readonly Wizard_GetDataIdByWizardConfigId: (
		wizardConfigId: number,
		dataIdId: number,
	) => Observable<LELodasoftCommonModelsConfigurationWizardDataIdViewModel>;

	/**
	 * @param { number } wizardConfigId undefined
	 * @param { number } dataIdId undefined
	 */
	readonly Wizard_DeleteDataIdByWizardConfigId: (wizardConfigId: number, dataIdId: number) => Observable<unknown>;

	/**
	 * @param { number } wizardConfigId undefined
	 */
	readonly Wizard_GetDataListByWizardConfigId: (
		wizardConfigId: number,
	) => Observable<Array<LELodasoftCommonModelsConfigurationWizardDataViewModel>>;

	/**
	 * @param { number } wizardConfigId undefined
	 * @param { number } dataId undefined
	 * @param { object } parameters
	 */
	readonly Wizard_GetDataByWizardConfigId: (
		wizardConfigId: number,
		dataId: number,
		parameters: { query: { category: number } },
	) => Observable<Array<LELodasoftCommonModelsConfigurationWizardDataViewModel>>;

	/**
	 * @param { number } wizardConfigId undefined
	 * @param { number } dataId undefined
	 */
	readonly Wizard_DeleteDataByWizardConfigId: (wizardConfigId: number, dataId: number) => Observable<unknown>;

	/**
	 * @param { number } wizardConfigId undefined
	 */
	readonly Wizard_GetGroupIdListByWizardConfigId: (
		wizardConfigId: number,
	) => Observable<Array<LELodasoftCommonModelsConfigurationWizardGroupIdViewModel>>;

	/**
	 * @param { number } wizardConfigId undefined
	 * @param { object } parameters
	 */
	readonly Wizard_UpsertGroupIdAndGroupByWizardConfigId: (
		wizardConfigId: number,
		parameters: { body: LELodasoftCommonModelsConfigurationWizardGroupIdViewModel },
	) => Observable<LELodasoftCommonModelsConfigurationWizardGroupIdViewModel>;

	/**
	 * @param { number } wizardConfigId undefined
	 * @param { number } groupIdId undefined
	 */
	readonly Wizard_GetGroupIdByWizardConfigId: (
		wizardConfigId: number,
		groupIdId: number,
	) => Observable<LELodasoftCommonModelsConfigurationWizardGroupIdViewModel>;

	/**
	 * @param { number } wizardConfigId undefined
	 * @param { number } groupIdId undefined
	 */
	readonly Wizard_DeleteGroupIdByWizardConfigId: (wizardConfigId: number, groupIdId: number) => Observable<unknown>;

	/**
	 * @param { number } wizardConfigId undefined
	 */
	readonly Wizard_GetGroupListByWizardConfigId: (
		wizardConfigId: number,
	) => Observable<Array<LELodasoftCommonModelsConfigurationWizardGroupViewModel>>;

	/**
	 * @param { number } wizardConfigId undefined
	 * @param { number } groupId undefined
	 */
	readonly Wizard_GetGroupByWizardConfigId: (
		wizardConfigId: number,
		groupId: number,
	) => Observable<LELodasoftCommonModelsConfigurationWizardGroupViewModel>;

	/**
	 * @param { number } wizardConfigId undefined
	 * @param { number } groupId undefined
	 */
	readonly Wizard_DeleteGroupByWizardConfigId: (wizardConfigId: number, groupId: number) => Observable<unknown>;

	/**
	 * @param { number } wizardConfigId undefined
	 */
	readonly Wizard_GetValidListByWizardConfigId: (
		wizardConfigId: number,
	) => Observable<Array<LELodasoftCommonModelsConfigurationWizardValidViewModel>>;

	/**
	 * @param { number } wizardConfigId undefined
	 * @param { number } validId undefined
	 */
	readonly Wizard_GetValidByWizardConfigId: (
		wizardConfigId: number,
		validId: number,
	) => Observable<LELodasoftCommonModelsConfigurationWizardValidViewModel>;

	/**
	 * @param { number } wizardConfigId undefined
	 * @param { number } validId undefined
	 */
	readonly Wizard_DeleteValidByWizardConfigId: (wizardConfigId: number, validId: number) => Observable<unknown>;

	/**
	 * @param { number } wizardConfigId undefined
	 */
	readonly Wizard_GetTreeListByWizardConfigId: (
		wizardConfigId: number,
	) => Observable<Array<LELodasoftCommonModelsConfigurationWizardTreeViewModel>>;

	/**
	 * @param { number } wizardConfigId undefined
	 * @param { object } parameters
	 */
	readonly Wizard_UpsertTreeByWizardConfigId: (
		wizardConfigId: number,
		parameters: { body: Array<LELodasoftCommonModelsConfigurationWizardTreeViewModel> },
	) => Observable<Array<LELodasoftCommonModelsConfigurationWizardTreeViewModel>>;

	readonly Wizard_GetAllWizardQuestions: () => Observable<
		Array<LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel>
	>;

	/**
	 * @param { object } parameters
	 */
	readonly Wizard_UpsertWizardQuestion: (parameters: {
		body: LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel;
	}) => Observable<LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel>;

	/**
	 * @param { number } questionId undefined
	 */
	readonly Wizard_GetWizardQuestionById: (
		questionId: number,
	) => Observable<LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel>;

	/**
	 * @param { number } questionId undefined
	 */
	readonly Wizard_DeleteWizardQuestion: (questionId: number) => Observable<unknown>;

	/**
	 * @param { number } wizardConfigId undefined
	 */
	readonly Wizard_GetWizardQuestionListByWizardConfigId: (
		wizardConfigId: number,
	) => Observable<Array<LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel>>;

	/**
	 * @param { number } wizardConfigId undefined
	 * @param { object } parameters
	 */
	readonly Wizard_UpsertWizardQuestionDataByWizardConfigId: (
		wizardConfigId: number,
		parameters: { body: LELodasoftApiModelsWizardModelsWizardQuestionDataViewModel },
	) => Observable<LELodasoftApiModelsWizardModelsWizardQuestionDataViewModel>;

	/**
	 * @param { number } wizardConfigId undefined
	 * @param { number } questionId undefined
	 */
	readonly Wizard_GetWizardQuestionDataById: (
		wizardConfigId: number,
		questionId: number,
	) => Observable<LELodasoftApiModelsWizardModelsWizardQuestionDataViewModel>;

	/**
	 * @param { number } wizardConfigId undefined
	 * @param { number } questionId undefined
	 */
	readonly Wizard_DeleteWizardQuestionData: (wizardConfigId: number, questionId: number) => Observable<unknown>;

	/**
	 * @param { string } companyGuid undefined
	 * @param { object } parameters
	 */
	readonly Wizard_InitializeFormFree: (
		companyGuid: string,
		parameters: { body: LELodasoftApiControllersInitializeFormFreeRequest },
	) => Observable<LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponse>;
};

export const wizardController = asks(
	(e: { API_CLIENT: TAPIClient; PREFIX: string }): WizardController => ({
		Wizard_GetAllWizardConfigs: () => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/wizardconfigs`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsConfigurationWizardWizardConfigViewModelIO)));
		},

		Wizard_UpsertWizardConfig: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsConfigurationWizardWizardConfigViewModelIO }).encode(
				parameters,
			);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/wizardconfigs`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsConfigurationWizardWizardConfigViewModelIO));
		},

		Wizard_GetWizardConfigById: wizardConfigId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/wizardconfigs/${encodeURIComponent(number.encode(wizardConfigId).toString())}`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftCommonModelsConfigurationWizardWizardConfigViewModelIO));
		},

		Wizard_DeleteWizardConfig: wizardConfigId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/wizardconfigs/${encodeURIComponent(number.encode(wizardConfigId).toString())}`,
				method: 'DELETE',
			}).pipe(decodeAndMap(unknownType));
		},

		Wizard_GetExtractedWizardConfigById: wizardConfigId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/wizardconfigs/${encodeURIComponent(
					number.encode(wizardConfigId).toString(),
				)}/extracted`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModelIO));
		},

		Wizard_UpsertExtractedWizardConfig: parameters => {
			const encoded = partial({
				body: LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/wizardconfigs/extracted`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModelIO));
		},

		Wizard_GetDataIdListByWizardConfigId: wizardConfigId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/wizardconfigs/${encodeURIComponent(
					number.encode(wizardConfigId).toString(),
				)}/dataids`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsConfigurationWizardDataIdViewModelIO)));
		},

		Wizard_UpsertDataIdAndDataByWizardConfigId: (wizardConfigId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsConfigurationWizardDataIdViewModelIO }).encode(
				parameters,
			);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/wizardconfigs/${encodeURIComponent(
					number.encode(wizardConfigId).toString(),
				)}/dataids`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsConfigurationWizardDataIdViewModelIO));
		},

		Wizard_GetDataIdByWizardConfigId: (wizardConfigId, dataIdId) => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/wizardconfigs/${encodeURIComponent(
					number.encode(wizardConfigId).toString(),
				)}/dataids/${encodeURIComponent(number.encode(dataIdId).toString())}`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftCommonModelsConfigurationWizardDataIdViewModelIO));
		},

		Wizard_DeleteDataIdByWizardConfigId: (wizardConfigId, dataIdId) => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/wizardconfigs/${encodeURIComponent(
					number.encode(wizardConfigId).toString(),
				)}/dataids/${encodeURIComponent(number.encode(dataIdId).toString())}`,
				method: 'DELETE',
			}).pipe(decodeAndMap(unknownType));
		},

		Wizard_GetDataListByWizardConfigId: wizardConfigId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/wizardconfigs/${encodeURIComponent(
					number.encode(wizardConfigId).toString(),
				)}/datas`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsConfigurationWizardDataViewModelIO)));
		},

		Wizard_GetDataByWizardConfigId: (wizardConfigId, dataId, parameters) => {
			const encoded = partial({ query: type({ category: number }) }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/wizardconfigs/${encodeURIComponent(
					number.encode(wizardConfigId).toString(),
				)}/datas/${encodeURIComponent(number.encode(dataId).toString())}`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsConfigurationWizardDataViewModelIO)));
		},

		Wizard_DeleteDataByWizardConfigId: (wizardConfigId, dataId) => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/wizardconfigs/${encodeURIComponent(
					number.encode(wizardConfigId).toString(),
				)}/datas/${encodeURIComponent(number.encode(dataId).toString())}`,
				method: 'DELETE',
			}).pipe(decodeAndMap(unknownType));
		},

		Wizard_GetGroupIdListByWizardConfigId: wizardConfigId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/wizardconfigs/${encodeURIComponent(
					number.encode(wizardConfigId).toString(),
				)}/groupids`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsConfigurationWizardGroupIdViewModelIO)));
		},

		Wizard_UpsertGroupIdAndGroupByWizardConfigId: (wizardConfigId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsConfigurationWizardGroupIdViewModelIO }).encode(
				parameters,
			);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/wizardconfigs/${encodeURIComponent(
					number.encode(wizardConfigId).toString(),
				)}/groupids`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsConfigurationWizardGroupIdViewModelIO));
		},

		Wizard_GetGroupIdByWizardConfigId: (wizardConfigId, groupIdId) => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/wizardconfigs/${encodeURIComponent(
					number.encode(wizardConfigId).toString(),
				)}/groupids/${encodeURIComponent(number.encode(groupIdId).toString())}`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftCommonModelsConfigurationWizardGroupIdViewModelIO));
		},

		Wizard_DeleteGroupIdByWizardConfigId: (wizardConfigId, groupIdId) => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/wizardconfigs/${encodeURIComponent(
					number.encode(wizardConfigId).toString(),
				)}/groupids/${encodeURIComponent(number.encode(groupIdId).toString())}`,
				method: 'DELETE',
			}).pipe(decodeAndMap(unknownType));
		},

		Wizard_GetGroupListByWizardConfigId: wizardConfigId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/wizardconfigs/${encodeURIComponent(
					number.encode(wizardConfigId).toString(),
				)}/groups`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsConfigurationWizardGroupViewModelIO)));
		},

		Wizard_GetGroupByWizardConfigId: (wizardConfigId, groupId) => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/wizardconfigs/${encodeURIComponent(
					number.encode(wizardConfigId).toString(),
				)}/groups/${encodeURIComponent(number.encode(groupId).toString())}`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftCommonModelsConfigurationWizardGroupViewModelIO));
		},

		Wizard_DeleteGroupByWizardConfigId: (wizardConfigId, groupId) => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/wizardconfigs/${encodeURIComponent(
					number.encode(wizardConfigId).toString(),
				)}/groups/${encodeURIComponent(number.encode(groupId).toString())}`,
				method: 'DELETE',
			}).pipe(decodeAndMap(unknownType));
		},

		Wizard_GetValidListByWizardConfigId: wizardConfigId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/wizardconfigs/${encodeURIComponent(
					number.encode(wizardConfigId).toString(),
				)}/valids`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsConfigurationWizardValidViewModelIO)));
		},

		Wizard_GetValidByWizardConfigId: (wizardConfigId, validId) => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/wizardconfigs/${encodeURIComponent(
					number.encode(wizardConfigId).toString(),
				)}/valids/${encodeURIComponent(number.encode(validId).toString())}`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftCommonModelsConfigurationWizardValidViewModelIO));
		},

		Wizard_DeleteValidByWizardConfigId: (wizardConfigId, validId) => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/wizardconfigs/${encodeURIComponent(
					number.encode(wizardConfigId).toString(),
				)}/valids/${encodeURIComponent(number.encode(validId).toString())}`,
				method: 'DELETE',
			}).pipe(decodeAndMap(unknownType));
		},

		Wizard_GetTreeListByWizardConfigId: wizardConfigId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/wizardconfigs/${encodeURIComponent(
					number.encode(wizardConfigId).toString(),
				)}/tree`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsConfigurationWizardTreeViewModelIO)));
		},

		Wizard_UpsertTreeByWizardConfigId: (wizardConfigId, parameters) => {
			const encoded = partial({ body: array(LELodasoftCommonModelsConfigurationWizardTreeViewModelIO) }).encode(
				parameters,
			);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/wizardconfigs/${encodeURIComponent(
					number.encode(wizardConfigId).toString(),
				)}/tree`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsConfigurationWizardTreeViewModelIO)));
		},

		Wizard_GetAllWizardQuestions: () => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/wizardconfigs/questions`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModelIO)));
		},

		Wizard_UpsertWizardQuestion: parameters => {
			const encoded = partial({
				body: LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModelIO,
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/wizardconfigs/questions`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModelIO));
		},

		Wizard_GetWizardQuestionById: questionId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/wizardconfigs/questions/${encodeURIComponent(
					number.encode(questionId).toString(),
				)}`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModelIO));
		},

		Wizard_DeleteWizardQuestion: questionId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/wizardconfigs/questions/${encodeURIComponent(
					number.encode(questionId).toString(),
				)}`,
				method: 'DELETE',
			}).pipe(decodeAndMap(unknownType));
		},

		Wizard_GetWizardQuestionListByWizardConfigId: wizardConfigId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/wizardconfigs/${encodeURIComponent(
					number.encode(wizardConfigId).toString(),
				)}/questions`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModelIO)));
		},

		Wizard_UpsertWizardQuestionDataByWizardConfigId: (wizardConfigId, parameters) => {
			const encoded = partial({ body: LELodasoftApiModelsWizardModelsWizardQuestionDataViewModelIO }).encode(
				parameters,
			);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/wizardconfigs/${encodeURIComponent(
					number.encode(wizardConfigId).toString(),
				)}/questions`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftApiModelsWizardModelsWizardQuestionDataViewModelIO));
		},

		Wizard_GetWizardQuestionDataById: (wizardConfigId, questionId) => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/wizardconfigs/${encodeURIComponent(
					number.encode(wizardConfigId).toString(),
				)}/questions/${encodeURIComponent(number.encode(questionId).toString())}`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftApiModelsWizardModelsWizardQuestionDataViewModelIO));
		},

		Wizard_DeleteWizardQuestionData: (wizardConfigId, questionId) => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/wizardconfigs/${encodeURIComponent(
					number.encode(wizardConfigId).toString(),
				)}/questions/${encodeURIComponent(number.encode(questionId).toString())}`,
				method: 'DELETE',
			}).pipe(decodeAndMap(unknownType));
		},

		Wizard_InitializeFormFree: (companyGuid, parameters) => {
			const encoded = partial({ body: LELodasoftApiControllersInitializeFormFreeRequestIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/wizardconfigs/InitializeFormFree/${encodeURIComponent(
					string.encode(companyGuid).toString(),
				)}`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponseIO));
		},
	}),
);
