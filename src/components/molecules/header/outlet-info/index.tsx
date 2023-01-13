import Image from 'next/image'
import React from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'

const MoleculesHeaderOutletInfo = () => (
  <section className="bg-neutral-20 ml-4 flex gap-2 items-center p-4 rounded-l-2xl">
    <div className="flex-1 gap-4 w-2/3">
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
