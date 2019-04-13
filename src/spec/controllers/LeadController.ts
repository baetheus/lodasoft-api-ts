import { ResponseValiationError, TAPIClient } from '../client/client';
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
import { unknownType } from '../utils/utils';
import { fromEither, AsyncData } from '@nll/dux';
import { Option } from 'fp-ts/lib/Option';
import { asks } from 'fp-ts/lib/Reader';
import { array, boolean, number, string, type, partial } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
	}) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsLeadsLeadViewModel>>>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Lead_GetAllUnassignedLeads: (parameters: {
		query?: { showArchived: Option<boolean> };
	}) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsLeadsLeadViewModel>>>;

	/**
	 * @param { number } leadId undefined
	 */
	readonly Lead_GetLeadById: (
		leadId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsLeadsLeadViewModel>>;

	/**
	 * @param { number } leadId undefined
	 * @param { object } parameters
	 */
	readonly Lead_UpdateLead: (
		leadId: number,
		parameters: { body: LELodasoftCommonModelsLeadsLeadViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsLeadsLeadViewModel>>;

	/**
	 * @param { number } leadId undefined
	 */
	readonly Lead_DeleteLead: (leadId: number) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } parameters
	 */
	readonly Lead_InsertLead: (parameters: {
		body: LELodasoftCommonModelsLeadsLeadViewModel;
	}) => Observable<AsyncData<Error, LELodasoftCommonModelsLeadsLeadViewModel>>;

	/**
	 * @param { number } leadId undefined
	 * @param { number } referralSourceType undefined
	 */
	readonly Lead_ConvertLeadToBorrower: (
		leadId: number,
		referralSourceType: number,
	) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Lead_ImportListUserForCompany: (parameters: {
		query?: { companyId: Option<number> };
	}) => Observable<AsyncData<Error, LELodasoftCommonModelsLeadsLeadViewModel>>;

	readonly Lead_ExportLeads: () => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } leadId undefined
	 */
	readonly Lead_GetLeadEventsByLeadId: (
		leadId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsLeadsLeadEventViewModel>>>;

	/**
	 * @param { number } leadId undefined
	 * @param { object } parameters
	 */
	readonly Lead_InsertLeadEvent: (
		leadId: number,
		parameters: { body: LELodasoftCommonModelsLeadsLeadEventViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsLeadsLeadEventViewModel>>;

	/**
	 * @param { number } leadEventId undefined
	 */
	readonly Lead_GetLeadEventById: (
		leadEventId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsLeadsLeadEventViewModel>>;

	/**
	 * @param { number } leadEventId undefined
	 * @param { object } parameters
	 */
	readonly Lead_UpdateLeadEvent: (
		leadEventId: number,
		parameters: { body: LELodasoftCommonModelsLeadsLeadEventViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsLeadsLeadEventViewModel>>;

	/**
	 * @param { number } leadEventId undefined
	 */
	readonly Lead_DeleteLeadEvent: (leadEventId: number) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } leadId undefined
	 */
	readonly Lead_GetLeadEmploymentsByLeadId: (
		leadId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsLeadsLeadEmploymentViewModel>>>;

	/**
	 * @param { number } leadId undefined
	 * @param { object } parameters
	 */
	readonly Lead_InsertLeadEmployment: (
		leadId: number,
		parameters: { body: LELodasoftCommonModelsLeadsLeadEmploymentViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsLeadsLeadEmploymentViewModel>>;

	/**
	 * @param { number } leadEmploymentId undefined
	 */
	readonly Lead_GetLeadEmploymentById: (
		leadEmploymentId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsLeadsLeadEmploymentViewModel>>;

	/**
	 * @param { number } leadEmploymentId undefined
	 * @param { object } parameters
	 */
	readonly Lead_UpdateLeadEmployment: (
		leadEmploymentId: number,
		parameters: { body: LELodasoftCommonModelsLeadsLeadEmploymentViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsLeadsLeadEmploymentViewModel>>;

	/**
	 * @param { number } leadEmploymentId undefined
	 */
	readonly Lead_DeleteLeadEmployment: (leadEmploymentId: number) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } leadId undefined
	 */
	readonly Lead_GetLeadCreditsByLeadId: (
		leadId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsLeadsLeadCreditViewModel>>>;

	/**
	 * @param { number } leadId undefined
	 * @param { object } parameters
	 */
	readonly Lead_InsertLeadCredit: (
		leadId: number,
		parameters: { body: LELodasoftCommonModelsLeadsLeadCreditViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsLeadsLeadCreditViewModel>>;

	/**
	 * @param { number } leadCreditId undefined
	 */
	readonly Lead_GetLeadCreditById: (
		leadCreditId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsLeadsLeadCreditViewModel>>;

	/**
	 * @param { number } leadCreditId undefined
	 * @param { object } parameters
	 */
	readonly Lead_UpdateLeadCredit: (
		leadCreditId: number,
		parameters: { body: LELodasoftCommonModelsLeadsLeadCreditViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsLeadsLeadCreditViewModel>>;

	/**
	 * @param { number } leadCreditId undefined
	 */
	readonly Lead_DeleteLeadCredit: (leadCreditId: number) => Observable<AsyncData<Error, unknown>>;

	readonly Lead_GetAllLeadCampaigns: () => Observable<
		AsyncData<Error, Array<LELodasoftCommonModelsLeadsLeadCampaignViewModel>>
	>;

	/**
	 * @param { object } parameters
	 */
	readonly Lead_InsertLeadCampaign: (parameters: {
		body: LELodasoftCommonModelsLeadsLeadCampaignViewModel;
	}) => Observable<AsyncData<Error, LELodasoftCommonModelsLeadsLeadCampaignViewModel>>;

	/**
	 * @param { number } leadCampaignId undefined
	 */
	readonly Lead_GetLeadCampaignById: (
		leadCampaignId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsLeadsLeadCampaignViewModel>>;

	/**
	 * @param { number } leadCampaignId undefined
	 * @param { object } parameters
	 */
	readonly Lead_UpdateLeadCampaign: (
		leadCampaignId: number,
		parameters: { body: LELodasoftCommonModelsLeadsLeadCampaignViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsLeadsLeadCampaignViewModel>>;

	/**
	 * @param { number } leadCampaignId undefined
	 */
	readonly Lead_DeleteLeadCampaign: (leadCampaignId: number) => Observable<AsyncData<Error, unknown>>;

	readonly Lead_GetAllLeadLists: () => Observable<
		AsyncData<Error, Array<LELodasoftCommonModelsLeadsLeadListViewModel>>
	>;

	/**
	 * @param { object } parameters
	 */
	readonly Lead_InsertLeadList: (parameters: {
		body: LELodasoftCommonModelsLeadsLeadListViewModel;
	}) => Observable<AsyncData<Error, LELodasoftCommonModelsLeadsLeadListViewModel>>;

	/**
	 * @param { number } leadId undefined
	 */
	readonly Lead_GetLeadListsByLeadId: (
		leadId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsLeadsLeadListViewModel>>>;

	/**
	 * @param { number } leadListId undefined
	 */
	readonly Lead_GetLeadListById: (
		leadListId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsLeadsLeadListViewModel>>;

	/**
	 * @param { number } leadListId undefined
	 * @param { object } parameters
	 */
	readonly Lead_UpdateLeadList: (
		leadListId: number,
		parameters: { body: LELodasoftCommonModelsLeadsLeadListViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsLeadsLeadListViewModel>>;

	/**
	 * @param { number } leadListId undefined
	 */
	readonly Lead_DeleteLeadList: (leadListId: number) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } leadListId undefined
	 */
	readonly Lead_GetLeadsByLeadListId: (
		leadListId: number,
	) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsLeadsLeadViewModel>>>;

	/**
	 * @param { number } leadListId undefined
	 * @param { number } leadId undefined
	 */
	readonly Lead_AddLeadToLeadList: (leadListId: number, leadId: number) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { number } leadListId undefined
	 * @param { number } leadId undefined
	 */
	readonly Lead_RemoveLeadFromLeadList: (leadListId: number, leadId: number) => Observable<AsyncData<Error, unknown>>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Lead_GetLeadMilestonesReport: (parameters: {
		query?: { campaignId: Option<number>; dateCreatedStart: Option<string>; dateCreatedEnd: Option<string> };
	}) => Observable<AsyncData<Error, LELodasoftCommonModelsLeadsReportsLeadMilestonesReportResponse>>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Lead_GetLeadPerformanceReport: (parameters: {
		query?: { campaignId: Option<number>; dateCreatedStart: Option<string>; dateCreatedEnd: Option<string> };
	}) => Observable<AsyncData<Error, LELodasoftCommonModelsLeadsReportsLeadPerformanceReportResponse>>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Lead_GetLeadPerformanceReportDetail: (parameters: {
		query?: { campaignId: Option<number>; dateCreatedStart: Option<string>; dateCreatedEnd: Option<string> };
	}) => Observable<AsyncData<Error, LELodasoftCommonModelsLeadsReportsLeadPerformanceReportDetailResponse>>;

	/**
	 * @param { object } [parameters]
	 */
	readonly Lead_GetLeadStatusReport: (parameters: {
		query?: { CampaignId: Option<number>; DateCreatedStart: Option<string>; DateCreatedEnd: Option<string> };
	}) => Observable<AsyncData<Error, LELodasoftCommonModelsLeadsReportsLeadStatusReportResponse>>;

	/**
	 * @param { number } leadId undefined
	 */
	readonly Lead_GetTaskCountByLeadId: (
		leadId: number,
	) => Observable<AsyncData<Error, LELodasoftDataAccessModelsTaskCountModel>>;
};

export const leadController = asks(
	(e: { apiClient: TAPIClient }): LeadController => ({
		Lead_GetAllLeads: parameters => {
			const encoded = partial({
				query: type({
					showArchived: createOptionFromNullable(boolean),
					campaignId: createOptionFromNullable(number),
					dateInsertedStart: createOptionFromNullable(string),
					dateInsertedEnd: createOptionFromNullable(string),
				}),
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/leads/all`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsLeadsLeadViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Lead_GetAllUnassignedLeads: parameters => {
			const encoded = partial({ query: type({ showArchived: createOptionFromNullable(boolean) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/leads/unassigned`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsLeadsLeadViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Lead_GetLeadById: leadId => {
			return e.apiClient
				.request({
					url: `/api/leads/${encodeURIComponent(number.encode(leadId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsLeadsLeadViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Lead_UpdateLead: (leadId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsLeadsLeadViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/leads/${encodeURIComponent(number.encode(leadId).toString())}`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsLeadsLeadViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Lead_DeleteLead: leadId => {
			return e.apiClient
				.request({
					url: `/api/leads/${encodeURIComponent(number.encode(leadId).toString())}`,
					method: 'DELETE',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Lead_InsertLead: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsLeadsLeadViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/leads`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsLeadsLeadViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Lead_ConvertLeadToBorrower: (leadId, referralSourceType) => {
			return e.apiClient
				.request({
					url: `/api/leads/${encodeURIComponent(
						number.encode(leadId).toString(),
					)}/convert/${encodeURIComponent(number.encode(referralSourceType).toString())}`,
					method: 'POST',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Lead_ImportListUserForCompany: parameters => {
			const encoded = partial({ query: type({ companyId: createOptionFromNullable(number) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/leads/import-leads`,
					method: 'POST',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsLeadsLeadViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Lead_ExportLeads: () => {
			return e.apiClient
				.request({
					url: `/api/leads/export-leads`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Lead_GetLeadEventsByLeadId: leadId => {
			return e.apiClient
				.request({
					url: `/api/leads/${encodeURIComponent(number.encode(leadId).toString())}/events`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsLeadsLeadEventViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Lead_InsertLeadEvent: (leadId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsLeadsLeadEventViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/leads/${encodeURIComponent(number.encode(leadId).toString())}/events`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsLeadsLeadEventViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Lead_GetLeadEventById: leadEventId => {
			return e.apiClient
				.request({
					url: `/api/leads/events/${encodeURIComponent(number.encode(leadEventId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsLeadsLeadEventViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Lead_UpdateLeadEvent: (leadEventId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsLeadsLeadEventViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/leads/events/${encodeURIComponent(number.encode(leadEventId).toString())}`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsLeadsLeadEventViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Lead_DeleteLeadEvent: leadEventId => {
			return e.apiClient
				.request({
					url: `/api/leads/events/${encodeURIComponent(number.encode(leadEventId).toString())}`,
					method: 'DELETE',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Lead_GetLeadEmploymentsByLeadId: leadId => {
			return e.apiClient
				.request({
					url: `/api/leads/${encodeURIComponent(number.encode(leadId).toString())}/employments`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsLeadsLeadEmploymentViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Lead_InsertLeadEmployment: (leadId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsLeadsLeadEmploymentViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/leads/${encodeURIComponent(number.encode(leadId).toString())}/employments`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsLeadsLeadEmploymentViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Lead_GetLeadEmploymentById: leadEmploymentId => {
			return e.apiClient
				.request({
					url: `/api/leads/employments/${encodeURIComponent(number.encode(leadEmploymentId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsLeadsLeadEmploymentViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Lead_UpdateLeadEmployment: (leadEmploymentId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsLeadsLeadEmploymentViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/leads/employments/${encodeURIComponent(number.encode(leadEmploymentId).toString())}`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsLeadsLeadEmploymentViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Lead_DeleteLeadEmployment: leadEmploymentId => {
			return e.apiClient
				.request({
					url: `/api/leads/employments/${encodeURIComponent(number.encode(leadEmploymentId).toString())}`,
					method: 'DELETE',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Lead_GetLeadCreditsByLeadId: leadId => {
			return e.apiClient
				.request({
					url: `/api/leads/${encodeURIComponent(number.encode(leadId).toString())}/credits`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsLeadsLeadCreditViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Lead_InsertLeadCredit: (leadId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsLeadsLeadCreditViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/leads/${encodeURIComponent(number.encode(leadId).toString())}/credits`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsLeadsLeadCreditViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Lead_GetLeadCreditById: leadCreditId => {
			return e.apiClient
				.request({
					url: `/api/leads/credits/${encodeURIComponent(number.encode(leadCreditId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsLeadsLeadCreditViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Lead_UpdateLeadCredit: (leadCreditId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsLeadsLeadCreditViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/leads/credits/${encodeURIComponent(number.encode(leadCreditId).toString())}`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsLeadsLeadCreditViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Lead_DeleteLeadCredit: leadCreditId => {
			return e.apiClient
				.request({
					url: `/api/leads/credits/${encodeURIComponent(number.encode(leadCreditId).toString())}`,
					method: 'DELETE',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Lead_GetAllLeadCampaigns: () => {
			return e.apiClient
				.request({
					url: `/api/leads/campaigns`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsLeadsLeadCampaignViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Lead_InsertLeadCampaign: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsLeadsLeadCampaignViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/leads/campaigns`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsLeadsLeadCampaignViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Lead_GetLeadCampaignById: leadCampaignId => {
			return e.apiClient
				.request({
					url: `/api/leads/campaigns/${encodeURIComponent(number.encode(leadCampaignId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsLeadsLeadCampaignViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Lead_UpdateLeadCampaign: (leadCampaignId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsLeadsLeadCampaignViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/leads/campaigns/${encodeURIComponent(number.encode(leadCampaignId).toString())}`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsLeadsLeadCampaignViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Lead_DeleteLeadCampaign: leadCampaignId => {
			return e.apiClient
				.request({
					url: `/api/leads/campaigns/${encodeURIComponent(number.encode(leadCampaignId).toString())}`,
					method: 'DELETE',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Lead_GetAllLeadLists: () => {
			return e.apiClient
				.request({
					url: `/api/leads/lists`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsLeadsLeadListViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Lead_InsertLeadList: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsLeadsLeadListViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/leads/lists`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsLeadsLeadListViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Lead_GetLeadListsByLeadId: leadId => {
			return e.apiClient
				.request({
					url: `/api/leads/${encodeURIComponent(number.encode(leadId).toString())}/lists`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsLeadsLeadListViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Lead_GetLeadListById: leadListId => {
			return e.apiClient
				.request({
					url: `/api/leads/lists/${encodeURIComponent(number.encode(leadListId).toString())}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsLeadsLeadListViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Lead_UpdateLeadList: (leadListId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsLeadsLeadListViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/leads/lists/${encodeURIComponent(number.encode(leadListId).toString())}`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsLeadsLeadListViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Lead_DeleteLeadList: leadListId => {
			return e.apiClient
				.request({
					url: `/api/leads/lists/${encodeURIComponent(number.encode(leadListId).toString())}`,
					method: 'DELETE',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Lead_GetLeadsByLeadListId: leadListId => {
			return e.apiClient
				.request({
					url: `/api/leads/lists/${encodeURIComponent(number.encode(leadListId).toString())}/leads`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsLeadsLeadViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Lead_AddLeadToLeadList: (leadListId, leadId) => {
			return e.apiClient
				.request({
					url: `/api/leads/lists/${encodeURIComponent(
						number.encode(leadListId).toString(),
					)}/leads/${encodeURIComponent(number.encode(leadId).toString())}`,
					method: 'POST',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Lead_RemoveLeadFromLeadList: (leadListId, leadId) => {
			return e.apiClient
				.request({
					url: `/api/leads/lists/${encodeURIComponent(
						number.encode(leadListId).toString(),
					)}/leads/${encodeURIComponent(number.encode(leadId).toString())}`,
					method: 'DELETE',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(unknownType.decode(value).mapLeft(ResponseValiationError.create)),
						),
					),
				);
		},

		Lead_GetLeadMilestonesReport: parameters => {
			const encoded = partial({
				query: type({
					campaignId: createOptionFromNullable(number),
					dateCreatedStart: createOptionFromNullable(string),
					dateCreatedEnd: createOptionFromNullable(string),
				}),
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/leads/reports/milestones`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsLeadsReportsLeadMilestonesReportResponseIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Lead_GetLeadPerformanceReport: parameters => {
			const encoded = partial({
				query: type({
					campaignId: createOptionFromNullable(number),
					dateCreatedStart: createOptionFromNullable(string),
					dateCreatedEnd: createOptionFromNullable(string),
				}),
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/leads/reports/performance`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsLeadsReportsLeadPerformanceReportResponseIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Lead_GetLeadPerformanceReportDetail: parameters => {
			const encoded = partial({
				query: type({
					campaignId: createOptionFromNullable(number),
					dateCreatedStart: createOptionFromNullable(string),
					dateCreatedEnd: createOptionFromNullable(string),
				}),
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/leads/reports/performance-detail`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsLeadsReportsLeadPerformanceReportDetailResponseIO.decode(
									value,
								).mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		Lead_GetLeadStatusReport: parameters => {
			const encoded = partial({
				query: type({
					CampaignId: createOptionFromNullable(number),
					DateCreatedStart: createOptionFromNullable(string),
					DateCreatedEnd: createOptionFromNullable(string),
				}),
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/leads/reports/status`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsLeadsReportsLeadStatusReportResponseIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		Lead_GetTaskCountByLeadId: leadId => {
			return e.apiClient
				.request({
					url: `/api/leads/${encodeURIComponent(number.encode(leadId).toString())}/GetTaskCountByLeadId`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftDataAccessModelsTaskCountModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},
	}),
);
