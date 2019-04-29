import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiModelsSharedOnlineWizardModel = {
    name: Option<string>;
    url: Option<string>;
};
export declare const LELodasoftApiModelsSharedOnlineWizardModelIO: import("io-ts").TypeC<{
    name: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    url: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
