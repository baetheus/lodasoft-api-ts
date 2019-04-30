import { Option } from 'fp-ts/lib/Option';
import { boolean, string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponse = {
	success: Option<boolean>;
	htmlWidgetSrc: Option<string>;
	errorMessage: Option<string>;
};
export const LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponseIO = type({
	success: createOptionFromNullable(boolean, 'success'),
	htmlWidgetSrc: createOptionFromNullable(string, 'htmlWidgetSrc'),
	errorMessage: createOptionFromNullable(string, 'errorMessage'),
});
