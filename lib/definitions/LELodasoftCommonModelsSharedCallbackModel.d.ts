import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsSharedCallbackModel = {
    applicationId: Option<number>;
    bestContactNumber: Option<string>;
    note: Option<string>;
    bestCallbackTime: Option<Date>;
};
export declare const LELodasoftCommonModelsSharedCallbackModelIO: import("io-ts").TypeC<{
    applicationId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    bestContactNumber: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    note: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    bestCallbackTime: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
}>;
