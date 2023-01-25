import { SEO } from '@/constants/seo'
import MetaHeader from '@/molecules/meta-header'

const Page = () => (
  <>
    <MetaHeader
      title={SEO.title}
      description={SEO.description}
      keywords={SEO.keywords}
      image={SEO.image}
    />
    <p>Bill</p>
  </>
)

export default Page
