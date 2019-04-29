import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsLeadsProviderModelsAssignmentInfo = {
    userName: Option<string>;
    userGuid: Option<string>;
};
export declare const LELodasoftCommonModelsLeadsProviderModelsAssignmentInfoIO: import("io-ts").TypeC<{
    userName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    userGuid: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
