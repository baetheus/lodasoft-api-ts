import { TAPIClient } from '../client/client';
import { LELodasoftCommonModelsConfigurationAddDocumentTemplatePagesViewModel } from '../definitions/LELodasoftCommonModelsConfigurationAddDocumentTemplatePagesViewModel';
import { LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModel } from '../definitions/LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModel';
import { LELodasoftCommonModelsConfigurationDocumentTemplatePageViewModel } from '../definitions/LELodasoftCommonModelsConfigurationDocumentTemplatePageViewModel';
import { LELodasoftCommonModelsConfigurationDocumentTemplateViewModel } from '../definitions/LELodasoftCommonModelsConfigurationDocumentTemplateViewModel';
import { Observable } from 'rxjs';
export declare type DocumentTemplateController = {
    readonly DocumentTemplate_GetApplicationGlobalMergeFieldKeys: () => Observable<Array<string>>;
    readonly DocumentTemplate_GetLeadGlobalMergeFieldKeys: () => Observable<Array<string>>;
    readonly DocumentTemplate_GetAllDocumentTemplates: () => Observable<Array<LELodasoftCommonModelsConfigurationDocumentTemplateViewModel>>;
    readonly DocumentTemplate_InsertDocumentTemplate: () => Observable<unknown>;
    /**
     * @param { number } documentTemplateId undefined
     */
    readonly DocumentTemplate_GetDocumentTemplateById: (documentTemplateId: number) => Observable<LELodasoftCommonModelsConfigurationDocumentTemplateViewModel>;
    /**
     * @param { number } documentTemplateId undefined
     */
    readonly DocumentTemplate_UpdateDocumentTemplate: (documentTemplateId: number) => Observable<unknown>;
    /**
     * @param { number } documentTemplateId undefined
     */
    readonly DocumentTemplate_DeleteDocumentTemplate: (documentTemplateId: number) => Observable<unknown>;
    /**
     * @param { number } documentTemplateId undefined
     */
    readonly DocumentTemplate_GetDocumentTemplateFieldsById: (documentTemplateId: number) => Observable<Array<LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModel>>;
    /**
     * @param { number } documentTemplateFieldId undefined
     * @param { object } parameters
     */
    readonly DocumentTemplate_UpdateDocumentTemplateField: (documentTemplateFieldId: number, parameters: {
        body: LELodasoftCommonModelsConfigurationDocumentTemplateFieldViewModel;
    }) => Observable<unknown>;
    /**
     * @param { number } documentTemplateId undefined
     */
    readonly DocumentTemplate_GetDocumentTemplatePagesById: (documentTemplateId: number) => Observable<Array<LELodasoftCommonModelsConfigurationDocumentTemplatePageViewModel>>;
    /**
     * @param { number } documentTemplateId undefined
     * @param { object } parameters
     */
    readonly DocumentTemplate_UpsertDocumentTemplatePages: (documentTemplateId: number, parameters: {
        body: LELodasoftCommonModelsConfigurationAddDocumentTemplatePagesViewModel;
    }) => Observable<unknown>;
    /**
     * @param { number } documentTemplatePageId undefined
     */
    readonly DocumentTemplate_DeleteDocumentTemplatePage: (documentTemplatePageId: number) => Observable<unknown>;
};
export declare const documentTemplateController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, DocumentTemplateController>;
