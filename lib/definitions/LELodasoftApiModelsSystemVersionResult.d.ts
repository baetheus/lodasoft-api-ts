import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiModelsSystemVersionResult = {
    assemblyVersion: Option<string>;
    assemblyInformation: Option<string>;
    machineName: Option<string>;
    port: Option<number>;
};
export declare const LELodasoftApiModelsSystemVersionResultIO: import("io-ts").TypeC<{
    assemblyVersion: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    assemblyInformation: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    machineName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    port: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
}>;
