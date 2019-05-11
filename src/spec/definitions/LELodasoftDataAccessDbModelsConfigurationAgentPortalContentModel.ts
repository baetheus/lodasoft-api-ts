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
import { createOptionFromOptional } from '../utils/optionFromOptional';

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
	id: createOptionFromOptional(number, 'id'),
	companyId: createOptionFromOptional(number, 'companyId'),
	company: createOptionFromOptional(LELodasoftDataAccessDbModelsConfigurationCompanyModelIO, 'company'),
	userId: createOptionFromOptional(string, 'userId'),
	user: createOptionFromOptional(LELodasoftDataAccessDbModelsUserProfileIO, 'user'),
	aboutUsContent: createOptionFromOptional(string, 'aboutUsContent'),
	referralContent: createOptionFromOptional(string, 'referralContent'),
	showReferralTerms: createOptionFromOptional(boolean, 'showReferralTerms'),
	referralTermsContent: createOptionFromOptional(string, 'referralTermsContent'),
});
