import {
	LELodasoftCommonModelsLeadsProviderModelsAddressInfo,
	LELodasoftCommonModelsLeadsProviderModelsAddressInfoIO,
} from '../definitions/LELodasoftCommonModelsLeadsProviderModelsAddressInfo';
import {
	LELodasoftCommonModelsLeadsProviderModelsAppointmentInfo,
	LELodasoftCommonModelsLeadsProviderModelsAppointmentInfoIO,
} from '../definitions/LELodasoftCommonModelsLeadsProviderModelsAppointmentInfo';
import {
	LELodasoftCommonModelsLeadsProviderModelsAssignmentInfo,
	LELodasoftCommonModelsLeadsProviderModelsAssignmentInfoIO,
} from '../definitions/LELodasoftCommonModelsLeadsProviderModelsAssignmentInfo';
import {
	LELodasoftCommonModelsLeadsProviderModelsBorrowerInfo,
	LELodasoftCommonModelsLeadsProviderModelsBorrowerInfoIO,
} from '../definitions/LELodasoftCommonModelsLeadsProviderModelsBorrowerInfo';
import {
	LELodasoftCommonModelsLeadsProviderModelsCurrentLoanInfo,
	LELodasoftCommonModelsLeadsProviderModelsCurrentLoanInfoIO,
} from '../definitions/LELodasoftCommonModelsLeadsProviderModelsCurrentLoanInfo';
import {
	LELodasoftCommonModelsLeadsProviderModelsCustomDataInfo,
	LELodasoftCommonModelsLeadsProviderModelsCustomDataInfoIO,
} from '../definitions/LELodasoftCommonModelsLeadsProviderModelsCustomDataInfo';
import { Option } from 'fp-ts/lib/Option';
import { number, string, array, type } from 'io-ts';
import { createOptionFromOptional } from '@nll/utils-ts/lib/io';

export type LELodasoftCommonModelsLeadsProviderModelsLodasoftLead = {
	borrowerInfo: Option<LELodasoftCommonModelsLeadsProviderModelsBorrowerInfo>;
	subjectPropertyAddress: Option<LELodasoftCommonModelsLeadsProviderModelsAddressInfo>;
	loanAmount: Option<number>;
	appraisedValue: Option<number>;
	cashOutAmount: Option<number>;
	downPayment: Option<number>;
	interestRate: Option<number>;
	loanPurposeId: Option<number>;
	currentLoanInfo: Option<LELodasoftCommonModelsLeadsProviderModelsCurrentLoanInfo>;
	assignmentInfo: Option<LELodasoftCommonModelsLeadsProviderModelsAssignmentInfo>;
	appointmentInfo: Option<LELodasoftCommonModelsLeadsProviderModelsAppointmentInfo>;
	customData: Option<LELodasoftCommonModelsLeadsProviderModelsCustomDataInfo>;
	losRefNumber: Option<string>;
	internalNotes: Option<string>;
	leadSource: Option<string>;
	tags: Option<Array<string>>;
	referralSource: Option<number>;
};
export const LELodasoftCommonModelsLeadsProviderModelsLodasoftLeadIO = type({
	borrowerInfo: createOptionFromOptional(LELodasoftCommonModelsLeadsProviderModelsBorrowerInfoIO, 'borrowerInfo'),
	subjectPropertyAddress: createOptionFromOptional(
		LELodasoftCommonModelsLeadsProviderModelsAddressInfoIO,
		'subjectPropertyAddress',
	),
	loanAmount: createOptionFromOptional(number, 'loanAmount'),
	appraisedValue: createOptionFromOptional(number, 'appraisedValue'),
	cashOutAmount: createOptionFromOptional(number, 'cashOutAmount'),
	downPayment: createOptionFromOptional(number, 'downPayment'),
	interestRate: createOptionFromOptional(number, 'interestRate'),
	loanPurposeId: createOptionFromOptional(number, 'loanPurposeId'),
	currentLoanInfo: createOptionFromOptional(
		LELodasoftCommonModelsLeadsProviderModelsCurrentLoanInfoIO,
		'currentLoanInfo',
	),
	assignmentInfo: createOptionFromOptional(
		LELodasoftCommonModelsLeadsProviderModelsAssignmentInfoIO,
		'assignmentInfo',
	),
	appointmentInfo: createOptionFromOptional(
		LELodasoftCommonModelsLeadsProviderModelsAppointmentInfoIO,
		'appointmentInfo',
	),
	customData: createOptionFromOptional(LELodasoftCommonModelsLeadsProviderModelsCustomDataInfoIO, 'customData'),
	losRefNumber: createOptionFromOptional(string, 'losRefNumber'),
	internalNotes: createOptionFromOptional(string, 'internalNotes'),
	leadSource: createOptionFromOptional(string, 'leadSource'),
	tags: createOptionFromOptional(array(string), 'tags'),
	referralSource: createOptionFromOptional(number, 'referralSource'),
});
