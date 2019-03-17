import { string, type } from 'io-ts';

export type LELodasoftApiModelsRemoveLoginBindingModel = { loginProvider: string; providerKey: string };
export const LELodasoftApiModelsRemoveLoginBindingModelIO = type({ loginProvider: string, providerKey: string });
