import { TAPIClient } from '../client/client';
import { LELodasoftCommonModelsAdminPrequalDetailViewModel } from '../definitions/LELodasoftCommonModelsAdminPrequalDetailViewModel';
import { Observable } from 'rxjs';
export declare type PrequalDetailController = {
    /**
     * @param { object } parameters
     */
    readonly PrequalDetail_GetPrequalDetail: (parameters: {
        query: {
            applicationId: number;
        };
    }) => Observable<LELodasoftCommonModelsAdminPrequalDetailViewModel>;
    /**
     * @param { object } parameters
     */
    readonly PrequalDetail_UpsertPrequalDetail: (parameters: {
        body: LELodasoftCommonModelsAdminPrequalDetailViewModel;
    }) => Observable<LELodasoftCommonModelsAdminPrequalDetailViewModel>;
};
export declare const prequalDetailController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, PrequalDetailController>;
