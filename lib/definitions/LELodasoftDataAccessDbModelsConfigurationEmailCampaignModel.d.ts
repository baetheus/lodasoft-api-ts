import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftDataAccessDbModelsConfigurationEmailCampaignModel = {
    emailCampaignId: Option<number>;
    emailCampaignName: Option<string>;
    repeatDays: Option<number>;
    active: Option<boolean>;
    companyId: Option<number>;
    insertedBy: Option<string>;
    dateInserted: Option<Date>;
    updatedBy: Option<string>;
    dateUpdated: Option<Date>;
};
export declare const LELodasoftDataAccessDbModelsConfigurationEmailCampaignModelIO: import("io-ts").TypeC<{
    emailCampaignId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    emailCampaignName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    repeatDays: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    active: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
    companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    insertedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateInserted: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    updatedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateUpdated: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
}>;
