import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsLoanExportDocFilesRequest = {
    docFileGuids: Option<Array<string>>;
};
export declare const LELodasoftCommonModelsLoanExportDocFilesRequestIO: import("io-ts").TypeC<{
    docFileGuids: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").StringC>>;
}>;
