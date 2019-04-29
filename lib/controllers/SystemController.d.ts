import { TAPIClient } from '../client/client';
import { LELodasoftApiModelsSystemVersionResult } from '../definitions/LELodasoftApiModelsSystemVersionResult';
import { Observable } from 'rxjs';
export declare type SystemController = {
    /**
     * Get System Version
     */
    readonly System_GetVersion: () => Observable<LELodasoftApiModelsSystemVersionResult>;
};
export declare const systemController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, SystemController>;
