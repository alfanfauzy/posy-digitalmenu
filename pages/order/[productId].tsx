import React from 'react'
import MetaHeader from '@/molecules/meta-header'
import { SEO } from '@/constants/seo'
import ContainerProductDetail from 'containers/order/product-detail'

const Page = () => (
  <>
    <MetaHeader
      title={SEO.title}
      description={SEO.description}
      keywords={SEO.keywords}
      image={SEO.image}
    />
    <ContainerProductDetail />
  </>
)

export default Page
