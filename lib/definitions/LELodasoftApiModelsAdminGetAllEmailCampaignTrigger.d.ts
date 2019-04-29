import { LELodasoftApiModelsAdminEmailCampaignTriggerModelView } from '../definitions/LELodasoftApiModelsAdminEmailCampaignTriggerModelView';
import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiModelsAdminGetAllEmailCampaignTrigger = {
    group: Option<string>;
    listEmailCampaignTriggerModel: Option<Array<LELodasoftApiModelsAdminEmailCampaignTriggerModelView>>;
};
export declare const LELodasoftApiModelsAdminGetAllEmailCampaignTriggerIO: import("io-ts").TypeC<{
    group: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    listEmailCampaignTriggerModel: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").TypeC<{
        id: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        emailCampaignId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        fieldName: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        comparisionType: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        compareValue: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        group: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        emailCampaignIdString: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        comparisionTypeString: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        fieldNameString: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        listComparision: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").TypeC<{
            id: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
            lookupTypeID: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
            lookupGroup: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            lookupValue: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            lookupDescription: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            lookupOrder: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        }>>>;
        listEmailCampaign: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").TypeC<{
            emailCampaignId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
            emailCampaignName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            repeatDays: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
            active: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
            companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
            insertedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            dateInserted: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
            updatedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            dateUpdated: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
        }>>>;
        listGlobalEmail: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").TypeC<{
            mergeFieldId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
            mergeText: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            displayName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            table: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            column: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            baseType: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        }>>>;
    }>>>;
}>;
