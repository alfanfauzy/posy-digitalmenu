import {ResultQuery} from 'core/domain/vo/BaseResponse';

import {Category} from '../models';

/**
 * GET
 */

export type GetCategorysResult = ResultQuery<Category>;
