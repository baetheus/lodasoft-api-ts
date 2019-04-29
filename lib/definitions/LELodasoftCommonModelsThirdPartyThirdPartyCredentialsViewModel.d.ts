import { LELodasoftCommonModelsThirdPartyThirdPartyKeyValuePairViewModel } from '../definitions/LELodasoftCommonModelsThirdPartyThirdPartyKeyValuePairViewModel';
import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsThirdPartyThirdPartyCredentialsViewModel = {
    credentialId: Option<number>;
    credentialType: Option<string>;
    vendorName: Option<string>;
    url: Option<string>;
    userName: Option<string>;
    password: Option<string>;
    userId: Option<string>;
    credentialProviderId: Option<number>;
    thirdPartyKeyValuePairs: Option<Array<LELodasoftCommonModelsThirdPartyThirdPartyKeyValuePairViewModel>>;
    companyId: Option<number>;
    insertedBy: Option<string>;
    dateInserted: Option<Date>;
    updatedBy: Option<string>;
    dateUpdated: Option<Date>;
};
export declare const LELodasoftCommonModelsThirdPartyThirdPartyCredentialsViewModelIO: import("io-ts").TypeC<{
    credentialId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    credentialType: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    vendorName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    url: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    userName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    password: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    userId: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    credentialProviderId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    thirdPartyKeyValuePairs: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").TypeC<{
        thirdPartyKeyValueId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        key: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        value: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        credentialId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        insertedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        dateInserted: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
        updatedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        dateUpdated: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    }>>>;
    companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    insertedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateInserted: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    updatedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateUpdated: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
}>;
