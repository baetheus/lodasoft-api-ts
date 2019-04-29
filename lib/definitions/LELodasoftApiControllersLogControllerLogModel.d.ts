import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiControllersLogControllerLogModel = {
    level: Option<'Fatal' | 'Error' | 'Warning' | 'Info' | 'Debug' | 'Trace'>;
    timestamp: Option<Date>;
    message: Option<string>;
    actionType: Option<string>;
    origin: Option<string>;
    data: Option<{
        [key: string]: unknown;
    }>;
};
export declare const LELodasoftApiControllersLogControllerLogModelIO: import("io-ts").TypeC<{
    level: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
        Fatal: null;
        Error: null;
        Warning: null;
        Info: null;
        Debug: null;
        Trace: null;
    }>>;
    timestamp: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    message: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    actionType: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    origin: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    data: import("io-ts-types").OptionFromNullableC<import("io-ts").RecordC<import("io-ts").StringC, {
        readonly _tag: "UnknownType";
        readonly name: string;
        readonly is: import("io-ts").Is<unknown>;
        readonly validate: import("io-ts").Validate<unknown, unknown>;
        readonly encode: import("io-ts").Encode<unknown, unknown>;
        readonly _A: unknown;
        readonly _O: unknown;
        readonly _I: unknown;
        pipe<B, IB, A extends IB, OB extends A>(this: import("io-ts").Type<A, unknown, unknown>, ab: import("io-ts").Type<B, OB, IB>, name?: string | undefined): import("io-ts").Type<B, unknown, unknown>;
        asDecoder(): import("io-ts").Decoder<unknown, unknown>;
        asEncoder(): import("io-ts").Encoder<unknown, unknown>;
        decode(i: unknown): import("fp-ts/lib/Either").Either<import("io-ts").Errors, unknown>;
    }>>;
}>;
