/* eslint-disable react-hooks/exhaustive-deps */
import { GetServerSideProps } from 'next'
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import MetaHeader from '@/molecules/meta-header'
import ContainerMenu from 'containers/menu'
import { SEO } from '@/constants/seo'
import { GetCategory } from 'core/data/category/sources/GetCategoryQuery'
import { useAppDispatch } from 'store/hooks'
import { onChangeCategoryList } from 'store/slices/category'
import { onChangeProductMenu } from 'store/slices/product'
import { GetProductMenu } from 'core/data/product/sources/GetProductMenuQuery'
import { onChangeTransactionId } from 'store/slices/transaction'

type PageProps = {
  transaction_uuid: string
}

const Page = ({ transaction_uuid }: PageProps) => {
  const dispatch = useAppDispatch()

  // Use useQuery hook to fetch data client-side
  const { data: category } = useQuery(
    ['category/list'],
    async () => {
      const response = await GetCategory(transaction_uuid)
      const getResponseCategory = response.data
      return getResponseCategory
    },
    {
      onSuccess: (data) => {
        if (data) dispatch(onChangeCategoryList(data))
      },
    },
  )

  const { data: product } = useQuery(
    ['product/list'],
    async () => {
      const response = await GetProductMenu(transaction_uuid)
      const getResponseProduct = response.data
      return getResponseProduct
    },
    {
      onSuccess: (data) => {
        if (data) dispatch(onChangeProductMenu(data.objs))
      },
    },
  )

  useEffect(() => {
    if (transaction_uuid) dispatch(onChangeTransactionId(transaction_uuid))
  }, [transaction_uuid])

  return (
    <>
      <MetaHeader
        title="Posy Resto - Menu"
        description={SEO.description}
        keywords={SEO.keywords}
        image={SEO.image}
      />
      <ContainerMenu />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const queryClient = new QueryClient()
  const transaction_uuid = query.transaction_uuid as string

  const fetchCategory = async () => {
    const response = await GetCategory(transaction_uuid)
    const dataCategory = response.data
    return dataCategory
  }

  const fetchProduct = async () => {
    const response = await GetProductMenu(transaction_uuid)
    const dataProduct = response.data
    return dataProduct
  }

  // Fetch both queries in parallel
  const [category, product] = await Promise.all([fetchCategory(), fetchProduct()])

  // Prefetch both queries in the queryClient
  queryClient.prefetchQuery(['category/list'], () => category)
  queryClient.prefetchQuery(['product/list'], () => product)

  // Dehydrate the queryClient state
  const dehydratedState = dehydrate(queryClient)

  return {
    props: {
      transaction_uuid,
      dehydratedState,
    },
  }
}

export default Page
