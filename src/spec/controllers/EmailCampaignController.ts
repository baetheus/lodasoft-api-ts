import { TAPIClient } from '../client/client';
import {
	LELodasoftCommonModelsAdminEmailCampaignViewModel,
	LELodasoftCommonModelsAdminEmailCampaignViewModelIO,
} from '../definitions/LELodasoftCommonModelsAdminEmailCampaignViewModel';
import {
	LELodasoftCommonModelsAdminEmailTemplateViewModel,
	LELodasoftCommonModelsAdminEmailTemplateViewModelIO,
} from '../definitions/LELodasoftCommonModelsAdminEmailTemplateViewModel';
import { decodeAndMap, unknownType } from '../utils/utils';
import { Option } from 'fp-ts/lib/Option';
import { asks } from 'fp-ts/lib/Reader';
import { array, partial, number, string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';
import { Observable } from 'rxjs';

export type EmailCampaignController = {
	readonly EmailCampaign_GetAllEmailCampaigns: () => Observable<
		Array<LELodasoftCommonModelsAdminEmailCampaignViewModel>
	>;

	/**
	 * @param { object } parameters
	 */
	readonly EmailCampaign_InsertEmailCampaign: (parameters: {
		body: LELodasoftCommonModelsAdminEmailCampaignViewModel;
	}) => Observable<LELodasoftCommonModelsAdminEmailCampaignViewModel>;

	/**
	 * @param { number } emailCampaignId undefined
	 */
	readonly EmailCampaign_GetEmailCampaignById: (
		emailCampaignId: number,
	) => Observable<LELodasoftCommonModelsAdminEmailCampaignViewModel>;

	/**
	 * @param { number } emailCampaignId undefined
	 * @param { object } parameters
	 */
	readonly EmailCampaign_UpdateEmailCampaign: (
		emailCampaignId: number,
		parameters: { body: LELodasoftCommonModelsAdminEmailCampaignViewModel },
	) => Observable<LELodasoftCommonModelsAdminEmailCampaignViewModel>;

	/**
	 * @param { number } emailCampaignId undefined
	 */
	readonly EmailCampaign_DeleteEmailCampaign: (emailCampaignId: number) => Observable<unknown>;

	readonly EmailCampaign_GetAllEmailTemplates: () => Observable<
		Array<LELodasoftCommonModelsAdminEmailTemplateViewModel>
	>;

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
		query?: { emailTemplateType: Option<string> };
	}) => Observable<Array<LELodasoftCommonModelsAdminEmailTemplateViewModel>>;

	/**
	 * @param { number } emailTemplateId undefined
	 * @param { object } [parameters]
	 */
	readonly EmailCampaign_GetManualEmailTemplateById: (
		emailTemplateId: number,
		parameters: { query?: { loanId: Option<number>; leadId: Option<number> } },
	) => Observable<LELodasoftCommonModelsAdminEmailTemplateViewModel>;

	/**
	 * @param { number } emailTemplateId undefined
	 */
	readonly EmailCampaign_GetEmailTemplateById: (
		emailTemplateId: number,
	) => Observable<LELodasoftCommonModelsAdminEmailTemplateViewModel>;

	/**
	 * @param { number } emailTemplateId undefined
	 * @param { object } parameters
	 */
	readonly EmailCampaign_UpdateEmailTemplate: (
		emailTemplateId: number,
		parameters: { body: LELodasoftCommonModelsAdminEmailTemplateViewModel },
	) => Observable<LELodasoftCommonModelsAdminEmailTemplateViewModel>;

	/**
	 * @param { number } emailTemplateId undefined
	 */
	readonly EmailCampaign_DeleteEmailTemplate: (emailTemplateId: number) => Observable<unknown>;
};

export const emailCampaignController = asks(
	(e: { API_CLIENT: TAPIClient; PREFIX: string }): EmailCampaignController => ({
		EmailCampaign_GetAllEmailCampaigns: () => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/admin/email-campaigns/campaigns`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsAdminEmailCampaignViewModelIO)));
		},

		EmailCampaign_InsertEmailCampaign: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsAdminEmailCampaignViewModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/admin/email-campaigns/campaigns`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsAdminEmailCampaignViewModelIO));
		},

		EmailCampaign_GetEmailCampaignById: emailCampaignId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/admin/email-campaigns/campaigns/${encodeURIComponent(
					number.encode(emailCampaignId).toString(),
				)}`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftCommonModelsAdminEmailCampaignViewModelIO));
		},

		EmailCampaign_UpdateEmailCampaign: (emailCampaignId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsAdminEmailCampaignViewModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/admin/email-campaigns/campaigns/${encodeURIComponent(
					number.encode(emailCampaignId).toString(),
				)}`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsAdminEmailCampaignViewModelIO));
		},

		EmailCampaign_DeleteEmailCampaign: emailCampaignId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/admin/email-campaigns/campaigns/${encodeURIComponent(
					number.encode(emailCampaignId).toString(),
				)}`,
				method: 'DELETE',
			}).pipe(decodeAndMap(unknownType));
		},

		EmailCampaign_GetAllEmailTemplates: () => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/admin/email-campaigns/templates`,
				method: 'GET',
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsAdminEmailTemplateViewModelIO)));
		},

		EmailCampaign_InsertEmailTemplate: parameters => {
			const encoded = partial({ body: LELodasoftCommonModelsAdminEmailTemplateViewModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/admin/email-campaigns/templates`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsAdminEmailTemplateViewModelIO));
		},

		EmailCampaign_GetAllManualEmailTemplates: parameters => {
			const encoded = partial({
				query: type({ emailTemplateType: createOptionFromNullable(string, 'emailTemplateType') }),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/admin/email-campaigns/manual-templates`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(array(LELodasoftCommonModelsAdminEmailTemplateViewModelIO)));
		},

		EmailCampaign_GetManualEmailTemplateById: (emailTemplateId, parameters) => {
			const encoded = partial({
				query: type({
					loanId: createOptionFromNullable(number, 'loanId'),
					leadId: createOptionFromNullable(number, 'leadId'),
				}),
			}).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/admin/email-campaigns/manual-templates/${encodeURIComponent(
					number.encode(emailTemplateId).toString(),
				)}`,
				method: 'GET',
				query: encoded.query,
			}).pipe(decodeAndMap(LELodasoftCommonModelsAdminEmailTemplateViewModelIO));
		},

		EmailCampaign_GetEmailTemplateById: emailTemplateId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/admin/email-campaigns/templates/${encodeURIComponent(
					number.encode(emailTemplateId).toString(),
				)}`,
				method: 'GET',
			}).pipe(decodeAndMap(LELodasoftCommonModelsAdminEmailTemplateViewModelIO));
		},

		EmailCampaign_UpdateEmailTemplate: (emailTemplateId, parameters) => {
			const encoded = partial({ body: LELodasoftCommonModelsAdminEmailTemplateViewModelIO }).encode(parameters);

			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/admin/email-campaigns/templates/${encodeURIComponent(
					number.encode(emailTemplateId).toString(),
				)}`,
				method: 'POST',

				body: encoded.body,
			}).pipe(decodeAndMap(LELodasoftCommonModelsAdminEmailTemplateViewModelIO));
		},

		EmailCampaign_DeleteEmailTemplate: emailTemplateId => {
			return e.API_CLIENT.request({
				url: `${e.PREFIX}/api/admin/email-campaigns/templates/${encodeURIComponent(
					number.encode(emailTemplateId).toString(),
				)}`,
				method: 'DELETE',
			}).pipe(decodeAndMap(unknownType));
		},
	}),
);
