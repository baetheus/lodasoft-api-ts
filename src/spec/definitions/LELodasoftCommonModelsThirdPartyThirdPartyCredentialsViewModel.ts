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
	credentialId: createOptionFromNullable(number, 'credentialId'),
	credentialType: createOptionFromNullable(string, 'credentialType'),
	vendorName: createOptionFromNullable(string, 'vendorName'),
	url: createOptionFromNullable(string, 'url'),
	userName: createOptionFromNullable(string, 'userName'),
	password: createOptionFromNullable(string, 'password'),
	userId: createOptionFromNullable(string, 'userId'),
	credentialProviderId: createOptionFromNullable(number, 'credentialProviderId'),
	thirdPartyKeyValuePairs: createOptionFromNullable(
		array(LELodasoftCommonModelsThirdPartyThirdPartyKeyValuePairViewModelIO),
		'thirdPartyKeyValuePairs',
	),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
