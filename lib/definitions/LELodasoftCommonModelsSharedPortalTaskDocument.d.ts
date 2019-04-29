import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsSharedPortalTaskDocument = {
    documentGuid: Option<string>;
    documentUrl: Option<string>;
    fileName: Option<string>;
    borrowerNote: Option<string>;
};
export declare const LELodasoftCommonModelsSharedPortalTaskDocumentIO: import("io-ts").TypeC<{
    documentGuid: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    documentUrl: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    fileName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    borrowerNote: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
