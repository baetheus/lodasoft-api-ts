import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

import {
	LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactDetails,
	LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactDetailsIO,
} from '../definitions/LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactDetails';
import {
	LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactLoanQuote,
	LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactLoanQuoteIO,
} from '../definitions/LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactLoanQuote';
import {
	LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactRecipient,
	LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactRecipientIO,
} from '../definitions/LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactRecipient';
import {
	LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactSender,
	LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactSenderIO,
} from '../definitions/LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactSender';
import { createEnumType } from '../utils/utils';

export enum ZillowLeadTypeEnum {
	'simple',
	'quote',
	'longForm',
	'propertyPreapproval',
}

export enum ZillowLeadConciergeStatusEnum {
	'Transferred',
	'AppointmentSet',
	'UnsupportedLanguage',
	'EmailRequested',
	'DoNotCall',
	'Duplicate',
	'LenderContacted',
	'NotInterested',
	'ConciergeUnsuccessful',
	'LenderMustCall',
}

export type LELodasoftCommonModelsLeadsProviderModelsZillowLead = {
	type: Option<ZillowLeadTypeEnum>;
	id: Option<string>;
	created: Option<Date>;
	source: Option<string>;
	price: Option<number>;
	conciergeStatus: Option<ZillowLeadConciergeStatusEnum>;
	sender: Option<LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactSender>;
	recipient: Option<LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactRecipient>;
	details: Option<LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactDetails>;
	quote: Option<LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactLoanQuote>;
};
export const LELodasoftCommonModelsLeadsProviderModelsZillowLeadIO = type({
	type: createOptionFromNullable(
		createEnumType<ZillowLeadTypeEnum>(ZillowLeadTypeEnum, 'ZillowLeadTypeEnum'),
		'type',
	),
	id: createOptionFromNullable(string, 'id'),
	created: createOptionFromNullable(DateFromISOString, 'created'),
	source: createOptionFromNullable(string, 'source'),
	price: createOptionFromNullable(number, 'price'),
	conciergeStatus: createOptionFromNullable(
		createEnumType<ZillowLeadConciergeStatusEnum>(ZillowLeadConciergeStatusEnum, 'ZillowLeadConciergeStatusEnum'),
		'conciergeStatus',
	),
	sender: createOptionFromNullable(LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactSenderIO, 'sender'),
	recipient: createOptionFromNullable(
		LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactRecipientIO,
		'recipient',
	),
	details: createOptionFromNullable(LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactDetailsIO, 'details'),
	quote: createOptionFromNullable(LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactLoanQuoteIO, 'quote'),
});
