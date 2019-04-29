import { TAPIClient } from '../client/client';
import { LELodasoftThirdPartyTheWorkNumberModelsVerificationRequest } from '../definitions/LELodasoftThirdPartyTheWorkNumberModelsVerificationRequest';
import { LELodasoftThirdPartyTheWorkNumberModelsVerificationResponse } from '../definitions/LELodasoftThirdPartyTheWorkNumberModelsVerificationResponse';
import { Observable } from 'rxjs';
export declare type TheWorkNumberController = {
    /**
     * Request VOE/VOI from TheWorkNumber (by Equifax)
     * @param { object } parameters
     */
    readonly TheWorkNumber_RequestVerification: (parameters: {
        body: LELodasoftThirdPartyTheWorkNumberModelsVerificationRequest;
    }) => Observable<LELodasoftThirdPartyTheWorkNumberModelsVerificationResponse>;
};
export declare const theWorkNumberController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, TheWorkNumberController>;
