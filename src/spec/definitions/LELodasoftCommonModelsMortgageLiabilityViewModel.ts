import {
	LELodasoftCommonModelsMortgageAddressViewModel,
	LELodasoftCommonModelsMortgageAddressViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageAddressViewModel';
import { Option } from 'fp-ts/lib/Option';
import { number, union, literal, string, boolean, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsMortgageLiabilityViewModel = {
	liabilityId: Option<number>;
	borrowerId: Option<number>;
	addressId: Option<number>;
	typeOfLiability: Option<
		| 'Alimony'
		| 'ChildCare'
		| 'ChildSupport'
		| 'CollectionsJudgementsAndLiens'
		| 'HELOC'
		| 'Installment'
		| 'JobRelatedExpenses'
		| 'LeasePayments'
		| 'MortgageLoan'
		| 'Open30DayChargeAccount'
		| 'OtherLiability'
		| 'Revolving'
		| 'SeparateMaintenanceExpense'
		| 'OtherExpense'
		| 'Taxes'
	>;
	creditorName: Option<string>;
	accountNumber: Option<string>;
	monthlyPayment: Option<number>;
	monthsLeftToPay: Option<number>;
	unpaidBalance: Option<number>;
	willBePaidOff: Option<boolean>;
	isResubordinate: Option<boolean>;
	isExcluded: Option<boolean>;
	late30Days: Option<number>;
	late60Days: Option<number>;
	late90Days: Option<number>;
	late120Days: Option<number>;
	consumerDisputeIndicator: Option<boolean>;
	derogatoryDataIndicator: Option<boolean>;
	fromCreditReport: Option<boolean>;
	address: Option<LELodasoftCommonModelsMortgageAddressViewModel>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsMortgageLiabilityViewModelIO = type({
	liabilityId: createOptionFromNullable(number),
	borrowerId: createOptionFromNullable(number),
	addressId: createOptionFromNullable(number),
	typeOfLiability: createOptionFromNullable(
		union([
			literal('Alimony'),
			literal('ChildCare'),
			literal('ChildSupport'),
			literal('CollectionsJudgementsAndLiens'),
			literal('HELOC'),
			literal('Installment'),
			literal('JobRelatedExpenses'),
			literal('LeasePayments'),
			literal('MortgageLoan'),
			literal('Open30DayChargeAccount'),
			literal('OtherLiability'),
			literal('Revolving'),
			literal('SeparateMaintenanceExpense'),
			literal('OtherExpense'),
			literal('Taxes'),
		]),
	),
	creditorName: createOptionFromNullable(string),
	accountNumber: createOptionFromNullable(string),
	monthlyPayment: createOptionFromNullable(number),
	monthsLeftToPay: createOptionFromNullable(number),
	unpaidBalance: createOptionFromNullable(number),
	willBePaidOff: createOptionFromNullable(boolean),
	isResubordinate: createOptionFromNullable(boolean),
	isExcluded: createOptionFromNullable(boolean),
	late30Days: createOptionFromNullable(number),
	late60Days: createOptionFromNullable(number),
	late90Days: createOptionFromNullable(number),
	late120Days: createOptionFromNullable(number),
	consumerDisputeIndicator: createOptionFromNullable(boolean),
	derogatoryDataIndicator: createOptionFromNullable(boolean),
	fromCreditReport: createOptionFromNullable(boolean),
	address: createOptionFromNullable(LELodasoftCommonModelsMortgageAddressViewModelIO),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
