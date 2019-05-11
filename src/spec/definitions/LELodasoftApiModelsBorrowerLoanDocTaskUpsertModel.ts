import {
	LELodasoftCommonModelsLoanLoanDocTaskViewModel,
	LELodasoftCommonModelsLoanLoanDocTaskViewModelIO,
} from '../definitions/LELodasoftCommonModelsLoanLoanDocTaskViewModel';
import { Option } from 'fp-ts/lib/Option';
import { number, array, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftApiModelsBorrowerLoanDocTaskUpsertModel = {
	loanDocTask: Option<LELodasoftCommonModelsLoanLoanDocTaskViewModel>;
	multipleBorrower: Option<Array<number>>;
	numFiles: Option<number>;
	expirationDate: Option<Date>;
};
export const LELodasoftApiModelsBorrowerLoanDocTaskUpsertModelIO = type({
	loanDocTask: createOptionFromOptional(LELodasoftCommonModelsLoanLoanDocTaskViewModelIO, 'loanDocTask'),
	multipleBorrower: createOptionFromOptional(array(number), 'multipleBorrower'),
	numFiles: createOptionFromOptional(number, 'numFiles'),
	expirationDate: createOptionFromOptional(DateFromISOString, 'expirationDate'),
});
