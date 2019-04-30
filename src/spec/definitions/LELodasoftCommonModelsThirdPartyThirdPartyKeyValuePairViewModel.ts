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
	thirdPartyKeyValueId: createOptionFromNullable(number, 'thirdPartyKeyValueId'),
	key: createOptionFromNullable(string, 'key'),
	value: createOptionFromNullable(string, 'value'),
	credentialId: createOptionFromNullable(number, 'credentialId'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
