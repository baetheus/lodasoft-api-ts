import { TAPIClient } from '../client/client';
import { LELodasoftCommonModelsDemoRequestDemoViewModel } from '../definitions/LELodasoftCommonModelsDemoRequestDemoViewModel';
import { Observable } from 'rxjs';
export declare type DemoController = {
    /**
     * @param { object } parameters
     */
    readonly Demo_RequestDemo: (parameters: {
        body: LELodasoftCommonModelsDemoRequestDemoViewModel;
    }) => Observable<unknown>;
};
export declare const demoController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, DemoController>;
