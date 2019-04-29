import { Observable } from 'rxjs';
import { TAPIClient } from '../client/client';
import { LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel } from '../definitions/LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel';
export declare type FlowBuilderController = {
    /**
     * @param { object } parameters
     */
    readonly FlowBuilder_GetFlowsFiltered: (parameters: {
        query: {
            companyIdFilter: number;
            flowTypeFilter: string;
        };
    }) => Observable<Array<LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel>>;
    /**
     * @param { object } parameters
     */
    readonly FlowBuilder_InsertFlow: (parameters: {
        body: LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel;
    }) => Observable<LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel>;
    /**
     * @param { number } flowId undefined
     */
    readonly FlowBuilder_GetFlow: (flowId: number) => Observable<LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel>;
    /**
     * @param { number } flowId undefined
     * @param { object } parameters
     */
    readonly FlowBuilder_UpdateFlow: (flowId: number, parameters: {
        body: LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel;
    }) => Observable<LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel>;
    /**
     * @param { number } flowId undefined
     */
    readonly FlowBuilder_DeleteFlow: (flowId: number) => Observable<unknown>;
    /**
     * @param { string } flowguid undefined
     */
    readonly FlowBuilder_GetFlowByGuid: (flowguid: string) => Observable<LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel>;
    /**
     * @param { string } flowGuid undefined
     * @param { object } parameters
     */
    readonly FlowBuilder_UpdateFlowByGuid: (flowGuid: string, parameters: {
        body: LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel;
    }) => Observable<LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel>;
    /**
     * @param { string } flowGuid undefined
     */
    readonly FlowBuilder_DeleteFlowByGuid: (flowGuid: string) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly FlowBuilder_InsertFlowByGuid: (parameters: {
        body: LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel;
    }) => Observable<LELodasoftCommonModelsFlowBuilderFlowBuilderViewModel>;
};
export declare const flowBuilderController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, FlowBuilderController>;
