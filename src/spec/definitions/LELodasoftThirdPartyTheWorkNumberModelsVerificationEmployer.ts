import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftThirdPartyTheWorkNumberModelsVerificationEmployer = {
	name: Option<string>;
	code: Option<string>;
	alternateIdentifier: Option<string>;
	salaryKey: Option<string>;
};
export const LELodasoftThirdPartyTheWorkNumberModelsVerificationEmployerIO = type({
	name: createOptionFromNullable(string),
	code: createOptionFromNullable(string),
	alternateIdentifier: createOptionFromNullable(string),
	salaryKey: createOptionFromNullable(string),
});
