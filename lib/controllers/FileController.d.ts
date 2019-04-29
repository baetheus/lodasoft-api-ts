import { TAPIClient } from '../client/client';
import { LELodasoftApiModelsFileExportDocumentModel } from '../definitions/LELodasoftApiModelsFileExportDocumentModel';
import { LELodasoftCommonModelsAdminTrackingViewModel } from '../definitions/LELodasoftCommonModelsAdminTrackingViewModel';
import { LELodasoftCommonModelsLoanExportDocFilesRequest } from '../definitions/LELodasoftCommonModelsLoanExportDocFilesRequest';
import { LELodasoftDataAccessDbModelsAdminDocFileModel } from '../definitions/LELodasoftDataAccessDbModelsAdminDocFileModel';
import { LELodasoftDataAccessModelsAdminBorrowerFileDto } from '../definitions/LELodasoftDataAccessModelsAdminBorrowerFileDto';
import { Option } from 'fp-ts/lib/Option';
import { Observable } from 'rxjs';
export declare type FileController = {
    /**
     * @param { string } guid undefined
     */
    readonly File_TrackingFile: (guid: string) => Observable<Array<LELodasoftCommonModelsAdminTrackingViewModel>>;
    /**
     * @param { string } guid undefined
     */
    readonly File_GetDocFile: (guid: string) => Observable<LELodasoftDataAccessDbModelsAdminDocFileModel>;
    /**
     * @param { string } guid undefined
     */
    readonly File_RemoveFile: (guid: string) => Observable<LELodasoftDataAccessDbModelsAdminDocFileModel>;
    /**
     * @param { number } taskId undefined
     * @param { object } [parameters]
     */
    readonly File_UpsertFileFromTask: (taskId: number, parameters: {
        query?: {
            autoTransition: Option<boolean>;
        };
    }) => Observable<LELodasoftDataAccessModelsAdminBorrowerFileDto>;
    /**
     * @param { number } loanDocId undefined
     */
    readonly File_UpsertFileFromLoanDoc: (loanDocId: number) => Observable<LELodasoftDataAccessModelsAdminBorrowerFileDto>;
    /**
     * @param { number } appId undefined
     */
    readonly File_GetFileForExport: (appId: number) => Observable<Array<LELodasoftApiModelsFileExportDocumentModel>>;
    /**
     * @param { string } fileGuid undefined
     * @param { string } downloadUserId undefined
     */
    readonly File_DownloadFile: (fileGuid: string, downloadUserId: string) => Observable<unknown>;
    /**
     * @param { string } fileGuid undefined
     * @param { string } userId undefined
     */
    readonly File_ViewFile: (fileGuid: string, userId: string) => Observable<unknown>;
    /**
     * @param { boolean } asPDF undefined
     * @param { object } parameters
     */
    readonly File_ExportFile: (asPDF: boolean, parameters: {
        body: LELodasoftCommonModelsLoanExportDocFilesRequest;
    }) => Observable<unknown>;
    /**
     * @param { string } fileGuid undefined
     */
    readonly File_ConvertToPdf: (fileGuid: string) => Observable<string>;
};
export declare const fileController: import("fp-ts/lib/Reader").Reader<{
    apiClient: TAPIClient;
}, FileController>;
