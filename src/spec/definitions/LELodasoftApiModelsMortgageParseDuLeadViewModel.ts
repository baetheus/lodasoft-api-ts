import {
	LELodasoftCommonModelsLeadsLeadViewModel,
	LELodasoftCommonModelsLeadsLeadViewModelIO,
} from '../definitions/LELodasoftCommonModelsLeadsLeadViewModel';
import { Option } from 'fp-ts/lib/Option';
import { string, number, boolean, array, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

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
	leadViewModel: createOptionFromOptional(LELodasoftCommonModelsLeadsLeadViewModelIO, 'leadViewModel'),
	loanNumber: createOptionFromOptional(string, 'loanNumber'),
	loanPurposeId: createOptionFromOptional(number, 'loanPurposeId'),
	loanTypeId: createOptionFromOptional(number, 'loanTypeId'),
	losIdentifier: createOptionFromOptional(string, 'losIdentifier'),
	success: createOptionFromOptional(boolean, 'success'),
	validationErrors: createOptionFromOptional(array(string), 'validationErrors'),
	errorMessage: createOptionFromOptional(string, 'errorMessage'),
});
