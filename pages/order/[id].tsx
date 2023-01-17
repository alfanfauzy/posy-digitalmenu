import MetaHeader from '@/molecules/meta-header'
import ContainerOrderDetail from 'containers/order/order-detail'
import { SEO } from '@/constants/seo'

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
