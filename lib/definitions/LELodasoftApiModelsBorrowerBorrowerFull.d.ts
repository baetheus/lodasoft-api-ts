import { LELodasoftDataAccessDbModelsAdminBorrowerModel } from '../definitions/LELodasoftDataAccessDbModelsAdminBorrowerModel';
import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiModelsBorrowerBorrowerFull = {
    portalUserName: Option<string>;
    borrower: Option<LELodasoftDataAccessDbModelsAdminBorrowerModel>;
    isEdit: Option<boolean>;
    accountStatus: Option<'NotInvited' | 'Invited' | 'Live'>;
};
export declare const LELodasoftApiModelsBorrowerBorrowerFullIO: import("io-ts").TypeC<{
    portalUserName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    borrower: import("io-ts-types").OptionFromNullableC<import("io-ts").TypeC<{
        borrowerId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        userId: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        firstName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        middleName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        lastName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        birthDate: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
        socialSecNum: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        borrowerContact: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        creditScore: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        alertViaSms: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
        mobilePhone: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        workPhone: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        extPhone: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        fax: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        email: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        assistantName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        assistantPhone: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        doNotCall: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
        doNotEmail: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
        mailingStreet: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        mailingPOBox: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        mailingCity: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        mailingState: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        mailingZip: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        dateCreateBorrower: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
        creditMonitoringStatus: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
            Unset: null;
            Active: null;
            Disabled: null;
        }>>;
        companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        insertedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        dateInserted: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
        updatedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        dateUpdated: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    }>>;
    isEdit: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
    accountStatus: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
        NotInvited: null;
        Invited: null;
        Live: null;
    }>>;
}>;
