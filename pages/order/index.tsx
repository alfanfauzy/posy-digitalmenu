import MetaHeader from '@/molecules/meta-header'
import ContainerOrder from 'containers/order'
import { SEO } from '@/constants/seo'

const Page = () => (
  <>
    <MetaHeader
      title={SEO.title}
      description={SEO.description}
      keywords={SEO.keywords}
      image={SEO.image}
    />
    <ContainerOrder />
  </>
)

export default Page
