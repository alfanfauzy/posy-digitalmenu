import MetaHeader from '@/molecules/meta-header'
import ContainerMenuDetail from 'containers/menu/menu-detail'
import { SEO } from '@/constants/seo'

const Page = () => (
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

export default Page
