import { LELodasoftCommonModelsLeadsProviderModelsAddressInfo } from '../definitions/LELodasoftCommonModelsLeadsProviderModelsAddressInfo';
import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsLeadsProviderModelsBorrowerInfo = {
    firstName: Option<string>;
    lastName: Option<string>;
    birthDate: Option<Date>;
    email: Option<string>;
    phone: Option<string>;
    workPhone: Option<string>;
    mailingAddress: Option<LELodasoftCommonModelsLeadsProviderModelsAddressInfo>;
    creditScore: Option<number>;
};
export declare const LELodasoftCommonModelsLeadsProviderModelsBorrowerInfoIO: import("io-ts").TypeC<{
    firstName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    lastName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    birthDate: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    email: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    phone: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    workPhone: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    mailingAddress: import("io-ts-types").OptionFromNullableC<import("io-ts").TypeC<{
        address1: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        address2: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        city: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        state: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        zip: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    }>>;
    creditScore: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
}>;
