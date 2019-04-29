import { TAPIClient } from '../client/client';
import { LELodasoftApiControllersInitializeFormFreeRequest } from '../definitions/LELodasoftApiControllersInitializeFormFreeRequest';
import { LELodasoftApiModelsWizardModelsWizardQuestionDataViewModel } from '../definitions/LELodasoftApiModelsWizardModelsWizardQuestionDataViewModel';
import { LELodasoftCommonModelsConfigurationWizardDataIdViewModel } from '../definitions/LELodasoftCommonModelsConfigurationWizardDataIdViewModel';
import { LELodasoftCommonModelsConfigurationWizardDataViewModel } from '../definitions/LELodasoftCommonModelsConfigurationWizardDataViewModel';
import { LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModel } from '../definitions/LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModel';
import { LELodasoftCommonModelsConfigurationWizardGroupIdViewModel } from '../definitions/LELodasoftCommonModelsConfigurationWizardGroupIdViewModel';
import { LELodasoftCommonModelsConfigurationWizardGroupViewModel } from '../definitions/LELodasoftCommonModelsConfigurationWizardGroupViewModel';
import { LELodasoftCommonModelsConfigurationWizardTreeViewModel } from '../definitions/LELodasoftCommonModelsConfigurationWizardTreeViewModel';
import { LELodasoftCommonModelsConfigurationWizardValidViewModel } from '../definitions/LELodasoftCommonModelsConfigurationWizardValidViewModel';
import { LELodasoftCommonModelsConfigurationWizardWizardConfigViewModel } from '../definitions/LELodasoftCommonModelsConfigurationWizardWizardConfigViewModel';
import { LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel } from '../definitions/LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel';
import { LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponse } from '../definitions/LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponse';
import { Observable } from 'rxjs';
export declare type WizardController = {
    readonly Wizard_GetAllWizardConfigs: () => Observable<Array<LELodasoftCommonModelsConfigurationWizardWizardConfigViewModel>>;
    /**
     * @param { object } parameters
     */
    readonly Wizard_UpsertWizardConfig: (parameters: {
        body: LELodasoftCommonModelsConfigurationWizardWizardConfigViewModel;
    }) => Observable<LELodasoftCommonModelsConfigurationWizardWizardConfigViewModel>;
    /**
     * @param { number } wizardConfigId undefined
     */
    readonly Wizard_GetWizardConfigById: (wizardConfigId: number) => Observable<LELodasoftCommonModelsConfigurationWizardWizardConfigViewModel>;
    /**
     * @param { number } wizardConfigId undefined
     */
    readonly Wizard_DeleteWizardConfig: (wizardConfigId: number) => Observable<unknown>;
    /**
     * @param { number } wizardConfigId undefined
     */
    readonly Wizard_GetExtractedWizardConfigById: (wizardConfigId: number) => Observable<LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModel>;
    /**
     * @param { object } parameters
     */
    readonly Wizard_UpsertExtractedWizardConfig: (parameters: {
        body: LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModel;
    }) => Observable<LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModel>;
    /**
     * @param { number } wizardConfigId undefined
     */
    readonly Wizard_GetDataIdListByWizardConfigId: (wizardConfigId: number) => Observable<Array<LELodasoftCommonModelsConfigurationWizardDataIdViewModel>>;
    /**
     * @param { number } wizardConfigId undefined
     * @param { object } parameters
     */
    readonly Wizard_UpsertDataIdAndDataByWizardConfigId: (wizardConfigId: number, parameters: {
        body: LELodasoftCommonModelsConfigurationWizardDataIdViewModel;
    }) => Observable<LELodasoftCommonModelsConfigurationWizardDataIdViewModel>;
    /**
     * @param { number } wizardConfigId undefined
     * @param { number } dataIdId undefined
     */
    readonly Wizard_GetDataIdByWizardConfigId: (wizardConfigId: number, dataIdId: number) => Observable<LELodasoftCommonModelsConfigurationWizardDataIdViewModel>;
    /**
     * @param { number } wizardConfigId undefined
     * @param { number } dataIdId undefined
     */
    readonly Wizard_DeleteDataIdByWizardConfigId: (wizardConfigId: number, dataIdId: number) => Observable<unknown>;
    /**
     * @param { number } wizardConfigId undefined
     */
    readonly Wizard_GetDataListByWizardConfigId: (wizardConfigId: number) => Observable<Array<LELodasoftCommonModelsConfigurationWizardDataViewModel>>;
    /**
     * @param { number } wizardConfigId undefined
     * @param { number } dataId undefined
     * @param { object } parameters
     */
    readonly Wizard_GetDataByWizardConfigId: (wizardConfigId: number, dataId: number, parameters: {
        query: {
            category: number;
        };
    }) => Observable<Array<LELodasoftCommonModelsConfigurationWizardDataViewModel>>;
    /**
     * @param { number } wizardConfigId undefined
     * @param { number } dataId undefined
     */
    readonly Wizard_DeleteDataByWizardConfigId: (wizardConfigId: number, dataId: number) => Observable<unknown>;
    /**
     * @param { number } wizardConfigId undefined
     */
    readonly Wizard_GetGroupIdListByWizardConfigId: (wizardConfigId: number) => Observable<Array<LELodasoftCommonModelsConfigurationWizardGroupIdViewModel>>;
    /**
     * @param { number } wizardConfigId undefined
     * @param { object } parameters
     */
    readonly Wizard_UpsertGroupIdAndGroupByWizardConfigId: (wizardConfigId: number, parameters: {
        body: LELodasoftCommonModelsConfigurationWizardGroupIdViewModel;
    }) => Observable<LELodasoftCommonModelsConfigurationWizardGroupIdViewModel>;
    /**
     * @param { number } wizardConfigId undefined
     * @param { number } groupIdId undefined
     */
    readonly Wizard_GetGroupIdByWizardConfigId: (wizardConfigId: number, groupIdId: number) => Observable<LELodasoftCommonModelsConfigurationWizardGroupIdViewModel>;
    /**
     * @param { number } wizardConfigId undefined
     * @param { number } groupIdId undefined
     */
    readonly Wizard_DeleteGroupIdByWizardConfigId: (wizardConfigId: number, groupIdId: number) => Observable<unknown>;
    /**
     * @param { number } wizardConfigId undefined
     */
    readonly Wizard_GetGroupListByWizardConfigId: (wizardConfigId: number) => Observable<Array<LELodasoftCommonModelsConfigurationWizardGroupViewModel>>;
    /**
     * @param { number } wizardConfigId undefined
     * @param { number } groupId undefined
     */
    readonly Wizard_GetGroupByWizardConfigId: (wizardConfigId: number, groupId: number) => Observable<LELodasoftCommonModelsConfigurationWizardGroupViewModel>;
    /**
     * @param { number } wizardConfigId undefined
     * @param { number } groupId undefined
     */
    readonly Wizard_DeleteGroupByWizardConfigId: (wizardConfigId: number, groupId: number) => Observable<unknown>;
    /**
     * @param { number } wizardConfigId undefined
     */
    readonly Wizard_GetValidListByWizardConfigId: (wizardConfigId: number) => Observable<Array<LELodasoftCommonModelsConfigurationWizardValidViewModel>>;
    /**
     * @param { number } wizardConfigId undefined
     * @param { number } validId undefined
     */
    readonly Wizard_GetValidByWizardConfigId: (wizardConfigId: number, validId: number) => Observable<LELodasoftCommonModelsConfigurationWizardValidViewModel>;
    /**
     * @param { number } wizardConfigId undefined
     * @param { number } validId undefined
     */
    readonly Wizard_DeleteValidByWizardConfigId: (wizardConfigId: number, validId: number) => Observable<unknown>;
    /**
     * @param { number } wizardConfigId undefined
     */
    readonly Wizard_GetTreeListByWizardConfigId: (wizardConfigId: number) => Observable<Array<LELodasoftCommonModelsConfigurationWizardTreeViewModel>>;
    /**
     * @param { number } wizardConfigId undefined
     * @param { object } parameters
     */
    readonly Wizard_UpsertTreeByWizardConfigId: (wizardConfigId: number, parameters: {
        body: Array<LELodasoftCommonModelsConfigurationWizardTreeViewModel>;
    }) => Observable<Array<LELodasoftCommonModelsConfigurationWizardTreeViewModel>>;
    readonly Wizard_GetAllWizardQuestions: () => Observable<Array<LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel>>;
    /**
     * @param { object } parameters
     */
    readonly Wizard_UpsertWizardQuestion: (parameters: {
        body: LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel;
    }) => Observable<LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel>;
    /**
     * @param { number } questionId undefined
     */
    readonly Wizard_GetWizardQuestionById: (questionId: number) => Observable<LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel>;
    /**
     * @param { number } questionId undefined
     */
    readonly Wizard_DeleteWizardQuestion: (questionId: number) => Observable<unknown>;
    /**
     * @param { number } wizardConfigId undefined
     */
    readonly Wizard_GetWizardQuestionListByWizardConfigId: (wizardConfigId: number) => Observable<Array<LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel>>;
    /**
     * @param { number } wizardConfigId undefined
     * @param { object } parameters
     */
    readonly Wizard_UpsertWizardQuestionDataByWizardConfigId: (wizardConfigId: number, parameters: {
        body: LELodasoftApiModelsWizardModelsWizardQuestionDataViewModel;
    }) => Observable<LELodasoftApiModelsWizardModelsWizardQuestionDataViewModel>;
    /**
     * @param { number } wizardConfigId undefined
     * @param { number } questionId undefined
     */
    readonly Wizard_GetWizardQuestionDataById: (wizardConfigId: number, questionId: number) => Observable<LELodasoftApiModelsWizardModelsWizardQuestionDataViewModel>;
    /**
     * @param { number } wizardConfigId undefined
     * @param { number } questionId undefined
     */
    readonly Wizard_DeleteWizardQuestionData: (wizardConfigId: number, questionId: number) => Observable<unknown>;
    /**
     * @param { string } companyGuid undefined
     * @param { object } parameters
     */
    readonly Wizard_InitializeFormFree: (companyGuid: string, parameters: {
        body: LELodasoftApiControllersInitializeFormFreeRequest;
    }) => Observable<LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponse>;
};
export declare const wizardController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, WizardController>;
