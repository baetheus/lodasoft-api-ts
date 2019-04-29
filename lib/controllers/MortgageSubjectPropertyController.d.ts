import { TAPIClient } from '../client/client';
import { LELodasoftCommonModelsMortgageAddressViewModel } from '../definitions/LELodasoftCommonModelsMortgageAddressViewModel';
import { LELodasoftCommonModelsMortgageSubjectPropertyViewModel } from '../definitions/LELodasoftCommonModelsMortgageSubjectPropertyViewModel';
import { Observable } from 'rxjs';
export declare type MortgageSubjectPropertyController = {
    /**
     * @param { number } subjectPropertyId undefined
     */
    readonly MortgageSubjectProperty_GetSubjectPropertyById: (subjectPropertyId: number) => Observable<LELodasoftCommonModelsMortgageSubjectPropertyViewModel>;
    /**
     * @param { number } subjectPropertyId undefined
     * @param { object } parameters
     */
    readonly MortgageSubjectProperty_UpdateSubjectProperty: (subjectPropertyId: number, parameters: {
        body: LELodasoftCommonModelsMortgageSubjectPropertyViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageSubjectPropertyViewModel>;
    /**
     * @param { number } subjectPropertyId undefined
     */
    readonly MortgageSubjectProperty_DeleteSubjectProperty: (subjectPropertyId: number) => Observable<unknown>;
    /**
     * @param { number } subjectPropertyId undefined
     * @param { object } parameters
     */
    readonly MortgageSubjectProperty_InsertAddress: (subjectPropertyId: number, parameters: {
        body: LELodasoftCommonModelsMortgageAddressViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageAddressViewModel>;
};
export declare const mortgageSubjectPropertyController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, MortgageSubjectPropertyController>;
