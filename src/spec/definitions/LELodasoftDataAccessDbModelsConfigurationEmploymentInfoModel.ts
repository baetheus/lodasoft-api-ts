import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftDataAccessDbModelsConfigurationEmploymentInfoModel = {
	employementInfoId: Option<number>;
	companyName: Option<string>;
	position: Option<string>;
	years: Option<number>;
	months: Option<number>;
	monthlyIncome: Option<number>;
	borrowerId: Option<number>;
	current: Option<boolean>;
};
export const LELodasoftDataAccessDbModelsConfigurationEmploymentInfoModelIO = type({
	employementInfoId: createOptionFromNullable(number, 'employementInfoId'),
	companyName: createOptionFromNullable(string, 'companyName'),
	position: createOptionFromNullable(string, 'position'),
	years: createOptionFromNullable(number, 'years'),
	months: createOptionFromNullable(number, 'months'),
	monthlyIncome: createOptionFromNullable(number, 'monthlyIncome'),
	borrowerId: createOptionFromNullable(number, 'borrowerId'),
	current: createOptionFromNullable(boolean, 'current'),
});
