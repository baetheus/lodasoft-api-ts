import { Option } from 'fp-ts/lib/Option';
import { number, boolean, string, type } from 'io-ts';
import { DateFromISOString } from 'io-ts-types';
import { createOptionFromOptional } from '../utils/optionFromOptional';

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
	leadCreditId: createOptionFromOptional(number, 'leadCreditId'),
	leadId: createOptionFromOptional(number, 'leadId'),
	creditRunDate: createOptionFromOptional(DateFromISOString, 'creditRunDate'),
	experianScore: createOptionFromOptional(number, 'experianScore'),
	equifaxScore: createOptionFromOptional(number, 'equifaxScore'),
	transUnionScore: createOptionFromOptional(number, 'transUnionScore'),
	isJoint: createOptionFromOptional(boolean, 'isJoint'),
	referenceNumber: createOptionFromOptional(string, 'referenceNumber'),
	notes: createOptionFromOptional(string, 'notes'),
	companyId: createOptionFromOptional(number, 'companyId'),
	insertedBy: createOptionFromOptional(string, 'insertedBy'),
	dateInserted: createOptionFromOptional(DateFromISOString, 'dateInserted'),
	updatedBy: createOptionFromOptional(string, 'updatedBy'),
	dateUpdated: createOptionFromOptional(DateFromISOString, 'dateUpdated'),
});
