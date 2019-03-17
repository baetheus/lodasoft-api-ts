import {
	LELodasoftCommonModelsLoanDocFileViewModel,
	LELodasoftCommonModelsLoanDocFileViewModelIO,
} from '../definitions/LELodasoftCommonModelsLoanDocFileViewModel';
import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, array, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

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
	loanDocId: createOptionFromNullable(number),
	applicationId: createOptionFromNullable(number),
	borrowerID: createOptionFromNullable(number),
	documentTypeId: createOptionFromNullable(number),
	description: createOptionFromNullable(string),
	note: createOptionFromNullable(string),
	expirationDate: createOptionFromNullable(DateFromISOString),
	retask: createOptionFromNullable(boolean),
	active: createOptionFromNullable(boolean),
	docFiles: createOptionFromNullable(array(LELodasoftCommonModelsLoanDocFileViewModelIO)),
});
