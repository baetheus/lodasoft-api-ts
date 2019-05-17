import {
	LELodasoftDataAccessDbModelsAdminDocFileModel,
	LELodasoftDataAccessDbModelsAdminDocFileModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsAdminDocFileModel';
import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, array, type } from 'io-ts';
import { DateFromDatelike } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

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
	loanDocId: createOptionFromOptional(number, 'loanDocId'),
	applicationId: createOptionFromOptional(number, 'applicationId'),
	borrowerID: createOptionFromOptional(number, 'borrowerID'),
	documentTypeId: createOptionFromOptional(number, 'documentTypeId'),
	description: createOptionFromOptional(string, 'description'),
	note: createOptionFromOptional(string, 'note'),
	expirationDate: createOptionFromOptional(DateFromDatelike, 'expirationDate'),
	retask: createOptionFromOptional(boolean, 'retask'),
	active: createOptionFromOptional(boolean, 'active'),
	docFiles: createOptionFromOptional(array(LELodasoftDataAccessDbModelsAdminDocFileModelIO), 'docFiles'),
});
