import {
	LELodasoftCommonModelsMortgageAddressViewModel,
	LELodasoftCommonModelsMortgageAddressViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageAddressViewModel';
import { Option } from 'fp-ts/lib/Option';
import { number, keyof, string, boolean, type } from 'io-ts';
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
	liabilityId: createOptionFromNullable(number, 'liabilityId'),
	borrowerId: createOptionFromNullable(number, 'borrowerId'),
	addressId: createOptionFromNullable(number, 'addressId'),
	typeOfLiability: createOptionFromNullable(
		keyof({
			Alimony: null,
			ChildCare: null,
			ChildSupport: null,
			CollectionsJudgementsAndLiens: null,
			HELOC: null,
			Installment: null,
			JobRelatedExpenses: null,
			LeasePayments: null,
			MortgageLoan: null,
			Open30DayChargeAccount: null,
			OtherLiability: null,
			Revolving: null,
			SeparateMaintenanceExpense: null,
			OtherExpense: null,
			Taxes: null,
		}),
		'typeOfLiability',
	),
	creditorName: createOptionFromNullable(string, 'creditorName'),
	accountNumber: createOptionFromNullable(string, 'accountNumber'),
	monthlyPayment: createOptionFromNullable(number, 'monthlyPayment'),
	monthsLeftToPay: createOptionFromNullable(number, 'monthsLeftToPay'),
	unpaidBalance: createOptionFromNullable(number, 'unpaidBalance'),
	willBePaidOff: createOptionFromNullable(boolean, 'willBePaidOff'),
	isResubordinate: createOptionFromNullable(boolean, 'isResubordinate'),
	isExcluded: createOptionFromNullable(boolean, 'isExcluded'),
	late30Days: createOptionFromNullable(number, 'late30Days'),
	late60Days: createOptionFromNullable(number, 'late60Days'),
	late90Days: createOptionFromNullable(number, 'late90Days'),
	late120Days: createOptionFromNullable(number, 'late120Days'),
	consumerDisputeIndicator: createOptionFromNullable(boolean, 'consumerDisputeIndicator'),
	derogatoryDataIndicator: createOptionFromNullable(boolean, 'derogatoryDataIndicator'),
	fromCreditReport: createOptionFromNullable(boolean, 'fromCreditReport'),
	address: createOptionFromNullable(LELodasoftCommonModelsMortgageAddressViewModelIO, 'address'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
