import { LELodasoftCommonModelsSharedLiveData } from '../definitions/LELodasoftCommonModelsSharedLiveData';
import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsSharedPortalLiveData = {
    total: Option<LELodasoftCommonModelsSharedLiveData>;
    applicationTotals: Option<{
        [key: string]: LELodasoftCommonModelsSharedLiveData;
    }>;
};
export declare const LELodasoftCommonModelsSharedPortalLiveDataIO: import("io-ts").TypeC<{
    total: import("io-ts-types").OptionFromNullableC<import("io-ts").TypeC<{
        applicationId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        taskCount: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        messageCount: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    }>>;
    applicationTotals: import("io-ts-types").OptionFromNullableC<import("io-ts").RecordC<import("io-ts").StringC, import("io-ts").TypeC<{
        applicationId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        taskCount: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        messageCount: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    }>>>;
}>;
