import { UseMutationResult, UseQueryResult } from '@tanstack/react-query'

export type Response<TData = unknown> = {
  code: number
  data: TData
  message: string
  more_info: string
}

export type DataObj<TData = unknown> = {
  obj: Array<TData>
}

export type ResultQuery<TData = unknown, TError = unknown> = Omit<
  UseQueryResult<unknown, TError>,
  'data' & {
    data: TData
  }
>

export type ResultMutation<TData = unknown, TError = unknown, TVariables = unknown> = Omit<
  UseMutationResult<unknown, TError, TVariables>,
  'data' | 'mutate' | 'mutateAsync'
> & {
  data: TData
}
