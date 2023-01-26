import Image from 'next/image'
import React from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'

const MoleculesHeaderOutletInfo = () => (
  <section className="ml-4 flex items-center gap-2 rounded-l-2xl bg-neutral-20 p-4">
    <div className="w-2/3 flex-1 gap-4">
      <p className="text-xl-semibold truncate">Solaria</p>
      <div className="flex items-center gap-1">
        <HiOutlineLocationMarker />
        <p className="text-m-medium truncate">Gambir, Selatan</p>
      </div>
    </div>
    <div>
      <Image src="/solaria.png" priority alt="logo" width={60} height={60} />
    </div>
  </section>
)

export default MoleculesHeaderOutletInfo
