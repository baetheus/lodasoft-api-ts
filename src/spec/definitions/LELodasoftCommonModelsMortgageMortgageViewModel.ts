import {
	LELodasoftCommonModelsMortgageMortgageBorrowerViewModel,
	LELodasoftCommonModelsMortgageMortgageBorrowerViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageMortgageBorrowerViewModel';
import {
	LELodasoftCommonModelsMortgageMortgageTermViewModel,
	LELodasoftCommonModelsMortgageMortgageTermViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageMortgageTermViewModel';
import {
	LELodasoftCommonModelsMortgageSubjectPropertyViewModel,
	LELodasoftCommonModelsMortgageSubjectPropertyViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageSubjectPropertyViewModel';
import {
	LELodasoftCommonModelsMortgageTransactionDetailViewModel,
	LELodasoftCommonModelsMortgageTransactionDetailViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageTransactionDetailViewModel';
import { Option } from 'fp-ts/lib/Option';
import { number, array, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsMortgageMortgageViewModel = {
	mortgageId: Option<number>;
	applicationId: Option<number>;
	subjectPropertyId: Option<number>;
	mortgageTermId: Option<number>;
	transactionDetailId: Option<number>;
	subjectProperty: Option<LELodasoftCommonModelsMortgageSubjectPropertyViewModel>;
	mortgageTerm: Option<LELodasoftCommonModelsMortgageMortgageTermViewModel>;
	transactionDetail: Option<LELodasoftCommonModelsMortgageTransactionDetailViewModel>;
	borrowers: Option<Array<LELodasoftCommonModelsMortgageMortgageBorrowerViewModel>>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsMortgageMortgageViewModelIO = type({
	mortgageId: createOptionFromNullable(number),
	applicationId: createOptionFromNullable(number),
	subjectPropertyId: createOptionFromNullable(number),
	mortgageTermId: createOptionFromNullable(number),
	transactionDetailId: createOptionFromNullable(number),
	subjectProperty: createOptionFromNullable(LELodasoftCommonModelsMortgageSubjectPropertyViewModelIO),
	mortgageTerm: createOptionFromNullable(LELodasoftCommonModelsMortgageMortgageTermViewModelIO),
	transactionDetail: createOptionFromNullable(LELodasoftCommonModelsMortgageTransactionDetailViewModelIO),
	borrowers: createOptionFromNullable(array(LELodasoftCommonModelsMortgageMortgageBorrowerViewModelIO)),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
