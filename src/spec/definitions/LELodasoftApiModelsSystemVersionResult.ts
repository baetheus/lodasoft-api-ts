import { Option } from 'fp-ts/lib/Option';
import { string, number, type } from 'io-ts';
import { createOptionFromNullable } from 'io-ts-types';

export type LELodasoftApiModelsSystemVersionResult = {
	assemblyVersion: Option<string>;
	assemblyInformation: Option<string>;
	machineName: Option<string>;
	port: Option<number>;
};
export const LELodasoftApiModelsSystemVersionResultIO = type({
	assemblyVersion: createOptionFromNullable(string),
	assemblyInformation: createOptionFromNullable(string),
	machineName: createOptionFromNullable(string),
	port: createOptionFromNullable(number),
});
