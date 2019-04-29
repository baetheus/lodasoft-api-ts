import { TAPIClient } from '../client/client';
import { LELodasoftApiControllersLogControllerLogModel } from '../definitions/LELodasoftApiControllersLogControllerLogModel';
import { Observable } from 'rxjs';
export declare type LogController = {
    /**
     * @param { object } parameters
     */
    readonly Log_Log: (parameters: {
        body: Array<LELodasoftApiControllersLogControllerLogModel>;
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Log_LogBatchAuthed: (parameters: {
        body: Array<LELodasoftApiControllersLogControllerLogModel>;
    }) => Observable<unknown>;
};
export declare const logController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, LogController>;
