import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsMortgageGovernmentMonitorViewModel = {
    governmentMonitorId: Option<number>;
    borrowerId: Option<number>;
    isFurnishInfo: Option<boolean>;
    ethnicity: Option<'AmericanIndianOrAlaskaNative' | 'Asian' | 'BlackOrAfricanAmerican' | 'HispanicOrLatino' | 'NativeHawaiianOrOtherPacificIslander' | 'White' | 'InformationNotProvided' | 'NotApplicable'>;
    race: Option<'Caucasian' | 'NonCaucasian' | 'AmericanIndianOrAlaskaNative' | 'Asian' | 'BlackOrAfricanAmerican' | 'NativeHawaiianOrOtherPacificIslander' | 'White' | 'InformationNotProvided' | 'NotApplicable'>;
    sex: Option<'Female' | 'Male' | 'InformationNotProvided' | 'NotApplicable'>;
    companyId: Option<number>;
    insertedBy: Option<string>;
    dateInserted: Option<Date>;
    updatedBy: Option<string>;
    dateUpdated: Option<Date>;
};
export declare const LELodasoftCommonModelsMortgageGovernmentMonitorViewModelIO: import("io-ts").TypeC<{
    governmentMonitorId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    borrowerId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    isFurnishInfo: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
    ethnicity: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
        AmericanIndianOrAlaskaNative: null;
        Asian: null;
        BlackOrAfricanAmerican: null;
        HispanicOrLatino: null;
        NativeHawaiianOrOtherPacificIslander: null;
        White: null;
        InformationNotProvided: null;
        NotApplicable: null;
    }>>;
    race: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
        Caucasian: null;
        NonCaucasian: null;
        AmericanIndianOrAlaskaNative: null;
        Asian: null;
        BlackOrAfricanAmerican: null;
        NativeHawaiianOrOtherPacificIslander: null;
        White: null;
        InformationNotProvided: null;
        NotApplicable: null;
    }>>;
    sex: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
        Female: null;
        Male: null;
        InformationNotProvided: null;
        NotApplicable: null;
    }>>;
    companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    insertedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateInserted: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    updatedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateUpdated: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
}>;
