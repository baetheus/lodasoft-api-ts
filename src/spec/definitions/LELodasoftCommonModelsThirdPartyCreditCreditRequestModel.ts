import { Option } from 'fp-ts/lib/Option';
import { number, array, union, literal, boolean, string, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftCommonModelsThirdPartyCreditCreditRequestModel = {
	applicationId: number;
	borrowerIds: Array<number>;
	pullType: 'Individual' | 'Joint';
	creditVendor: 'MeridianLink' | 'CoreLogicCredco';
	creditRequestType: 'Submit' | 'Reissue' | 'Upgrade';
	experian: boolean;
	equifax: boolean;
	transUnion: boolean;
	creditReferenceNumber: Option<string>;
};
export const LELodasoftCommonModelsThirdPartyCreditCreditRequestModelIO = type({
	applicationId: number,
	borrowerIds: array(number),
	pullType: union([literal('Individual'), literal('Joint')]),
	creditVendor: union([literal('MeridianLink'), literal('CoreLogicCredco')]),
	creditRequestType: union([literal('Submit'), literal('Reissue'), literal('Upgrade')]),
	experian: boolean,
	equifax: boolean,
	transUnion: boolean,
	creditReferenceNumber: createOptionFromNullable(string),
});
