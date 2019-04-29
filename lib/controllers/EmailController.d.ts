import { TAPIClient } from '../client/client';
import { LELodasoftCommonModelsMessageMessageHistoryViewModel } from '../definitions/LELodasoftCommonModelsMessageMessageHistoryViewModel';
import { LELodasoftCommonModelsMessageMessageViewModel } from '../definitions/LELodasoftCommonModelsMessageMessageViewModel';
import { LELodasoftDataAccessDbModelsSharedEmailServiceModel } from '../definitions/LELodasoftDataAccessDbModelsSharedEmailServiceModel';
import { Observable } from 'rxjs';
export declare type EmailController = {
    /**
     * @param { object } parameters
     */
    readonly Email_SendTestEmail: (parameters: {
        body: LELodasoftDataAccessDbModelsSharedEmailServiceModel;
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Email_AutoDiscoverExchangeUrl: (parameters: {
        body: LELodasoftDataAccessDbModelsSharedEmailServiceModel;
    }) => Observable<string>;
    /**
     * @param { number } borrowerId undefined
     */
    readonly Email_GetEmailsSentToBorrower: (borrowerId: number) => Observable<Array<LELodasoftCommonModelsMessageMessageHistoryViewModel>>;
    /**
     * @param { number } appId undefined
     */
    readonly Email_GetEmailsSentForApp: (appId: number) => Observable<Array<LELodasoftCommonModelsMessageMessageHistoryViewModel>>;
    /**
     * @param { number } leadId undefined
     */
    readonly Email_GetEmailsSentForLead: (leadId: number) => Observable<Array<LELodasoftCommonModelsMessageMessageHistoryViewModel>>;
    /**
     * @param { number } agentId undefined
     */
    readonly Email_GetEmailsSentToAgent: (agentId: number) => Observable<Array<LELodasoftCommonModelsMessageMessageHistoryViewModel>>;
    /**
     * @param { number } messageId undefined
     */
    readonly Email_SetEmailPriorityToRetry: (messageId: number) => Observable<LELodasoftCommonModelsMessageMessageViewModel>;
    readonly Email_GetFailedEmailsSentByUser: () => Observable<Array<LELodasoftCommonModelsMessageMessageHistoryViewModel>>;
};
export declare const emailController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, EmailController>;
