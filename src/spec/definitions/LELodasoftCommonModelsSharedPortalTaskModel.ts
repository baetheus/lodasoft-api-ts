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
	taskId: createOptionFromNullable(number, 'taskId'),
	taskTypeId: createOptionFromNullable(string, 'taskTypeId'),
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
		'borrowerTaskType',
	),
	description: createOptionFromNullable(string, 'description'),
	docType: createOptionFromNullable(string, 'docType'),
	docSortOrder: createOptionFromNullable(number, 'docSortOrder'),
	submittedDate: createOptionFromNullable(DateFromISOString, 'submittedDate'),
	approvedDate: createOptionFromNullable(DateFromISOString, 'approvedDate'),
	dueDate: createOptionFromNullable(DateFromISOString, 'dueDate'),
	templateDocumentUrl: createOptionFromNullable(string, 'templateDocumentUrl'),
	borrowerId: createOptionFromNullable(number, 'borrowerId'),
	borrowerName: createOptionFromNullable(string, 'borrowerName'),
	borrowerFacingNote: createOptionFromNullable(string, 'borrowerFacingNote'),
	borrowerTaskStatus: createOptionFromNullable(
		keyof({ Pending: null, Submitted: null, Rejected: null, Completed: null }),
		'borrowerTaskStatus',
	),
	linkedDocuments: createOptionFromNullable(
		array(LELodasoftCommonModelsSharedPortalTaskDocumentIO),
		'linkedDocuments',
	),
	allowUpload: createOptionFromNullable(boolean, 'allowUpload'),
});
