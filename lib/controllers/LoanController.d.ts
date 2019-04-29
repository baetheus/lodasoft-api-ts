import { TAPIClient } from '../client/client';
import { LELodasoftApiModelsBorrowerBorrowerCharacteristicView } from '../definitions/LELodasoftApiModelsBorrowerBorrowerCharacteristicView';
import { LELodasoftApiModelsBorrowerExternalContactView } from '../definitions/LELodasoftApiModelsBorrowerExternalContactView';
import { LELodasoftApiModelsBorrowerLoanCharacteristicView } from '../definitions/LELodasoftApiModelsBorrowerLoanCharacteristicView';
import { LELodasoftApiModelsBorrowerLoanDocDto } from '../definitions/LELodasoftApiModelsBorrowerLoanDocDto';
import { LELodasoftApiModelsBorrowerLoanInfo } from '../definitions/LELodasoftApiModelsBorrowerLoanInfo';
import { LELodasoftApiModelsBorrowerNewApplicationRequest } from '../definitions/LELodasoftApiModelsBorrowerNewApplicationRequest';
import { LELodasoftApiModelsBorrowerUpsertBorrowerCharacteristicsView } from '../definitions/LELodasoftApiModelsBorrowerUpsertBorrowerCharacteristicsView';
import { LELodasoftApiModelsBorrowerUpsertLoanCharacteristicView } from '../definitions/LELodasoftApiModelsBorrowerUpsertLoanCharacteristicView';
import { LELodasoftApiModelsSharedAddressView } from '../definitions/LELodasoftApiModelsSharedAddressView';
import { LELodasoftCommonModelsAdminActivityLogViewModel } from '../definitions/LELodasoftCommonModelsAdminActivityLogViewModel';
import { LELodasoftCommonModelsAdminAgentViewModel } from '../definitions/LELodasoftCommonModelsAdminAgentViewModel';
import { LELodasoftCommonModelsAdminTrackingViewModel } from '../definitions/LELodasoftCommonModelsAdminTrackingViewModel';
import { LELodasoftCommonModelsLoanDocFileViewModel } from '../definitions/LELodasoftCommonModelsLoanDocFileViewModel';
import { LELodasoftCommonModelsLoanLoanDocTaskViewModel } from '../definitions/LELodasoftCommonModelsLoanLoanDocTaskViewModel';
import { LELodasoftDataAccessDbModelsAdminApplicationModel } from '../definitions/LELodasoftDataAccessDbModelsAdminApplicationModel';
import { LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModel } from '../definitions/LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModel';
import { LELodasoftDataAccessDbModelsAdminInternalContactModel } from '../definitions/LELodasoftDataAccessDbModelsAdminInternalContactModel';
import { LELodasoftDataAccessDbModelsAdminLoanDocModel } from '../definitions/LELodasoftDataAccessDbModelsAdminLoanDocModel';
import { LELodasoftDataAccessModelsAdminBorrowerBorrowerDto } from '../definitions/LELodasoftDataAccessModelsAdminBorrowerBorrowerDto';
import { LELodasoftDataAccessModelsTaskCountModel } from '../definitions/LELodasoftDataAccessModelsTaskCountModel';
import { Observable } from 'rxjs';
export declare type LoanController = {
    /**
     * @param { number } loanId undefined
     */
    readonly Loan_GetBorrowersByLoanId: (loanId: number) => Observable<Array<LELodasoftDataAccessModelsAdminBorrowerBorrowerDto>>;
    /**
     * @param { number } loanId undefined
     */
    readonly Loan_GetBorrowerNotOwnedByLoan: (loanId: number) => Observable<Array<LELodasoftDataAccessModelsAdminBorrowerBorrowerDto>>;
    /**
     * @param { number } loanId undefined
     * @param { number } borrowerId undefined
     */
    readonly Loan_SelectBorrower: (loanId: number, borrowerId: number) => Observable<unknown>;
    /**
     * @param { number } loanId undefined
     * @param { number } borrowerId undefined
     */
    readonly Loan_GetFirstBorrowerAddress: (loanId: number, borrowerId: number) => Observable<unknown>;
    /**
     * @param { number } loanId undefined
     * @param { number } borrowerId undefined
     */
    readonly Loan_SetBorrowerAsPrimaryOnLoan: (loanId: number, borrowerId: number) => Observable<unknown>;
    /**
     * @param { number } loanId undefined
     * @param { number } borrowerId undefined
     * @param { boolean } allow undefined
     */
    readonly Loan_SetAllowPrimaryToStatisfyFlagOnLoan: (loanId: number, borrowerId: number, allow: boolean) => Observable<unknown>;
    /**
     * @param { number } loanId undefined
     * @param { number } borrowerId undefined
     */
    readonly Loan_RemoveBorrowerFromLoan: (loanId: number, borrowerId: number) => Observable<unknown>;
    /**
     * @param { number } loanId undefined
     */
    readonly Loan_AllExternalContacts: (loanId: number) => Observable<Array<LELodasoftApiModelsBorrowerExternalContactView>>;
    /**
     * @param { number } loanId undefined
     */
    readonly Loan_AllRemainExternalContacts: (loanId: number) => Observable<Array<LELodasoftCommonModelsAdminAgentViewModel>>;
    /**
     * @param { number } loanId undefined
     * @param { number } agentId undefined
     * @param { object } parameters
     */
    readonly Loan_SelectAgentForExternalContact: (loanId: number, agentId: number, parameters: {
        query: {
            agentTypeId: number;
        };
    }) => Observable<boolean>;
    /**
     * @param { number } loanId undefined
     * @param { number } agentId undefined
     */
    readonly Loan_RemoveAgentFromExternalContact: (loanId: number, agentId: number) => Observable<boolean>;
    /**
     * @param { number } loanId undefined
     */
    readonly Loan_InternalContacts: (loanId: number) => Observable<unknown>;
    /**
     * @param { number } loanId undefined
     * @param { object } parameters
     */
    readonly Loan_UpsertInternalContacts: (loanId: number, parameters: {
        body: Array<LELodasoftDataAccessDbModelsAdminInternalContactModel>;
    }) => Observable<Array<LELodasoftDataAccessDbModelsAdminInternalContactModel>>;
    /**
     * @param { number } loanId undefined
     */
    readonly Loan_CurrentLoanInfo: (loanId: number) => Observable<LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModel>;
    /**
     * @param { number } loanId undefined
     * @param { object } parameters
     */
    readonly Loan_UpsertCurrentLoanInfo: (loanId: number, parameters: {
        body: LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModel;
    }) => Observable<LELodasoftDataAccessDbModelsAdminCurrentLoanInfoModel>;
    /**
     * @param { number } loanId undefined
     */
    readonly Loan_GetLoanCharacteristic: (loanId: number) => Observable<LELodasoftApiModelsBorrowerLoanCharacteristicView>;
    /**
     * @param { number } loanId undefined
     * @param { object } parameters
     */
    readonly Loan_UpsertLoanCharacteristicPreview: (loanId: number, parameters: {
        body: LELodasoftApiModelsBorrowerLoanCharacteristicView;
    }) => Observable<Array<LELodasoftCommonModelsLoanLoanDocTaskViewModel>>;
    /**
     * @param { number } loanId undefined
     * @param { object } parameters
     */
    readonly Loan_UpsertLoanCharacteristic: (loanId: number, parameters: {
        body: LELodasoftApiModelsBorrowerUpsertLoanCharacteristicView;
    }) => Observable<unknown>;
    /**
     * @param { number } loanId undefined
     */
    readonly Loan_GetBorrowerCharacteristics: (loanId: number) => Observable<Array<LELodasoftApiModelsBorrowerBorrowerCharacteristicView>>;
    /**
     * @param { number } loanId undefined
     * @param { object } parameters
     */
    readonly Loan_UpsertBorrowerCharacteristicsPreview: (loanId: number, parameters: {
        body: Array<LELodasoftApiModelsBorrowerBorrowerCharacteristicView>;
    }) => Observable<Array<LELodasoftCommonModelsLoanLoanDocTaskViewModel>>;
    /**
     * @param { number } loanId undefined
     * @param { object } parameters
     */
    readonly Loan_UpsertBorrowerCharacteristics: (loanId: number, parameters: {
        body: LELodasoftApiModelsBorrowerUpsertBorrowerCharacteristicsView;
    }) => Observable<Array<LELodasoftApiModelsBorrowerBorrowerCharacteristicView>>;
    /**
     * @param { number } loanId undefined
     */
    readonly Loan_GetAllLoanDocs: (loanId: number) => Observable<Array<LELodasoftDataAccessDbModelsAdminLoanDocModel>>;
    /**
     * @param { number } loanId undefined
     * @param { object } parameters
     */
    readonly Loan_UpsertLoanDoc: (loanId: number, parameters: {
        body: LELodasoftDataAccessDbModelsAdminLoanDocModel;
    }) => Observable<LELodasoftApiModelsBorrowerLoanDocDto>;
    /**
     * @param { number } loanId undefined
     */
    readonly Loan_GetAllDocFiles: (loanId: number) => Observable<Array<LELodasoftCommonModelsLoanDocFileViewModel>>;
    /**
     * @param { number } loanId undefined
     */
    readonly Loan_GetTaskCountByApplicationID: (loanId: number) => Observable<LELodasoftDataAccessModelsTaskCountModel>;
    /**
     * @param { number } loanId undefined
     */
    readonly Loan_GetAllLoanDocTaskConditions: (loanId: number) => Observable<Array<LELodasoftCommonModelsLoanLoanDocTaskViewModel>>;
    /**
     * @param { number } loanId undefined
     * @param { object } parameters
     */
    readonly Loan_SaveFirstLoanStatusByLoanPurpose: (loanId: number, parameters: {
        body: Array<LELodasoftCommonModelsLoanLoanDocTaskViewModel>;
    }) => Observable<unknown>;
    /**
     * @param { number } loanId undefined
     * @param { number } loanStatusId undefined
     * @param { object } parameters
     */
    readonly Loan_UpdateLoanStatus: (loanId: number, loanStatusId: number, parameters: {
        body: Array<LELodasoftCommonModelsLoanLoanDocTaskViewModel>;
    }) => Observable<unknown>;
    /**
     * @param { number } loanId undefined
     */
    readonly Loan_ViewLoanStatusHistory: (loanId: number) => Observable<Array<LELodasoftCommonModelsAdminTrackingViewModel>>;
    /**
     * @param { number } applicationId undefined
     */
    readonly Loan_ViewLoanStatusHistory1: (applicationId: number) => Observable<Array<LELodasoftCommonModelsAdminActivityLogViewModel>>;
    /**
     * @param { number } loanId undefined
     * @param { object } parameters
     */
    readonly Loan_SaveLoanInfo: (loanId: number, parameters: {
        body: LELodasoftApiModelsBorrowerLoanInfo;
    }) => Observable<unknown>;
    /**
     * @param { number } loanId undefined
     */
    readonly Loan_GetLoanInfo: (loanId: number) => Observable<LELodasoftApiModelsBorrowerNewApplicationRequest>;
    /**
     * @param { object } parameters
     */
    readonly Loan_DeActivateLoan: (parameters: {
        query: {
            applicationId: number;
        };
    }) => Observable<unknown>;
    /**
     * @param { number } loanId undefined
     * @param { object } parameters
     */
    readonly Loan_UpsertSubjectProperty: (loanId: number, parameters: {
        body: LELodasoftApiModelsSharedAddressView;
    }) => Observable<LELodasoftDataAccessDbModelsAdminApplicationModel>;
    /**
     * Add Online Application Task for Application
     * @param { number } loanId - loan / application id
     */
    readonly Loan_AddOnlineApplicationTask: (loanId: number) => Observable<LELodasoftCommonModelsLoanLoanDocTaskViewModel>;
    /**
     * Check Online Application Task for Application
     * @param { number } loanId - loan / application id
     */
    readonly Loan_CheckForOnlineApplicationTask: (loanId: number) => Observable<LELodasoftCommonModelsLoanLoanDocTaskViewModel>;
};
export declare const loanController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, LoanController>;
