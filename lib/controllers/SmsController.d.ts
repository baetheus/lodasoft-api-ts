import { TAPIClient } from '../client/client';
import { LELodasoftCommonModelsConfigurationSendTestSmsRequest } from '../definitions/LELodasoftCommonModelsConfigurationSendTestSmsRequest';
import { LELodasoftCommonModelsMessageSendSmsBetweenModel } from '../definitions/LELodasoftCommonModelsMessageSendSmsBetweenModel';
import { LELodasoftCommonModelsMessageSendSmsViewModel } from '../definitions/LELodasoftCommonModelsMessageSendSmsViewModel';
import { LELodasoftCommonModelsMessageSmsHistoryViewModel } from '../definitions/LELodasoftCommonModelsMessageSmsHistoryViewModel';
import { LELodasoftCommonModelsMessageSmsSearchBorrowerRequest } from '../definitions/LELodasoftCommonModelsMessageSmsSearchBorrowerRequest';
import { LELodasoftDataAccessModelsAdminBorrowerBorrowerDto } from '../definitions/LELodasoftDataAccessModelsAdminBorrowerBorrowerDto';
import { Observable } from 'rxjs';
export declare type SmsController = {
    /**
     * @param { object } parameters
     */
    readonly Sms_SendTestSms: (parameters: {
        body: LELodasoftCommonModelsConfigurationSendTestSmsRequest;
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Sms_SendSms: (parameters: {
        body: LELodasoftCommonModelsMessageSendSmsViewModel;
    }) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Sms_GetBetween: (parameters: {
        body: LELodasoftCommonModelsMessageSendSmsBetweenModel;
    }) => Observable<Array<LELodasoftCommonModelsMessageSmsHistoryViewModel>>;
    /**
     * @param { object } parameters
     */
    readonly Sms_GetBorrowerInfo: (parameters: {
        body: LELodasoftCommonModelsMessageSmsSearchBorrowerRequest;
    }) => Observable<Array<LELodasoftDataAccessModelsAdminBorrowerBorrowerDto>>;
    /**
     * @param { string } companyGuid undefined
     */
    readonly Sms_ReceiveSms: (companyGuid: string) => Observable<unknown>;
};
export declare const smsController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, SmsController>;
