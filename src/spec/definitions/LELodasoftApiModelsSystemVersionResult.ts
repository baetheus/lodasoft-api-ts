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
	assemblyVersion: createOptionFromNullable(string, 'assemblyVersion'),
	assemblyInformation: createOptionFromNullable(string, 'assemblyInformation'),
	machineName: createOptionFromNullable(string, 'machineName'),
	port: createOptionFromNullable(number, 'port'),
});
