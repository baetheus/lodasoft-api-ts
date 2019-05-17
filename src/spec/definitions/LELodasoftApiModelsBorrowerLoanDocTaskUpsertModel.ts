import {
	LELodasoftCommonModelsLoanLoanDocTaskViewModel,
	LELodasoftCommonModelsLoanLoanDocTaskViewModelIO,
} from '../definitions/LELodasoftCommonModelsLoanLoanDocTaskViewModel';
import { Option } from 'fp-ts/lib/Option';
import { number, array, type } from 'io-ts';
import { DateFromDatelike } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

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
	expirationDate: createOptionFromOptional(DateFromDatelike, 'expirationDate'),
});
