import {
	LELodasoftCommonModelsSharedPortalTaskModel,
	LELodasoftCommonModelsSharedPortalTaskModelIO,
} from '../definitions/LELodasoftCommonModelsSharedPortalTaskModel';
import { Option } from 'fp-ts/lib/Option';
import { array, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftCommonModelsSharedPortalTasks = {
	requested: Option<Array<LELodasoftCommonModelsSharedPortalTaskModel>>;
	submitted: Option<Array<LELodasoftCommonModelsSharedPortalTaskModel>>;
	approved: Option<Array<LELodasoftCommonModelsSharedPortalTaskModel>>;
};
export const LELodasoftCommonModelsSharedPortalTasksIO = type({
	requested: createOptionFromOptional(array(LELodasoftCommonModelsSharedPortalTaskModelIO), 'requested'),
	submitted: createOptionFromOptional(array(LELodasoftCommonModelsSharedPortalTaskModelIO), 'submitted'),
	approved: createOptionFromOptional(array(LELodasoftCommonModelsSharedPortalTaskModelIO), 'approved'),
});
