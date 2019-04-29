import { TAPIClient } from '../client/client';
import { LELodasoftCommonModelsAdminMessageViewModel } from '../definitions/LELodasoftCommonModelsAdminMessageViewModel';
import { LELodasoftCommonModelsMessageMessageViewModel } from '../definitions/LELodasoftCommonModelsMessageMessageViewModel';
import { Observable } from 'rxjs';
export declare type MessageController = {
    /**
     * Get Borrower Messages by Application.  Logged in user must be on the loan
     * @param { number } applicationId -
     */
    readonly Message_GetBorrowerMessages: (applicationId: number) => Observable<Array<LELodasoftCommonModelsAdminMessageViewModel>>;
    /**
     * Get internal Messages by Application.  Logged in user must be on the loan
     * @param { number } applicationId -
     */
    readonly Message_GetInternalMessages: (applicationId: number) => Observable<Array<LELodasoftCommonModelsAdminMessageViewModel>>;
    /**
     * Get Borrower Messages by Loan Doc Task. Logged in user must be on the loan
     * @param { number } loanDocTaskId -
     */
    readonly Message_GetBorrowerTaskMessages: (loanDocTaskId: number) => Observable<Array<LELodasoftCommonModelsAdminMessageViewModel>>;
    /**
     * Get internal Messages by Loan Doc Task. Logged in user must be on the loan
     * @param { number } loanDocTaskId -
     */
    readonly Message_GetInternalTaskMessages: (loanDocTaskId: number) => Observable<Array<LELodasoftCommonModelsAdminMessageViewModel>>;
    /**
     * Get count of messages since last reply
     * @param { number } applicationId -
     */
    readonly Message_GetMessageCountSinceLastReply: (applicationId: number) => Observable<number>;
    /**
     * Post message to internal user
     * @param { object } parameters
     */
    readonly Message_PostInternalMessage: (parameters: {
        body: LELodasoftCommonModelsAdminMessageViewModel;
    }) => Observable<LELodasoftCommonModelsAdminMessageViewModel>;
    /**
     * Post message to borrower
     * @param { object } parameters
     */
    readonly Message_PostBorrowerMessage: (parameters: {
        body: LELodasoftCommonModelsAdminMessageViewModel;
    }) => Observable<LELodasoftCommonModelsAdminMessageViewModel>;
    /**
     * Inserts a Message Into the Queue
     * @param { boolean } appendEmailSignature - should the email signature be appended to the email
     * @param { object } parameters
     */
    readonly Message_InsertLeadEmailIntoQueue: (appendEmailSignature: boolean, parameters: {
        body: LELodasoftCommonModelsMessageMessageViewModel;
    }) => Observable<unknown>;
    /**
     * Inserts a Message Into the Queue
     * @param { boolean } appendSMSSignature - should the SMS signature be appended to the email
     * @param { object } parameters
     */
    readonly Message_InsertLeadSMSIntoQueue: (appendSMSSignature: boolean, parameters: {
        body: LELodasoftCommonModelsMessageMessageViewModel;
    }) => Observable<unknown>;
    /**
     * Inserts a Message Into the Queue
     * @param { boolean } appendEmailSignature - should the email signature be appended to the email
     * @param { object } parameters
     */
    readonly Message_InsertLoanEmailIntoQueue: (appendEmailSignature: boolean, parameters: {
        body: LELodasoftCommonModelsMessageMessageViewModel;
    }) => Observable<unknown>;
    /**
     * Inserts a Message Into the Queue
     * @param { boolean } appendSMSSignature - should the SMS signature be appended to the SMS
     * @param { object } parameters
     */
    readonly Message_InsertLoanSMSIntoQueue: (appendSMSSignature: boolean, parameters: {
        body: LELodasoftCommonModelsMessageMessageViewModel;
    }) => Observable<unknown>;
};
export declare const messageController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, MessageController>;
