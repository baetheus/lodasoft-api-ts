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
import { createOptionFromNullable } from 'io-ts-types';

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
	borrowerInfo: createOptionFromNullable(LELodasoftCommonModelsLeadsProviderModelsBorrowerInfoIO, 'borrowerInfo'),
	subjectPropertyAddress: createOptionFromNullable(
		LELodasoftCommonModelsLeadsProviderModelsAddressInfoIO,
		'subjectPropertyAddress',
	),
	loanAmount: createOptionFromNullable(number, 'loanAmount'),
	appraisedValue: createOptionFromNullable(number, 'appraisedValue'),
	cashOutAmount: createOptionFromNullable(number, 'cashOutAmount'),
	downPayment: createOptionFromNullable(number, 'downPayment'),
	interestRate: createOptionFromNullable(number, 'interestRate'),
	loanPurposeId: createOptionFromNullable(number, 'loanPurposeId'),
	currentLoanInfo: createOptionFromNullable(
		LELodasoftCommonModelsLeadsProviderModelsCurrentLoanInfoIO,
		'currentLoanInfo',
	),
	assignmentInfo: createOptionFromNullable(
		LELodasoftCommonModelsLeadsProviderModelsAssignmentInfoIO,
		'assignmentInfo',
	),
	appointmentInfo: createOptionFromNullable(
		LELodasoftCommonModelsLeadsProviderModelsAppointmentInfoIO,
		'appointmentInfo',
	),
	customData: createOptionFromNullable(LELodasoftCommonModelsLeadsProviderModelsCustomDataInfoIO, 'customData'),
	losRefNumber: createOptionFromNullable(string, 'losRefNumber'),
	internalNotes: createOptionFromNullable(string, 'internalNotes'),
	leadSource: createOptionFromNullable(string, 'leadSource'),
	tags: createOptionFromNullable(array(string), 'tags'),
	referralSource: createOptionFromNullable(number, 'referralSource'),
});
