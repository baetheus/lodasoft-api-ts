import {
	LELodasoftDataAccessDbModelsConfigurationCompanyModel,
	LELodasoftDataAccessDbModelsConfigurationCompanyModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationCompanyModel';
import { Option } from 'fp-ts/lib/Option';
import { number, string, keyof, type } from 'io-ts';
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
	loanPurposeId: createOptionFromNullable(number, 'loanPurposeId'),
	loanPurposeName: createOptionFromNullable(string, 'loanPurposeName'),
	mortgageLoanPurpose: createOptionFromNullable(
		keyof({
			Refinance: null,
			Purchase: null,
			ConstructionOnly: null,
			ConstructionToPermanent: null,
			OtherLoanPurpose: null,
			RefinanceCashOut: null,
		}),
		'mortgageLoanPurpose',
	),
	companyId: createOptionFromNullable(number, 'companyId'),
	companyModel: createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationCompanyModelIO, 'companyModel'),
	order: createOptionFromNullable(number, 'order'),
});
