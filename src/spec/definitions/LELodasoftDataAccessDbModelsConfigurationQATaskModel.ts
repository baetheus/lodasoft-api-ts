import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

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
	qaTaskId: createOptionFromOptional(number, 'qaTaskId'),
	taskName: createOptionFromOptional(string, 'taskName'),
	roleId: createOptionFromOptional(number, 'roleId'),
	documentTypeId: createOptionFromOptional(number, 'documentTypeId'),
	dueDays: createOptionFromOptional(number, 'dueDays'),
	borrowerTrigger: createOptionFromOptional(number, 'borrowerTrigger'),
	companyId: createOptionFromOptional(number, 'companyId'),
	requestBorrower: createOptionFromOptional(boolean, 'requestBorrower'),
});
