import React from 'react'
import type { IconType } from '@/types/icon'

export const PencilEdit = ({
  fill = '#424242',
  width = 14,
  height = 14,
  onClick,
  className,
}: IconType) => (
  <svg
    className={className}
    onClick={onClick}
    width={width}
    height={height}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.36744 2.26512H2.19276C1.87642 2.26512 1.57304 2.39078 1.34935 2.61447C1.12567 2.83816 1 3.14154 1 3.45788V11.8072C1 12.1236 1.12567 12.427 1.34935 12.6506C1.57304 12.8743 1.87642 13 2.19276 13H10.5421C10.8585 13 11.1618 12.8743 11.3855 12.6506C11.6092 12.427 11.7349 12.1236 11.7349 11.8072V7.63256M10.8403 1.37054C11.0776 1.13329 11.3994 1 11.7349 1C12.0704 1 12.3922 1.13329 12.6295 1.37054C12.8667 1.6078 13 1.92959 13 2.26512C13 2.60065 12.8667 2.92244 12.6295 3.15969L6.96382 8.82532L4.57829 9.42171L5.17468 7.03618L10.8403 1.37054Z"
      stroke={fill}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default PencilEdit
