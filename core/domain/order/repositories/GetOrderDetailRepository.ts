import {ResultQuery} from 'core/domain/vo/BaseResponse';

import {Orders} from '../models/GetOrderDetail';

export type GetOrdersInput = {transaction_uuid: string; show_cancel?: boolean};

export type GetOrdersResult = ResultQuery<Orders | undefined>;
