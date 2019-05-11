import { Option } from 'fp-ts/lib/Option';
import { boolean, number, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';
import { createOptionFromOptional } from '../utils/optionFromOptional';

import { createEnumType } from '../utils/utils';

export enum EthnicityEnum {
	'AmericanIndianOrAlaskaNative',
	'Asian',
	'BlackOrAfricanAmerican',
	'HispanicOrLatino',
	'NativeHawaiianOrOtherPacificIslander',
	'White',
	'InformationNotProvided',
	'NotApplicable',
}

export enum RaceEnum {
	'Caucasian',
	'NonCaucasian',
	'AmericanIndianOrAlaskaNative',
	'Asian',
	'BlackOrAfricanAmerican',
	'NativeHawaiianOrOtherPacificIslander',
	'White',
	'InformationNotProvided',
	'NotApplicable',
}

export enum SexEnum {
	'Female',
	'Male',
	'InformationNotProvided',
	'NotApplicable',
}

export type LELodasoftCommonModelsMortgageGovernmentMonitorViewModel = {
	governmentMonitorId: Option<number>;
	borrowerId: Option<number>;
	isFurnishInfo: Option<boolean>;
	ethnicity: Option<EthnicityEnum>;
	race: Option<RaceEnum>;
	sex: Option<SexEnum>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsMortgageGovernmentMonitorViewModelIO = type({
	governmentMonitorId: createOptionFromOptional(number, 'governmentMonitorId'),
	borrowerId: createOptionFromOptional(number, 'borrowerId'),
	isFurnishInfo: createOptionFromOptional(boolean, 'isFurnishInfo'),
	ethnicity: createOptionFromOptional(createEnumType<EthnicityEnum>(EthnicityEnum, 'EthnicityEnum'), 'ethnicity'),
	race: createOptionFromOptional(createEnumType<RaceEnum>(RaceEnum, 'RaceEnum'), 'race'),
	sex: createOptionFromOptional(createEnumType<SexEnum>(SexEnum, 'SexEnum'), 'sex'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromISOString, 'dateUpdated'),
});
