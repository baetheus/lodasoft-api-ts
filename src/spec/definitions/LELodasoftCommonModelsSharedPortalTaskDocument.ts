import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftCommonModelsSharedPortalTaskDocument = {
	documentGuid: Option<string>;
	documentUrl: Option<string>;
	fileName: Option<string>;
	borrowerNote: Option<string>;
};
export const LELodasoftCommonModelsSharedPortalTaskDocumentIO = type({
	documentGuid: createOptionFromOptional(string, 'documentGuid'),
	documentUrl: createOptionFromOptional(string, 'documentUrl'),
	fileName: createOptionFromOptional(string, 'fileName'),
	borrowerNote: createOptionFromOptional(string, 'borrowerNote'),
});
