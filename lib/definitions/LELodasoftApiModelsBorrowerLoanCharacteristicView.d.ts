import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiModelsBorrowerLoanCharacteristicView = {
    loanCharacteristicId: Option<number>;
    applicationId: Option<number>;
    selectedCharacteristics: Option<Array<number>>;
};
export declare const LELodasoftApiModelsBorrowerLoanCharacteristicViewIO: import("io-ts").TypeC<{
    loanCharacteristicId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    applicationId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    selectedCharacteristics: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").NumberC>>;
}>;
