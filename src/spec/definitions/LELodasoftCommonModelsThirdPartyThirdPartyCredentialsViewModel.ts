import {
	LELodasoftCommonModelsThirdPartyThirdPartyKeyValuePairViewModel,
	LELodasoftCommonModelsThirdPartyThirdPartyKeyValuePairViewModelIO,
} from '../definitions/LELodasoftCommonModelsThirdPartyThirdPartyKeyValuePairViewModel';
import { Option } from 'fp-ts/lib/Option';
import { number, string, array, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsThirdPartyThirdPartyCredentialsViewModel = {
	credentialId: Option<number>;
	credentialType: Option<string>;
	vendorName: Option<string>;
	url: Option<string>;
	userName: Option<string>;
	password: Option<string>;
	userId: Option<string>;
	credentialProviderId: Option<number>;
	thirdPartyKeyValuePairs: Option<Array<LELodasoftCommonModelsThirdPartyThirdPartyKeyValuePairViewModel>>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsThirdPartyThirdPartyCredentialsViewModelIO = type({
	credentialId: createOptionFromNullable(number),
	credentialType: createOptionFromNullable(string),
	vendorName: createOptionFromNullable(string),
	url: createOptionFromNullable(string),
	userName: createOptionFromNullable(string),
	password: createOptionFromNullable(string),
	userId: createOptionFromNullable(string),
	credentialProviderId: createOptionFromNullable(number),
	thirdPartyKeyValuePairs: createOptionFromNullable(
		array(LELodasoftCommonModelsThirdPartyThirdPartyKeyValuePairViewModelIO),
	),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
