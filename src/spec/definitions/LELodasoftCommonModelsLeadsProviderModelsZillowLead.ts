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
import { Option } from 'fp-ts/lib/Option';
import { keyof, string, number, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsLeadsProviderModelsZillowLead = {
	type: Option<'simple' | 'quote' | 'longForm' | 'propertyPreapproval'>;
	id: Option<string>;
	created: Option<Date>;
	source: Option<string>;
	price: Option<number>;
	conciergeStatus: Option<
		| 'Transferred'
		| 'AppointmentSet'
		| 'UnsupportedLanguage'
		| 'EmailRequested'
		| 'DoNotCall'
		| 'Duplicate'
		| 'LenderContacted'
		| 'NotInterested'
		| 'ConciergeUnsuccessful'
		| 'LenderMustCall'
	>;
	sender: Option<LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactSender>;
	recipient: Option<LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactRecipient>;
	details: Option<LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactDetails>;
	quote: Option<LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactLoanQuote>;
};
export const LELodasoftCommonModelsLeadsProviderModelsZillowLeadIO = type({
	type: createOptionFromNullable(keyof({ simple: null, quote: null, longForm: null, propertyPreapproval: null })),
	id: createOptionFromNullable(string),
	created: createOptionFromNullable(DateFromISOString),
	source: createOptionFromNullable(string),
	price: createOptionFromNullable(number),
	conciergeStatus: createOptionFromNullable(
		keyof({
			Transferred: null,
			AppointmentSet: null,
			UnsupportedLanguage: null,
			EmailRequested: null,
			DoNotCall: null,
			Duplicate: null,
			LenderContacted: null,
			NotInterested: null,
			ConciergeUnsuccessful: null,
			LenderMustCall: null,
		}),
	),
	sender: createOptionFromNullable(LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactSenderIO),
	recipient: createOptionFromNullable(LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactRecipientIO),
	details: createOptionFromNullable(LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactDetailsIO),
	quote: createOptionFromNullable(LELodasoftCommonModelsLeadsProviderModelsZillowLenderContactLoanQuoteIO),
});
