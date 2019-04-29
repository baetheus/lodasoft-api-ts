import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsSharedLiveData = {
    applicationId: Option<number>;
    taskCount: Option<number>;
    messageCount: Option<number>;
};
export declare const LELodasoftCommonModelsSharedLiveDataIO: import("io-ts").TypeC<{
    applicationId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    taskCount: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    messageCount: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
}>;
