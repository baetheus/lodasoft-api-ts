import {
	LELodasoftCommonModelsAuthenticationTokenResponseModel,
	LELodasoftCommonModelsAuthenticationTokenResponseModelIO,
} from '../definitions/LELodasoftCommonModelsAuthenticationTokenResponseModel';
import { Option } from 'fp-ts/lib/Option';
import { number, boolean, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsOnlineAppCreateBorrowerAccountMortgageResponse = {
	borrowerId: Option<number>;
	applicationId: Option<number>;
	userExists: Option<boolean>;
	userMustConfirmRegistration: Option<boolean>;
	authToken: Option<LELodasoftCommonModelsAuthenticationTokenResponseModel>;
};
export const LELodasoftCommonModelsOnlineAppCreateBorrowerAccountMortgageResponseIO = type({
	borrowerId: createOptionFromNullable(number, 'borrowerId'),
	applicationId: createOptionFromNullable(number, 'applicationId'),
	userExists: createOptionFromNullable(boolean, 'userExists'),
	userMustConfirmRegistration: createOptionFromNullable(boolean, 'userMustConfirmRegistration'),
	authToken: createOptionFromNullable(LELodasoftCommonModelsAuthenticationTokenResponseModelIO, 'authToken'),
});
