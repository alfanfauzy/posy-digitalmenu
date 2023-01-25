import MetaHeader from '@/molecules/meta-header'
import ContainerMenu from 'containers/menu'
import { SEO } from '@/constants/seo'

const Page = () => (
  <>
    <MetaHeader
      title={SEO.title}
      description={SEO.description}
      keywords={SEO.keywords}
      image={SEO.image}
    />
    <ContainerMenu />
  </>
)

export default Page
