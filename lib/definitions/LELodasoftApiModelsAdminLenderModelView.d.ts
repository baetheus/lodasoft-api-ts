import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiModelsAdminLenderModelView = {
    companyId: Option<number>;
    lenderId: Option<number>;
    nameOfLender: Option<string>;
    phone: Option<string>;
    address: Option<string>;
    city: Option<string>;
    state: Option<string>;
    zip: Option<string>;
};
export declare const LELodasoftApiModelsAdminLenderModelViewIO: import("io-ts").TypeC<{
    companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    lenderId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    nameOfLender: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    phone: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    address: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    city: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    state: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    zip: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
