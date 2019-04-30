import {
	LELodasoftDataAccessDbModelsAdminDocFileModel,
	LELodasoftDataAccessDbModelsAdminDocFileModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsAdminDocFileModel';
import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, array, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftDataAccessDbModelsAdminLoanDocModel = {
	loanDocId: Option<number>;
	applicationId: Option<number>;
	borrowerID: Option<number>;
	documentTypeId: Option<number>;
	description: Option<string>;
	note: Option<string>;
	expirationDate: Option<Date>;
	retask: Option<boolean>;
	active: Option<boolean>;
	docFiles: Option<Array<LELodasoftDataAccessDbModelsAdminDocFileModel>>;
};
export const LELodasoftDataAccessDbModelsAdminLoanDocModelIO = type({
	loanDocId: createOptionFromNullable(number, 'loanDocId'),
	applicationId: createOptionFromNullable(number, 'applicationId'),
	borrowerID: createOptionFromNullable(number, 'borrowerID'),
	documentTypeId: createOptionFromNullable(number, 'documentTypeId'),
	description: createOptionFromNullable(string, 'description'),
	note: createOptionFromNullable(string, 'note'),
	expirationDate: createOptionFromNullable(DateFromISOString, 'expirationDate'),
	retask: createOptionFromNullable(boolean, 'retask'),
	active: createOptionFromNullable(boolean, 'active'),
	docFiles: createOptionFromNullable(array(LELodasoftDataAccessDbModelsAdminDocFileModelIO), 'docFiles'),
});
