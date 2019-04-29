import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiModelsMortgageProcessDuResponseModel = {
    applicationId: Option<number>;
    primaryBorrowerId: Option<number>;
};
export declare const LELodasoftApiModelsMortgageProcessDuResponseModelIO: import("io-ts").TypeC<{
    applicationId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    primaryBorrowerId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
}>;
