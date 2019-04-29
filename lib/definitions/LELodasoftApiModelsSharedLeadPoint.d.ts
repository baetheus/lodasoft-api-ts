import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiModelsSharedLeadPoint = {
    leadPostUrl: Option<string>;
};
export declare const LELodasoftApiModelsSharedLeadPointIO: import("io-ts").TypeC<{
    leadPostUrl: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
