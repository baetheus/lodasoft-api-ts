import { LELodasoftCommonModelsAdminEmailTemplateImageViewModel } from '../definitions/LELodasoftCommonModelsAdminEmailTemplateImageViewModel';
import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsAdminEmailTemplateViewModel = {
    emailTemplateId: Option<number>;
    emailTemplateName: Option<string>;
    description: Option<string>;
    emailTemplateType: Option<'Loan' | 'Lead'>;
    manualSendEnabled: Option<boolean>;
    emailText: Option<string>;
    images: Option<Array<LELodasoftCommonModelsAdminEmailTemplateImageViewModel>>;
    companyId: Option<number>;
    insertedBy: Option<string>;
    dateInserted: Option<Date>;
    updatedBy: Option<string>;
    dateUpdated: Option<Date>;
};
export declare const LELodasoftCommonModelsAdminEmailTemplateViewModelIO: import("io-ts").TypeC<{
    emailTemplateId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    emailTemplateName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    description: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    emailTemplateType: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
        Loan: null;
        Lead: null;
    }>>;
    manualSendEnabled: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
    emailText: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    images: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").TypeC<{
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
    }>>>;
    companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    insertedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateInserted: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    updatedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateUpdated: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
}>;
