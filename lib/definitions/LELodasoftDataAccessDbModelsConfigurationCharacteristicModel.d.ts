import { Option } from 'fp-ts/lib/Option';
export declare type LELodasoftDataAccessDbModelsConfigurationCharacteristicModel = {
    taskCategoryId: Option<number>;
    taskCategoryName: Option<string>;
    companyId: Option<number>;
    taskOption: Option<'AutoApply' | 'Confirm' | 'RequestQuantity'>;
    characteristicType: Option<'LoanCharacteristic' | 'BorrowerCharacteristic'>;
    order: Option<number>;
};
export declare const LELodasoftDataAccessDbModelsConfigurationCharacteristicModelIO: import("io-ts").TypeC<{
    taskCategoryId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    taskCategoryName: import("io-ts-types").OptionFromNullableC<import("io-ts").StringC>;
    companyId: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
    taskOption: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
        AutoApply: null;
        Confirm: null;
        RequestQuantity: null;
    }>>;
    characteristicType: import("io-ts-types").OptionFromNullableC<import("io-ts").KeyofC<{
        LoanCharacteristic: null;
        BorrowerCharacteristic: null;
    }>>;
    order: import("io-ts-types").OptionFromNullableC<import("io-ts").NumberC>;
}>;
