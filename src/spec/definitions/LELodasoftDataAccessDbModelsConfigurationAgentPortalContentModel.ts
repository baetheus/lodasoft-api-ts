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
	id: createOptionFromNullable(number),
	companyId: createOptionFromNullable(number),
	company: createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationCompanyModelIO),
	userId: createOptionFromNullable(string),
	user: createOptionFromNullable(LELodasoftDataAccessDbModelsUserProfileIO),
	aboutUsContent: createOptionFromNullable(string),
	referralContent: createOptionFromNullable(string),
	showReferralTerms: createOptionFromNullable(boolean),
	referralTermsContent: createOptionFromNullable(string),
});
