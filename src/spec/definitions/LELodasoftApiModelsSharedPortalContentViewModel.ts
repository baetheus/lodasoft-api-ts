import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

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
	companyId: createOptionFromOptional(number, 'companyId'),
	userId: createOptionFromOptional(string, 'userId'),
	aboutUsContent: createOptionFromOptional(string, 'aboutUsContent'),
	referralContent: createOptionFromOptional(string, 'referralContent'),
	showReferralTerms: createOptionFromOptional(boolean, 'showReferralTerms'),
	referralTermsContent: createOptionFromOptional(string, 'referralTermsContent'),
	showPrequalLetterGeneration: createOptionFromOptional(boolean, 'showPrequalLetterGeneration'),
});
