import { TAPIClient } from '../client/client';
import { LELodasoftCommonModelsEventsEventViewModel } from '../definitions/LELodasoftCommonModelsEventsEventViewModel';
import { Option } from 'fp-ts/lib/Option';
import { Observable } from 'rxjs';
export declare type EventsController = {
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
        query?: {
            filterdate: Option<string>;
            applicationId: Option<number>;
            leadId: Option<number>;
        };
    }) => Observable<Array<LELodasoftCommonModelsEventsEventViewModel>>;
    /**
     * @param { number } companyId undefined
     * @param { string } userId undefined
     * @param { boolean } isAdmin undefined
     */
    readonly Events_GetAllEventScheduling: (companyId: number, userId: string, isAdmin: boolean) => Observable<Array<LELodasoftCommonModelsEventsEventViewModel>>;
    /**
     * @param { object } parameters
     */
    readonly Events_PostRemoveListEvent: (parameters: {
        body: Array<number>;
    }) => Observable<boolean>;
    /**
     * @param { string } userId undefined
     */
    readonly Events_GetUserName: (userId: string) => Observable<string>;
};
export declare const eventsController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, EventsController>;
