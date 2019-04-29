import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsAdminGenerateDocumentRequest = {
    documentTemplateId: Option<number>;
    applicationId: Option<number>;
    replacementValues: Option<{
        [key: string]: string;
    }>;
};
export declare const LELodasoftCommonModelsAdminGenerateDocumentRequestIO: import("io-ts").TypeC<{
    documentTemplateId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    applicationId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    replacementValues: import("io-ts-types").OptionFromNullableC<import("io-ts").RecordC<import("io-ts").StringC, import("io-ts").StringC>>;
}>;
