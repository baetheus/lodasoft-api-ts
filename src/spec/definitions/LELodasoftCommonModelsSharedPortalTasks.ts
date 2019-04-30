import {
	LELodasoftCommonModelsSharedPortalTaskModel,
	LELodasoftCommonModelsSharedPortalTaskModelIO,
} from '../definitions/LELodasoftCommonModelsSharedPortalTaskModel';
import { Option } from 'fp-ts/lib/Option';
import { array, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsSharedPortalTasks = {
	requested: Option<Array<LELodasoftCommonModelsSharedPortalTaskModel>>;
	submitted: Option<Array<LELodasoftCommonModelsSharedPortalTaskModel>>;
	approved: Option<Array<LELodasoftCommonModelsSharedPortalTaskModel>>;
};
export const LELodasoftCommonModelsSharedPortalTasksIO = type({
	requested: createOptionFromNullable(array(LELodasoftCommonModelsSharedPortalTaskModelIO), 'requested'),
	submitted: createOptionFromNullable(array(LELodasoftCommonModelsSharedPortalTaskModelIO), 'submitted'),
	approved: createOptionFromNullable(array(LELodasoftCommonModelsSharedPortalTaskModelIO), 'approved'),
});
