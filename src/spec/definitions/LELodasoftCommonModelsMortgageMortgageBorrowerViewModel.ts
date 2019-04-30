import {
	LELodasoftCommonModelsMortgageAssetViewModel,
	LELodasoftCommonModelsMortgageAssetViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageAssetViewModel';
import {
	LELodasoftCommonModelsMortgageDeclarationViewModel,
	LELodasoftCommonModelsMortgageDeclarationViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageDeclarationViewModel';
import {
	LELodasoftCommonModelsMortgageDependentViewModel,
	LELodasoftCommonModelsMortgageDependentViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageDependentViewModel';
import {
	LELodasoftCommonModelsMortgageEmailViewModel,
	LELodasoftCommonModelsMortgageEmailViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageEmailViewModel';
import {
	LELodasoftCommonModelsMortgageEmploymentViewModel,
	LELodasoftCommonModelsMortgageEmploymentViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageEmploymentViewModel';
import {
	LELodasoftCommonModelsMortgageExpenseViewModel,
	LELodasoftCommonModelsMortgageExpenseViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageExpenseViewModel';
import {
	LELodasoftCommonModelsMortgageGovernmentMonitorViewModel,
	LELodasoftCommonModelsMortgageGovernmentMonitorViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageGovernmentMonitorViewModel';
import {
	LELodasoftCommonModelsMortgageIncomeViewModel,
	LELodasoftCommonModelsMortgageIncomeViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageIncomeViewModel';
import {
	LELodasoftCommonModelsMortgageLiabilityViewModel,
	LELodasoftCommonModelsMortgageLiabilityViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageLiabilityViewModel';
import {
	LELodasoftCommonModelsMortgagePhoneViewModel,
	LELodasoftCommonModelsMortgagePhoneViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgagePhoneViewModel';
import {
	LELodasoftCommonModelsMortgageReoViewModel,
	LELodasoftCommonModelsMortgageReoViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageReoViewModel';
import {
	LELodasoftCommonModelsMortgageResidencyAddressViewModel,
	LELodasoftCommonModelsMortgageResidencyAddressViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageResidencyAddressViewModel';
import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, keyof, array, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsMortgageMortgageBorrowerViewModel = {
	borrowerId: Option<number>;
	mortgageId: number;
	contactId: number;
	firstName: Option<string>;
	middleName: Option<string>;
	lastName: Option<string>;
	nameSuffix: Option<string>;
	yearsOfSchool: Option<number>;
	dependentCount: Option<number>;
	authorizedCreditCheck: Option<boolean>;
	socialSecNum: Option<string>;
	maritalStatus: Option<'Single' | 'Married' | 'Separated'>;
	dateOfBirth: Option<Date>;
	creditScore: Option<number>;
	creditScore_Equifax: Option<number>;
	creditScore_Experian: Option<number>;
	creditScore_TransUnion: Option<number>;
	typeOfBorrower: 'PrimaryBorrower' | 'CoBorrower';
	active: Option<boolean>;
	assets: Option<Array<LELodasoftCommonModelsMortgageAssetViewModel>>;
	declarations: Option<Array<LELodasoftCommonModelsMortgageDeclarationViewModel>>;
	dependents: Option<Array<LELodasoftCommonModelsMortgageDependentViewModel>>;
	emails: Option<Array<LELodasoftCommonModelsMortgageEmailViewModel>>;
	employments: Option<Array<LELodasoftCommonModelsMortgageEmploymentViewModel>>;
	expenses: Option<Array<LELodasoftCommonModelsMortgageExpenseViewModel>>;
	governmentMonitors: Option<Array<LELodasoftCommonModelsMortgageGovernmentMonitorViewModel>>;
	incomes: Option<Array<LELodasoftCommonModelsMortgageIncomeViewModel>>;
	liabilities: Option<Array<LELodasoftCommonModelsMortgageLiabilityViewModel>>;
	phones: Option<Array<LELodasoftCommonModelsMortgagePhoneViewModel>>;
	reos: Option<Array<LELodasoftCommonModelsMortgageReoViewModel>>;
	residencyAddresses: Option<Array<LELodasoftCommonModelsMortgageResidencyAddressViewModel>>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsMortgageMortgageBorrowerViewModelIO = type({
	borrowerId: createOptionFromNullable(number, 'borrowerId'),
	mortgageId: number,
	contactId: number,
	firstName: createOptionFromNullable(string, 'firstName'),
	middleName: createOptionFromNullable(string, 'middleName'),
	lastName: createOptionFromNullable(string, 'lastName'),
	nameSuffix: createOptionFromNullable(string, 'nameSuffix'),
	yearsOfSchool: createOptionFromNullable(number, 'yearsOfSchool'),
	dependentCount: createOptionFromNullable(number, 'dependentCount'),
	authorizedCreditCheck: createOptionFromNullable(boolean, 'authorizedCreditCheck'),
	socialSecNum: createOptionFromNullable(string, 'socialSecNum'),
	maritalStatus: createOptionFromNullable(keyof({ Single: null, Married: null, Separated: null }), 'maritalStatus'),
	dateOfBirth: createOptionFromNullable(DateFromISOString, 'dateOfBirth'),
	creditScore: createOptionFromNullable(number, 'creditScore'),
	creditScore_Equifax: createOptionFromNullable(number, 'creditScore_Equifax'),
	creditScore_Experian: createOptionFromNullable(number, 'creditScore_Experian'),
	creditScore_TransUnion: createOptionFromNullable(number, 'creditScore_TransUnion'),
	typeOfBorrower: keyof({ PrimaryBorrower: null, CoBorrower: null }),
	active: createOptionFromNullable(boolean, 'active'),
	assets: createOptionFromNullable(array(LELodasoftCommonModelsMortgageAssetViewModelIO), 'assets'),
	declarations: createOptionFromNullable(array(LELodasoftCommonModelsMortgageDeclarationViewModelIO), 'declarations'),
	dependents: createOptionFromNullable(array(LELodasoftCommonModelsMortgageDependentViewModelIO), 'dependents'),
	emails: createOptionFromNullable(array(LELodasoftCommonModelsMortgageEmailViewModelIO), 'emails'),
	employments: createOptionFromNullable(array(LELodasoftCommonModelsMortgageEmploymentViewModelIO), 'employments'),
	expenses: createOptionFromNullable(array(LELodasoftCommonModelsMortgageExpenseViewModelIO), 'expenses'),
	governmentMonitors: createOptionFromNullable(
		array(LELodasoftCommonModelsMortgageGovernmentMonitorViewModelIO),
		'governmentMonitors',
	),
	incomes: createOptionFromNullable(array(LELodasoftCommonModelsMortgageIncomeViewModelIO), 'incomes'),
	liabilities: createOptionFromNullable(array(LELodasoftCommonModelsMortgageLiabilityViewModelIO), 'liabilities'),
	phones: createOptionFromNullable(array(LELodasoftCommonModelsMortgagePhoneViewModelIO), 'phones'),
	reos: createOptionFromNullable(array(LELodasoftCommonModelsMortgageReoViewModelIO), 'reos'),
	residencyAddresses: createOptionFromNullable(
		array(LELodasoftCommonModelsMortgageResidencyAddressViewModelIO),
		'residencyAddresses',
	),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
