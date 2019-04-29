import { TAPIClient } from '../client/client';
import { LELodasoftCommonModelsAdminAlertViewModel } from '../definitions/LELodasoftCommonModelsAdminAlertViewModel';
import { LELodasoftCommonModelsAdminNotificationViewModel } from '../definitions/LELodasoftCommonModelsAdminNotificationViewModel';
import { LELodasoftDataAccessDbModelsAdminAlertModel } from '../definitions/LELodasoftDataAccessDbModelsAdminAlertModel';
import { Observable } from 'rxjs';
export declare type CommonController = {
    readonly Common_InsertDocExpire: () => Observable<unknown>;
    readonly Common_GetTaskStatusAlert: () => Observable<Array<LELodasoftDataAccessDbModelsAdminAlertModel>>;
    /**
     * @param { string } alertTypeId undefined
     */
    readonly Common_GetAlerts: (alertTypeId: string) => Observable<Array<LELodasoftCommonModelsAdminAlertViewModel>>;
    /**
     * @param { number } alertId undefined
     */
    readonly Common_ClearAlert: (alertId: number) => Observable<unknown>;
    /**
     * @param { string } toUserId undefined
     * @param { object } parameters
     */
    readonly Common_SendAnonymous: (toUserId: string, parameters: {
        body: LELodasoftCommonModelsAdminNotificationViewModel;
    }) => Observable<unknown>;
};
export declare const commonController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, CommonController>;
