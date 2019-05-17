import { Option } from 'fp-ts/lib/Option';
import { array, boolean, number, string, type } from 'io-ts';
import { DateFromDatelike } from '@nll/utils-ts/lib/io';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

import {
	LELodasoftCommonModelsSharedPortalTaskDocument,
	LELodasoftCommonModelsSharedPortalTaskDocumentIO,
} from '../definitions/LELodasoftCommonModelsSharedPortalTaskDocument';
import { createEnumType } from '@nll/utils-ts/lib/io';

export enum BorrowerTaskTypeEnum {
	'RequestDocument',
	'ViewDocument',
	'AcknowledgeReceipt',
	'EsignDocument',
	'RequestInformation',
	'PerformAction',
	'OnlineApplication',
	'DigitalAssetVerification',
}

export enum BorrowerTaskStatusEnum {
	'Pending',
	'Submitted',
	'Rejected',
	'Completed',
}

export type LELodasoftCommonModelsSharedPortalTaskModel = {
	taskId: Option<number>;
	taskTypeId: Option<string>;
	borrowerTaskType: Option<BorrowerTaskTypeEnum>;
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
	borrowerTaskStatus: Option<BorrowerTaskStatusEnum>;
	linkedDocuments: Option<Array<LELodasoftCommonModelsSharedPortalTaskDocument>>;
	allowUpload: Option<boolean>;
};
export const LELodasoftCommonModelsSharedPortalTaskModelIO = type({
	taskId: createOptionFromOptional(number, 'taskId'),
	taskTypeId: createOptionFromOptional(string, 'taskTypeId'),
	borrowerTaskType: createOptionFromOptional(
		createEnumType<BorrowerTaskTypeEnum>(BorrowerTaskTypeEnum, 'BorrowerTaskTypeEnum'),
		'borrowerTaskType',
	),
	description: createOptionFromOptional(string, 'description'),
	docType: createOptionFromOptional(string, 'docType'),
	docSortOrder: createOptionFromOptional(number, 'docSortOrder'),
	submittedDate: createOptionFromOptional(DateFromDatelike, 'submittedDate'),
	approvedDate: createOptionFromOptional(DateFromDatelike, 'approvedDate'),
	dueDate: createOptionFromOptional(DateFromDatelike, 'dueDate'),
	templateDocumentUrl: createOptionFromOptional(string, 'templateDocumentUrl'),
	borrowerId: createOptionFromOptional(number, 'borrowerId'),
	borrowerName: createOptionFromOptional(string, 'borrowerName'),
	borrowerFacingNote: createOptionFromOptional(string, 'borrowerFacingNote'),
	borrowerTaskStatus: createOptionFromOptional(
		createEnumType<BorrowerTaskStatusEnum>(BorrowerTaskStatusEnum, 'BorrowerTaskStatusEnum'),
		'borrowerTaskStatus',
	),
	linkedDocuments: createOptionFromOptional(
		array(LELodasoftCommonModelsSharedPortalTaskDocumentIO),
		'linkedDocuments',
	),
	allowUpload: createOptionFromOptional(boolean, 'allowUpload'),
});
