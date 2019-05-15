import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftThirdPartyTheWorkNumberModelsVerificationEmployer = {
	name: Option<string>;
	code: Option<string>;
	alternateIdentifier: Option<string>;
	salaryKey: Option<string>;
};
export const LELodasoftThirdPartyTheWorkNumberModelsVerificationEmployerIO = type({
	name: createOptionFromOptional(string, 'name'),
	code: createOptionFromOptional(string, 'code'),
	alternateIdentifier: createOptionFromOptional(string, 'alternateIdentifier'),
	salaryKey: createOptionFromOptional(string, 'salaryKey'),
});
