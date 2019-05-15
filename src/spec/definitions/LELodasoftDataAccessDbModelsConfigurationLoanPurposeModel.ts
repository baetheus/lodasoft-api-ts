import { createEnumType } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';
import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';

import {
	LELodasoftDataAccessDbModelsConfigurationCompanyModel,
	LELodasoftDataAccessDbModelsConfigurationCompanyModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationCompanyModel';

export enum MortgageLoanPurposeEnum {
	'Refinance',
	'Purchase',
	'ConstructionOnly',
	'ConstructionToPermanent',
	'OtherLoanPurpose',
	'RefinanceCashOut',
}

export type LELodasoftDataAccessDbModelsConfigurationLoanPurposeModel = {
	loanPurposeId: Option<number>;
	loanPurposeName: Option<string>;
	mortgageLoanPurpose: Option<MortgageLoanPurposeEnum>;
	companyId: Option<number>;
	companyModel: Option<LELodasoftDataAccessDbModelsConfigurationCompanyModel>;
	order: Option<number>;
};
export const LELodasoftDataAccessDbModelsConfigurationLoanPurposeModelIO = type({
	loanPurposeId: createOptionFromOptional(number, 'loanPurposeId'),
	loanPurposeName: createOptionFromOptional(string, 'loanPurposeName'),
	mortgageLoanPurpose: createOptionFromOptional(
		createEnumType<MortgageLoanPurposeEnum>(MortgageLoanPurposeEnum, 'MortgageLoanPurposeEnum'),
		'mortgageLoanPurpose',
	),
	companyId: createOptionFromOptional(number, 'companyId'),
	companyModel: createOptionFromOptional(LELodasoftDataAccessDbModelsConfigurationCompanyModelIO, 'companyModel'),
	order: createOptionFromOptional(number, 'order'),
});
