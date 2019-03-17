import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsThirdPartyThirdPartyKeyValuePairViewModel = {
	thirdPartyKeyValueId: Option<number>;
	key: Option<string>;
	value: Option<string>;
	credentialId: Option<number>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsThirdPartyThirdPartyKeyValuePairViewModelIO = type({
	thirdPartyKeyValueId: createOptionFromNullable(number),
	key: createOptionFromNullable(string),
	value: createOptionFromNullable(string),
	credentialId: createOptionFromNullable(number),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
