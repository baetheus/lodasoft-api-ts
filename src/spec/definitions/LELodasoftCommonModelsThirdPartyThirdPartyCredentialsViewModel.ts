import {
	LELodasoftCommonModelsThirdPartyThirdPartyKeyValuePairViewModel,
	LELodasoftCommonModelsThirdPartyThirdPartyKeyValuePairViewModelIO,
} from '../definitions/LELodasoftCommonModelsThirdPartyThirdPartyKeyValuePairViewModel';
import { Option } from 'fp-ts/lib/Option';
import { number, string, array, type } from 'io-ts';
import { DateFromDatelike } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

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
	credentialId: createOptionFromOptional(number, 'credentialId'),
	credentialType: createOptionFromOptional(string, 'credentialType'),
	vendorName: createOptionFromOptional(string, 'vendorName'),
	url: createOptionFromOptional(string, 'url'),
	userName: createOptionFromOptional(string, 'userName'),
	password: createOptionFromOptional(string, 'password'),
	userId: createOptionFromOptional(string, 'userId'),
	credentialProviderId: createOptionFromOptional(number, 'credentialProviderId'),
	thirdPartyKeyValuePairs: createOptionFromOptional(
		array(LELodasoftCommonModelsThirdPartyThirdPartyKeyValuePairViewModelIO),
		'thirdPartyKeyValuePairs',
	),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromDatelike, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromDatelike, 'dateUpdated'),
});
