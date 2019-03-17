import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsSharedPortalContentViewModel = {
	companyId: Option<number>;
	userId: Option<string>;
	aboutUsContent: Option<string>;
	referralContent: Option<string>;
	showReferralTerms: Option<boolean>;
	referralTermsContent: Option<string>;
	showPrequalLetterGeneration: Option<boolean>;
};
export const LELodasoftApiModelsSharedPortalContentViewModelIO = type({
	companyId: createOptionFromNullable(number),
	userId: createOptionFromNullable(string),
	aboutUsContent: createOptionFromNullable(string),
	referralContent: createOptionFromNullable(string),
	showReferralTerms: createOptionFromNullable(boolean),
	referralTermsContent: createOptionFromNullable(string),
	showPrequalLetterGeneration: createOptionFromNullable(boolean),
});
