import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftDataAccessDbModelsConfigurationQATaskModel = {
	qaTaskId: Option<number>;
	taskName: Option<string>;
	roleId: Option<number>;
	documentTypeId: Option<number>;
	dueDays: Option<number>;
	borrowerTrigger: Option<number>;
	companyId: Option<number>;
	requestBorrower: Option<boolean>;
};
export const LELodasoftDataAccessDbModelsConfigurationQATaskModelIO = type({
	qaTaskId: createOptionFromNullable(number, 'qaTaskId'),
	taskName: createOptionFromNullable(string, 'taskName'),
	roleId: createOptionFromNullable(number, 'roleId'),
	documentTypeId: createOptionFromNullable(number, 'documentTypeId'),
	dueDays: createOptionFromNullable(number, 'dueDays'),
	borrowerTrigger: createOptionFromNullable(number, 'borrowerTrigger'),
	companyId: createOptionFromNullable(number, 'companyId'),
	requestBorrower: createOptionFromNullable(boolean, 'requestBorrower'),
});
