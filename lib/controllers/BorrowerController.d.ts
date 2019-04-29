import { TAPIClient } from '../client/client';
import { LELodasoftApiModelsBorrowerApplicationViewModel } from '../definitions/LELodasoftApiModelsBorrowerApplicationViewModel';
import { LELodasoftApiModelsBorrowerBorrowerFull } from '../definitions/LELodasoftApiModelsBorrowerBorrowerFull';
import { LELodasoftApiModelsBorrowerNewApplicationRequest } from '../definitions/LELodasoftApiModelsBorrowerNewApplicationRequest';
import { LELodasoftApiModelsBorrowerUpsertApplicationInfoView } from '../definitions/LELodasoftApiModelsBorrowerUpsertApplicationInfoView';
import { LELodasoftCommonModelsLoanCreditViewModel } from '../definitions/LELodasoftCommonModelsLoanCreditViewModel';
import { LELodasoftDataAccessDbModelsAdminApplicationModel } from '../definitions/LELodasoftDataAccessDbModelsAdminApplicationModel';
import { LELodasoftDataAccessDbModelsAdminLoanDocTaskModel } from '../definitions/LELodasoftDataAccessDbModelsAdminLoanDocTaskModel';
import { LELodasoftDataAccessDbModelsConfigurationEmploymentInfoModel } from '../definitions/LELodasoftDataAccessDbModelsConfigurationEmploymentInfoModel';
import { LELodasoftDataAccessModelsAdminBorrowerBorrowerDto } from '../definitions/LELodasoftDataAccessModelsAdminBorrowerBorrowerDto';
import { Observable } from 'rxjs';
export declare type BorrowerController = {
    readonly Borrower_GetAllBorrower: () => Observable<Array<LELodasoftDataAccessModelsAdminBorrowerBorrowerDto>>;
    /**
     * @param { boolean } sendInvite undefined
     * @param { object } parameters
     */
    readonly Borrower_UpsertBorrower: (sendInvite: boolean, parameters: {
        body: LELodasoftApiModelsBorrowerBorrowerFull;
    }) => Observable<LELodasoftApiModelsBorrowerBorrowerFull>;
    /**
     * @param { number } borrowerId undefined
     */
    readonly Borrower_InviteBorrower: (borrowerId: number) => Observable<unknown>;
    /**
     * @param { number } borrowerId undefined
     * @param { boolean } isAdmin undefined
     */
    readonly Borrower_GetBorrower: (borrowerId: number, isAdmin: boolean) => Observable<LELodasoftApiModelsBorrowerBorrowerFull>;
    /**
     * @param { number } borrowerId undefined
     */
    readonly Borrower_DeleteBorrower: (borrowerId: number) => Observable<unknown>;
    /**
     * @param { number } borrowerId undefined
     * @param { boolean } shouldSendCoBorrInvite undefined
     * @param { object } parameters
     */
    readonly Borrower_AddNewApplication: (borrowerId: number, shouldSendCoBorrInvite: boolean, parameters: {
        body: LELodasoftApiModelsBorrowerNewApplicationRequest;
    }) => Observable<LELodasoftDataAccessDbModelsAdminApplicationModel>;
    /**
     * @param { number } borrowerId undefined
     */
    readonly Borrower_GetAllApplicationInfo: (borrowerId: number) => Observable<Array<LELodasoftApiModelsBorrowerApplicationViewModel>>;
    /**
     * @param { number } borrowerId undefined
     * @param { object } parameters
     */
    readonly Borrower_UpsertApplicationInfo: (borrowerId: number, parameters: {
        body: LELodasoftApiModelsBorrowerUpsertApplicationInfoView;
    }) => Observable<LELodasoftDataAccessDbModelsAdminLoanDocTaskModel>;
    /**
     * @param { number } borrowerId undefined
     */
    readonly Borrower_AllEmploymentInfo: (borrowerId: number) => Observable<Array<LELodasoftDataAccessDbModelsConfigurationEmploymentInfoModel>>;
    /**
     * @param { number } borrowerId undefined
     */
    readonly Borrower_AllCreditInfo: (borrowerId: number) => Observable<LELodasoftCommonModelsLoanCreditViewModel>;
};
export declare const borrowerController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, BorrowerController>;
