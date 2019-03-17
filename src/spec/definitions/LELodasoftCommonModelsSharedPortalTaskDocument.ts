import { Option } from 'fp-ts/lib/Option';
import { string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsSharedPortalTaskDocument = {
	documentGuid: Option<string>;
	documentUrl: Option<string>;
	fileName: Option<string>;
	borrowerNote: Option<string>;
};
export const LELodasoftCommonModelsSharedPortalTaskDocumentIO = type({
	documentGuid: createOptionFromNullable(string),
	documentUrl: createOptionFromNullable(string),
	fileName: createOptionFromNullable(string),
	borrowerNote: createOptionFromNullable(string),
});
