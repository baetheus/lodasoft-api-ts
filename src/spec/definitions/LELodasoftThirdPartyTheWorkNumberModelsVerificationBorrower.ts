import {
	LELodasoftThirdPartyTheWorkNumberModelsVerificationEmployer,
	LELodasoftThirdPartyTheWorkNumberModelsVerificationEmployerIO,
} from '../definitions/LELodasoftThirdPartyTheWorkNumberModelsVerificationEmployer';
import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftThirdPartyTheWorkNumberModelsVerificationBorrower = {
	firstName: Option<string>;
	middleName: Option<string>;
	lastName: Option<string>;
	ssn: Option<string>;
	employer: Option<LELodasoftThirdPartyTheWorkNumberModelsVerificationEmployer>;
};
export const LELodasoftThirdPartyTheWorkNumberModelsVerificationBorrowerIO = type({
	firstName: createOptionFromOptional(string, 'firstName'),
	middleName: createOptionFromOptional(string, 'middleName'),
	lastName: createOptionFromOptional(string, 'lastName'),
	ssn: createOptionFromOptional(string, 'ssn'),
	employer: createOptionFromOptional(LELodasoftThirdPartyTheWorkNumberModelsVerificationEmployerIO, 'employer'),
});
