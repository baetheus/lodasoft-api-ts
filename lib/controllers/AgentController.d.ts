import { TAPIClient } from '../client/client';
import { LELodasoftApiModelsAgentAgentFull } from '../definitions/LELodasoftApiModelsAgentAgentFull';
import { LELodasoftApiModelsAgentReferralSourceModel } from '../definitions/LELodasoftApiModelsAgentReferralSourceModel';
import { LELodasoftCommonModelsAdminAgentListViewModel } from '../definitions/LELodasoftCommonModelsAdminAgentListViewModel';
import { LELodasoftCommonModelsAdminAgentNoteViewModel } from '../definitions/LELodasoftCommonModelsAdminAgentNoteViewModel';
import { LELodasoftCommonModelsAdminAgentViewModel } from '../definitions/LELodasoftCommonModelsAdminAgentViewModel';
import { LELodasoftCommonModelsPipelinePipelineApplicationView } from '../definitions/LELodasoftCommonModelsPipelinePipelineApplicationView';
import { Observable } from 'rxjs';
export declare type AgentController = {
    readonly Agent_GetAllAgent: () => Observable<Array<LELodasoftCommonModelsAdminAgentViewModel>>;
    readonly Agent_GetAllReferralSources: () => Observable<Array<LELodasoftApiModelsAgentReferralSourceModel>>;
    /**
     * @param { number } id undefined
     */
    readonly Agent_GetAgentbyId: (id: number) => Observable<LELodasoftApiModelsAgentAgentFull>;
    /**
     * @param { boolean } sendInvite undefined
     * @param { object } parameters
     */
    readonly Agent_UpsertAgent: (sendInvite: boolean, parameters: {
        body: LELodasoftApiModelsAgentAgentFull;
    }) => Observable<LELodasoftApiModelsAgentAgentFull>;
    /**
     * @param { number } agentId undefined
     */
    readonly Agent_InviteAgent: (agentId: number) => Observable<unknown>;
    /**
     * @param { number } agentId undefined
     */
    readonly Agent_DeleteAgent: (agentId: number) => Observable<unknown>;
    /**
     * @param { number } agentId undefined
     */
    readonly Agent_GetAllApplicationInfo: (agentId: number) => Observable<Array<LELodasoftCommonModelsPipelinePipelineApplicationView>>;
    readonly Agent_GetAllAgentLists: () => Observable<Array<LELodasoftCommonModelsAdminAgentListViewModel>>;
    /**
     * @param { object } parameters
     */
    readonly Agent_InsertAgentList: (parameters: {
        body: LELodasoftCommonModelsAdminAgentListViewModel;
    }) => Observable<LELodasoftCommonModelsAdminAgentListViewModel>;
    /**
     * @param { number } agentId undefined
     */
    readonly Agent_GetAgentListsByAgentId: (agentId: number) => Observable<Array<LELodasoftCommonModelsAdminAgentListViewModel>>;
    /**
     * @param { number } agentListId undefined
     */
    readonly Agent_GetAgentListById: (agentListId: number) => Observable<LELodasoftCommonModelsAdminAgentListViewModel>;
    /**
     * @param { number } agentListId undefined
     * @param { object } parameters
     */
    readonly Agent_UpdateAgentList: (agentListId: number, parameters: {
        body: LELodasoftCommonModelsAdminAgentListViewModel;
    }) => Observable<LELodasoftCommonModelsAdminAgentListViewModel>;
    /**
     * @param { number } agentListId undefined
     */
    readonly Agent_DeleteAgentList: (agentListId: number) => Observable<unknown>;
    /**
     * @param { number } agentListId undefined
     */
    readonly Agent_GetAgentsByAgentListId: (agentListId: number) => Observable<Array<LELodasoftCommonModelsAdminAgentViewModel>>;
    /**
     * @param { number } agentListId undefined
     * @param { number } agentId undefined
     */
    readonly Agent_AddAgentToAgentList: (agentListId: number, agentId: number) => Observable<unknown>;
    /**
     * @param { number } agentListId undefined
     * @param { number } agentId undefined
     */
    readonly Agent_RemoveAgentFromAgentList: (agentListId: number, agentId: number) => Observable<unknown>;
    /**
     * @param { number } agentId undefined
     * @param { object } parameters
     */
    readonly Agent_AddAgentNote: (agentId: number, parameters: {
        body: LELodasoftCommonModelsAdminAgentNoteViewModel;
    }) => Observable<unknown>;
    /**
     * @param { number } agentId undefined
     */
    readonly Agent_GetAgentNotes: (agentId: number) => Observable<Array<LELodasoftCommonModelsAdminAgentNoteViewModel>>;
};
export declare const agentController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, AgentController>;
