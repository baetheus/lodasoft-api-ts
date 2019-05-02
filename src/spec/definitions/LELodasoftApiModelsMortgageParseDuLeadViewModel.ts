import {
	LELodasoftCommonModelsLeadsLeadViewModel,
	LELodasoftCommonModelsLeadsLeadViewModelIO,
} from '../definitions/LELodasoftCommonModelsLeadsLeadViewModel';
import { Option } from 'fp-ts/lib/Option';
import { string, number, boolean, array, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsMortgageParseDuLeadViewModel = {
	leadViewModel: Option<LELodasoftCommonModelsLeadsLeadViewModel>;
	loanNumber: Option<string>;
	loanPurposeId: Option<number>;
	loanTypeId: Option<number>;
	losIdentifier: Option<string>;
	success: Option<boolean>;
	validationErrors: Option<Array<string>>;
	errorMessage: Option<string>;
};
export const LELodasoftApiModelsMortgageParseDuLeadViewModelIO = type({
	leadViewModel: createOptionFromNullable(LELodasoftCommonModelsLeadsLeadViewModelIO, 'leadViewModel'),
	loanNumber: createOptionFromNullable(string, 'loanNumber'),
	loanPurposeId: createOptionFromNullable(number, 'loanPurposeId'),
	loanTypeId: createOptionFromNullable(number, 'loanTypeId'),
	losIdentifier: createOptionFromNullable(string, 'losIdentifier'),
	success: createOptionFromNullable(boolean, 'success'),
	validationErrors: createOptionFromNullable(array(string), 'validationErrors'),
	errorMessage: createOptionFromNullable(string, 'errorMessage'),
});
