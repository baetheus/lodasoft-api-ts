import { createEnumType } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';
import { Option } from 'fp-ts/lib/Option';
import { boolean, number, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';

import {
	LELodasoftCommonModelsMortgageAddressViewModel,
	LELodasoftCommonModelsMortgageAddressViewModelIO,
} from '../definitions/LELodasoftCommonModelsMortgageAddressViewModel';

export enum TypeOfLiabilityEnum {
	'Alimony',
	'ChildCare',
	'ChildSupport',
	'CollectionsJudgementsAndLiens',
	'HELOC',
	'Installment',
	'JobRelatedExpenses',
	'LeasePayments',
	'MortgageLoan',
	'Open30DayChargeAccount',
	'OtherLiability',
	'Revolving',
	'SeparateMaintenanceExpense',
	'OtherExpense',
	'Taxes',
}

export type LELodasoftCommonModelsMortgageLiabilityViewModel = {
	liabilityId: Option<number>;
	borrowerId: Option<number>;
	addressId: Option<number>;
	typeOfLiability: Option<TypeOfLiabilityEnum>;
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
	liabilityId: createOptionFromOptional(number, 'liabilityId'),
	borrowerId: createOptionFromOptional(number, 'borrowerId'),
	addressId: createOptionFromOptional(number, 'addressId'),
	typeOfLiability: createOptionFromOptional(
		createEnumType<TypeOfLiabilityEnum>(TypeOfLiabilityEnum, 'TypeOfLiabilityEnum'),
		'typeOfLiability',
	),
	creditorName: createOptionFromOptional(string, 'creditorName'),
	accountNumber: createOptionFromOptional(string, 'accountNumber'),
	monthlyPayment: createOptionFromOptional(number, 'monthlyPayment'),
	monthsLeftToPay: createOptionFromOptional(number, 'monthsLeftToPay'),
	unpaidBalance: createOptionFromOptional(number, 'unpaidBalance'),
	willBePaidOff: createOptionFromOptional(boolean, 'willBePaidOff'),
	isResubordinate: createOptionFromOptional(boolean, 'isResubordinate'),
	isExcluded: createOptionFromOptional(boolean, 'isExcluded'),
	late30Days: createOptionFromOptional(number, 'late30Days'),
	late60Days: createOptionFromOptional(number, 'late60Days'),
	late90Days: createOptionFromOptional(number, 'late90Days'),
	late120Days: createOptionFromOptional(number, 'late120Days'),
	consumerDisputeIndicator: createOptionFromOptional(boolean, 'consumerDisputeIndicator'),
	derogatoryDataIndicator: createOptionFromOptional(boolean, 'derogatoryDataIndicator'),
	fromCreditReport: createOptionFromOptional(boolean, 'fromCreditReport'),
	address: createOptionFromOptional(LELodasoftCommonModelsMortgageAddressViewModelIO, 'address'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromISOString, 'dateUpdated'),
});
