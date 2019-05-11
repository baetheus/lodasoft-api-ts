import {
	LELodasoftCommonModelsLoanDocFileViewModel,
	LELodasoftCommonModelsLoanDocFileViewModelIO,
} from '../definitions/LELodasoftCommonModelsLoanDocFileViewModel';
import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, array, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftCommonModelsLoanLoanDocViewModel = {
	loanDocId: Option<number>;
	applicationId: Option<number>;
	borrowerID: Option<number>;
	documentTypeId: Option<number>;
	description: Option<string>;
	note: Option<string>;
	expirationDate: Option<Date>;
	retask: Option<boolean>;
	active: Option<boolean>;
	docFiles: Option<Array<LELodasoftCommonModelsLoanDocFileViewModel>>;
};
export const LELodasoftCommonModelsLoanLoanDocViewModelIO = type({
	loanDocId: createOptionFromOptional(number, 'loanDocId'),
	applicationId: createOptionFromOptional(number, 'applicationId'),
	borrowerID: createOptionFromOptional(number, 'borrowerID'),
	documentTypeId: createOptionFromOptional(number, 'documentTypeId'),
	description: createOptionFromOptional(string, 'description'),
	note: createOptionFromOptional(string, 'note'),
	expirationDate: createOptionFromOptional(DateFromISOString, 'expirationDate'),
	retask: createOptionFromOptional(boolean, 'retask'),
	active: createOptionFromOptional(boolean, 'active'),
	docFiles: createOptionFromOptional(array(LELodasoftCommonModelsLoanDocFileViewModelIO), 'docFiles'),
});
