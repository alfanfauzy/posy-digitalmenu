import React from 'react'
import Image from 'next/image'
import { Label, TimeLabel } from 'posy-fnb-ds'
import { BiTimeFive } from 'react-icons/bi'
import Recommended from 'src/assets/icons/recommended'

interface MoleculesImageMenuProps {
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

const MoleculesImageMenu = ({
  onClick,
  image,
  size = 'm',
  isRecommended,
  label,
  timeLabel,
  className,
}: MoleculesImageMenuProps) => {
  const properties = {
    s: 'h-[78px] w-[78px]',
    m: 'h-52 w-auto',
    l: 'h-72 w-auto',
  }
  return (
    <div
      onClick={onClick}
      role="presentation"
      className={`${properties[size]} ${className} relative transition duration-300 ease-in-out `}
    >
      <Image
        src={image.url}
        alt={image.alt}
        fill
        priority
        sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
        className="rounded-lg object-cover shadow-sm hover:bg-opacity-70"
      />
      {size !== 's' && label && (
        <div className="absolute top-3">
          <Label size={size === 'm' ? 's' : 'l'} title={label} />
        </div>
      )}
      <div
        className={`absolute bottom-3 flex w-full items-center justify-between ${
          size === 'l' ? 'pr-4' : 'pr-2'
        }`}
      >
        {size !== 's' && timeLabel && (
          <TimeLabel
            startAdornment={<BiTimeFive />}
            size={size === 'm' ? 's' : 'l'}
            title={timeLabel}
          />
        )}
        {size !== 's' && isRecommended && (
          <Recommended height={size === 'l' ? 32 : 22} width={size === 'l' ? 32 : 22} />
        )}
      </div>
    </div>
  )
}

export default MoleculesImageMenu
