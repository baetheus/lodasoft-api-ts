import { TAPIClient } from '../client/client';
import { LELodasoftCommonModelsLeadsLeadCampaignViewModel } from '../definitions/LELodasoftCommonModelsLeadsLeadCampaignViewModel';
import { LELodasoftCommonModelsLeadsLeadCreditViewModel } from '../definitions/LELodasoftCommonModelsLeadsLeadCreditViewModel';
import { LELodasoftCommonModelsLeadsLeadEmploymentViewModel } from '../definitions/LELodasoftCommonModelsLeadsLeadEmploymentViewModel';
import { LELodasoftCommonModelsLeadsLeadEventViewModel } from '../definitions/LELodasoftCommonModelsLeadsLeadEventViewModel';
import { LELodasoftCommonModelsLeadsLeadListViewModel } from '../definitions/LELodasoftCommonModelsLeadsLeadListViewModel';
import { LELodasoftCommonModelsLeadsLeadViewModel } from '../definitions/LELodasoftCommonModelsLeadsLeadViewModel';
import { LELodasoftCommonModelsLeadsReportsLeadMilestonesReportResponse } from '../definitions/LELodasoftCommonModelsLeadsReportsLeadMilestonesReportResponse';
import { LELodasoftCommonModelsLeadsReportsLeadPerformanceReportDetailResponse } from '../definitions/LELodasoftCommonModelsLeadsReportsLeadPerformanceReportDetailResponse';
import { LELodasoftCommonModelsLeadsReportsLeadPerformanceReportResponse } from '../definitions/LELodasoftCommonModelsLeadsReportsLeadPerformanceReportResponse';
import { LELodasoftCommonModelsLeadsReportsLeadStatusReportResponse } from '../definitions/LELodasoftCommonModelsLeadsReportsLeadStatusReportResponse';
import { LELodasoftDataAccessModelsTaskCountModel } from '../definitions/LELodasoftDataAccessModelsTaskCountModel';
import { Option } from 'fp-ts/lib/Option';
import { Observable } from 'rxjs';
export declare type LeadController = {
    /**
     * @param { object } [parameters]
     */
    readonly Lead_GetAllLeads: (parameters: {
        query?: {
            showArchived: Option<boolean>;
            campaignId: Option<number>;
            dateInsertedStart: Option<string>;
            dateInsertedEnd: Option<string>;
        };
    }) => Observable<Array<LELodasoftCommonModelsLeadsLeadViewModel>>;
    /**
     * @param { object } [parameters]
     */
    readonly Lead_GetAllUnassignedLeads: (parameters: {
        query?: {
            showArchived: Option<boolean>;
        };
    }) => Observable<Array<LELodasoftCommonModelsLeadsLeadViewModel>>;
    /**
     * @param { number } leadId undefined
     */
    readonly Lead_GetLeadById: (leadId: number) => Observable<LELodasoftCommonModelsLeadsLeadViewModel>;
    /**
     * @param { number } leadId undefined
     * @param { object } parameters
     */
    readonly Lead_UpdateLead: (leadId: number, parameters: {
        body: LELodasoftCommonModelsLeadsLeadViewModel;
    }) => Observable<LELodasoftCommonModelsLeadsLeadViewModel>;
    /**
     * @param { number } leadId undefined
     */
    readonly Lead_DeleteLead: (leadId: number) => Observable<unknown>;
    /**
     * @param { object } parameters
     */
    readonly Lead_InsertLead: (parameters: {
        body: LELodasoftCommonModelsLeadsLeadViewModel;
    }) => Observable<LELodasoftCommonModelsLeadsLeadViewModel>;
    /**
     * @param { number } leadId undefined
     * @param { number } referralSourceType undefined
     */
    readonly Lead_ConvertLeadToBorrower: (leadId: number, referralSourceType: number) => Observable<unknown>;
    /**
     * @param { object } [parameters]
     */
    readonly Lead_ImportListUserForCompany: (parameters: {
        query?: {
            companyId: Option<number>;
        };
    }) => Observable<LELodasoftCommonModelsLeadsLeadViewModel>;
    readonly Lead_ExportLeads: () => Observable<unknown>;
    /**
     * @param { number } leadId undefined
     */
    readonly Lead_GetLeadEventsByLeadId: (leadId: number) => Observable<Array<LELodasoftCommonModelsLeadsLeadEventViewModel>>;
    /**
     * @param { number } leadId undefined
     * @param { object } parameters
     */
    readonly Lead_InsertLeadEvent: (leadId: number, parameters: {
        body: LELodasoftCommonModelsLeadsLeadEventViewModel;
    }) => Observable<LELodasoftCommonModelsLeadsLeadEventViewModel>;
    /**
     * @param { number } leadEventId undefined
     */
    readonly Lead_GetLeadEventById: (leadEventId: number) => Observable<LELodasoftCommonModelsLeadsLeadEventViewModel>;
    /**
     * @param { number } leadEventId undefined
     * @param { object } parameters
     */
    readonly Lead_UpdateLeadEvent: (leadEventId: number, parameters: {
        body: LELodasoftCommonModelsLeadsLeadEventViewModel;
    }) => Observable<LELodasoftCommonModelsLeadsLeadEventViewModel>;
    /**
     * @param { number } leadEventId undefined
     */
    readonly Lead_DeleteLeadEvent: (leadEventId: number) => Observable<unknown>;
    /**
     * @param { number } leadId undefined
     */
    readonly Lead_GetLeadEmploymentsByLeadId: (leadId: number) => Observable<Array<LELodasoftCommonModelsLeadsLeadEmploymentViewModel>>;
    /**
     * @param { number } leadId undefined
     * @param { object } parameters
     */
    readonly Lead_InsertLeadEmployment: (leadId: number, parameters: {
        body: LELodasoftCommonModelsLeadsLeadEmploymentViewModel;
    }) => Observable<LELodasoftCommonModelsLeadsLeadEmploymentViewModel>;
    /**
     * @param { number } leadEmploymentId undefined
     */
    readonly Lead_GetLeadEmploymentById: (leadEmploymentId: number) => Observable<LELodasoftCommonModelsLeadsLeadEmploymentViewModel>;
    /**
     * @param { number } leadEmploymentId undefined
     * @param { object } parameters
     */
    readonly Lead_UpdateLeadEmployment: (leadEmploymentId: number, parameters: {
        body: LELodasoftCommonModelsLeadsLeadEmploymentViewModel;
    }) => Observable<LELodasoftCommonModelsLeadsLeadEmploymentViewModel>;
    /**
     * @param { number } leadEmploymentId undefined
     */
    readonly Lead_DeleteLeadEmployment: (leadEmploymentId: number) => Observable<unknown>;
    /**
     * @param { number } leadId undefined
     */
    readonly Lead_GetLeadCreditsByLeadId: (leadId: number) => Observable<Array<LELodasoftCommonModelsLeadsLeadCreditViewModel>>;
    /**
     * @param { number } leadId undefined
     * @param { object } parameters
     */
    readonly Lead_InsertLeadCredit: (leadId: number, parameters: {
        body: LELodasoftCommonModelsLeadsLeadCreditViewModel;
    }) => Observable<LELodasoftCommonModelsLeadsLeadCreditViewModel>;
    /**
     * @param { number } leadCreditId undefined
     */
    readonly Lead_GetLeadCreditById: (leadCreditId: number) => Observable<LELodasoftCommonModelsLeadsLeadCreditViewModel>;
    /**
     * @param { number } leadCreditId undefined
     * @param { object } parameters
     */
    readonly Lead_UpdateLeadCredit: (leadCreditId: number, parameters: {
        body: LELodasoftCommonModelsLeadsLeadCreditViewModel;
    }) => Observable<LELodasoftCommonModelsLeadsLeadCreditViewModel>;
    /**
     * @param { number } leadCreditId undefined
     */
    readonly Lead_DeleteLeadCredit: (leadCreditId: number) => Observable<unknown>;
    readonly Lead_GetAllLeadCampaigns: () => Observable<Array<LELodasoftCommonModelsLeadsLeadCampaignViewModel>>;
    /**
     * @param { object } parameters
     */
    readonly Lead_InsertLeadCampaign: (parameters: {
        body: LELodasoftCommonModelsLeadsLeadCampaignViewModel;
    }) => Observable<LELodasoftCommonModelsLeadsLeadCampaignViewModel>;
    /**
     * @param { number } leadCampaignId undefined
     */
    readonly Lead_GetLeadCampaignById: (leadCampaignId: number) => Observable<LELodasoftCommonModelsLeadsLeadCampaignViewModel>;
    /**
     * @param { number } leadCampaignId undefined
     * @param { object } parameters
     */
    readonly Lead_UpdateLeadCampaign: (leadCampaignId: number, parameters: {
        body: LELodasoftCommonModelsLeadsLeadCampaignViewModel;
    }) => Observable<LELodasoftCommonModelsLeadsLeadCampaignViewModel>;
    /**
     * @param { number } leadCampaignId undefined
     */
    readonly Lead_DeleteLeadCampaign: (leadCampaignId: number) => Observable<unknown>;
    readonly Lead_GetAllLeadLists: () => Observable<Array<LELodasoftCommonModelsLeadsLeadListViewModel>>;
    /**
     * @param { object } parameters
     */
    readonly Lead_InsertLeadList: (parameters: {
        body: LELodasoftCommonModelsLeadsLeadListViewModel;
    }) => Observable<LELodasoftCommonModelsLeadsLeadListViewModel>;
    /**
     * @param { number } leadId undefined
     */
    readonly Lead_GetLeadListsByLeadId: (leadId: number) => Observable<Array<LELodasoftCommonModelsLeadsLeadListViewModel>>;
    /**
     * @param { number } leadListId undefined
     */
    readonly Lead_GetLeadListById: (leadListId: number) => Observable<LELodasoftCommonModelsLeadsLeadListViewModel>;
    /**
     * @param { number } leadListId undefined
     * @param { object } parameters
     */
    readonly Lead_UpdateLeadList: (leadListId: number, parameters: {
        body: LELodasoftCommonModelsLeadsLeadListViewModel;
    }) => Observable<LELodasoftCommonModelsLeadsLeadListViewModel>;
    /**
     * @param { number } leadListId undefined
     */
    readonly Lead_DeleteLeadList: (leadListId: number) => Observable<unknown>;
    /**
     * @param { number } leadListId undefined
     */
    readonly Lead_GetLeadsByLeadListId: (leadListId: number) => Observable<Array<LELodasoftCommonModelsLeadsLeadViewModel>>;
    /**
     * @param { number } leadListId undefined
     * @param { number } leadId undefined
     */
    readonly Lead_AddLeadToLeadList: (leadListId: number, leadId: number) => Observable<unknown>;
    /**
     * @param { number } leadListId undefined
     * @param { number } leadId undefined
     */
    readonly Lead_RemoveLeadFromLeadList: (leadListId: number, leadId: number) => Observable<unknown>;
    /**
     * @param { object } [parameters]
     */
    readonly Lead_GetLeadMilestonesReport: (parameters: {
        query?: {
            campaignId: Option<number>;
            dateCreatedStart: Option<string>;
            dateCreatedEnd: Option<string>;
        };
    }) => Observable<LELodasoftCommonModelsLeadsReportsLeadMilestonesReportResponse>;
    /**
     * @param { object } [parameters]
     */
    readonly Lead_GetLeadPerformanceReport: (parameters: {
        query?: {
            campaignId: Option<number>;
            dateCreatedStart: Option<string>;
            dateCreatedEnd: Option<string>;
        };
    }) => Observable<LELodasoftCommonModelsLeadsReportsLeadPerformanceReportResponse>;
    /**
     * @param { object } [parameters]
     */
    readonly Lead_GetLeadPerformanceReportDetail: (parameters: {
        query?: {
            campaignId: Option<number>;
            dateCreatedStart: Option<string>;
            dateCreatedEnd: Option<string>;
        };
    }) => Observable<LELodasoftCommonModelsLeadsReportsLeadPerformanceReportDetailResponse>;
    /**
     * @param { object } [parameters]
     */
    readonly Lead_GetLeadStatusReport: (parameters: {
        query?: {
            CampaignId: Option<number>;
            DateCreatedStart: Option<string>;
            DateCreatedEnd: Option<string>;
        };
    }) => Observable<LELodasoftCommonModelsLeadsReportsLeadStatusReportResponse>;
    /**
     * @param { number } leadId undefined
     */
    readonly Lead_GetTaskCountByLeadId: (leadId: number) => Observable<LELodasoftDataAccessModelsTaskCountModel>;
};
export declare const leadController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, LeadController>;
