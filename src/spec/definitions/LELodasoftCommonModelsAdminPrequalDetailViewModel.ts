import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

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
	prequalDetailId: createOptionFromNullable(number, 'prequalDetailId'),
	applicationId: createOptionFromNullable(number, 'applicationId'),
	loanProgramDescription: createOptionFromNullable(string, 'loanProgramDescription'),
	maxPurchasePrice: createOptionFromNullable(number, 'maxPurchasePrice'),
	downPaymentPercent: createOptionFromNullable(number, 'downPaymentPercent'),
	interestRate: createOptionFromNullable(number, 'interestRate'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
