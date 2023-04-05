import { UseMutationOptions } from '@tanstack/react-query'
import { Response } from './BaseResponse'

export type MutationOptions<TData, TVariables = unknown> = UseMutationOptions<
  Response<TData>,
  unknown,
  TVariables,
  unknown
>
