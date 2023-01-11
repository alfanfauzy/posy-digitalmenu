import { Market } from '@/constants/seo'
import MetaHeader from '@/molecules/meta-header'

import ContainerOrder from 'containers/order'

const Page = () => (
  <>
    <MetaHeader
      title={Market.title}
      description={Market.description}
      keywords={Market.keywords}
      image={Market.image}
    />
    <ContainerOrder />
  </>
)

export default Page
