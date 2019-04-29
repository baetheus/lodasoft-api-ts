import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiModelsBorrowerExternalContactView = {
    agentId: Option<number>;
    agentTypeId: Option<number>;
    agentType: Option<string>;
    firstName: Option<string>;
    lastName: Option<string>;
    phone: Option<string>;
    email: Option<string>;
    orgName: Option<string>;
    fax: Option<string>;
};
export declare const LELodasoftApiModelsBorrowerExternalContactViewIO: import("io-ts").TypeC<{
    agentId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    agentTypeId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    agentType: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    firstName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    lastName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    phone: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    email: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    orgName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    fax: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
