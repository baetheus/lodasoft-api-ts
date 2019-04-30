import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

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
	id: createOptionFromNullable(number, 'id'),
	companyId: createOptionFromNullable(number, 'companyId'),
	userId: createOptionFromNullable(string, 'userId'),
	aboutUsContent: createOptionFromNullable(string, 'aboutUsContent'),
	referralContent: createOptionFromNullable(string, 'referralContent'),
	showReferralTerms: createOptionFromNullable(boolean, 'showReferralTerms'),
	referralTermsContent: createOptionFromNullable(string, 'referralTermsContent'),
});
