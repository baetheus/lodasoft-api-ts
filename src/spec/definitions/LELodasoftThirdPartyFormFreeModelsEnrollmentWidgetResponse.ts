import { Option } from 'fp-ts/lib/Option';
import { boolean, string, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponse = {
	success: Option<boolean>;
	htmlWidgetSrc: Option<string>;
	errorMessage: Option<string>;
};
export const LELodasoftThirdPartyFormFreeModelsEnrollmentWidgetResponseIO = type({
	success: createOptionFromOptional(boolean, 'success'),
	htmlWidgetSrc: createOptionFromOptional(string, 'htmlWidgetSrc'),
	errorMessage: createOptionFromOptional(string, 'errorMessage'),
});
