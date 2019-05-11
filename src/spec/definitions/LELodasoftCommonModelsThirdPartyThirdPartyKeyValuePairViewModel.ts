import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';
import { createOptionFromOptional } from '../utils/optionFromOptional';

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
	thirdPartyKeyValueId: createOptionFromOptional(number, 'thirdPartyKeyValueId'),
	key: createOptionFromOptional(string, 'key'),
	value: createOptionFromOptional(string, 'value'),
	credentialId: createOptionFromOptional(number, 'credentialId'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromISOString, 'dateUpdated'),
});
