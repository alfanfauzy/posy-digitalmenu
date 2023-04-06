type TransactionStatus =
  | 'WAITING_ORDER'
  | 'WAITING_FOOD'
  | 'FOOD_SERVED'
  | 'WAITING_PAYMENT'
  | 'PAID'
  | 'CANCELLED'
  | 'REFUND'

export type GetTransactionDetailResponse = {
  uuid: string
  restaurant_uuid: string
  restaurant_outlet_uuid: string
  transaction_code: string
  status: TransactionStatus
  table_name: string
  total_pax: number
  customer_name: string
  customer_phone: string
  customer_email: string
  created_at: {
    seconds: number
    nanos: number
  }
}
