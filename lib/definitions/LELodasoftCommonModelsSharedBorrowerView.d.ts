import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsSharedBorrowerView = {
    borrowerId: Option<number>;
    borrowerName: Option<string>;
    borrowerPhone: Option<string>;
    borrowerEmail: Option<string>;
};
export declare const LELodasoftCommonModelsSharedBorrowerViewIO: import("io-ts").TypeC<{
    borrowerId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    borrowerName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    borrowerPhone: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    borrowerEmail: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
