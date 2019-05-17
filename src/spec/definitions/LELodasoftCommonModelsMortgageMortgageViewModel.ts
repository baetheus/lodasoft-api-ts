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
import { DateFromDatelike } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

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
	mortgageId: createOptionFromOptional(number, 'mortgageId'),
	applicationId: createOptionFromOptional(number, 'applicationId'),
	subjectPropertyId: createOptionFromOptional(number, 'subjectPropertyId'),
	mortgageTermId: createOptionFromOptional(number, 'mortgageTermId'),
	transactionDetailId: createOptionFromOptional(number, 'transactionDetailId'),
	subjectProperty: createOptionFromOptional(
		LELodasoftCommonModelsMortgageSubjectPropertyViewModelIO,
		'subjectProperty',
	),
	mortgageTerm: createOptionFromOptional(LELodasoftCommonModelsMortgageMortgageTermViewModelIO, 'mortgageTerm'),
	transactionDetail: createOptionFromOptional(
		LELodasoftCommonModelsMortgageTransactionDetailViewModelIO,
		'transactionDetail',
	),
	borrowers: createOptionFromOptional(array(LELodasoftCommonModelsMortgageMortgageBorrowerViewModelIO), 'borrowers'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromDatelike, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromDatelike, 'dateUpdated'),
});
