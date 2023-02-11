import { SEO } from '@/constants/seo'
import MetaHeader from '@/molecules/meta-header'
import ContainerBill from 'containers/bill'

const Page = () => (
  <>
    <MetaHeader
      title="Posy Resto - Bill"
      description={SEO.description}
      keywords={SEO.keywords}
      image={SEO.image}
    />
    <ContainerBill />
  </>
)

export default Page
