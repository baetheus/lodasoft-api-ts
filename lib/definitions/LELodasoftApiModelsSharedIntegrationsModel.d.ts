import { LELodasoftApiModelsSharedLeadPoint } from '../definitions/LELodasoftApiModelsSharedLeadPoint';
import { LELodasoftApiModelsSharedOnlineApplicationsModel } from '../definitions/LELodasoftApiModelsSharedOnlineApplicationsModel';
import { LELodasoftApiModelsSharedZillow } from '../definitions/LELodasoftApiModelsSharedZillow';
import { LELodasoftCommonModelsThirdPartyThirdPartyCredentialsViewModel } from '../definitions/LELodasoftCommonModelsThirdPartyThirdPartyCredentialsViewModel';
import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftApiModelsSharedIntegrationsModel = {
    zillow: Option<LELodasoftApiModelsSharedZillow>;
    leadPoint: Option<LELodasoftApiModelsSharedLeadPoint>;
    onlineApplications: Option<LELodasoftApiModelsSharedOnlineApplicationsModel>;
    thirdPartyCredentials: Option<Array<LELodasoftCommonModelsThirdPartyThirdPartyCredentialsViewModel>>;
};
export declare const LELodasoftApiModelsSharedIntegrationsModelIO: import("io-ts").TypeC<{
    zillow: import("io-ts-types").OptionFromNullableC<import("io-ts").TypeC<{
        leadPostUrl: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    }>>;
    leadPoint: import("io-ts-types").OptionFromNullableC<import("io-ts").TypeC<{
        leadPostUrl: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    }>>;
    onlineApplications: import("io-ts-types").OptionFromNullableC<import("io-ts").TypeC<{
        wizardUrls: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").TypeC<{
            name: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            url: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        }>>>;
    }>>;
    thirdPartyCredentials: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").TypeC<{
        credentialId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        credentialType: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        vendorName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        url: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        userName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        password: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        userId: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        credentialProviderId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        thirdPartyKeyValuePairs: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").TypeC<{
            thirdPartyKeyValueId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
            key: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            value: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            credentialId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
            companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
            insertedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            dateInserted: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
            updatedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            dateUpdated: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
        }>>>;
        companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        insertedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        dateInserted: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
        updatedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        dateUpdated: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    }>>>;
}>;
