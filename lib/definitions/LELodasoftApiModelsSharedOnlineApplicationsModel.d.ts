import { LELodasoftApiModelsSharedOnlineWizardModel } from '../definitions/LELodasoftApiModelsSharedOnlineWizardModel';
import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiModelsSharedOnlineApplicationsModel = {
    wizardUrls: Option<Array<LELodasoftApiModelsSharedOnlineWizardModel>>;
};
export declare const LELodasoftApiModelsSharedOnlineApplicationsModelIO: import("io-ts").TypeC<{
    wizardUrls: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").TypeC<{
        name: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        url: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    }>>>;
}>;
