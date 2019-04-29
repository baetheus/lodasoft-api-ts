import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftDataAccessDbModelsConfigurationChecklistModel = {
    checkListId: Option<number>;
    checkLisItemId: Option<number>;
    parentRefId: Option<number>;
    parentQuestionId: Option<number>;
    questionAnswerId: Option<number>;
    answerValue: Option<boolean>;
    questionId: Option<number>;
    questionRefId: Option<number>;
    level: Option<number>;
};
export declare const LELodasoftDataAccessDbModelsConfigurationChecklistModelIO: import("io-ts").TypeC<{
    checkListId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    checkLisItemId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    parentRefId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    parentQuestionId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    questionAnswerId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    answerValue: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
    questionId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    questionRefId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    level: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
}>;
