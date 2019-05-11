import { TAPIClient } from '../client/client';
import {
	LELodasoftApiModelsMortgageParseDuLeadViewModel,
	LELodasoftApiModelsMortgageParseDuLeadViewModelIO,
} from '../definitions/LELodasoftApiModelsMortgageParseDuLeadViewModel';
import {
	LELodasoftCommonModelsLeadsLeadCampaignViewModel,
	LELodasoftCommonModelsLeadsLeadCampaignViewModelIO,
} from '../definitions/LELodasoftCommonModelsLeadsLeadCampaignViewModel';
import {
	LELodasoftCommonModelsLeadsLeadCreditViewModel,
	LELodasoftCommonModelsLeadsLeadCreditViewModelIO,
} from '../definitions/LELodasoftCommonModelsLeadsLeadCreditViewModel';
import {
	LELodasoftCommonModelsLeadsLeadEmploymentViewModel,
	LELodasoftCommonModelsLeadsLeadEmploymentViewModelIO,
} from '../definitions/LELodasoftCommonModelsLeadsLeadEmploymentViewModel';
import {
	LELodasoftCommonModelsLeadsLeadEventViewModel,
	LELodasoftCommonModelsLeadsLeadEventViewModelIO,
} from '../definitions/LELodasoftCommonModelsLeadsLeadEventViewModel';
import {
	LELodasoftCommonModelsLeadsLeadListViewModel,
	LELodasoftCommonModelsLeadsLeadListViewModelIO,
} from '../definitions/LELodasoftCommonModelsLeadsLeadListViewModel';
import {
	LELodasoftCommonModelsLeadsLeadViewModel,
	LELodasoftCommonModelsLeadsLeadViewModelIO,
} from '../definitions/LELodasoftCommonModelsLeadsLeadViewModel';
import {
	LELodasoftCommonModelsLeadsReportsLeadMilestonesReportResponse,
	LELodasoftCommonModelsLeadsReportsLeadMilestonesReportResponseIO,
} from '../definitions/LELodasoftCommonModelsLeadsReportsLeadMilestonesReportResponse';
import {
	LELodasoftCommonModelsLeadsReportsLeadPerformanceReportDetailResponse,
	LELodasoftCommonModelsLeadsReportsLeadPerformanceReportDetailResponseIO,
} from '../definitions/LELodasoftCommonModelsLeadsReportsLeadPerformanceReportDetailResponse';
import {
	LELodasoftCommonModelsLeadsReportsLeadPerformanceReportResponse,
	LELodasoftCommonModelsLeadsReportsLeadPerformanceReportResponseIO,
} from '../definitions/LELodasoftCommonModelsLeadsReportsLeadPerformanceReportResponse';
import {
	LELodasoftCommonModelsLeadsReportsLeadStatusReportResponse,
	LELodasoftCommonModelsLeadsReportsLeadStatusReportResponseIO,
} from '../definitions/LELodasoftCommonModelsLeadsReportsLeadStatusReportResponse';
import {
	LELodasoftDataAccessModelsTaskCountModel,
	LELodasoftDataAccessModelsTaskCountModelIO,
} from '../definitions/LELodasoftDataAccessModelsTaskCountModel';
import { decodeAndMap, unknownType } from '../utils/utils';
import { Option } from 'fp-ts/lib/Option';
import { asks } from 'fp-ts/lib/Reader';
import { array, boolean, number, string, type, partial } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';
import { Observable } from 'rxjs';

