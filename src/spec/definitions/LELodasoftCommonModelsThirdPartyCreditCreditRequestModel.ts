import { Option } from 'fp-ts/lib/Option';
import { array, boolean, number, string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

import { createEnumType } from '../utils/utils';

export enum PullTypeEnum {
	'Individual',
	'Joint',
}

export enum CreditVendorEnum {
	'MeridianLink',
	'CoreLogicCredco',
}

export enum CreditRequestTypeEnum {
	'Submit',
	'Reissue',
	'Upgrade',
}

export type LELodasoftCommonModelsThirdPartyCreditCreditRequestModel = {
	applicationId: number;
	borrowerIds: Array<number>;
	pullType: PullTypeEnum;
	creditVendor: CreditVendorEnum;
	creditRequestType: CreditRequestTypeEnum;
	experian: boolean;
	equifax: boolean;
	transUnion: boolean;
	creditReferenceNumber: Option<string>;
};
export const LELodasoftCommonModelsThirdPartyCreditCreditRequestModelIO = type({
	applicationId: number,
	borrowerIds: array(number),
	pullType: createEnumType<PullTypeEnum>(PullTypeEnum, 'PullTypeEnum'),
	creditVendor: createEnumType<CreditVendorEnum>(CreditVendorEnum, 'CreditVendorEnum'),
	creditRequestType: createEnumType<CreditRequestTypeEnum>(CreditRequestTypeEnum, 'CreditRequestTypeEnum'),
	experian: boolean,
	equifax: boolean,
	transUnion: boolean,
	creditReferenceNumber: createOptionFromNullable(string, 'creditReferenceNumber'),
});
