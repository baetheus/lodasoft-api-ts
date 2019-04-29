import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftDataAccessModelsTaskCountModel = {
    mt_g2: Option<number>;
    mt_l2: Option<number>;
    ot_g2: Option<number>;
    ot_l2: Option<number>;
    bt_s: Option<number>;
    bt_p: Option<number>;
    bt_c: Option<number>;
    doc_l5exp: Option<number>;
    doc_exp: Option<number>;
    ct: Option<number>;
    filter11: Option<number>;
    filter12: Option<number>;
};
export declare const LELodasoftDataAccessModelsTaskCountModelIO: import("io-ts").TypeC<{
    mt_g2: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    mt_l2: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    ot_g2: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    ot_l2: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    bt_s: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    bt_p: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    bt_c: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    doc_l5exp: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    doc_exp: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    ct: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    filter11: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    filter12: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
}>;
