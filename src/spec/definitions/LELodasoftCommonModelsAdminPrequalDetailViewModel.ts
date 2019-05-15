import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftCommonModelsAdminPrequalDetailViewModel = {
	prequalDetailId: Option<number>;
	applicationId: Option<number>;
	loanProgramDescription: Option<string>;
	maxPurchasePrice: Option<number>;
	downPaymentPercent: Option<number>;
	interestRate: Option<number>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsAdminPrequalDetailViewModelIO = type({
	prequalDetailId: createOptionFromOptional(number, 'prequalDetailId'),
	applicationId: createOptionFromOptional(number, 'applicationId'),
	loanProgramDescription: createOptionFromOptional(string, 'loanProgramDescription'),
	maxPurchasePrice: createOptionFromOptional(number, 'maxPurchasePrice'),
	downPaymentPercent: createOptionFromOptional(number, 'downPaymentPercent'),
	interestRate: createOptionFromOptional(number, 'interestRate'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromISOString, 'dateUpdated'),
});
