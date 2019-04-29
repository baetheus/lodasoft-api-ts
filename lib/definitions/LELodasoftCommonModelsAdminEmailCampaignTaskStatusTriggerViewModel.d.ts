import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsAdminEmailCampaignTaskStatusTriggerViewModel = {
    emailCampaignTaskStatusTriggerId: Option<number>;
    emailCampaignId: Option<number>;
    taskId: Option<number>;
    customTaskId: Option<number>;
    taskStatus: Option<number>;
    companyId: Option<number>;
    insertedBy: Option<string>;
    dateInserted: Option<Date>;
    updatedBy: Option<string>;
    dateUpdated: Option<Date>;
};
export declare const LELodasoftCommonModelsAdminEmailCampaignTaskStatusTriggerViewModelIO: import("io-ts").TypeC<{
    emailCampaignTaskStatusTriggerId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    emailCampaignId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    taskId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    customTaskId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    taskStatus: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    insertedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateInserted: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    updatedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dateUpdated: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
}>;
