import { Option } from 'fp-ts/lib/Option';
import { number, boolean, string, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftCommonModelsLeadsLeadCreditViewModel = {
	leadCreditId: Option<number>;
	leadId: Option<number>;
	creditRunDate: Option<Date>;
	experianScore: Option<number>;
	equifaxScore: Option<number>;
	transUnionScore: Option<number>;
	isJoint: Option<boolean>;
	referenceNumber: Option<string>;
	notes: Option<string>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftCommonModelsLeadsLeadCreditViewModelIO = type({
	leadCreditId: createOptionFromNullable(number),
	leadId: createOptionFromNullable(number),
	creditRunDate: createOptionFromNullable(DateFromISOString),
	experianScore: createOptionFromNullable(number),
	equifaxScore: createOptionFromNullable(number),
	transUnionScore: createOptionFromNullable(number),
	isJoint: createOptionFromNullable(boolean),
	referenceNumber: createOptionFromNullable(string),
	notes: createOptionFromNullable(string),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
