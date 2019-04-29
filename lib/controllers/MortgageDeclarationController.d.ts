import { TAPIClient } from '../client/client';
import { LELodasoftCommonModelsMortgageDeclarationViewModel } from '../definitions/LELodasoftCommonModelsMortgageDeclarationViewModel';
import { Observable } from 'rxjs';
export declare type MortgageDeclarationController = {
    /**
     * @param { number } declarationId undefined
     */
    readonly MortgageDeclaration_GetDeclarationById: (declarationId: number) => Observable<LELodasoftCommonModelsMortgageDeclarationViewModel>;
    /**
     * @param { number } declarationId undefined
     * @param { object } parameters
     */
    readonly MortgageDeclaration_UpdateDeclaration: (declarationId: number, parameters: {
        body: LELodasoftCommonModelsMortgageDeclarationViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageDeclarationViewModel>;
    /**
     * @param { number } declarationId undefined
     */
    readonly MortgageDeclaration_DeleteDeclaration: (declarationId: number) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly MortgageDeclaration_InsertDeclaration: (parameters: {
        body: LELodasoftCommonModelsMortgageDeclarationViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageDeclarationViewModel>;
};
export declare const mortgageDeclarationController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, MortgageDeclarationController>;
