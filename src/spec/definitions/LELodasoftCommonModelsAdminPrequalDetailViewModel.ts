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
	prequalDetailId: createOptionFromNullable(number),
	applicationId: createOptionFromNullable(number),
	loanProgramDescription: createOptionFromNullable(string),
	maxPurchasePrice: createOptionFromNullable(number),
	downPaymentPercent: createOptionFromNullable(number),
	interestRate: createOptionFromNullable(number),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
