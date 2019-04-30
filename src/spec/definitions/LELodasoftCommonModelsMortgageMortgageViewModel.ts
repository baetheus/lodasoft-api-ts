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
	mortgageId: createOptionFromNullable(number, 'mortgageId'),
	applicationId: createOptionFromNullable(number, 'applicationId'),
	subjectPropertyId: createOptionFromNullable(number, 'subjectPropertyId'),
	mortgageTermId: createOptionFromNullable(number, 'mortgageTermId'),
	transactionDetailId: createOptionFromNullable(number, 'transactionDetailId'),
	subjectProperty: createOptionFromNullable(
		LELodasoftCommonModelsMortgageSubjectPropertyViewModelIO,
		'subjectProperty',
	),
	mortgageTerm: createOptionFromNullable(LELodasoftCommonModelsMortgageMortgageTermViewModelIO, 'mortgageTerm'),
	transactionDetail: createOptionFromNullable(
		LELodasoftCommonModelsMortgageTransactionDetailViewModelIO,
		'transactionDetail',
	),
	borrowers: createOptionFromNullable(array(LELodasoftCommonModelsMortgageMortgageBorrowerViewModelIO), 'borrowers'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
