import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import MetaHeader from '@/molecules/meta-header'
import ContainerMenuDetail from 'containers/menu/menu-detail'
import { SEO } from '@/constants/seo'
import { GetProductDetail } from 'core/data/product/sources/GetProductMenuDetailQuery'
import { useAppDispatch } from 'store/hooks'
import { setProductDetail } from 'store/slices/product'

type PageDetailProps = {
  transaction_uuid: string
  product_uuid: string
}

const Page = ({ transaction_uuid, product_uuid }: PageDetailProps) => {
  const dispatch = useAppDispatch()

  // Use useQuery hook to fetch data client-side
  const { data: productDetail } = useQuery(['product/detail'], async () => {
    const response = await GetProductDetail({
      transaction_uuid,
      product_uuid,
    })
    const dataProductDetail = await response.data
    return dataProductDetail
  })

  useEffect(() => {
    if (productDetail) {
      dispatch(setProductDetail(productDetail))
    }
  }, [productDetail])

  return (
    <>
      <MetaHeader
        title={SEO.title}
        description={SEO.description}
        keywords={SEO.keywords}
        image={SEO.image}
      />
      <ContainerMenuDetail />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const product_uuid = query.product_uuid as string
  const transaction_uuid = query.transaction_uuid as string

  const fetchDetailProduct = async () => {
    const response = await GetProductDetail({
      transaction_uuid,
      product_uuid,
    })
    const dataCategory = await response.data
    return dataCategory
  }

  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['product/detail'], fetchDetailProduct)

  const dehydratedState = dehydrate(queryClient)

  return {
    props: {
      transaction_uuid,
      product_uuid,
      dehydratedState,
    },
  }
}

export default Page
