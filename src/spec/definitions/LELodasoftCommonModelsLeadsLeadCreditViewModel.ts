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
	leadCreditId: createOptionFromNullable(number, 'leadCreditId'),
	leadId: createOptionFromNullable(number, 'leadId'),
	creditRunDate: createOptionFromNullable(DateFromISOString, 'creditRunDate'),
	experianScore: createOptionFromNullable(number, 'experianScore'),
	equifaxScore: createOptionFromNullable(number, 'equifaxScore'),
	transUnionScore: createOptionFromNullable(number, 'transUnionScore'),
	isJoint: createOptionFromNullable(boolean, 'isJoint'),
	referenceNumber: createOptionFromNullable(string, 'referenceNumber'),
	notes: createOptionFromNullable(string, 'notes'),
	companyId: createOptionFromNullable(number, 'companyId'),
	insertedBy: createOptionFromNullable(string, 'insertedBy'),
	dateInserted: createOptionFromNullable(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromNullable(string, 'updatedBy'),
	dateUpdated: createOptionFromNullable(DateFromISOString, 'dateUpdated'),
});
