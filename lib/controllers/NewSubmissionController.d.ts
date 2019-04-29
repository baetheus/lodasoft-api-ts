import { TAPIClient } from '../client/client';
import { LELodasoftApiModelsMortgageLosLoanSearchResponseModel } from '../definitions/LELodasoftApiModelsMortgageLosLoanSearchResponseModel';
import { LELodasoftApiModelsMortgageParseDuViewModel } from '../definitions/LELodasoftApiModelsMortgageParseDuViewModel';
import { LELodasoftApiModelsMortgageProcessDuResponseModel } from '../definitions/LELodasoftApiModelsMortgageProcessDuResponseModel';
import { LELodasoftApiModelsMortgageProcessDuViewModel } from '../definitions/LELodasoftApiModelsMortgageProcessDuViewModel';
import { Option } from 'fp-ts/lib/Option';
import { Observable } from 'rxjs';
export declare type NewSubmissionController = {
    /**
     * @param { number } credentialId undefined
     * @param { object } [parameters]
     */
    readonly NewSubmission_LosLoanSearch: (credentialId: number, parameters: {
        query?: {
            loanNumber: Option<string>;
            borrowerFirstName: Option<string>;
            borrowerLastName: Option<string>;
        };
    }) => Observable<LELodasoftApiModelsMortgageLosLoanSearchResponseModel>;
    /**
     * @param { number } credentialId undefined
     * @param { string } losIdentifier undefined
     */
    readonly NewSubmission_ImportFromLos: (credentialId: number, losIdentifier: string) => Observable<LELodasoftApiModelsMortgageParseDuViewModel>;
    /**
     * @param { number } credentialId undefined
     * @param { number } applicationId undefined
     */
    readonly NewSubmission_CreateMortgageInIntegratedLos: (credentialId: number, applicationId: number) => Observable<unknown>;
    /**
     * @param { number } applicationId undefined
     * @param { string } credentialId undefined
     */
    readonly NewSubmission_UpdateMortgageFromIntegratedLos: (applicationId: number, credentialId: string) => Observable<unknown>;
    readonly NewSubmission_ParseDu: () => Observable<LELodasoftApiModelsMortgageParseDuViewModel>;
    /**
     * @param { object } parameters
     */
    readonly NewSubmission_ProcessSubmission: (parameters: {
        body: LELodasoftApiModelsMortgageProcessDuViewModel;
    }) => Observable<LELodasoftApiModelsMortgageProcessDuResponseModel>;
};
export declare const newSubmissionController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, NewSubmissionController>;