export type LeadController = {
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
		query?: { showArchived: Option<boolean> };
	}) => Observable<Array<LELodasoftCommonModelsLeadsLeadViewModel>>;

	/**
	 * @param { number } leadId undefined
	 */
	readonly Lead_GetLeadById: (leadId: number) => Observable<LELodasoftCommonModelsLeadsLeadViewModel>;

	/**
	 * @param { number } leadId undefined
	 * @param { object } parameters
	 */
	readonly Lead_UpdateLead: (
		leadId: number,
		parameters: { body: LELodasoftCommonModelsLeadsLeadViewModel },
	) => Observable<LELodasoftCommonModelsLeadsLeadViewModel>;

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
		query?: { companyId: Option<number> };
	}) => Observable<LELodasoftCommonModelsLeadsLeadViewModel>;

	readonly Lead_ExportLeads: () => Observable<unknown>;

	/**
	 * @param { number } leadId undefined
	 */
	readonly Lead_GetLeadEventsByLeadId: (
		leadId: number,
	) => Observable<Array<LELodasoftCommonModelsLeadsLeadEventViewModel>>;

	/**
	 * @param { number } leadId undefined
	 * @param { object } parameters
	 */
	readonly Lead_InsertLeadEvent: (
		leadId: number,
		parameters: { body: LELodasoftCommonModelsLeadsLeadEventViewModel },
	) => Observable<LELodasoftCommonModelsLeadsLeadEventViewModel>;

	/**
	 * @param { number } leadEventId undefined
	 */
	readonly Lead_GetLeadEventById: (leadEventId: number) => Observable<LELodasoftCommonModelsLeadsLeadEventViewModel>;

	/**
	 * @param { number } leadEventId undefined
	 * @param { object } parameters
	 */
	readonly Lead_UpdateLeadEvent: (
		leadEventId: number,
		parameters: { body: LELodasoftCommonModelsLeadsLeadEventViewModel },
	) => Observable<LELodasoftCommonModelsLeadsLeadEventViewModel>;

	/**
	 * @param { number } leadEventId undefined
	 */
	readonly Lead_DeleteLeadEvent: (leadEventId: number) => Observable<unknown>;

	/**
	 * @param { number } leadId undefined
	 */
	readonly Lead_GetLeadEmploymentsByLeadId: (
		leadId: number,
	) => Observable<Array<LELodasoftCommonModelsLeadsLeadEmploymentViewModel>>;

	/**
	 * @param { number } leadId undefined
	 * @param { object } parameters
	 */
	readonly Lead_InsertLeadEmployment: (
		leadId: number,
		parameters: { body: LELodasoftCommonModelsLeadsLeadEmploymentViewModel },
	) => Observable<LELodasoftCommonModelsLeadsLeadEmploymentViewModel>;

	/**
	 * @param { number } leadEmploymentId undefined
	 */
	readonly Lead_GetLeadEmploymentById: (
		leadEmploymentId: number,
	) => Observable<LELodasoftCommonModelsLeadsLeadEmploymentViewModel>;

	/**
	 * @param { number } leadEmploymentId undefined
	 * @param { object } parameters
	 */
	readonly Lead_UpdateLeadEmployment: (
		leadEmploymentId: number,
		parameters: { body: LELodasoftCommonModelsLeadsLeadEmploymentViewModel },
	) => Observable<LELodasoftCommonModelsLeadsLeadEmploymentViewModel>;

	/**
	 * @param { number } leadEmploymentId undefined
	 */
	readonly Lead_DeleteLeadEmployment: (leadEmploymentId: number) => Observable<unknown>;

	/**
	 * @param { number } leadId undefined
	 */
	readonly Lead_GetLeadCreditsByLeadId: (
		leadId: number,
	) => Observable<Array<LELodasoftCommonModelsLeadsLeadCreditViewModel>>;

	/**
	 * @param { number } leadId undefined
	 * @param { object } parameters
	 */
	readonly Lead_InsertLeadCredit: (
		leadId: number,
		parameters: { body: LELodasoftCommonModelsLeadsLeadCreditViewModel },
	) => Observable<LELodasoftCommonModelsLeadsLeadCreditViewModel>;

	/**
	 * @param { number } leadCreditId undefined
	 */
	readonly Lead_GetLeadCreditById: (
		leadCreditId: number,
	) => Observable<LELodasoftCommonModelsLeadsLeadCreditViewModel>;

	/**
	 * @param { number } leadCreditId undefined
	 * @param { object } parameters
	 */
	readonly Lead_UpdateLeadCredit: (
		leadCreditId: number,
		parameters: { body: LELodasoftCommonModelsLeadsLeadCreditViewModel },
	) => Observable<LELodasoftCommonModelsLeadsLeadCreditViewModel>;

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
	readonly Lead_GetLeadCampaignById: (
		leadCampaignId: number,
	) => Observable<LELodasoftCommonModelsLeadsLeadCampaignViewModel>;

	/**
	 * @param { number } leadCampaignId undefined
	 * @param { object } parameters
	 */
	readonly Lead_UpdateLeadCampaign: (
		leadCampaignId: number,
		parameters: { body: LELodasoftCommonModelsLeadsLeadCampaignViewModel },
	) => Observable<LELodasoftCommonModelsLeadsLeadCampaignViewModel>;

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
	readonly Lead_GetLeadListsByLeadId: (
		leadId: number,
	) => Observable<Array<LELodasoftCommonModelsLeadsLeadListViewModel>>;

	/**
	 * @param { number } leadListId undefined
	 */
	readonly Lead_GetLeadListById: (leadListId: number) => Observable<LELodasoftCommonModelsLeadsLeadListViewModel>;

	/**
	 * @param { number } leadListId undefined
	 * @param { object } parameters
	 */
	readonly Lead_UpdateLeadList: (
		leadListId: number,
		parameters: { body: LELodasoftCommonModelsLeadsLeadListViewModel },
	) => Observable<LELodasoftCommonModelsLeadsLeadListViewModel>;

	/**
	 * @param { number } leadListId undefined
	 */
	readonly Lead_DeleteLeadList: (leadListId: number) => Observable<unknown>;

	/**
	 * @param { number } leadListId undefined
	 */
	readonly Lead_GetLeadsByLeadListId: (
		leadListId: number,
	) => Observable<Array<LELodasoftCommonModelsLeadsLeadViewModel>>;

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
		query?: { campaignId: Option<number>; dateCreatedStart: Option<string>; dateCreatedEnd: Option<string> };
	}) => Observable<LELodasoftCommonModelsLeadsReportsLeadMilestonesReportResponse>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Lead_GetLeadPerformanceReport: (parameters: {
		query?: { campaignId: Option<number>; dateCreatedStart: Option<string>; dateCreatedEnd: Option<string> };
	}) => Observable<LELodasoftCommonModelsLeadsReportsLeadPerformanceReportResponse>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Lead_GetLeadPerformanceReportDetail: (parameters: {
		query?: { campaignId: Option<number>; dateCreatedStart: Option<string>; dateCreatedEnd: Option<string> };
	}) => Observable<LELodasoftCommonModelsLeadsReportsLeadPerformanceReportDetailResponse>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Lead_GetLeadStatusReport: (parameters: {
		query?: { CampaignId: Option<number>; DateCreatedStart: Option<string>; DateCreatedEnd: Option<string> };
	}) => Observable<LELodasoftCommonModelsLeadsReportsLeadStatusReportResponse>;

	/**
	 * @param { number } leadId undefined
	 */
	readonly Lead_GetTaskCountByLeadId: (leadId: number) => Observable<LELodasoftDataAccessModelsTaskCountModel>;

	/**
	 * Returns the LeadViewModel that was parsed from the Du file (not persisted)
	 */
	readonly Lead_ParseDu: () => Observable<LELodasoftApiModelsMortgageParseDuLeadViewModel>;
};

