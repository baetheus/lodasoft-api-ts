import { Option } from 'fp-ts/lib/Option';
import { string, keyof, number, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftThirdPartyFormFreeModelsLiteAccountInfo = {
	accountId: Option<string>;
	accountType: Option<'DDA' | 'SDA' | 'INV' | 'OLA'>;
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
	accountId: createOptionFromNullable(string, 'accountId'),
	accountType: createOptionFromNullable(keyof({ DDA: null, SDA: null, INV: null, OLA: null }), 'accountType'),
	accountName: createOptionFromNullable(string, 'accountName'),
	accountNumber: createOptionFromNullable(string, 'accountNumber'),
	accountHolder: createOptionFromNullable(string, 'accountHolder'),
	fiName: createOptionFromNullable(string, 'fiName'),
	fiAccountType: createOptionFromNullable(string, 'fiAccountType'),
	fiPlanName: createOptionFromNullable(string, 'fiPlanName'),
	balance: createOptionFromNullable(number, 'balance'),
	balanceDate: createOptionFromNullable(DateFromISOString, 'balanceDate'),
});
