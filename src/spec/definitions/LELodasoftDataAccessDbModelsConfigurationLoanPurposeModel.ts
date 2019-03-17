import {
	LELodasoftDataAccessDbModelsConfigurationCompanyModel,
	LELodasoftDataAccessDbModelsConfigurationCompanyModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationCompanyModel';
import { Option } from 'fp-ts/lib/Option';
import { number, string, union, literal, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftDataAccessDbModelsConfigurationLoanPurposeModel = {
	loanPurposeId: Option<number>;
	loanPurposeName: Option<string>;
	mortgageLoanPurpose: Option<
		| 'Refinance'
		| 'Purchase'
		| 'ConstructionOnly'
		| 'ConstructionToPermanent'
		| 'OtherLoanPurpose'
		| 'RefinanceCashOut'
	>;
	companyId: Option<number>;
	companyModel: Option<LELodasoftDataAccessDbModelsConfigurationCompanyModel>;
	order: Option<number>;
};
export const LELodasoftDataAccessDbModelsConfigurationLoanPurposeModelIO = type({
	loanPurposeId: createOptionFromNullable(number),
	loanPurposeName: createOptionFromNullable(string),
	mortgageLoanPurpose: createOptionFromNullable(
		union([
			literal('Refinance'),
			literal('Purchase'),
			literal('ConstructionOnly'),
			literal('ConstructionToPermanent'),
			literal('OtherLoanPurpose'),
			literal('RefinanceCashOut'),
		]),
	),
	companyId: createOptionFromNullable(number),
	companyModel: createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationCompanyModelIO),
	order: createOptionFromNullable(number),
});
