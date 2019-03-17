import {
	LELodasoftCommonModelsLoanLoanDocTaskViewModel,
	LELodasoftCommonModelsLoanLoanDocTaskViewModelIO,
} from '../definitions/LELodasoftCommonModelsLoanLoanDocTaskViewModel';
import { Option } from 'fp-ts/lib/Option';
import { number, array, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftApiModelsBorrowerLoanDocTaskUpsertModel = {
	loanDocTask: Option<LELodasoftCommonModelsLoanLoanDocTaskViewModel>;
	multipleBorrower: Option<Array<number>>;
	numFiles: Option<number>;
	expirationDate: Option<Date>;
};
export const LELodasoftApiModelsBorrowerLoanDocTaskUpsertModelIO = type({
	loanDocTask: createOptionFromNullable(LELodasoftCommonModelsLoanLoanDocTaskViewModelIO),
	multipleBorrower: createOptionFromNullable(array(number)),
	numFiles: createOptionFromNullable(number),
	expirationDate: createOptionFromNullable(DateFromISOString),
});
