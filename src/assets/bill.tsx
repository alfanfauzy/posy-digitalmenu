import React from 'react'
import type { IconType } from '@/types/icon'

export const Bill = ({
  fill = 'currentColor',
  width = 22,
  height = 18,
  onClick,
  className,
}: IconType) => (
  <svg
    className={className}
    onClick={onClick}
    width={width}
    height={height}
    viewBox="0 0 18 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.875 0.499785H14.6275C14.5851 0.496166 14.5424 0.496166 14.5 0.499785H2.875C2.17881 0.499785 1.51113 0.776346 1.01884 1.26863C0.526562 1.76091 0.25 2.42859 0.25 3.12478V20.7498C0.250696 20.8848 0.287852 21.0172 0.357543 21.1329C0.427235 21.2486 0.526875 21.3433 0.645942 21.4071C0.76501 21.4708 0.899085 21.5013 1.03401 21.4951C1.16893 21.489 1.2997 21.4466 1.4125 21.3723L3.1525 20.2173L4.2175 21.2823C4.34047 21.404 4.50173 21.4794 4.67395 21.4958C4.84617 21.5122 5.01877 21.4686 5.1625 21.3723L7 20.1498L8.8375 21.3723C8.95782 21.4578 9.1024 21.5025 9.25 21.4998C9.34871 21.5004 9.44655 21.4814 9.53793 21.4441C9.62931 21.4068 9.71242 21.3518 9.7825 21.2823L10.8475 20.2173L12.5875 21.3723C12.6982 21.4439 12.8258 21.4851 12.9575 21.4917C13.0891 21.4982 13.2202 21.47 13.3375 21.4098C13.4601 21.348 13.5633 21.2539 13.6361 21.1375C13.7088 21.0211 13.7482 20.887 13.75 20.7498L13.7822 8.74978C13.7822 8.55087 14.1407 8.64041 14 8.49976C13.8593 8.3591 13.1989 8.49976 13 8.49976C12.8011 8.49976 12.6407 7.8591 12.5 7.99976C12.3593 8.14041 12.25 7.80087 12.25 7.99978V19.3473L11.1625 18.5973C11.0188 18.501 10.8462 18.4573 10.674 18.4738C10.5017 18.4902 10.3405 18.5656 10.2175 18.6873L9.1525 19.7523L7.4125 18.5973C7.29004 18.5166 7.14663 18.4737 7 18.4737C6.85337 18.4737 6.70996 18.5166 6.5875 18.5973L4.8475 19.7523L3.7825 18.6873C3.65953 18.5656 3.49827 18.4902 3.32605 18.4738C3.15383 18.4573 2.98123 18.501 2.8375 18.5973L1.75 19.3473V3.12478C1.75 2.82642 1.86853 2.54027 2.0795 2.32929C2.29048 2.11831 2.57663 1.99978 2.875 1.99978H12.5125C12.3413 2.35021 12.2516 2.73479 12.25 3.12478V7.99978C12.25 8.1987 12.329 8.38946 12.4697 8.53012C12.6103 8.67077 12.8011 8.74978 13 8.74978H16.75C16.9489 8.74978 17.1397 8.67077 17.2803 8.53012C17.421 8.38946 17.5 8.1987 17.5 7.99978V3.12478C17.5 2.42859 17.2234 1.76091 16.7312 1.26863C16.2389 0.776346 15.5712 0.499785 14.875 0.499785ZM16 7.24978H13.75V3.12478C13.75 2.82642 13.8685 2.54027 14.0795 2.32929C14.2905 2.11831 14.5766 1.99978 14.875 1.99978C15.1734 1.99978 15.4595 2.11831 15.6705 2.32929C15.8815 2.54027 16 2.82642 16 3.12478V7.24978Z"
      fill={fill}
    />
    <path
      d="M10 5C10 4.80109 9.92098 4.61032 9.78033 4.46967C9.63968 4.32902 9.44891 4.25 9.25 4.25H4.75C4.55109 4.25 4.36032 4.32902 4.21967 4.46967C4.07902 4.61032 4 4.80109 4 5C4 5.19891 4.07902 5.38968 4.21967 5.53033C4.36032 5.67098 4.55109 5.75 4.75 5.75H9.25C9.44891 5.75 9.63968 5.67098 9.78033 5.53033C9.92098 5.38968 10 5.19891 10 5Z"
      fill={fill}
    />
    <path
      d="M7 8H4C3.80109 8 3.61032 8.07902 3.46967 8.21967C3.32902 8.36032 3.25 8.55109 3.25 8.75C3.25 8.94891 3.32902 9.13968 3.46967 9.28033C3.61032 9.42098 3.80109 9.5 4 9.5H7C7.19891 9.5 7.38968 9.42098 7.53033 9.28033C7.67098 9.13968 7.75 8.94891 7.75 8.75C7.75 8.55109 7.67098 8.36032 7.53033 8.21967C7.38968 8.07902 7.19891 8 7 8Z"
      fill={fill}
    />
    <path
      d="M7 11H4C3.80109 11 3.61032 11.079 3.46967 11.2197C3.32902 11.3603 3.25 11.5511 3.25 11.75C3.25 11.9489 3.32902 12.1397 3.46967 12.2803C3.61032 12.421 3.80109 12.5 4 12.5H7C7.19891 12.5 7.38968 12.421 7.53033 12.2803C7.67098 12.1397 7.75 11.9489 7.75 11.75C7.75 11.5511 7.67098 11.3603 7.53033 11.2197C7.38968 11.079 7.19891 11 7 11Z"
      fill={fill}
    />
    <path
      d="M7 14H4C3.80109 14 3.61032 14.079 3.46967 14.2197C3.32902 14.3603 3.25 14.5511 3.25 14.75C3.25 14.9489 3.32902 15.1397 3.46967 15.2803C3.61032 15.421 3.80109 15.5 4 15.5H7C7.19891 15.5 7.38968 15.421 7.53033 15.2803C7.67098 15.1397 7.75 14.9489 7.75 14.75C7.75 14.5511 7.67098 14.3603 7.53033 14.2197C7.38968 14.079 7.19891 14 7 14Z"
      fill={fill}
    />
    <path
      d="M10 8H9.25C9.05109 8 8.86032 8.07902 8.71967 8.21967C8.57902 8.36032 8.5 8.55109 8.5 8.75C8.5 8.94891 8.57902 9.13968 8.71967 9.28033C8.86032 9.42098 9.05109 9.5 9.25 9.5H10C10.1989 9.5 10.3897 9.42098 10.5303 9.28033C10.671 9.13968 10.75 8.94891 10.75 8.75C10.75 8.55109 10.671 8.36032 10.5303 8.21967C10.3897 8.07902 10.1989 8 10 8Z"
      fill={fill}
    />
    <path
      d="M10 11H9.25C9.05109 11 8.86032 11.079 8.71967 11.2197C8.57902 11.3603 8.5 11.5511 8.5 11.75C8.5 11.9489 8.57902 12.1397 8.71967 12.2803C8.86032 12.421 9.05109 12.5 9.25 12.5H10C10.1989 12.5 10.3897 12.421 10.5303 12.2803C10.671 12.1397 10.75 11.9489 10.75 11.75C10.75 11.5511 10.671 11.3603 10.5303 11.2197C10.3897 11.079 10.1989 11 10 11Z"
      fill={fill}
    />
    <path
      d="M10 14H9.25C9.05109 14 8.86032 14.079 8.71967 14.2197C8.57902 14.3603 8.5 14.5511 8.5 14.75C8.5 14.9489 8.57902 15.1397 8.71967 15.2803C8.86032 15.421 9.05109 15.5 9.25 15.5H10C10.1989 15.5 10.3897 15.421 10.5303 15.2803C10.671 15.1397 10.75 14.9489 10.75 14.75C10.75 14.5511 10.671 14.3603 10.5303 14.2197C10.3897 14.079 10.1989 14 10 14Z"
      fill={fill}
    />
  </svg>
)

export default Bill
