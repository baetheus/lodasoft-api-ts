import { Observable } from 'rxjs';
import { TAPIClient } from '../client/client';
import { LELodasoftCommonModelsMortgageGovernmentMonitorViewModel } from '../definitions/LELodasoftCommonModelsMortgageGovernmentMonitorViewModel';
export declare type MortgageGovernmentMonitorController = {
    /**
     * @param { number } governmentMonitorId undefined
     */
    readonly MortgageGovernmentMonitor_GetGovernmentMonitorById: (governmentMonitorId: number) => Observable<LELodasoftCommonModelsMortgageGovernmentMonitorViewModel>;
    /**
     * @param { number } governmentMonitorId undefined
     * @param { object } parameters
     */
    readonly MortgageGovernmentMonitor_UpdateGovernmentMonitor: (governmentMonitorId: number, parameters: {
        body: LELodasoftCommonModelsMortgageGovernmentMonitorViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageGovernmentMonitorViewModel>;
    /**
     * @param { number } governmentMonitorId undefined
     */
    readonly MortgageGovernmentMonitor_DeleteGovernmentMonitor: (governmentMonitorId: number) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly MortgageGovernmentMonitor_InsertGovernmentMonitor: (parameters: {
        body: LELodasoftCommonModelsMortgageGovernmentMonitorViewModel;
    }) => Observable<LELodasoftCommonModelsMortgageGovernmentMonitorViewModel>;
};
export declare const mortgageGovernmentMonitorController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, MortgageGovernmentMonitorController>;
