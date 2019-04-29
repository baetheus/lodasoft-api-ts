import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsThirdPartyThirdPartyKeyValuePairViewModel = {
    thirdPartyKeyValueId: Option<number>;
    key: Option<string>;
    value: Option<string>;
    credentialId: Option<number>;
    companyId: Option<number>;
    insertedBy: Option<string>;
    dateInserted: Option<Date>;
    updatedBy: Option<string>;
    dateUpdated: Option<Date>;
};
export declare const LELodasoftCommonModelsThirdPartyThirdPartyKeyValuePairViewModelIO: import("io-ts").TypeC<{
    thirdPartyKeyValueId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    key: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    value: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    credentialId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    insertedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateInserted: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    updatedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateUpdated: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
}>;
