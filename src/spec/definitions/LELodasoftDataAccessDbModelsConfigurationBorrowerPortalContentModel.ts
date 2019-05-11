import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftDataAccessDbModelsConfigurationBorrowerPortalContentModel = {
	id: Option<number>;
	companyId: Option<number>;
	userId: Option<string>;
	aboutUsContent: Option<string>;
	referralContent: Option<string>;
	showReferralTerms: Option<boolean>;
	referralTermsContent: Option<string>;
};
export const LELodasoftDataAccessDbModelsConfigurationBorrowerPortalContentModelIO = type({
	id: createOptionFromOptional(number, 'id'),
	companyId: createOptionFromOptional(number, 'companyId'),
	userId: createOptionFromOptional(string, 'userId'),
	aboutUsContent: createOptionFromOptional(string, 'aboutUsContent'),
	referralContent: createOptionFromOptional(string, 'referralContent'),
	showReferralTerms: createOptionFromOptional(boolean, 'showReferralTerms'),
	referralTermsContent: createOptionFromOptional(string, 'referralTermsContent'),
});
