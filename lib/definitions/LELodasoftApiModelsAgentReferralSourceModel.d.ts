import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiModelsAgentReferralSourceModel = {
    agentId: Option<number>;
    firstName: Option<string>;
    lastName: Option<string>;
    title: Option<string>;
    orgName: Option<string>;
};
export declare const LELodasoftApiModelsAgentReferralSourceModelIO: import("io-ts").TypeC<{
    agentId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    firstName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    lastName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    title: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    orgName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
