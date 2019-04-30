import {
	LELodasoftCommonModelsSharedBorrowerView,
	LELodasoftCommonModelsSharedBorrowerViewIO,
} from '../definitions/LELodasoftCommonModelsSharedBorrowerView';
import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, array, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsSharedApplicationView = {
	applicationId: Option<number>;
	refNumber: Option<string>;
	streetViewImageUrl: Option<string>;
	mapViewImageUrl: Option<string>;
	address: Option<string>;
	city: Option<string>;
	state: Option<string>;
	zip: Option<string>;
	loanStatus: Option<string>;
	blurb: Option<string>;
	loanPurpose: Option<string>;
	loanAmount: Option<number>;
	interestRate: Option<number>;
	contactRole: Option<string>;
	contactName: Option<string>;
	contactNumber: Option<string>;
	companyId: Option<number>;
	companyName: Option<string>;
	applicationName: Option<string>;
	onlineAppInProgress: Option<boolean>;
	forceFinishOnlineApp: Option<boolean>;
	myDetails: Option<LELodasoftCommonModelsSharedBorrowerView>;
	otherBorrowersOnLoan: Option<Array<LELodasoftCommonModelsSharedBorrowerView>>;
};
export const LELodasoftCommonModelsSharedApplicationViewIO = type({
	applicationId: createOptionFromNullable(number, 'applicationId'),
	refNumber: createOptionFromNullable(string, 'refNumber'),
	streetViewImageUrl: createOptionFromNullable(string, 'streetViewImageUrl'),
	mapViewImageUrl: createOptionFromNullable(string, 'mapViewImageUrl'),
	address: createOptionFromNullable(string, 'address'),
	city: createOptionFromNullable(string, 'city'),
	state: createOptionFromNullable(string, 'state'),
	zip: createOptionFromNullable(string, 'zip'),
	loanStatus: createOptionFromNullable(string, 'loanStatus'),
	blurb: createOptionFromNullable(string, 'blurb'),
	loanPurpose: createOptionFromNullable(string, 'loanPurpose'),
	loanAmount: createOptionFromNullable(number, 'loanAmount'),
	interestRate: createOptionFromNullable(number, 'interestRate'),
	contactRole: createOptionFromNullable(string, 'contactRole'),
	contactName: createOptionFromNullable(string, 'contactName'),
	contactNumber: createOptionFromNullable(string, 'contactNumber'),
	companyId: createOptionFromNullable(number, 'companyId'),
	companyName: createOptionFromNullable(string, 'companyName'),
	applicationName: createOptionFromNullable(string, 'applicationName'),
	onlineAppInProgress: createOptionFromNullable(boolean, 'onlineAppInProgress'),
	forceFinishOnlineApp: createOptionFromNullable(boolean, 'forceFinishOnlineApp'),
	myDetails: createOptionFromNullable(LELodasoftCommonModelsSharedBorrowerViewIO, 'myDetails'),
	otherBorrowersOnLoan: createOptionFromNullable(
		array(LELodasoftCommonModelsSharedBorrowerViewIO),
		'otherBorrowersOnLoan',
	),
});
