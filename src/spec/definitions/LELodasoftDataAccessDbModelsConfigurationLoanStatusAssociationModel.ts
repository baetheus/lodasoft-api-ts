import {
	LELodasoftDataAccessDbModelsConfigurationLoanStatusModel,
	LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO,
} from '../definitions/LELodasoftDataAccessDbModelsConfigurationLoanStatusModel';
import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModel = {
	id: Option<number>;
	loanPurposeId: Option<number>;
	loanStatusId: Option<number>;
	loanStatusModel: Option<LELodasoftDataAccessDbModelsConfigurationLoanStatusModel>;
	borrowerFriendlyStatus: Option<string>;
	borrowerFriendlyBlurb: Option<string>;
	supressBorrowerNotification: Option<boolean>;
	companyId: Option<number>;
	order: Option<number>;
	associatedStatuses: Option<string>;
	isLeadStatusAssociation: Option<boolean>;
};
export const LELodasoftDataAccessDbModelsConfigurationLoanStatusAssociationModelIO = type({
	id: createOptionFromNullable(number),
	loanPurposeId: createOptionFromNullable(number),
	loanStatusId: createOptionFromNullable(number),
	loanStatusModel: createOptionFromNullable(LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO),
	borrowerFriendlyStatus: createOptionFromNullable(string),
	borrowerFriendlyBlurb: createOptionFromNullable(string),
	supressBorrowerNotification: createOptionFromNullable(boolean),
	companyId: createOptionFromNullable(number),
	order: createOptionFromNullable(number),
	associatedStatuses: createOptionFromNullable(string),
	isLeadStatusAssociation: createOptionFromNullable(boolean),
});
