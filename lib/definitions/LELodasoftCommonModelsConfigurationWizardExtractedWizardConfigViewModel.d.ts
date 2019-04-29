import { LELodasoftCommonModelsConfigurationWizardDataIdViewModel } from '../definitions/LELodasoftCommonModelsConfigurationWizardDataIdViewModel';
import { LELodasoftCommonModelsConfigurationWizardDataViewModel } from '../definitions/LELodasoftCommonModelsConfigurationWizardDataViewModel';
import { LELodasoftCommonModelsConfigurationWizardGroupIdViewModel } from '../definitions/LELodasoftCommonModelsConfigurationWizardGroupIdViewModel';
import { LELodasoftCommonModelsConfigurationWizardGroupViewModel } from '../definitions/LELodasoftCommonModelsConfigurationWizardGroupViewModel';
import { LELodasoftCommonModelsConfigurationWizardTreeViewModel } from '../definitions/LELodasoftCommonModelsConfigurationWizardTreeViewModel';
import { LELodasoftCommonModelsConfigurationWizardValidViewModel } from '../definitions/LELodasoftCommonModelsConfigurationWizardValidViewModel';
import { LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel } from '../definitions/LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel';
import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModel = {
    id: Option<number>;
    name: Option<string>;
    dataId: Option<Array<LELodasoftCommonModelsConfigurationWizardDataIdViewModel>>;
    data: Option<Array<LELodasoftCommonModelsConfigurationWizardDataViewModel>>;
    groupId: Option<Array<LELodasoftCommonModelsConfigurationWizardGroupIdViewModel>>;
    group: Option<Array<LELodasoftCommonModelsConfigurationWizardGroupViewModel>>;
    valid: Option<Array<LELodasoftCommonModelsConfigurationWizardValidViewModel>>;
    tree: Option<Array<LELodasoftCommonModelsConfigurationWizardTreeViewModel>>;
    question: Option<Array<LELodasoftCommonModelsConfigurationWizardWizardQuestionViewModel>>;
};
export declare const LELodasoftCommonModelsConfigurationWizardExtractedWizardConfigViewModelIO: import("io-ts").TypeC<{
    id: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    name: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    dataId: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").TypeC<{
        id: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        name: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        dataList: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").TypeC<{
            id: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
            dataId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
            value: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            name: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            buttonImage: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        }>>>;
    }>>>;
    data: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").TypeC<{
        id: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        dataId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        value: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        name: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        buttonImage: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    }>>>;
    groupId: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").TypeC<{
        id: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        name: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        propertyName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        groupList: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").TypeC<{
            id: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
            groupId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
            questionId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
            categoryId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
            name: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            question: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            answer: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            validate: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        }>>>;
    }>>>;
    group: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").TypeC<{
        id: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        groupId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        questionId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        categoryId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        name: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        question: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        answer: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        validate: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    }>>>;
    valid: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").TypeC<{
        id: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        questionId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        min: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        max: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        required: import("io-ts-types").OptionFromNullableC<import("io-ts").BooleanC>;
    }>>>;
    tree: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").TypeC<{
        parentQuestionId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        parentRefId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        questionId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        questionRefId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        questionCategoryId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        questionAnswerId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        checkListItemId: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        questionText: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        answer: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        answerValue: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        answerList: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").TypeC<{
            id: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
            dataId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
            value: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            name: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
            buttonImage: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        }>>>;
    }>>>;
    question: import("io-ts-types").OptionFromNullableC<import("io-ts").ArrayC<import("io-ts").TypeC<{
        id: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        categoryId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        dataId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        groupId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        name: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        question: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        additional: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        validate: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
        insertedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        dateInserted: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
        updatedBy: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
        dateUpdated: import("io-ts-types").OptionFromNullableC<import("io-ts-types").DateFromISOStringC>;
    }>>>;
}>;
