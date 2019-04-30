import {
	LELodasoftDataAccessDbModelsConfigurationCompanyModel,
	LELodasoftDataAccessDbModelsConfigurationCompanyModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationCompanyModel';
import {
	LELodasoftDataAccessDbModelsUserProfile,
	LELodasoftDataAccessDbModelsUserProfileIO,
} from '../definitions/LELodasoftDataAccessDbModelsUserProfile';
import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftDataAccessDbModelsConfigurationAgentPortalContentModel = {
	id: Option<number>;
	companyId: Option<number>;
	company: Option<LELodasoftDataAccessDbModelsConfigurationCompanyModel>;
	userId: Option<string>;
	user: Option<LELodasoftDataAccessDbModelsUserProfile>;
	aboutUsContent: Option<string>;
	referralContent: Option<string>;
	showReferralTerms: Option<boolean>;
	referralTermsContent: Option<string>;
};
export const LELodasoftDataAccessDbModelsConfigurationAgentPortalContentModelIO = type({
	id: createOptionFromNullable(number, 'id'),
	companyId: createOptionFromNullable(number, 'companyId'),
	company: createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationCompanyModelIO, 'company'),
	userId: createOptionFromNullable(string, 'userId'),
	user: createOptionFromNullable(LELodasoftDataAccessDbModelsUserProfileIO, 'user'),
	aboutUsContent: createOptionFromNullable(string, 'aboutUsContent'),
	referralContent: createOptionFromNullable(string, 'referralContent'),
	showReferralTerms: createOptionFromNullable(boolean, 'showReferralTerms'),
	referralTermsContent: createOptionFromNullable(string, 'referralTermsContent'),
});
