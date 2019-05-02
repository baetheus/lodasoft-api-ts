import { Option } from 'fp-ts/lib/Option';
import { number, string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

import {
	LELodasoftDataAccessDbModelsConfigurationCompanyModel,
	LELodasoftDataAccessDbModelsConfigurationCompanyModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationCompanyModel';
import { createEnumType } from '../utils/utils';

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
	loanPurposeId: createOptionFromNullable(number, 'loanPurposeId'),
	loanPurposeName: createOptionFromNullable(string, 'loanPurposeName'),
	mortgageLoanPurpose: createOptionFromNullable(
		createEnumType<MortgageLoanPurposeEnum>(MortgageLoanPurposeEnum, 'MortgageLoanPurposeEnum'),
		'mortgageLoanPurpose',
	),
	companyId: createOptionFromNullable(number, 'companyId'),
	companyModel: createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationCompanyModelIO, 'companyModel'),
	order: createOptionFromNullable(number, 'order'),
});
