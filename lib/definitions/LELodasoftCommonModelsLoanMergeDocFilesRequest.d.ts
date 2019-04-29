import { LELodasoftCommonModelsLoanMergeDocFilesInstruction } from '../definitions/LELodasoftCommonModelsLoanMergeDocFilesInstruction';
import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsLoanMergeDocFilesRequest = {
    newSourceDocFileBase64Content: Option<{
        [key: string]: string;
    }>;
    mergeInstructions: Option<Array<LELodasoftCommonModelsLoanMergeDocFilesInstruction>>;
    originalFileGuid: Option<string>;
    newFileName: Option<string>;
};
export declare const LELodasoftCommonModelsLoanMergeDocFilesRequestIO: import("io-ts").TypeC<{
    newSourceDocFileBase64Content: import("io-ts-types").OptionFromNullableC<import("io-ts").RecordC<import("io-ts").StringC, import("io-ts").StringC>>;
    mergeInstructions: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").TypeC<{
        sourceDocFileGuid: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        destinationDocFileGuid: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        destinationLoanDocId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        destinationLoanDocTaskId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        documentTypeId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        description: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        fileName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        note: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        borrowerNote: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        condition: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
        mergeMode: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
            Append: null;
            Prepend: null;
            Replace: null;
        }>>;
        allPages: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
        customPages: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").NumberC>>;
        removePagesFromSource: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
    }>>>;
    originalFileGuid: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    newFileName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
}>;
