import { TAPIClient } from '../client/client';
import { LELodasoftCommonModelsMortgageAddressViewModel } from '../definitions/LELodasoftCommonModelsMortgageAddressViewModel';
import { LELodasoftCommonModelsMortgageAssetViewModel } from '../definitions/LELodasoftCommonModelsMortgageAssetViewModel';
import { Observable } from 'rxjs';
export declare type MortgageAssetController = {
    /**
     * @param { number } assetId undefined
     */
    readonly MortgageAsset_GetAssetById: (assetId: number) => Observable<LELodasoftCommonModelsMortgageAssetViewModel>;
    /**
     * @param { number } assetId undefined
     * @param { object } parameters
     */
    readonly MortgageAsset_UpdateAsset: (assetId: number, parameters: {
        body: LELodasoftCommonModelsMortgageAssetViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageAssetViewModel>;
    /**
     * @param { number } assetId undefined
     */
    readonly MortgageAsset_DeleteAsset: (assetId: number) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly MortgageAsset_InsertAsset: (parameters: {
        body: LELodasoftCommonModelsMortgageAssetViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageAssetViewModel>;
    /**
     * @param { number } assetId undefined
     * @param { object } parameters
     */
    readonly MortgageAsset_InsertAddress: (assetId: number, parameters: {
        body: LELodasoftCommonModelsMortgageAddressViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageAddressViewModel>;
};
export declare const mortgageAssetController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, MortgageAssetController>;
