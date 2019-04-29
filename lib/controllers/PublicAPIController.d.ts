import { Observable } from 'rxjs';
import { TAPIClient } from '../client/client';
import { LELodasoftCommonModelsLeadsProviderModelsBestReferralLead } from '../definitions/LELodasoftCommonModelsLeadsProviderModelsBestReferralLead';
import { LELodasoftCommonModelsLeadsProviderModelsLodasoftLead } from '../definitions/LELodasoftCommonModelsLeadsProviderModelsLodasoftLead';
import { LELodasoftCommonModelsLeadsProviderModelsZillowLead } from '../definitions/LELodasoftCommonModelsLeadsProviderModelsZillowLead';
import { LELodasoftCommonModelsPublicApiUserViewModel } from '../definitions/LELodasoftCommonModelsPublicApiUserViewModel';
export declare type PublicAPIController = {
    /**
     * @param { string } companyGuid undefined
     */
    readonly PublicAPI_GetUserListPrimaryRole: (companyGuid: string) => Observable<Array<LELodasoftCommonModelsPublicApiUserViewModel>>;
    /**
     * @param { string } companyGuid undefined
     */
    readonly PublicAPI_GetUserList: (companyGuid: string) => Observable<{
        [key: string]: string;
    }>;
    /**
     * @param { string } companyGuid undefined
     */
    readonly PublicAPI_GetLoanPurposes: (companyGuid: string) => Observable<{
        [key: string]: string;
    }>;
    /**
     * @param { string } companyGuid undefined
     * @param { object } parameters
     */
    readonly PublicAPI_PostLodasoftLead: (companyGuid: string, parameters: {
        body: LELodasoftCommonModelsLeadsProviderModelsLodasoftLead;
    }) => Observable<unknown>;
    /**
     * @param { string } companyGuid undefined
     * @param { string } userId undefined
     * @param { object } parameters
     */
    readonly PublicAPI_PostBestReferralLead: (companyGuid: string, userId: string, parameters: {
        body: LELodasoftCommonModelsLeadsProviderModelsBestReferralLead;
    }) => Observable<unknown>;
    /**
     * @param { string } companyGuid undefined
     * @param { string } userId undefined
     * @param { object } parameters
     */
    readonly PublicAPI_PostZillowLead: (companyGuid: string, userId: string, parameters: {
        body: LELodasoftCommonModelsLeadsProviderModelsZillowLead;
    }) => Observable<unknown>;
    /**
     * @param { string } companyGuid undefined
     * @param { string } userId undefined
     */
    readonly PublicAPI_PostLendingTreeLeadAsync: (companyGuid: string, userId: string) => Observable<unknown>;
};
export declare const publicAPIController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, PublicAPIController>;
