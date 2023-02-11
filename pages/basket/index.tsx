import { SEO } from '@/constants/seo'
import MetaHeader from '@/molecules/meta-header'
import ContainerBasket from 'containers/basket'

const Page = () => (
  <>
    <MetaHeader
      title="Posy Resto - Basket"
      description={SEO.description}
      keywords={SEO.keywords}
      image={SEO.image}
    />
    <ContainerBasket />
  </>
)

export default Page
