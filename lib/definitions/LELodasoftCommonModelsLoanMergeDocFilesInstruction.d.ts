import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsLoanMergeDocFilesInstruction = {
    sourceDocFileGuid: Option<string>;
    destinationDocFileGuid: Option<string>;
    destinationLoanDocId: Option<number>;
    destinationLoanDocTaskId: Option<number>;
    documentTypeId: Option<number>;
    description: Option<string>;
    fileName: Option<string>;
    note: Option<string>;
    borrowerNote: Option<string>;
    condition: Option<boolean>;
    mergeMode: Option<'Append' | 'Prepend' | 'Replace'>;
    allPages: Option<boolean>;
    customPages: Option<Array<number>>;
    removePagesFromSource: Option<boolean>;
};
export declare const LELodasoftCommonModelsLoanMergeDocFilesInstructionIO: import("io-ts").TypeC<{
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
}>;
