import { TAPIClient } from '../client/client';
import { LELodasoftDataAccessDbModelsConfigurationEmploymentInfoModel } from '../definitions/LELodasoftDataAccessDbModelsConfigurationEmploymentInfoModel';
import { Observable } from 'rxjs';
export declare type EmploymentController = {
    /**
     * @param { object } parameters
     */
    readonly Employment_UpsertEmploymentInfo: (parameters: {
        body: LELodasoftDataAccessDbModelsConfigurationEmploymentInfoModel;
    }) => Observable<LELodasoftDataAccessDbModelsConfigurationEmploymentInfoModel>;
    /**
     * @param { number } employmentId undefined
     */
    readonly Employment_DeleteEmploymentInfo: (employmentId: number) => Observable<boolean>;
};
export declare const employmentController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, EmploymentController>;
