import { TAPIClient } from '../client/client';
import { LELodasoftCommonModelsMortgageAddressViewModel } from '../definitions/LELodasoftCommonModelsMortgageAddressViewModel';
import { LELodasoftCommonModelsMortgageEmploymentViewModel } from '../definitions/LELodasoftCommonModelsMortgageEmploymentViewModel';
import { Observable } from 'rxjs';
export declare type MortgageEmploymentController = {
    /**
     * @param { number } employmentId undefined
     */
    readonly MortgageEmployment_GetEmploymentById: (employmentId: number) => Observable<LELodasoftCommonModelsMortgageEmploymentViewModel>;
    /**
     * @param { number } employmentId undefined
     * @param { object } parameters
     */
    readonly MortgageEmployment_UpdateEmployment: (employmentId: number, parameters: {
        body: LELodasoftCommonModelsMortgageEmploymentViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageEmploymentViewModel>;
    /**
     * @param { number } employmentId undefined
     */
    readonly MortgageEmployment_DeleteEmployment: (employmentId: number) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly MortgageEmployment_InsertEmployment: (parameters: {
        body: LELodasoftCommonModelsMortgageEmploymentViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageEmploymentViewModel>;
    /**
     * @param { number } employmentId undefined
     * @param { object } parameters
     */
    readonly MortgageEmployment_InsertAddress: (employmentId: number, parameters: {
        body: LELodasoftCommonModelsMortgageAddressViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageAddressViewModel>;
};
export declare const mortgageEmploymentController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, MortgageEmploymentController>;
