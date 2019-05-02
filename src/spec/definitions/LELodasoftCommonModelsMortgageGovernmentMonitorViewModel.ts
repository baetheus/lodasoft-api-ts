import { Option } from 'fp-ts/lib/Option';
import { boolean, number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

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
	governmentMonitorId: createOptionFromNullable(number, 'governmentMonitorId'),
	borrowerId: createOptionFromNullable(number, 'borrowerId'),
	isFurnishInfo: createOptionFromNullable(boolean, 'isFurnishInfo'),
	ethnicity: createOptionFromNullable(createEnumType<EthnicityEnum>(EthnicityEnum, 'EthnicityEnum'), 'ethnicity'),
	race: createOptionFromNullable(createEnumType<RaceEnum>(RaceEnum, 'RaceEnum'), 'race'),
	sex: createOptionFromNullable(createEnumType<SexEnum>(SexEnum, 'SexEnum'), 'sex'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
