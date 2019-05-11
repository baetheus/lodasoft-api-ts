import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

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
	employementInfoId: createOptionFromOptional(number, 'employementInfoId'),
	companyName: createOptionFromOptional(string, 'companyName'),
	position: createOptionFromOptional(string, 'position'),
	years: createOptionFromOptional(number, 'years'),
	months: createOptionFromOptional(number, 'months'),
	monthlyIncome: createOptionFromOptional(number, 'monthlyIncome'),
	borrowerId: createOptionFromOptional(number, 'borrowerId'),
	current: createOptionFromOptional(boolean, 'current'),
});
