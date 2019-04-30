import { TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsEventsEventViewModel,
	LELodasoftCommonModelsEventsEventViewModelIO,
} from '../definitions/LELodasoftCommonModelsEventsEventViewModel';
import { decodeAndMap, unknownType } from '../utils/utils';
import { Option } from 'fp-ts/lib/Option';
import { asks } from 'fp-ts/lib/Reader';
import { partial, number, boolean, array, string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';
import { Observable } from 'rxjs';

export type EventsController = {
	/**
	 * @param { object } parameters
	 */
	readonly Events_PostNewEvent: (parameters: {
		body: LELodasoftCommonModelsEventsEventViewModel;
	}) => Observable<LELodasoftCommonModelsEventsEventViewModel>;

	/**
	 * @param { number } eventid undefined
	 * @param { number } delay undefined
	 * @param { boolean } allday undefined
	 */
	readonly Events_PostDropEvent: (eventid: number, delay: number, allday: boolean) => Observable<unknown>;

	/**
	 * @param { number } eventid undefined
	 * @param { number } delay undefined
	 * @param { boolean } addDays undefined
	 */
	readonly Events_PostResizeEvent: (eventid: number, delay: number, addDays: boolean) => Observable<unknown>;

	/**
	 * @param { object } parameters
	 */
	readonly Events_UpdateEvent: (parameters: {
		body: LELodasoftCommonModelsEventsEventViewModel;
	}) => Observable<LELodasoftCommonModelsEventsEventViewModel>;

	/**
	 * @param { number } eventId undefined
	 */
	readonly Events_DeleteEvent: (eventId: number) => Observable<unknown>;

	/**
	 * Get all events
	 * @param { object } [parameters]
	 */
	readonly Events_GetAllEvents: (parameters: {
		query?: { filterdate: Option<string>; applicationId: Option<number>; leadId: Option<number> };
	}) => Observable<Array<LELodasoftCommonModelsEventsEventViewModel>>;

	/**
	 * @param { number } companyId undefined
	 * @param { string } userId undefined
	 * @param { boolean } isAdmin undefined
	 */
	readonly Events_GetAllEventScheduling: (
		companyId: number,
		userId: string,
		isAdmin: boolean,
	) => Observable<Array<LELodasoftCommonModelsEventsEventViewModel>>;

	/**
	 * @param { object } parameters
	 */
	readonly Events_PostRemoveListEvent: (parameters: { body: Array<number> }) => Observable<boolean>;

	/**
	 * @param { string } userId undefined
	 */
	readonly Events_GetUserName: (userId: string) => Observable<string>;
};

export const eventsController = asks(
	(e: { API_CLIENT: TAPIClient; PREFIX: string }): EventsController => ({
		Events_PostNewEvent: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsEventsEventViewModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Events/NewEvent`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsEventsEventViewModelIO));
		},

		Events_PostDropEvent: (eventid, delay, allday) => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Events/DropEvent/${encodeURIComponent(
					number.encode(eventid).toString(),
				)}/${encodeURIComponent(number.encode(delay).toString())}/${encodeURIComponent(
					boolean.encode(allday).toString(),
				)}`,
				method: 'POST',
			}).pipe(decodeAndMap(unknownType));
		},

		Events_PostResizeEvent: (eventid, delay, addDays) => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Events/ResizeEvent/${encodeURIComponent(
					number.encode(eventid).toString(),
				)}/${encodeURIComponent(number.encode(delay).toString())}/${encodeURIComponent(
					boolean.encode(addDays).toString(),
				)}`,
				method: 'POST',
			}).pipe(decodeAndMap(unknownType));
		},

		Events_UpdateEvent: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsEventsEventViewModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Events/UpdateEvent`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsEventsEventViewModelIO));
		},

		Events_DeleteEvent: eventId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Events/DeleteEvent/${encodeURIComponent(number.encode(eventId).toString())}`,
				method: 'DELETE',
			}).pipe(decodeAndMap(unknownType));
		},

		Events_GetAllEvents: parameters => {
			const encoded = partial({
				query: type({
					filterdate: createOptionFromNullable(string, 'filterdate'),
					applicationId: createOptionFromNullable(number, 'applicationId'),
					leadId: createOptionFromNullable(number, 'leadId'),
				}),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Events/AllEvents`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsEventsEventViewModelIO)));
		},

		Events_GetAllEventScheduling: (companyId, userId, isAdmin) => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Events/AllEventScheduling/${encodeURIComponent(
					number.encode(companyId).toString(),
				)}/${encodeURIComponent(string.encode(userId).toString())}/${encodeURIComponent(
					boolean.encode(isAdmin).toString(),
				)}`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsEventsEventViewModelIO)));
		},

		Events_PostRemoveListEvent: parameters => {
			const encoded = partial({ body: array(number) }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Events/RemoveListEvent`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(boolean));
		},

		Events_GetUserName: userId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/Events/UserName/${encodeURIComponent(string.encode(userId).toString())}`,
				method: 'GET',
			}).pipe(decodeAndMap(string));
		},
	}),
);
