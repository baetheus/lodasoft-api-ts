import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiControllersTaskNoteModel = {
    note: Option<string>;
    borrowerNote: Option<string>;
};
export declare const LELodasoftApiControllersTaskNoteModelIO: import("io-ts").TypeC<{
    note: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    borrowerNote: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
