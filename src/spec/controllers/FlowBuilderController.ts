import { AsyncData, fromEither } from '@nll/dux';
import { asks } from 'fp-ts/lib/Reader';
import { array, number, partial, string, type } from 'io-ts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ResponseValiationError, TAPIClient } from '../client/client';
import {
  LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel,
  LELodasoftCommonModelsFlowBuilderFlowBuilderViewModelIO,
} from '../definitions/LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel';
import { unknownType } from '../utils/utils';

export type FlowBuilderController = {
	/**
	 * @param { object } parameters
	 */
	readonly FlowBuilder_GetFlowsFiltered: (parameters: {
		query: { companyIdFilter: number; flowTypeFilter: string };
	}) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel>>>;

	/**
	 * @param { object } parameters
	 */
	readonly FlowBuilder_InsertFlow: (parameters: {
		body: LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel;
	}) => Observable<AsyncData<Error, LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel>>;

	/**
	 * @param { number } flowId undefined
	 */
	readonly FlowBuilder_GetFlow: (
		flowId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel>>;

	/**
	 * @param { number } flowId undefined
	 * @param { object } parameters
	 */
	readonly FlowBuilder_UpdateFlow: (
		flowId: number,
		parameters: { body: LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel>>;

	/**
	 * @param { number } flowId undefined
	 */
	readonly FlowBuilder_DeleteFlow: (flowId: number) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { string } flowGuid undefined
	 * @param { object } parameters
	 */
	readonly FlowBuilder_UpdateFlowByGuid: (
		flowGuid: string,
		parameters: { body: LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel>>;

	/**
	 * @param { string } flowGuid undefined
	 */
	readonly FlowBuilder_DeleteFlowByGuid: (flowGuid: string) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly FlowBuilder_InsertFlowByGuid: (parameters: {
		body: LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel;
	}) => Observable<AsyncData<Error, LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel>>;
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
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsFlowBuilderFlowBuilderViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
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
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsFlowBuilderFlowBuilderViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		FlowBuilder_GetFlow: flowId => {
			return e.apiClient
				.request({
					url: `/api/flow-builder/${encodeURIComponent(number.encode(flowId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsFlowBuilderFlowBuilderViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
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
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsFlowBuilderFlowBuilderViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		FlowBuilder_DeleteFlow: flowId => {
			return e.apiClient
				.request({
					url: `/api/flow-builder/${encodeURIComponent(number.encode(flowId).toString())}`,
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
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsFlowBuilderFlowBuilderViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		FlowBuilder_DeleteFlowByGuid: flowGuid => {
			return e.apiClient
				.request({
					url: `/api/flow-builder/by-guid/${encodeURIComponent(string.encode(flowGuid).toString())}`,
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
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsFlowBuilderFlowBuilderViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},
	}),
);
