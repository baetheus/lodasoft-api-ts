import { LELodasoftCommonModelsLeadsProviderModelsAddressInfo } from '../definitions/LELodasoftCommonModelsLeadsProviderModelsAddressInfo';
import { LELodasoftCommonModelsLeadsProviderModelsAppointmentInfo } from '../definitions/LELodasoftCommonModelsLeadsProviderModelsAppointmentInfo';
import { LELodasoftCommonModelsLeadsProviderModelsAssignmentInfo } from '../definitions/LELodasoftCommonModelsLeadsProviderModelsAssignmentInfo';
import { LELodasoftCommonModelsLeadsProviderModelsBorrowerInfo } from '../definitions/LELodasoftCommonModelsLeadsProviderModelsBorrowerInfo';
import { LELodasoftCommonModelsLeadsProviderModelsCurrentLoanInfo } from '../definitions/LELodasoftCommonModelsLeadsProviderModelsCurrentLoanInfo';
import { LELodasoftCommonModelsLeadsProviderModelsCustomDataInfo } from '../definitions/LELodasoftCommonModelsLeadsProviderModelsCustomDataInfo';
import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsLeadsProviderModelsLodasoftLead = {
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
export declare const LELodasoftCommonModelsLeadsProviderModelsLodasoftLeadIO: import("io-ts").TypeC<{
    borrowerInfo: import("io-ts-types").OptionFromNullableC<import("io-ts").TypeC<{
        firstName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        lastName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        birthDate: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
        email: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        phone: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        workPhone: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        mailingAddress: import("io-ts-types").OptionFromNullableC<import("io-ts").TypeC<{
            address1: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            address2: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            city: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            state: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            zip: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        }>>;
        creditScore: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    }>>;
    subjectPropertyAddress: import("io-ts-types").OptionFromNullableC<import("io-ts").TypeC<{
        address1: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        address2: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        city: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        state: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        zip: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    }>>;
    loanAmount: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    appraisedValue: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    cashOutAmount: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    downPayment: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    interestRate: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    loanPurposeId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    currentLoanInfo: import("io-ts-types").OptionFromNullableC<import("io-ts").TypeC<{
        unpaidPrincipalBalance: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        estimatedValue: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        interestRate: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        term: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    }>>;
    assignmentInfo: import("io-ts-types").OptionFromNullableC<import("io-ts").TypeC<{
        userName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        userGuid: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    }>>;
    appointmentInfo: import("io-ts-types").OptionFromNullableC<import("io-ts").TypeC<{
        date: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
        description: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        notes: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    }>>;
    customData: import("io-ts-types").OptionFromNullableC<import("io-ts").TypeC<{
        customData1: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        customData2: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        customData3: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        customData4: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        customData5: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        customData6: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        customData7: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        customData8: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        customData9: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        customData10: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    }>>;
    losRefNumber: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    internalNotes: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    leadSource: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    tags: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").StringC>>;
    referralSource: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
}>;
