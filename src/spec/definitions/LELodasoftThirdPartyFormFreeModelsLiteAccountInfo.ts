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
	accountId: createOptionFromNullable(string),
	accountType: createOptionFromNullable(keyof({ DDA: null, SDA: null, INV: null, OLA: null })),
	accountName: createOptionFromNullable(string),
	accountNumber: createOptionFromNullable(string),
	accountHolder: createOptionFromNullable(string),
	fiName: createOptionFromNullable(string),
	fiAccountType: createOptionFromNullable(string),
	fiPlanName: createOptionFromNullable(string),
	balance: createOptionFromNullable(number),
	balanceDate: createOptionFromNullable(DateFromISOString),
});
