import { UseQueryResult } from '@tanstack/react-query'

export type Response<TData = unknown> = {
  code: number
  data: Array<TData>
  message: string
  more_info: string
}

export type ResponseObj<TData = unknown> = {
  code: number
  data: {
    objs: Array<TData>
  }
  message: string
  more_info: string
}

export type ResponseDetail<TData = unknown> = {
  code: number
  data: TData
  message: string
  more_info: string
}

export type ResultQuery<TData = unknown, TError = unknown> = Omit<
  UseQueryResult<unknown, TError>,
  'data' & {
    data: TData
  }
>
