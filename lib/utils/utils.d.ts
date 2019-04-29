import { Either } from 'fp-ts/lib/Either';
import { Type, ValidationError } from 'io-ts';
import { Observable } from 'rxjs';
export declare const unknownType: {
    readonly _tag: "UnknownType";
    readonly name: string;
    readonly is: import("io-ts").Is<unknown>;
    readonly validate: import("io-ts").Validate<unknown, unknown>;
    readonly encode: import("io-ts").Encode<unknown, unknown>;
    readonly _A: unknown;
    readonly _O: unknown;
    readonly _I: unknown;
    pipe<B, IB, A extends IB, OB extends A>(this: Type<A, unknown, unknown>, ab: Type<B, OB, IB>, name?: string | undefined): Type<B, unknown, unknown>;
    asDecoder(): import("io-ts").Decoder<unknown, unknown>;
    asEncoder(): import("io-ts").Encoder<unknown, unknown>;
    decode(i: unknown): Either<import("io-ts").Errors, unknown>;
};
export declare const throwValidation: <O>() => import("rxjs").OperatorFunction<Either<ValidationError[], O>, O>;
export declare const decodeAndMap: <A, O = A, I = unknown>(t: Type<A, O, I>) => (obs: Observable<any>) => Observable<A>;
