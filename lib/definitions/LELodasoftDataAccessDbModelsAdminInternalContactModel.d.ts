import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftDataAccessDbModelsAdminInternalContactModel = {
    internalContactId: Option<number>;
    applicationId: Option<number>;
    roleId: Option<number>;
    userId: Option<string>;
};
export declare const LELodasoftDataAccessDbModelsAdminInternalContactModelIO: import("io-ts").TypeC<{
    internalContactId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    applicationId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    roleId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    userId: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
