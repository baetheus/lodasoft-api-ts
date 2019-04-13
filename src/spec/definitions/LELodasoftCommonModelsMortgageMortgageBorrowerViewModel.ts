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
	borrowerId: createOptionFromNullable(number),
	mortgageId: number,
	contactId: number,
	firstName: createOptionFromNullable(string),
	middleName: createOptionFromNullable(string),
	lastName: createOptionFromNullable(string),
	nameSuffix: createOptionFromNullable(string),
	yearsOfSchool: createOptionFromNullable(number),
	dependentCount: createOptionFromNullable(number),
	authorizedCreditCheck: createOptionFromNullable(boolean),
	socialSecNum: createOptionFromNullable(string),
	maritalStatus: createOptionFromNullable(keyof({ Single: null, Married: null, Separated: null })),
	dateOfBirth: createOptionFromNullable(DateFromISOString),
	creditScore: createOptionFromNullable(number),
	creditScore_Equifax: createOptionFromNullable(number),
	creditScore_Experian: createOptionFromNullable(number),
	creditScore_TransUnion: createOptionFromNullable(number),
	typeOfBorrower: keyof({ PrimaryBorrower: null, CoBorrower: null }),
	active: createOptionFromNullable(boolean),
	assets: createOptionFromNullable(array(LELodasoftCommonModelsMortgageAssetViewModelIO)),
	declarations: createOptionFromNullable(array(LELodasoftCommonModelsMortgageDeclarationViewModelIO)),
	dependents: createOptionFromNullable(array(LELodasoftCommonModelsMortgageDependentViewModelIO)),
	emails: createOptionFromNullable(array(LELodasoftCommonModelsMortgageEmailViewModelIO)),
	employments: createOptionFromNullable(array(LELodasoftCommonModelsMortgageEmploymentViewModelIO)),
	expenses: createOptionFromNullable(array(LELodasoftCommonModelsMortgageExpenseViewModelIO)),
	governmentMonitors: createOptionFromNullable(array(LELodasoftCommonModelsMortgageGovernmentMonitorViewModelIO)),
	incomes: createOptionFromNullable(array(LELodasoftCommonModelsMortgageIncomeViewModelIO)),
	liabilities: createOptionFromNullable(array(LELodasoftCommonModelsMortgageLiabilityViewModelIO)),
	phones: createOptionFromNullable(array(LELodasoftCommonModelsMortgagePhoneViewModelIO)),
	reos: createOptionFromNullable(array(LELodasoftCommonModelsMortgageReoViewModelIO)),
	residencyAddresses: createOptionFromNullable(array(LELodasoftCommonModelsMortgageResidencyAddressViewModelIO)),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
