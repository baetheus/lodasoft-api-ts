import { TAPIClient } from '../client/client';
import { LELodasoftApiModelsAdminPipelineApplicationCounts } from '../definitions/LELodasoftApiModelsAdminPipelineApplicationCounts';
import { LELodasoftApiModelsAdminPipelineFilterCriteria } from '../definitions/LELodasoftApiModelsAdminPipelineFilterCriteria';
import { LELodasoftCommonModelsPipelinePipelineApplicationView } from '../definitions/LELodasoftCommonModelsPipelinePipelineApplicationView';
import { Observable } from 'rxjs';
export declare type PipelineController = {
    /**
     * Get Applications by filter criteria
     * @param { object } parameters
     */
    readonly Pipeline_GetAppsByLoanStatusId: (parameters: {
        body: LELodasoftApiModelsAdminPipelineFilterCriteria;
    }) => Observable<Array<LELodasoftCommonModelsPipelinePipelineApplicationView>>;
    /**
     * Get Application counts by loan status and by loan purpose
     */
    readonly Pipeline_GetCountApplicationbyLoanStatus: () => Observable<LELodasoftApiModelsAdminPipelineApplicationCounts>;
    /**
     * Get Applications for Internal Contact
     * @param { object } parameters
     */
    readonly Pipeline_GetAllApplicationsForInternalContact: (parameters: {
        query: {
            archive: boolean;
        };
    }) => Observable<Array<LELodasoftCommonModelsPipelinePipelineApplicationView>>;
};
export declare const pipelineController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, PipelineController>;
