import { LELodasoftCommonModelsConfigurationWizardDataViewModel } from '../definitions/LELodasoftCommonModelsConfigurationWizardDataViewModel';
import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsConfigurationWizardDataIdViewModel = {
    id: Option<number>;
    name: Option<string>;
    dataList: Option<Array<LELodasoftCommonModelsConfigurationWizardDataViewModel>>;
};
export declare const LELodasoftCommonModelsConfigurationWizardDataIdViewModelIO: import("io-ts").TypeC<{
    id: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    name: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dataList: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").TypeC<{
        id: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        dataId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        value: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        name: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        buttonImage: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    }>>>;
}>;
