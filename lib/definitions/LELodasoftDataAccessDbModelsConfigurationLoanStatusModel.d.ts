import { LELodasoftDataAccessDbModelsConfigurationRoleModel } from '../definitions/LELodasoftDataAccessDbModelsConfigurationRoleModel';
import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftDataAccessDbModelsConfigurationLoanStatusModel = {
    loanStatusId: Option<number>;
    loanStatusName: Option<string>;
    selectByRole: Option<string>;
    order: Option<number>;
    showAsArchive: Option<boolean>;
    hideFromCounter: Option<boolean>;
    isLeadStatus: Option<boolean>;
    emailFromRoleId: Option<number>;
    roleModel: Option<LELodasoftDataAccessDbModelsConfigurationRoleModel>;
    companyId: Option<number>;
    insertedBy: Option<string>;
    dateInserted: Option<Date>;
    updatedBy: Option<string>;
    dateUpdated: Option<Date>;
};
export declare const LELodasoftDataAccessDbModelsConfigurationLoanStatusModelIO: import("io-ts").TypeC<{
    loanStatusId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    loanStatusName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    selectByRole: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    order: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    showAsArchive: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
    hideFromCounter: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
    isLeadStatus: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
    emailFromRoleId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    roleModel: import("io-ts-types").OptionFromNullableC<import("io-ts").TypeC<{
        roleId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        roleName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        isLoanContact: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
        order: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        allowAccessAllLoans: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
        allowBorrowerAssignment: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
        showOnPortals: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
        showNewSubmissionForm: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
        bulkEditTasks: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
        readOnlyTasks: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
        useForCreditMonitoring: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
        companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        insertedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        dateInserted: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
        updatedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        dateUpdated: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    }>>;
    companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    insertedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateInserted: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    updatedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateUpdated: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
}>;
