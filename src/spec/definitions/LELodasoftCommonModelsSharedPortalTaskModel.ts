import {
	LELodasoftCommonModelsSharedPortalTaskDocument,
	LELodasoftCommonModelsSharedPortalTaskDocumentIO,
} from '../definitions/LELodasoftCommonModelsSharedPortalTaskDocument';
import { Option } from 'fp-ts/lib/Option';
import { number, string, keyof, array, boolean, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsSharedPortalTaskModel = {
	taskId: Option<number>;
	taskTypeId: Option<string>;
	borrowerTaskType: Option<
		| 'RequestDocument'
		| 'ViewDocument'
		| 'AcknowledgeReceipt'
		| 'EsignDocument'
		| 'RequestInformation'
		| 'PerformAction'
		| 'OnlineApplication'
		| 'DigitalAssetVerification'
	>;
	description: Option<string>;
	docType: Option<string>;
	docSortOrder: Option<number>;
	submittedDate: Option<Date>;
	approvedDate: Option<Date>;
	dueDate: Option<Date>;
	templateDocumentUrl: Option<string>;
	borrowerId: Option<number>;
	borrowerName: Option<string>;
	borrowerFacingNote: Option<string>;
	borrowerTaskStatus: Option<'Pending' | 'Submitted' | 'Rejected' | 'Completed'>;
	linkedDocuments: Option<Array<LELodasoftCommonModelsSharedPortalTaskDocument>>;
	allowUpload: Option<boolean>;
};
export const LELodasoftCommonModelsSharedPortalTaskModelIO = type({
	taskId: createOptionFromNullable(number),
	taskTypeId: createOptionFromNullable(string),
	borrowerTaskType: createOptionFromNullable(
		keyof({
			RequestDocument: null,
			ViewDocument: null,
			AcknowledgeReceipt: null,
			EsignDocument: null,
			RequestInformation: null,
			PerformAction: null,
			OnlineApplication: null,
			DigitalAssetVerification: null,
		}),
	),
	description: createOptionFromNullable(string),
	docType: createOptionFromNullable(string),
	docSortOrder: createOptionFromNullable(number),
	submittedDate: createOptionFromNullable(DateFromISOString),
	approvedDate: createOptionFromNullable(DateFromISOString),
	dueDate: createOptionFromNullable(DateFromISOString),
	templateDocumentUrl: createOptionFromNullable(string),
	borrowerId: createOptionFromNullable(number),
	borrowerName: createOptionFromNullable(string),
	borrowerFacingNote: createOptionFromNullable(string),
	borrowerTaskStatus: createOptionFromNullable(
		keyof({ Pending: null, Submitted: null, Rejected: null, Completed: null }),
	),
	linkedDocuments: createOptionFromNullable(array(LELodasoftCommonModelsSharedPortalTaskDocumentIO)),
	allowUpload: createOptionFromNullable(boolean),
});
