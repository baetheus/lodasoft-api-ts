import { TAPIClient } from '../client/client';
import { LELodasoftApiControllersDashboardControllerDashboardFilterCriteria } from '../definitions/LELodasoftApiControllersDashboardControllerDashboardFilterCriteria';
import { LELodasoftApiModelsBorrowerLoanDocTask_DashBoardView } from '../definitions/LELodasoftApiModelsBorrowerLoanDocTask_DashBoardView';
import { LELodasoftDataAccessModelsTaskCountModel } from '../definitions/LELodasoftDataAccessModelsTaskCountModel';
import { Observable } from 'rxjs';
export declare type DashboardController = {
    /**
     * @param { object } parameters
     */
    readonly Dashboard_GetTaskCountsbyFilterCriteria: (parameters: {
        body: LELodasoftApiControllersDashboardControllerDashboardFilterCriteria;
    }) => Observable<LELodasoftDataAccessModelsTaskCountModel>;
    /**
     * @param { number } filter undefined
     * @param { object } parameters
     */
    readonly Dashboard_GetTaskByFilterbyFilterCriteria: (filter: number, parameters: {
        body: LELodasoftApiControllersDashboardControllerDashboardFilterCriteria;
    }) => Observable<Array<LELodasoftApiModelsBorrowerLoanDocTask_DashBoardView>>;
    readonly Dashboard_GetTaskCounts: () => Observable<LELodasoftDataAccessModelsTaskCountModel>;
    /**
     * @param { number } filter undefined
     */
    readonly Dashboard_GetTaskByFilter: (filter: number) => Observable<Array<LELodasoftApiModelsBorrowerLoanDocTask_DashBoardView>>;
    /**
     * @param { number } filter undefined
     * @param { number } appId undefined
     */
    readonly Dashboard_GetTaskByFilterInApp: (filter: number, appId: number) => Observable<Array<LELodasoftApiModelsBorrowerLoanDocTask_DashBoardView>>;
    /**
     * @param { number } filter undefined
     * @param { number } leadId undefined
     */
    readonly Dashboard_GetTaskByFilterInLead: (filter: number, leadId: number) => Observable<Array<LELodasoftApiModelsBorrowerLoanDocTask_DashBoardView>>;
};
export declare const dashboardController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, DashboardController>;
