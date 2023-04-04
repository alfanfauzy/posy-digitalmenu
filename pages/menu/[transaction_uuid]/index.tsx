import { GetServerSidePropsContext } from 'next'
import { dehydrate, QueryClient, useQueries, useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import MetaHeader from '@/molecules/meta-header'
import ContainerMenu from 'containers/menu'
import { SEO } from '@/constants/seo'
import { GetCategory } from 'core/data/category/sources/GetCategoryQuery'
import { useAppDispatch } from 'store/hooks'
import { categoryList } from 'store/slices/category'
import { GetProductMenu } from 'core/data/product/sources/GetProdactMenuListQuery'
import { productMenu } from 'store/slices/product'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const path = context.req.url as string

  const outlet_id = path.split('/')[2]

  const fetchCategory = async () => {
    const response = await GetCategory(outlet_id)
    const dataCategory = await response.data
    return dataCategory
  }

  const fetchProduct = async () => {
    const response = await GetProductMenu(outlet_id)
    const dataProduct = await response.data
    return dataProduct
  }

  const queryClient = new QueryClient()

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

const Page = ({ outlet_id }: any) => {
  const dispatch = useAppDispatch()

  // Use useQuery hook to fetch data client-side
  const { data: category } = useQuery(['category/list'], async () => {
    const response = await GetCategory(outlet_id)
    const getResponseCategory = await response.data
    return getResponseCategory
  })

  const { data: product } = useQuery(['product/list'], async () => {
    const response = await GetProductMenu(outlet_id)
    const getResponseProduct = await response.data
    return getResponseProduct
  })

  useEffect(() => {
    if (category && product) {
      dispatch(categoryList(category))
      dispatch(productMenu(product.objs))
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

export default Page
