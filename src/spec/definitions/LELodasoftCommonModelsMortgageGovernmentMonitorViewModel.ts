import { Option } from 'fp-ts/lib/Option';
import { number, boolean, keyof, string, type } from 'io-ts';
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
	governmentMonitorId: createOptionFromNullable(number, 'governmentMonitorId'),
	borrowerId: createOptionFromNullable(number, 'borrowerId'),
	isFurnishInfo: createOptionFromNullable(boolean, 'isFurnishInfo'),
	ethnicity: createOptionFromNullable(
		keyof({
			AmericanIndianOrAlaskaNative: null,
			Asian: null,
			BlackOrAfricanAmerican: null,
			HispanicOrLatino: null,
			NativeHawaiianOrOtherPacificIslander: null,
			White: null,
			InformationNotProvided: null,
			NotApplicable: null,
		}),
		'ethnicity',
	),
	race: createOptionFromNullable(
		keyof({
			Caucasian: null,
			NonCaucasian: null,
			AmericanIndianOrAlaskaNative: null,
			Asian: null,
			BlackOrAfricanAmerican: null,
			NativeHawaiianOrOtherPacificIslander: null,
			White: null,
			InformationNotProvided: null,
			NotApplicable: null,
		}),
		'race',
	),
	sex: createOptionFromNullable(
		keyof({ Female: null, Male: null, InformationNotProvided: null, NotApplicable: null }),
		'sex',
	),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
