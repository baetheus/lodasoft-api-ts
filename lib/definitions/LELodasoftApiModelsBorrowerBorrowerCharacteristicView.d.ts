import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiModelsBorrowerBorrowerCharacteristicView = {
    borrowerCharacteristicId: Option<number>;
    selectedCharacteristics: Option<Array<number>>;
    applicationId: Option<number>;
    borrowerId: Option<number>;
};
export declare const LELodasoftApiModelsBorrowerBorrowerCharacteristicViewIO: import("io-ts").TypeC<{
    borrowerCharacteristicId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    selectedCharacteristics: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").NumberC>>;
    applicationId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    borrowerId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
}>;
