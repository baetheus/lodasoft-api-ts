import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiModelsAdminWizardEverythingElseRequestModel = {
    templateCompanyId: Option<number>;
    destinationCompanyId: Option<number>;
};
export declare const LELodasoftApiModelsAdminWizardEverythingElseRequestModelIO: import("io-ts").TypeC<{
    templateCompanyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    destinationCompanyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
}>;
