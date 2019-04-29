import { TAPIClient } from '../client/client';
import { LELodasoftApiModelsZipcodeLookupResult } from '../definitions/LELodasoftApiModelsZipcodeLookupResult';
import { Observable } from 'rxjs';
export declare type ZipcodeController = {
    /**
     * Lookup a Zip Code
     * @param { string } zip -
     */
    readonly Zipcode_ZipcodeLookup: (zip: string) => Observable<Array<LELodasoftApiModelsZipcodeLookupResult>>;
    /**
     * Lookup a Zip Code
     * @param { string } zip -
     */
    readonly Zipcode_ZipcodeLookuAnonymousp: (zip: string) => Observable<Array<LELodasoftApiModelsZipcodeLookupResult>>;
    /**
     * @param { string } toUserId undefined
     * @param { object } parameters
     */
    readonly Zipcode_Send: (toUserId: string, parameters: {
        query: {
            message: string;
        };
    }) => Observable<unknown>;
};
export declare const zipcodeController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, ZipcodeController>;
