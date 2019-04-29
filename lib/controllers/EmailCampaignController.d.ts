import { TAPIClient } from '../client/client';
import { LELodasoftCommonModelsAdminEmailCampaignViewModel } from '../definitions/LELodasoftCommonModelsAdminEmailCampaignViewModel';
import { LELodasoftCommonModelsAdminEmailTemplateViewModel } from '../definitions/LELodasoftCommonModelsAdminEmailTemplateViewModel';
import { Option } from 'fp-ts/lib/Option';
import { Observable } from 'rxjs';
export declare type EmailCampaignController = {
    readonly EmailCampaign_GetAllEmailCampaigns: () => Observable<Array<LELodasoftCommonModelsAdminEmailCampaignViewModel>>;
    /**
     * @param { object } parameters
     */
    readonly EmailCampaign_InsertEmailCampaign: (parameters: {
        body: LELodasoftCommonModelsAdminEmailCampaignViewModel;
    }) => Observable<LELodasoftCommonModelsAdminEmailCampaignViewModel>;
    /**
     * @param { number } emailCampaignId undefined
     */
    readonly EmailCampaign_GetEmailCampaignById: (emailCampaignId: number) => Observable<LELodasoftCommonModelsAdminEmailCampaignViewModel>;
    /**
     * @param { number } emailCampaignId undefined
     * @param { object } parameters
     */
    readonly EmailCampaign_UpdateEmailCampaign: (emailCampaignId: number, parameters: {
        body: LELodasoftCommonModelsAdminEmailCampaignViewModel;
    }) => Observable<LELodasoftCommonModelsAdminEmailCampaignViewModel>;
    /**
     * @param { number } emailCampaignId undefined
     */
    readonly EmailCampaign_DeleteEmailCampaign: (emailCampaignId: number) => Observable<unknown>;
    readonly EmailCampaign_GetAllEmailTemplates: () => Observable<Array<LELodasoftCommonModelsAdminEmailTemplateViewModel>>;
    /**
     * @param { object } parameters
     */
    readonly EmailCampaign_InsertEmailTemplate: (parameters: {
        body: LELodasoftCommonModelsAdminEmailTemplateViewModel;
    }) => Observable<LELodasoftCommonModelsAdminEmailTemplateViewModel>;
    /**
     * @param { object } [parameters]
     */
    readonly EmailCampaign_GetAllManualEmailTemplates: (parameters: {
        query?: {
            emailTemplateType: Option<string>;
        };
    }) => Observable<Array<LELodasoftCommonModelsAdminEmailTemplateViewModel>>;
    /**
     * @param { number } emailTemplateId undefined
     * @param { object } [parameters]
     */
    readonly EmailCampaign_GetManualEmailTemplateById: (emailTemplateId: number, parameters: {
        query?: {
            loanId: Option<number>;
            leadId: Option<number>;
        };
    }) => Observable<LELodasoftCommonModelsAdminEmailTemplateViewModel>;
    /**
     * @param { number } emailTemplateId undefined
     */
    readonly EmailCampaign_GetEmailTemplateById: (emailTemplateId: number) => Observable<LELodasoftCommonModelsAdminEmailTemplateViewModel>;
    /**
     * @param { number } emailTemplateId undefined
     * @param { object } parameters
     */
    readonly EmailCampaign_UpdateEmailTemplate: (emailTemplateId: number, parameters: {
        body: LELodasoftCommonModelsAdminEmailTemplateViewModel;
    }) => Observable<LELodasoftCommonModelsAdminEmailTemplateViewModel>;
    /**
     * @param { number } emailTemplateId undefined
     */
    readonly EmailCampaign_DeleteEmailTemplate: (emailTemplateId: number) => Observable<unknown>;
};
export declare const emailCampaignController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, EmailCampaignController>;
