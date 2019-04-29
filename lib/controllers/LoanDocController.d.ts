import { TAPIClient } from '../client/client';
import { LELodasoftCommonModelsLoanMergeDocFilesRequest } from '../definitions/LELodasoftCommonModelsLoanMergeDocFilesRequest';
import { LELodasoftDataAccessDbModelsAdminDocFileModel } from '../definitions/LELodasoftDataAccessDbModelsAdminDocFileModel';
import { LELodasoftDataAccessDbModelsAdminLoanDocModel } from '../definitions/LELodasoftDataAccessDbModelsAdminLoanDocModel';
import { LELodasoftDataAccessModelsAdminBorrowerFileDto } from '../definitions/LELodasoftDataAccessModelsAdminBorrowerFileDto';
import { Observable } from 'rxjs';
export declare type LoanDocController = {
    /**
     * Get a loan document
     * @param { number } loanDocId -
     */
    readonly LoanDoc_Get: (loanDocId: number) => Observable<LELodasoftDataAccessDbModelsAdminLoanDocModel>;
    /**
     * Change the document type for a loan document
     * @param { number } loanDocId -
     * @param { number } documentTypeId -
     */
    readonly LoanDoc_ChangeDocumentTypeOfLoanDoc: (loanDocId: number, documentTypeId: number) => Observable<void>;
    /**
     * Delete a loan document
     * @param { number } loanDocId -
     */
    readonly LoanDoc_RemoveLoanDoc: (loanDocId: number) => Observable<void>;
    /**
     * Update or Insert a doc file to a Loan Document
     * @param { number } loanDocId -
     * @param { object } parameters
     */
    readonly LoanDoc_UpsertFile: (loanDocId: number, parameters: {
        body: LELodasoftDataAccessDbModelsAdminDocFileModel;
    }) => Observable<LELodasoftDataAccessModelsAdminBorrowerFileDto>;
    /**
     * Merge doc files into a single file for a Loan Document
     * @param { number } loanDocId -
     * @param { object } parameters
     */
    readonly LoanDoc_MergeDocFiles: (loanDocId: number, parameters: {
        body: LELodasoftCommonModelsLoanMergeDocFilesRequest;
    }) => Observable<void>;
};
export declare const loanDocController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, LoanDocController>;
