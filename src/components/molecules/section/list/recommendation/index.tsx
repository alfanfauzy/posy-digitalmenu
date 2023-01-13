/* eslint-disable react/no-array-index-key */
import React from 'react'
import MoleculesCardMenuRecommendation from '@/molecules/card/menu/recommendation'

const MoleculesSectionListRecommendation = () => (
  <section>
    <aside className="px-4" id="all">
      <p className="text-xxl-semibold">Our Recommendation</p>
    </aside>
    <article className="mt-4 grid grid-cols-2 gap-x-4 gap-y-6 px-4">
      {new Array(8).fill(undefined).map((_, idx) => (
        <MoleculesCardMenuRecommendation key={idx} soldOut={idx % 2 === 0} />
      ))}
    </article>
  </section>
)

export default MoleculesSectionListRecommendation
