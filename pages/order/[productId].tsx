import React from 'react'
import MetaHeader from '@/molecules/meta-header'
import { SEO } from '@/constants/seo'
import ContainerOrderDetail from 'containers/order/order-detail'

const Page = () => (
  <>
    <MetaHeader
      title={SEO.title}
      description={SEO.description}
      keywords={SEO.keywords}
      image={SEO.image}
    />
    <ContainerOrderDetail />
  </>
)

export default Page
