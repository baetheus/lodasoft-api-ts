import { Option } from 'fp-ts/lib/Option';
import { number, string, boolean, type } from 'io-ts';
import { createOptionFromNullable, DateFromISOString } from 'io-ts-types';

export type LELodasoftDataAccessDbModelsConfigurationCreditModel = {
	creditID: Option<number>;
	refNumber: Option<string>;
	date: Option<Date>;
	equifax: Option<number>;
	experian: Option<number>;
	transUnion: Option<number>;
	joint: Option<boolean>;
	borrowerId: Option<number>;
	applicationId: Option<number>;
	integrationHistoryId: Option<number>;
	companyId: Option<number>;
	insertedBy: Option<string>;
	dateInserted: Option<Date>;
	updatedBy: Option<string>;
	dateUpdated: Option<Date>;
};
export const LELodasoftDataAccessDbModelsConfigurationCreditModelIO = type({
	creditID: createOptionFromNullable(number),
	refNumber: createOptionFromNullable(string),
	date: createOptionFromNullable(DateFromISOString),
	equifax: createOptionFromNullable(number),
	experian: createOptionFromNullable(number),
	transUnion: createOptionFromNullable(number),
	joint: createOptionFromNullable(boolean),
	borrowerId: createOptionFromNullable(number),
	applicationId: createOptionFromNullable(number),
	integrationHistoryId: createOptionFromNullable(number),
	companyId: createOptionFromNullable(number),
	insertedBy: createOptionFromNullable(string),
	dateInserted: createOptionFromNullable(DateFromISOString),
	updatedBy: createOptionFromNullable(string),
	dateUpdated: createOptionFromNullable(DateFromISOString),
});
