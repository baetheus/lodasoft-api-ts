import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';
import { createOptionFromOptional } from '../utils/optionFromOptional';

import { createEnumType } from '../utils/utils';

export enum AccountTypeEnum {
	'DDA',
	'SDA',
	'INV',
	'OLA',
}

export type LELodasoftThirdPartyFormFreeModelsLiteAccountInfo = {
	accountId: Option<string>;
	accountType: Option<AccountTypeEnum>;
	accountName: Option<string>;
	accountNumber: Option<string>;
	accountHolder: Option<string>;
	fiName: Option<string>;
	fiAccountType: Option<string>;
	fiPlanName: Option<string>;
	balance: Option<number>;
	balanceDate: Option<Date>;
};
export const LELodasoftThirdPartyFormFreeModelsLiteAccountInfoIO = type({
	accountId: createOptionFromOptional(string, 'accountId'),
	accountType: createOptionFromOptional(
		createEnumType<AccountTypeEnum>(AccountTypeEnum, 'AccountTypeEnum'),
		'accountType',
	),
	accountName: createOptionFromOptional(string, 'accountName'),
	accountNumber: createOptionFromOptional(string, 'accountNumber'),
	accountHolder: createOptionFromOptional(string, 'accountHolder'),
	fiName: createOptionFromOptional(string, 'fiName'),
	fiAccountType: createOptionFromOptional(string, 'fiAccountType'),
	fiPlanName: createOptionFromOptional(string, 'fiPlanName'),
	balance: createOptionFromOptional(number, 'balance'),
	balanceDate: createOptionFromOptional(DateFromISOString, 'balanceDate'),
});
