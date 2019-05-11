import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';
import { createOptionFromOptional } from '../utils/optionFromOptional';

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
	type: createOptionFromOptional(
		createEnumType<ZillowLeadTypeEnum>(ZillowLeadTypeEnum, 'ZillowLeadTypeEnum'),
		'type',
	),
	id: createOptionFromOptional(string, 'id'),
	created: createOptionFromOptional(DateFromISOString, 'created'),
	source: createOptionFromOptional(string, 'source'),
	price: createOptionFromOptional(number, 'price'),
	conciergeStatus: createOptionFromOptional(
		createEnumType<ZillowLeadConciergeStatusEnum>(ZillowLeadConciergeStatusEnum, 'ZillowLeadConciergeStatusEnum'),
		'conciergeStatus',
	),
	sender: createOptionFromOptional(LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactSenderIO, 'sender'),
	recipient: createOptionFromOptional(
		LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactRecipientIO,
		'recipient',
	),
	details: createOptionFromOptional(LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactDetailsIO, 'details'),
	quote: createOptionFromOptional(LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactLoanQuoteIO, 'quote'),
});
