/* eslint-disable react-hooks/exhaustive-deps */
import { GetServerSideProps } from 'next'
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { GetProductMenu } from 'core/data/product/sources/GetProductMenuListQuery'
import MetaHeader from '@/molecules/meta-header'
import ContainerMenu from 'containers/menu'
import { SEO } from '@/constants/seo'
import { GetCategory } from 'core/data/category/sources/GetCategoryQuery'
import { useAppDispatch } from 'store/hooks'
import { onChangeCategoryList } from 'store/slices/category'
import { onChangeProductMenu } from 'store/slices/product'

type PageProps = {
  outlet_id: string
}

const Page = ({ outlet_id }: PageProps) => {
  const dispatch = useAppDispatch()

  // Use useQuery hook to fetch data client-side
  const { data: category } = useQuery(['category/list'], async () => {
    const response = await GetCategory(outlet_id)
    const getResponseCategory = response.data
    return getResponseCategory
  })

  const { data: product } = useQuery(['product/list'], async () => {
    const response = await GetProductMenu(outlet_id)
    const getResponseProduct = response.data
    return getResponseProduct
  })

  useEffect(() => {
    if (category && product) {
      dispatch(onChangeCategoryList(category))
      dispatch(onChangeProductMenu(product.objs))
    }
  }, [category, product])

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

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const queryClient = new QueryClient()
  const path = req.url as string
  const outlet_id = path.split('/')[2]

  const fetchCategory = async () => {
    const response = await GetCategory(outlet_id)
    const dataCategory = response.data
    return dataCategory
  }

  const fetchProduct = async () => {
    const response = await GetProductMenu(outlet_id)
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
      outlet_id,
      dehydratedState,
    },
  }
}

export default Page
