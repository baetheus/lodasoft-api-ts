import { TAPIClient } from '../client/client';
import { Observable } from 'rxjs';
export declare type IntegrationHistoryController = {
    /**
     * @param { number } integrationHistoryId undefined
     */
    readonly IntegrationHistory_GetDocument: (integrationHistoryId: number) => Observable<unknown>;
};
export declare const integrationHistoryController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, IntegrationHistoryController>;
