import { Option } from 'fp-ts/lib/Option';
import { number, boolean, union, literal, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsMortgageGovernmentMonitorViewModel = {
	governmentMonitorId: Option<number>;
	borrowerId: Option<number>;
	isFurnishInfo: Option<boolean>;
	ethnicity: Option<
		| 'AmericanIndianOrAlaskaNative'
		| 'Asian'
		| 'BlackOrAfricanAmerican'
		| 'HispanicOrLatino'
		| 'NativeHawaiianOrOtherPacificIslander'
		| 'White'
		| 'InformationNotProvided'
		| 'NotApplicable'
	>;
	race: Option<
		| 'Caucasian'
		| 'NonCaucasian'
		| 'AmericanIndianOrAlaskaNative'
		| 'Asian'
		| 'BlackOrAfricanAmerican'
		| 'NativeHawaiianOrOtherPacificIslander'
		| 'White'
		| 'InformationNotProvided'
		| 'NotApplicable'
	>;
	sex: Option<'Female' | 'Male' | 'InformationNotProvided' | 'NotApplicable'>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsMortgageGovernmentMonitorViewModelIO = type({
	governmentMonitorId: createOptionFromNullable(number),
	borrowerId: createOptionFromNullable(number),
	isFurnishInfo: createOptionFromNullable(boolean),
	ethnicity: createOptionFromNullable(
		union([
			literal('AmericanIndianOrAlaskaNative'),
			literal('Asian'),
			literal('BlackOrAfricanAmerican'),
			literal('HispanicOrLatino'),
			literal('NativeHawaiianOrOtherPacificIslander'),
			literal('White'),
			literal('InformationNotProvided'),
			literal('NotApplicable'),
		]),
	),
	race: createOptionFromNullable(
		union([
			literal('Caucasian'),
			literal('NonCaucasian'),
			literal('AmericanIndianOrAlaskaNative'),
			literal('Asian'),
			literal('BlackOrAfricanAmerican'),
			literal('NativeHawaiianOrOtherPacificIslander'),
			literal('White'),
			literal('InformationNotProvided'),
			literal('NotApplicable'),
		]),
	),
	sex: createOptionFromNullable(
		union([literal('Female'), literal('Male'), literal('InformationNotProvided'), literal('NotApplicable')]),
	),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
