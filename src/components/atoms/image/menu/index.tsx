import React from 'react'
import Image from 'next/image'
import { Label, TimeLabel } from 'posy-fnb-ds'
import { BiTimeFive } from 'react-icons/bi'
import Recommended from 'src/assets/recommended'

interface AtomsImageMenuProps {
  onClick?: () => void
  size?: 's' | 'm' | 'l'
  isRecommended?: boolean
  label?: string
  timeLabel?: string
  className?: string
  image: Image
}

type Image = {
  url: string
  alt: string
}

const AtomsImageMenu = ({
  onClick,
  image,
  size = 'm',
  isRecommended,
  label,
  timeLabel,
  className,
}: AtomsImageMenuProps) => {
  const properties = {
    s: 'h-[78px] w-[78px]',
    m: 'h-52 w-auto',
    l: 'h-72 w-auto',
  }
  return (
    <div
      onClick={onClick}
      // onClick={() => router.push(`${router.pathname}/23`)}
      role="presentation"
      className={`${properties[size]} ${className} relative transition duration-300 ease-in-out `}
    >
      <Image
        src={image.url}
        alt={image.alt}
        fill
        priority
        className="object-cover rounded-lg shadow-sm hover:bg-opacity-70"
      />
      {size !== 's' && label && (
        <div className="absolute top-3">
          <Label size="s" title={label} />
        </div>
      )}
      <div className="absolute bottom-3 flex items-center justify-between w-full pr-2">
        {size !== 's' && timeLabel && (
          <TimeLabel startAdornment={<BiTimeFive />} size="s" title={timeLabel} />
        )}
        {size !== 's' && isRecommended && <Recommended />}
      </div>
    </div>
  )
}

export default AtomsImageMenu
