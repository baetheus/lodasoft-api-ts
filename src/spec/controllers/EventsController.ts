import { ResponseValiationError, TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsEventsEventViewModel,
	LELodasoftCommonModelsEventsEventViewModelIO,
} from '../definitions/LELodasoftCommonModelsEventsEventViewModel';
import { unknownType } from '../utils/utils';
import { fromEither, AsyncData } from '@nll/dux';
import { Option } from 'fp-ts/lib/Option';
import { asks } from 'fp-ts/lib/Reader';
import { partial, number, boolean, array, string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type EventsController = {
	/**
	 * @param { object } parameters
	 */
	readonly Events_PostNewEvent: (parameters: {
		body: LELodasoftCommonModelsEventsEventViewModel;
	}) => Observable<AsyncData<Error, LELodasoftCommonModelsEventsEventViewModel>>;

	/**
	 * @param { number } eventid undefined
	 * @param { number } delay undefined
	 * @param { boolean } allday undefined
	 */
	readonly Events_PostDropEvent: (
		eventid: number,
		delay: number,
		allday: boolean,
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } eventid undefined
	 * @param { number } delay undefined
	 * @param { boolean } addDays undefined
	 */
	readonly Events_PostResizeEvent: (
		eventid: number,
		delay: number,
		addDays: boolean,
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Events_UpdateEvent: (parameters: {
		body: LELodasoftCommonModelsEventsEventViewModel;
	}) => Observable<AsyncData<Error, LELodasoftCommonModelsEventsEventViewModel>>;

	/**
	 * @param { number } eventId undefined
	 */
	readonly Events_DeleteEvent: (eventId: number) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Events_GetAllEvents: (parameters: {
		query?: { filterdate: Option<string> };
	}) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsEventsEventViewModel>>>;

	/**
	 * @param { number } companyId undefined
	 * @param { string } userId undefined
	 * @param { boolean } isAdmin undefined
	 */
	readonly Events_GetAllEventScheduling: (
		companyId: number,
		userId: string,
		isAdmin: boolean,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsEventsEventViewModel>>>;

	/**
	 * @param { object } parameters
	 */
	readonly Events_PostRemoveListEvent: (parameters: { body: Array<number> }) => Observable<AsyncData<Error, boolean>>;

	/**
	 * @param { string } userId undefined
	 */
	readonly Events_GetUserName: (userId: string) => Observable<AsyncData<Error, string>>;
};

export const eventsController = asks(
	(e: { apiClient: TAPIClient }): EventsController => ({
		Events_PostNewEvent: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsEventsEventViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Events/NewEvent`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsEventsEventViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Events_PostDropEvent: (eventid, delay, allday) => {
			return e.apiClient
				.request({
					url: `/api/Events/DropEvent/${encodeURIComponent(
						number.encode(eventid).toString(),
					)}/${encodeURIComponent(number.encode(delay).toString())}/${encodeURIComponent(
						boolean.encode(allday).toString(),
					)}`,
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

		Events_PostResizeEvent: (eventid, delay, addDays) => {
			return e.apiClient
				.request({
					url: `/api/Events/ResizeEvent/${encodeURIComponent(
						number.encode(eventid).toString(),
					)}/${encodeURIComponent(number.encode(delay).toString())}/${encodeURIComponent(
						boolean.encode(addDays).toString(),
					)}`,
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

		Events_UpdateEvent: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsEventsEventViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Events/UpdateEvent`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsEventsEventViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Events_DeleteEvent: eventId => {
			return e.apiClient
				.request({
					url: `/api/Events/DeleteEvent/${encodeURIComponent(number.encode(eventId).toString())}`,
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

		Events_GetAllEvents: parameters => {
			const encoded = partial({ query: type({ filterdate: createOptionFromNullable(string) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/Events/AllEvents`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsEventsEventViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Events_GetAllEventScheduling: (companyId, userId, isAdmin) => {
			return e.apiClient
				.request({
					url: `/api/Events/AllEventScheduling/${encodeURIComponent(
						number.encode(companyId).toString(),
					)}/${encodeURIComponent(string.encode(userId).toString())}/${encodeURIComponent(
						boolean.encode(isAdmin).toString(),
					)}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsEventsEventViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Events_PostRemoveListEvent: parameters => {
			const encoded = partial({ body: array(number) }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/Events/RemoveListEvent`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value => fromEither(boolean.decode(value).mapLeft(ResponseValiationError.create))),
					),
				);
		},

		Events_GetUserName: userId => {
			return e.apiClient
				.request({
					url: `/api/Events/UserName/${encodeURIComponent(string.encode(userId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value => fromEither(string.decode(value).mapLeft(ResponseValiationError.create))),
					),
				);
		},
	}),
);
