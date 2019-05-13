import { Option } from 'fp-ts/lib/Option';
import { array, boolean, number, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';

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
import { createOptionFromOptional } from '../utils/optionFromOptional';
import { createEnumType } from '../utils/utils';

export enum MaritalStatusEnum {
	'Single' = 0,
	'Married' = 1,
	'Separated' = 2,
}

export enum TypeOfBorrowerEnum {
	'PrimaryBorrower' = 0,
	'CoBorrower' = 1,
}

export type LELodasoftCommonModelsMortgageMortgageBorrowerViewModel = {
	borrowerId: Option<number>;
	mortgageId: number;
	contactId: Option<number>;
	firstName: Option<string>;
	middleName: Option<string>;
	lastName: Option<string>;
	nameSuffix: Option<string>;
	yearsOfSchool: Option<number>;
	dependentCount: Option<number>;
	authorizedCreditCheck: Option<boolean>;
	socialSecNum: Option<string>;
	maritalStatus: Option<MaritalStatusEnum>;
	dateOfBirth: Option<Date>;
	creditScore: Option<number>;
	creditScore_Equifax: Option<number>;
	creditScore_Experian: Option<number>;
	creditScore_TransUnion: Option<number>;
	typeOfBorrower: TypeOfBorrowerEnum;
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
	borrowerId: createOptionFromOptional(number, 'borrowerId'),
	mortgageId: number,
	contactId: createOptionFromOptional(number, 'contactId'),
	firstName: createOptionFromOptional(string, 'firstName'),
	middleName: createOptionFromOptional(string, 'middleName'),
	lastName: createOptionFromOptional(string, 'lastName'),
	nameSuffix: createOptionFromOptional(string, 'nameSuffix'),
	yearsOfSchool: createOptionFromOptional(number, 'yearsOfSchool'),
	dependentCount: createOptionFromOptional(number, 'dependentCount'),
	authorizedCreditCheck: createOptionFromOptional(boolean, 'authorizedCreditCheck'),
	socialSecNum: createOptionFromOptional(string, 'socialSecNum'),
	maritalStatus: createOptionFromOptional(createEnumType<MaritalStatusEnum>(MaritalStatusEnum, 'MaritalStatusEnum')),
	dateOfBirth: createOptionFromOptional(DateFromISOString, 'dateOfBirth'),
	creditScore: createOptionFromOptional(number, 'creditScore'),
	creditScore_Equifax: createOptionFromOptional(number, 'creditScore_Equifax'),
	creditScore_Experian: createOptionFromOptional(number, 'creditScore_Experian'),
	creditScore_TransUnion: createOptionFromOptional(number, 'creditScore_TransUnion'),
	typeOfBorrower: createEnumType<TypeOfBorrowerEnum>(TypeOfBorrowerEnum, 'TypeOfBorrowerEnum'),
	active: createOptionFromOptional(boolean, 'active'),
	assets: createOptionFromOptional(array(LELodasoftCommonModelsMortgageAssetViewModelIO), 'assets'),
	declarations: createOptionFromOptional(array(LELodasoftCommonModelsMortgageDeclarationViewModelIO), 'declarations'),
	dependents: createOptionFromOptional(array(LELodasoftCommonModelsMortgageDependentViewModelIO), 'dependents'),
	emails: createOptionFromOptional(array(LELodasoftCommonModelsMortgageEmailViewModelIO), 'emails'),
	employments: createOptionFromOptional(array(LELodasoftCommonModelsMortgageEmploymentViewModelIO), 'employments'),
	expenses: createOptionFromOptional(array(LELodasoftCommonModelsMortgageExpenseViewModelIO), 'expenses'),
	governmentMonitors: createOptionFromOptional(
		array(LELodasoftCommonModelsMortgageGovernmentMonitorViewModelIO),
		'governmentMonitors',
	),
	incomes: createOptionFromOptional(array(LELodasoftCommonModelsMortgageIncomeViewModelIO), 'incomes'),
	liabilities: createOptionFromOptional(array(LELodasoftCommonModelsMortgageLiabilityViewModelIO), 'liabilities'),
	phones: createOptionFromOptional(array(LELodasoftCommonModelsMortgagePhoneViewModelIO), 'phones'),
	reos: createOptionFromOptional(array(LELodasoftCommonModelsMortgageReoViewModelIO), 'reos'),
	residencyAddresses: createOptionFromOptional(
		array(LELodasoftCommonModelsMortgageResidencyAddressViewModelIO),
		'residencyAddresses',
	),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromISOString, 'dateUpdated'),
});
