import { TAPIClient } from '../client/client';
import { LELodasoftCommonModelsAdminGenerateDocumentRequest } from '../definitions/LELodasoftCommonModelsAdminGenerateDocumentRequest';
import { Observable } from 'rxjs';
export declare type GeneratedDocumentController = {
    /**
     * @param { object } parameters
     */
    readonly GeneratedDocument_GenerateDocument: (parameters: {
        body: LELodasoftCommonModelsAdminGenerateDocumentRequest;
    }) => Observable<string>;
};
export declare const generatedDocumentController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, GeneratedDocumentController>;
