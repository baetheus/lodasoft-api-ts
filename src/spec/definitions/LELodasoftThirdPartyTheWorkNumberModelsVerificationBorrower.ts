import {
	LELodasoftThirdPartyTheWorkNumberModelsVerificationEmployer,
	LELodasoftThirdPartyTheWorkNumberModelsVerificationEmployerIO,
} from '../definitions/LELodasoftThirdPartyTheWorkNumberModelsVerificationEmployer';
import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftThirdPartyTheWorkNumberModelsVerificationBorrower = {
	firstName: Option<string>;
	middleName: Option<string>;
	lastName: Option<string>;
	ssn: Option<string>;
	employer: Option<LELodasoftThirdPartyTheWorkNumberModelsVerificationEmployer>;
};
export const LELodasoftThirdPartyTheWorkNumberModelsVerificationBorrowerIO = type({
	firstName: createOptionFromNullable(string, 'firstName'),
	middleName: createOptionFromNullable(string, 'middleName'),
	lastName: createOptionFromNullable(string, 'lastName'),
	ssn: createOptionFromNullable(string, 'ssn'),
	employer: createOptionFromNullable(LELodasoftThirdPartyTheWorkNumberModelsVerificationEmployerIO, 'employer'),
});
