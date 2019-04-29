import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsAdminEmailCampaignLoanStatusTriggerViewModel = {
    emailCampaignLoanStatusTriggerId: Option<number>;
    emailCampaignId: Option<number>;
    loanPurposeId: Option<number>;
    loanStatusId: Option<number>;
    loanTypeId: Option<number>;
    companyId: Option<number>;
    insertedBy: Option<string>;
    dateInserted: Option<Date>;
    updatedBy: Option<string>;
    dateUpdated: Option<Date>;
};
export declare const LELodasoftCommonModelsAdminEmailCampaignLoanStatusTriggerViewModelIO: import("io-ts").TypeC<{
    emailCampaignLoanStatusTriggerId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    emailCampaignId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    loanPurposeId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    loanStatusId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    loanTypeId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    insertedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateInserted: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    updatedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateUpdated: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
}>;