export const leadController = asks(
	(e: { API_CLIENT: TAPIClient; PREFIX: string }): LeadController => ({
		Lead_GetAllLeads: parameters => {
			const encoded = partial({
				query: type({
					showArchived: createOptionFromOptional(boolean, 'showArchived'),
					campaignId: createOptionFromOptional(number, 'campaignId'),
					dateInsertedStart: createOptionFromOptional(string, 'dateInsertedStart'),
					dateInsertedEnd: createOptionFromOptional(string, 'dateInsertedEnd'),
				}),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/leads/all`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsLeadsLeadViewModelIO)));
		},

		Lead_GetAllUnassignedLeads: parameters => {
			const encoded = partial({
				query: type({ showArchived: createOptionFromOptional(boolean, 'showArchived') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/leads/unassigned`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsLeadsLeadViewModelIO)));
		},

		Lead_GetLeadById: leadId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/leads/${encodeURIComponent(number.encode(leadId).toString())}`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftCommonModelsLeadsLeadViewModelIO));
		},

		Lead_UpdateLead: (leadId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsLeadsLeadViewModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/leads/${encodeURIComponent(number.encode(leadId).toString())}`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsLeadsLeadViewModelIO));
		},

		Lead_DeleteLead: leadId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/leads/${encodeURIComponent(number.encode(leadId).toString())}`,
				method: 'DELETE',
			}).pipe(decodeAndMap(unknownType));
		},

		Lead_InsertLead: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsLeadsLeadViewModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/leads`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsLeadsLeadViewModelIO));
		},

		Lead_ConvertLeadToBorrower: (leadId, referralSourceType) => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/leads/${encodeURIComponent(
					number.encode(leadId).toString(),
				)}/convert/${encodeURIComponent(number.encode(referralSourceType).toString())}`,
				method: 'POST',
			}).pipe(decodeAndMap(unknownType));
		},

		Lead_ImportListUserForCompany: parameters => {
			const encoded = partial({
				query: type({ companyId: createOptionFromOptional(number, 'companyId') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/leads/import-leads`,
				method: 'POST',
				query: encoded.query,
			}).pipe(decodeAndMap(LELodasoftCommonModelsLeadsLeadViewModelIO));
		},

		Lead_ExportLeads: () => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/leads/export-leads`,
				method: 'GET',
			}).pipe(decodeAndMap(unknownType));
		},

		Lead_GetLeadEventsByLeadId: leadId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/leads/${encodeURIComponent(number.encode(leadId).toString())}/events`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsLeadsLeadEventViewModelIO)));
		},

		Lead_InsertLeadEvent: (leadId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsLeadsLeadEventViewModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/leads/${encodeURIComponent(number.encode(leadId).toString())}/events`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsLeadsLeadEventViewModelIO));
		},

		Lead_GetLeadEventById: leadEventId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/leads/events/${encodeURIComponent(number.encode(leadEventId).toString())}`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftCommonModelsLeadsLeadEventViewModelIO));
		},

		Lead_UpdateLeadEvent: (leadEventId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsLeadsLeadEventViewModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/leads/events/${encodeURIComponent(number.encode(leadEventId).toString())}`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsLeadsLeadEventViewModelIO));
		},

		Lead_DeleteLeadEvent: leadEventId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/leads/events/${encodeURIComponent(number.encode(leadEventId).toString())}`,
				method: 'DELETE',
			}).pipe(decodeAndMap(unknownType));
		},

		Lead_GetLeadEmploymentsByLeadId: leadId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/leads/${encodeURIComponent(number.encode(leadId).toString())}/employments`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsLeadsLeadEmploymentViewModelIO)));
		},

		Lead_InsertLeadEmployment: (leadId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsLeadsLeadEmploymentViewModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/leads/${encodeURIComponent(number.encode(leadId).toString())}/employments`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsLeadsLeadEmploymentViewModelIO));
		},

		Lead_GetLeadEmploymentById: leadEmploymentId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/leads/employments/${encodeURIComponent(
					number.encode(leadEmploymentId).toString(),
				)}`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftCommonModelsLeadsLeadEmploymentViewModelIO));
		},

		Lead_UpdateLeadEmployment: (leadEmploymentId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsLeadsLeadEmploymentViewModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/leads/employments/${encodeURIComponent(
					number.encode(leadEmploymentId).toString(),
				)}`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsLeadsLeadEmploymentViewModelIO));
		},

		Lead_DeleteLeadEmployment: leadEmploymentId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/leads/employments/${encodeURIComponent(
					number.encode(leadEmploymentId).toString(),
				)}`,
				method: 'DELETE',
			}).pipe(decodeAndMap(unknownType));
		},

		Lead_GetLeadCreditsByLeadId: leadId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/leads/${encodeURIComponent(number.encode(leadId).toString())}/credits`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsLeadsLeadCreditViewModelIO)));
		},

		Lead_InsertLeadCredit: (leadId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsLeadsLeadCreditViewModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/leads/${encodeURIComponent(number.encode(leadId).toString())}/credits`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsLeadsLeadCreditViewModelIO));
		},

		Lead_GetLeadCreditById: leadCreditId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/leads/credits/${encodeURIComponent(number.encode(leadCreditId).toString())}`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftCommonModelsLeadsLeadCreditViewModelIO));
		},

		Lead_UpdateLeadCredit: (leadCreditId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsLeadsLeadCreditViewModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/leads/credits/${encodeURIComponent(number.encode(leadCreditId).toString())}`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsLeadsLeadCreditViewModelIO));
		},

		Lead_DeleteLeadCredit: leadCreditId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/leads/credits/${encodeURIComponent(number.encode(leadCreditId).toString())}`,
				method: 'DELETE',
			}).pipe(decodeAndMap(unknownType));
		},

		Lead_GetAllLeadCampaigns: () => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/leads/campaigns`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsLeadsLeadCampaignViewModelIO)));
		},

		Lead_InsertLeadCampaign: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsLeadsLeadCampaignViewModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/leads/campaigns`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsLeadsLeadCampaignViewModelIO));
		},

		Lead_GetLeadCampaignById: leadCampaignId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/leads/campaigns/${encodeURIComponent(number.encode(leadCampaignId).toString())}`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftCommonModelsLeadsLeadCampaignViewModelIO));
		},

		Lead_UpdateLeadCampaign: (leadCampaignId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsLeadsLeadCampaignViewModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/leads/campaigns/${encodeURIComponent(number.encode(leadCampaignId).toString())}`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsLeadsLeadCampaignViewModelIO));
		},

		Lead_DeleteLeadCampaign: leadCampaignId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/leads/campaigns/${encodeURIComponent(number.encode(leadCampaignId).toString())}`,
				method: 'DELETE',
			}).pipe(decodeAndMap(unknownType));
		},

		Lead_GetAllLeadLists: () => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/leads/lists`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsLeadsLeadListViewModelIO)));
		},

		Lead_InsertLeadList: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsLeadsLeadListViewModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/leads/lists`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsLeadsLeadListViewModelIO));
		},

		Lead_GetLeadListsByLeadId: leadId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/leads/${encodeURIComponent(number.encode(leadId).toString())}/lists`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsLeadsLeadListViewModelIO)));
		},

		Lead_GetLeadListById: leadListId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/leads/lists/${encodeURIComponent(number.encode(leadListId).toString())}`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftCommonModelsLeadsLeadListViewModelIO));
		},

		Lead_UpdateLeadList: (leadListId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsLeadsLeadListViewModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/leads/lists/${encodeURIComponent(number.encode(leadListId).toString())}`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsLeadsLeadListViewModelIO));
		},

		Lead_DeleteLeadList: leadListId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/leads/lists/${encodeURIComponent(number.encode(leadListId).toString())}`,
				method: 'DELETE',
			}).pipe(decodeAndMap(unknownType));
		},

		Lead_GetLeadsByLeadListId: leadListId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/leads/lists/${encodeURIComponent(number.encode(leadListId).toString())}/leads`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsLeadsLeadViewModelIO)));
		},

		Lead_AddLeadToLeadList: (leadListId, leadId) => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/leads/lists/${encodeURIComponent(
					number.encode(leadListId).toString(),
				)}/leads/${encodeURIComponent(number.encode(leadId).toString())}`,
				method: 'POST',
			}).pipe(decodeAndMap(unknownType));
		},

		Lead_RemoveLeadFromLeadList: (leadListId, leadId) => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/leads/lists/${encodeURIComponent(
					number.encode(leadListId).toString(),
				)}/leads/${encodeURIComponent(number.encode(leadId).toString())}`,
				method: 'DELETE',
			}).pipe(decodeAndMap(unknownType));
		},

		Lead_GetLeadMilestonesReport: parameters => {
			const encoded = partial({
				query: type({
					campaignId: createOptionFromOptional(number, 'campaignId'),
					dateCreatedStart: createOptionFromOptional(string, 'dateCreatedStart'),
					dateCreatedEnd: createOptionFromOptional(string, 'dateCreatedEnd'),
				}),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/leads/reports/milestones`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(LELodasoftCommonModelsLeadsReportsLeadMilestonesReportResponseIO));
		},

		Lead_GetLeadPerformanceReport: parameters => {
			const encoded = partial({
				query: type({
					campaignId: createOptionFromOptional(number, 'campaignId'),
					dateCreatedStart: createOptionFromOptional(string, 'dateCreatedStart'),
					dateCreatedEnd: createOptionFromOptional(string, 'dateCreatedEnd'),
				}),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/leads/reports/performance`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(LELodasoftCommonModelsLeadsReportsLeadPerformanceReportResponseIO));
		},

		Lead_GetLeadPerformanceReportDetail: parameters => {
			const encoded = partial({
				query: type({
					campaignId: createOptionFromOptional(number, 'campaignId'),
					dateCreatedStart: createOptionFromOptional(string, 'dateCreatedStart'),
					dateCreatedEnd: createOptionFromOptional(string, 'dateCreatedEnd'),
				}),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/leads/reports/performance-detail`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(LELodasoftCommonModelsLeadsReportsLeadPerformanceReportDetailResponseIO));
		},

		Lead_GetLeadStatusReport: parameters => {
			const encoded = partial({
				query: type({
					CampaignId: createOptionFromOptional(number, 'CampaignId'),
					DateCreatedStart: createOptionFromOptional(string, 'DateCreatedStart'),
					DateCreatedEnd: createOptionFromOptional(string, 'DateCreatedEnd'),
				}),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/leads/reports/status`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(LELodasoftCommonModelsLeadsReportsLeadStatusReportResponseIO));
		},

		Lead_GetTaskCountByLeadId: leadId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/leads/${encodeURIComponent(
					number.encode(leadId).toString(),
				)}/GetTaskCountByLeadId`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftDataAccessModelsTaskCountModelIO));
		},

		Lead_ParseDu: () => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/leads/parse-du`,
				method: 'POST',
			}).pipe(decodeAndMap(LELodasoftApiModelsMortgageParseDuLeadViewModelIO));
		},
	}),
);
