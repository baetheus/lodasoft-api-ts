import { LELodasoftCommonModelsConfigurationWizardGroupViewModel } from '../definitions/LELodasoftCommonModelsConfigurationWizardGroupViewModel';
import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsConfigurationWizardGroupIdViewModel = {
    id: Option<number>;
    name: Option<string>;
    propertyName: Option<string>;
    groupList: Option<Array<LELodasoftCommonModelsConfigurationWizardGroupViewModel>>;
};
export declare const LELodasoftCommonModelsConfigurationWizardGroupIdViewModelIO: import("io-ts").TypeC<{
    id: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    name: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    propertyName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    groupList: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").TypeC<{
        id: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        groupId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        questionId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        categoryId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        name: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        question: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        answer: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        validate: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    }>>>;
}>;
