import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { DateFromDatelike } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

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
	dateInserted: createOptionFromOptional(DateFromDatelike, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromDatelike, 'dateUpdated'),
});
