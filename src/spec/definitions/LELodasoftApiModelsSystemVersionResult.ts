import { Option } from 'fp-ts/lib/Option';
import { string, number, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftApiModelsSystemVersionResult = {
	assemblyVersion: Option<string>;
	assemblyInformation: Option<string>;
	machineName: Option<string>;
	port: Option<number>;
};
export const LELodasoftApiModelsSystemVersionResultIO = type({
	assemblyVersion: createOptionFromOptional(string, 'assemblyVersion'),
	assemblyInformation: createOptionFromOptional(string, 'assemblyInformation'),
	machineName: createOptionFromOptional(string, 'machineName'),
	port: createOptionFromOptional(number, 'port'),
});
