import { Option } from 'fp-ts/lib/Option';
import { number, array, keyof, boolean, string, type } from 'io-ts';
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
	pullType: keyof({ Individual: null, Joint: null }),
	creditVendor: keyof({ MeridianLink: null, CoreLogicCredco: null }),
	creditRequestType: keyof({ Submit: null, Reissue: null, Upgrade: null }),
	experian: boolean,
	equifax: boolean,
	transUnion: boolean,
	creditReferenceNumber: createOptionFromNullable(string),
});
