import {
	LELodasoftDataAccessDbModelsConfigurationCompanyModel,
	LELodasoftDataAccessDbModelsConfigurationCompanyModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationCompanyModel';
import { Option } from 'fp-ts/lib/Option';
import { number, string, keyof, boolean, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftDataAccessDbModelsConfigurationLoanTypeModel = {
	loanTypeId: Option<number>;
	loanTypeName: Option<string>;
	mortgageAppliedForType: Option<'VA' | 'FHA' | 'Conventional' | 'USDARuralHousingService' | 'OtherMortgage'>;
	companyId: Option<number>;
	companyModel: Option<LELodasoftDataAccessDbModelsConfigurationCompanyModel>;
	showInOnlineApp: Option<boolean>;
	defaultForOnlineApp: Option<boolean>;
	order: Option<number>;
};
export const LELodasoftDataAccessDbModelsConfigurationLoanTypeModelIO = type({
	loanTypeId: createOptionFromNullable(number),
	loanTypeName: createOptionFromNullable(string),
	mortgageAppliedForType: createOptionFromNullable(
		keyof({ VA: null, FHA: null, Conventional: null, USDARuralHousingService: null, OtherMortgage: null }),
	),
	companyId: createOptionFromNullable(number),
	companyModel: createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationCompanyModelIO),
	showInOnlineApp: createOptionFromNullable(boolean),
	defaultForOnlineApp: createOptionFromNullable(boolean),
	order: createOptionFromNullable(number),
});
