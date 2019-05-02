import { Option } from 'fp-ts/lib/Option';
import { array, boolean, number, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

import {
	LELodasoftCommonModelsSharedPortalTaskDocument,
	LELodasoftCommonModelsSharedPortalTaskDocumentIO,
} from '../definitions/LELodasoftCommonModelsSharedPortalTaskDocument';
import { createEnumType } from '../utils/utils';

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
	taskId: createOptionFromNullable(number, 'taskId'),
	taskTypeId: createOptionFromNullable(string, 'taskTypeId'),
	borrowerTaskType: createOptionFromNullable(
		createEnumType<BorrowerTaskTypeEnum>(BorrowerTaskTypeEnum, 'BorrowerTaskTypeEnum'),
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
		createEnumType<BorrowerTaskStatusEnum>(BorrowerTaskStatusEnum, 'BorrowerTaskStatusEnum'),
		'borrowerTaskStatus',
	),
	linkedDocuments: createOptionFromNullable(
		array(LELodasoftCommonModelsSharedPortalTaskDocumentIO),
		'linkedDocuments',
	),
	allowUpload: createOptionFromNullable(boolean, 'allowUpload'),
});
