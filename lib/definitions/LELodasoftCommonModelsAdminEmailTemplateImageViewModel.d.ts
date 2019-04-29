import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsAdminEmailTemplateImageViewModel = {
    emailTemplateImageId: Option<number>;
    emailTemplateImageGuid: Option<string>;
    definedEmailTemplateId: Option<number>;
    emailTemplateId: Option<number>;
    mimeType: Option<string>;
    imageData: Option<string>;
    companyId: Option<number>;
    insertedBy: Option<string>;
    dateInserted: Option<Date>;
    updatedBy: Option<string>;
    dateUpdated: Option<Date>;
};
export declare const LELodasoftCommonModelsAdminEmailTemplateImageViewModelIO: import("io-ts").TypeC<{
    emailTemplateImageId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    emailTemplateImageGuid: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    definedEmailTemplateId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    emailTemplateId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    mimeType: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    imageData: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    insertedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateInserted: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    updatedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateUpdated: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
}>;
