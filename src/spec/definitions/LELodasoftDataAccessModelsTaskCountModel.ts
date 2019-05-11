import { Option } from 'fp-ts/lib/Option';
import { number, type } from 'io-ts';
import { createOptionFromOptional } from '../utils/optionFromOptional';

export type LELodasoftDataAccessModelsTaskCountModel = {
	mt_g2: Option<number>;
	mt_l2: Option<number>;
	ot_g2: Option<number>;
	ot_l2: Option<number>;
	bt_s: Option<number>;
	bt_p: Option<number>;
	bt_c: Option<number>;
	doc_l5exp: Option<number>;
	doc_exp: Option<number>;
	ct: Option<number>;
	filter11: Option<number>;
	filter12: Option<number>;
};
export const LELodasoftDataAccessModelsTaskCountModelIO = type({
	mt_g2: createOptionFromOptional(number, 'mt_g2'),
	mt_l2: createOptionFromOptional(number, 'mt_l2'),
	ot_g2: createOptionFromOptional(number, 'ot_g2'),
	ot_l2: createOptionFromOptional(number, 'ot_l2'),
	bt_s: createOptionFromOptional(number, 'bt_s'),
	bt_p: createOptionFromOptional(number, 'bt_p'),
	bt_c: createOptionFromOptional(number, 'bt_c'),
	doc_l5exp: createOptionFromOptional(number, 'doc_l5exp'),
	doc_exp: createOptionFromOptional(number, 'doc_exp'),
	ct: createOptionFromOptional(number, 'ct'),
	filter11: createOptionFromOptional(number, 'filter11'),
	filter12: createOptionFromOptional(number, 'filter12'),
});
