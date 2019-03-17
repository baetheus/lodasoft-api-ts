import { ResponseValiationError, TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsAdminEmailCampaignViewModel,
	LELodasoftCommonModelsAdminEmailCampaignViewModelIO,
} from '../definitions/LELodasoftCommonModelsAdminEmailCampaignViewModel';
import {
	LELodasoftCommonModelsAdminEmailTemplateViewModel,
	LELodasoftCommonModelsAdminEmailTemplateViewModelIO,
} from '../definitions/LELodasoftCommonModelsAdminEmailTemplateViewModel';
import { unknownType } from '../utils/utils';
import { fromEither, AsyncData } from '@nll/dux';
import { Option } from 'fp-ts/lib/Option';
import { asks } from 'fp-ts/lib/Reader';
import { array, partial, number, string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export type EmailCampaignController = {
	readonly EmailCampaign_GetAllEmailCampaigns: () => Observable<
		AsyncData<Error, Array<LELodasoftCommonModelsAdminEmailCampaignViewModel>>
	>;

	/**
	 * @param { object } parameters
	 */
	readonly EmailCampaign_InsertEmailCampaign: (parameters: {
		body: LELodasoftCommonModelsAdminEmailCampaignViewModel;
	}) => Observable<AsyncData<Error, LELodasoftCommonModelsAdminEmailCampaignViewModel>>;

	/**
	 * @param { number } emailCampaignId undefined
	 */
	readonly EmailCampaign_GetEmailCampaignById: (
		emailCampaignId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsAdminEmailCampaignViewModel>>;

	/**
	 * @param { number } emailCampaignId undefined
	 * @param { object } parameters
	 */
	readonly EmailCampaign_UpdateEmailCampaign: (
		emailCampaignId: number,
		parameters: { body: LELodasoftCommonModelsAdminEmailCampaignViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsAdminEmailCampaignViewModel>>;

	/**
	 * @param { number } emailCampaignId undefined
	 */
	readonly EmailCampaign_DeleteEmailCampaign: (emailCampaignId: number) => Observable<AsyncData<Error, unknown>>;

	readonly EmailCampaign_GetAllEmailTemplates: () => Observable<
		AsyncData<Error, Array<LELodasoftCommonModelsAdminEmailTemplateViewModel>>
	>;

	/**
	 * @param { object } parameters
	 */
	readonly EmailCampaign_InsertEmailTemplate: (parameters: {
		body: LELodasoftCommonModelsAdminEmailTemplateViewModel;
	}) => Observable<AsyncData<Error, LELodasoftCommonModelsAdminEmailTemplateViewModel>>;

	/**
	 * @param { object } [parameters]
	 */
	readonly EmailCampaign_GetAllManualEmailTemplates: (parameters: {
		query?: { emailTemplateType: Option<string> };
	}) => Observable<AsyncData<Error, Array<LELodasoftCommonModelsAdminEmailTemplateViewModel>>>;

	/**
	 * @param { number } emailTemplateId undefined
	 * @param { object } [parameters]
	 */
	readonly EmailCampaign_GetManualEmailTemplateById: (
		emailTemplateId: number,
		parameters: { query?: { loanId: Option<number>; leadId: Option<number> } },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsAdminEmailTemplateViewModel>>;

	/**
	 * @param { number } emailTemplateId undefined
	 */
	readonly EmailCampaign_GetEmailTemplateById: (
		emailTemplateId: number,
	) => Observable<AsyncData<Error, LELodasoftCommonModelsAdminEmailTemplateViewModel>>;

	/**
	 * @param { number } emailTemplateId undefined
	 * @param { object } parameters
	 */
	readonly EmailCampaign_UpdateEmailTemplate: (
		emailTemplateId: number,
		parameters: { body: LELodasoftCommonModelsAdminEmailTemplateViewModel },
	) => Observable<AsyncData<Error, LELodasoftCommonModelsAdminEmailTemplateViewModel>>;

	/**
	 * @param { number } emailTemplateId undefined
	 */
	readonly EmailCampaign_DeleteEmailTemplate: (emailTemplateId: number) => Observable<AsyncData<Error, unknown>>;
};

export const emailCampaignController = asks(
	(e: { apiClient: TAPIClient }): EmailCampaignController => ({
		EmailCampaign_GetAllEmailCampaigns: () => {
			return e.apiClient
				.request({
					url: `/api/admin/email-campaigns/campaigns`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsAdminEmailCampaignViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		EmailCampaign_InsertEmailCampaign: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsAdminEmailCampaignViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/admin/email-campaigns/campaigns`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsAdminEmailCampaignViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		EmailCampaign_GetEmailCampaignById: emailCampaignId => {
			return e.apiClient
				.request({
					url: `/api/admin/email-campaigns/campaigns/${encodeURIComponent(
						number.encode(emailCampaignId).toString(),
					)}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsAdminEmailCampaignViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		EmailCampaign_UpdateEmailCampaign: (emailCampaignId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsAdminEmailCampaignViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/admin/email-campaigns/campaigns/${encodeURIComponent(
						number.encode(emailCampaignId).toString(),
					)}`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsAdminEmailCampaignViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		EmailCampaign_DeleteEmailCampaign: emailCampaignId => {
			return e.apiClient
				.request({
					url: `/api/admin/email-campaigns/campaigns/${encodeURIComponent(
						number.encode(emailCampaignId).toString(),
					)}`,
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

		EmailCampaign_GetAllEmailTemplates: () => {
			return e.apiClient
				.request({
					url: `/api/admin/email-campaigns/templates`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsAdminEmailTemplateViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		EmailCampaign_InsertEmailTemplate: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsAdminEmailTemplateViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/admin/email-campaigns/templates`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsAdminEmailTemplateViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		EmailCampaign_GetAllManualEmailTemplates: parameters => {
			const encoded = partial({ query: type({ emailTemplateType: createOptionFromNullable(string) }) }).encode(
				parameters,
			);

			return e.apiClient
				.request({
					url: `/api/admin/email-campaigns/manual-templates`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								array(LELodasoftCommonModelsAdminEmailTemplateViewModelIO)
									.decode(value)
									.mapLeft(ResponseValiationError.create),
							),
						),
					),
				);
		},

		EmailCampaign_GetManualEmailTemplateById: (emailTemplateId, parameters) => {
			const encoded = partial({
				query: type({ loanId: createOptionFromNullable(number), leadId: createOptionFromNullable(number) }),
			}).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/admin/email-campaigns/manual-templates/${encodeURIComponent(
						number.encode(emailTemplateId).toString(),
					)}`,
					method: 'GET',
					query: encoded.query,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsAdminEmailTemplateViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		EmailCampaign_GetEmailTemplateById: emailTemplateId => {
			return e.apiClient
				.request({
					url: `/api/admin/email-campaigns/templates/${encodeURIComponent(
						number.encode(emailTemplateId).toString(),
					)}`,
					method: 'GET',
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsAdminEmailTemplateViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		EmailCampaign_UpdateEmailTemplate: (emailTemplateId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsAdminEmailTemplateViewModelIO }).encode(parameters);

			return e.apiClient
				.request({
					url: `/api/admin/email-campaigns/templates/${encodeURIComponent(
						number.encode(emailTemplateId).toString(),
					)}`,
					method: 'POST',

					body: encoded.body,
				})
				.pipe(
					map(data =>
						data.chain(value =>
							fromEither(
								LELodasoftCommonModelsAdminEmailTemplateViewModelIO.decode(value).mapLeft(
									ResponseValiationError.create,
								),
							),
						),
					),
				);
		},

		EmailCampaign_DeleteEmailTemplate: emailTemplateId => {
			return e.apiClient
				.request({
					url: `/api/admin/email-campaigns/templates/${encodeURIComponent(
						number.encode(emailTemplateId).toString(),
					)}`,
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
	}),
);
