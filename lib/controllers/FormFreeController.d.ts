import { TAPIClient } from '../client/client';
import { LELodasoftCommonModelsThirdPartyFormFreeHistoryViewModel } from '../definitions/LELodasoftCommonModelsThirdPartyFormFreeHistoryViewModel';
import { LELodasoftThirdPartyFormFreeModelsLiteAccountInfo } from '../definitions/LELodasoftThirdPartyFormFreeModelsLiteAccountInfo';
import { Option } from 'fp-ts/lib/Option';
import { Observable } from 'rxjs';
export declare type FormFreeController = {
    /**
     * Get form free history by filters
     * @param { object } [parameters]
     */
    readonly FormFree_GetFormFreeHistory: (parameters: {
        query?: {
            loanId: Option<number>;
            leadId: Option<number>;
            borrowerId: Option<number>;
        };
    }) => Observable<Array<LELodasoftCommonModelsThirdPartyFormFreeHistoryViewModel>>;
    /**
     * Retrieves Account info for VOA transaction id
     * @param { string } transactionId -
     */
    readonly FormFree_GetLiteAccountInfo: (transactionId: string) => Observable<Array<LELodasoftThirdPartyFormFreeModelsLiteAccountInfo>>;
    /**
     * Upgrade the VOA for transaction id
     * @param { string } transactionId -
     */
    readonly FormFree_UpgradeVoaRequest: (transactionId: string) => Observable<LELodasoftCommonModelsThirdPartyFormFreeHistoryViewModel>;
    /**
     * Link history to borrower by Id
     * @param { number } historyId - id of the form free history record
     * @param { number } borrowerId - id of the borrower to link to the record
     */
    readonly FormFree_LinkHistoryToBorrower: (historyId: number, borrowerId: number) => Observable<Array<LELodasoftCommonModelsThirdPartyFormFreeHistoryViewModel>>;
    /**
     * Invite the borrower to complete VOA
     * @param { number } loanId - id of the loan
     * @param { number } borrowerId - id of the borrower to invite
     * @param { object } [parameters]
     */
    readonly FormFree_InviteBorrower: (loanId: number, borrowerId: number, parameters: {
        query?: {
            requestType: Option<string>;
        };
    }) => Observable<unknown>;
};
export declare const formFreeController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, FormFreeController>;
