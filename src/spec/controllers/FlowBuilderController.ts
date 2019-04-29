import { asks } from 'fp-ts/lib/Reader';
import { array, number, partial, string, type } from 'io-ts';
import { Observable } from 'rxjs';

import { TAPIClient } from '../client/client';
import {
  LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel,
  LELodasoftCommonModelsFlowBuilderFlowBuilderViewModelIO,
} from '../definitions/LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel';
import { decodeAndMap, unknownType } from '../utils/utils';

export type FlowBuilderController = {
	/**
	 * @param { object } parameters
	 */
	readonly FlowBuilder_GetFlowsFiltered: (parameters: {
		query: { companyIdFilter: number; flowTypeFilter: string };
	}) => Observable<Array<LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel>>;

	/**
	 * @param { object } parameters
	 */
	readonly FlowBuilder_InsertFlow: (parameters: {
		body: LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel;
	}) => Observable<LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel>;

	/**
	 * @param { number } flowId undefined
	 */
	readonly FlowBuilder_GetFlow: (flowId: number) => Observable<LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel>;

	/**
	 * @param { number } flowId undefined
	 * @param { object } parameters
	 */
	readonly FlowBuilder_UpdateFlow: (
		flowId: number,
		parameters: { body: LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel },
	) => Observable<LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel>;

	/**
	 * @param { number } flowId undefined
	 */
	readonly FlowBuilder_DeleteFlow: (flowId: number) => Observable<unknown>;

	/**
	 * @param { string } flowguid undefined
	 */
	readonly FlowBuilder_GetFlowByGuid: (
		flowguid: string,
	) => Observable<LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel>;

	/**
	 * @param { string } flowGuid undefined
	 * @param { object } parameters
	 */
	readonly FlowBuilder_UpdateFlowByGuid: (
		flowGuid: string,
		parameters: { body: LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel },
	) => Observable<LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel>;

	/**
	 * @param { string } flowGuid undefined
	 */
	readonly FlowBuilder_DeleteFlowByGuid: (flowGuid: string) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly FlowBuilder_InsertFlowByGuid: (parameters: {
		body: LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel;
	}) => Observable<LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel>;
};

export const flowBuilderController = asks(
	(e: { apiClient: TAPIClient }): FlowBuilderController => ({
		FlowBuilder_GetFlowsFiltered: parameters => {
			const encoded = partial({ query: type({ companyIdFilter: number, flowTypeFilter: string }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/flow-builder`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(decodeAndMap(array(LELodasoftCommonModelsFlowBuilderFlowBuilderViewModelIO)));
		},

		FlowBuilder_InsertFlow: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsFlowBuilderFlowBuilderViewModelIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/flow-builder`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(decodeAndMap(LELodasoftCommonModelsFlowBuilderFlowBuilderViewModelIO));
		},

		FlowBuilder_GetFlow: flowId => {
			return e.apiClient
				.request({
					url: `/api/flow-builder/${encodeURIComponent(number.encode(flowId).toString())}`,
					method: 'GET',
				})
				.pipe(decodeAndMap(LELodasoftCommonModelsFlowBuilderFlowBuilderViewModelIO));
		},

		FlowBuilder_UpdateFlow: (flowId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsFlowBuilderFlowBuilderViewModelIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/flow-builder/${encodeURIComponent(number.encode(flowId).toString())}`,
					method: 'PUT',

					body: encoded.body,
				})
				.pipe(decodeAndMap(LELodasoftCommonModelsFlowBuilderFlowBuilderViewModelIO));
		},

		FlowBuilder_DeleteFlow: flowId => {
			return e.apiClient
				.request({
					url: `/api/flow-builder/${encodeURIComponent(number.encode(flowId).toString())}`,
					method: 'DELETE',
				})
				.pipe(decodeAndMap(unknownType));
		},

		FlowBuilder_GetFlowByGuid: flowguid => {
			return e.apiClient
				.request({
					url: `/api/flow-builder/by-guid/${encodeURIComponent(string.encode(flowguid).toString())}`,
					method: 'GET',
				})
				.pipe(decodeAndMap(LELodasoftCommonModelsFlowBuilderFlowBuilderViewModelIO));
		},

		FlowBuilder_UpdateFlowByGuid: (flowGuid, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsFlowBuilderFlowBuilderViewModelIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/flow-builder/by-guid/${encodeURIComponent(string.encode(flowGuid).toString())}`,
					method: 'PUT',

					body: encoded.body,
				})
				.pipe(decodeAndMap(LELodasoftCommonModelsFlowBuilderFlowBuilderViewModelIO));
		},

		FlowBuilder_DeleteFlowByGuid: flowGuid => {
			return e.apiClient
				.request({
					url: `/api/flow-builder/by-guid/${encodeURIComponent(string.encode(flowGuid).toString())}`,
					method: 'DELETE',
				})
				.pipe(decodeAndMap(unknownType));
		},

		FlowBuilder_InsertFlowByGuid: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsFlowBuilderFlowBuilderViewModelIO }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/flow-builder/by-guid`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(decodeAndMap(LELodasoftCommonModelsFlowBuilderFlowBuilderViewModelIO));
		},
	}),
);
