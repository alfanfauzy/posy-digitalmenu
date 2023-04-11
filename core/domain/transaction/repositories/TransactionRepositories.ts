/**
 * CREATE
 */

import {ResultMutation} from 'core/domain/vo/BaseResponse';

import {FinishTransactionParam} from '../models';

export type CreateFinishTransactionResult = ResultMutation<undefined>;

export type CreateFinishTransactionRepository = {
	createTransactionFinish(params: FinishTransactionParam): void;
} & CreateFinishTransactionResult;
