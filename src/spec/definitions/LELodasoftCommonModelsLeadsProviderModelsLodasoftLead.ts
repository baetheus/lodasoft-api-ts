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
	borrowerInfo: createOptionFromNullable(LELodasoftCommonModelsLeadsProviderModelsBorrowerInfoIO),
	subjectPropertyAddress: createOptionFromNullable(LELodasoftCommonModelsLeadsProviderModelsAddressInfoIO),
	loanAmount: createOptionFromNullable(number),
	appraisedValue: createOptionFromNullable(number),
	cashOutAmount: createOptionFromNullable(number),
	downPayment: createOptionFromNullable(number),
	interestRate: createOptionFromNullable(number),
	loanPurposeId: createOptionFromNullable(number),
	currentLoanInfo: createOptionFromNullable(LELodasoftCommonModelsLeadsProviderModelsCurrentLoanInfoIO),
	assignmentInfo: createOptionFromNullable(LELodasoftCommonModelsLeadsProviderModelsAssignmentInfoIO),
	appointmentInfo: createOptionFromNullable(LELodasoftCommonModelsLeadsProviderModelsAppointmentInfoIO),
	customData: createOptionFromNullable(LELodasoftCommonModelsLeadsProviderModelsCustomDataInfoIO),
	losRefNumber: createOptionFromNullable(string),
	internalNotes: createOptionFromNullable(string),
	leadSource: createOptionFromNullable(string),
	tags: createOptionFromNullable(array(string)),
	referralSource: createOptionFromNullable(number),
});
