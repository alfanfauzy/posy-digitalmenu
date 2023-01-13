import React from 'react'
import type { IconType } from '@/types/icon'

export const Recommended = ({
  fill = '#404040',
  stroke = '#424242',
  width = 22,
  height = 22,
  onClick,
  className,
}: IconType) => (
  <svg
    className={className}
    onClick={onClick}
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="16" cy="16" r="15.0857" fill="white" stroke={stroke} strokeWidth="1.82857" />
    <path
      d="M27 11.8812C26.4421 9.66547 23.6685 8.9269 22.6314 8.61261C22.5318 8.58519 22.4278 8.57767 22.3253 8.59048C22.2229 8.60328 22.1239 8.63617 22.0341 8.68725C21.9444 8.73834 21.8656 8.80661 21.8022 8.88818C21.7389 8.96975 21.6922 9.063 21.665 9.16261C21.6375 9.26218 21.63 9.36618 21.6428 9.46866C21.6556 9.57114 21.6885 9.67009 21.7396 9.75985C21.7907 9.84961 21.859 9.92842 21.9405 9.99177C22.0221 10.0551 22.1153 10.1018 22.215 10.129C23.0007 10.349 25.13 10.9148 25.4521 12.2583C25.5358 12.6977 25.4665 13.1525 25.2557 13.5469C25.029 13.9154 24.7054 14.2144 24.3201 14.4112C23.9348 14.608 23.5028 14.695 23.0714 14.6626C22.8747 14.6618 22.6849 14.7348 22.5394 14.8672C22.3939 14.9996 22.3034 15.1817 22.2857 15.3776L21.8614 19.9269H12.8571C12.6487 19.9269 12.4489 20.0097 12.3015 20.157C12.1542 20.3044 12.0714 20.5042 12.0714 20.7126C12.0714 20.921 12.1542 21.1208 12.3015 21.2682C12.4489 21.4155 12.6487 21.4983 12.8571 21.4983H21.72L21.5707 23.0698H10.4292L9.71424 15.3776C9.69654 15.1817 9.60601 14.9996 9.46053 14.8672C9.31506 14.7348 9.12522 14.6618 8.92853 14.6626C8.49101 14.7056 8.05019 14.6254 7.65588 14.431C7.26156 14.2366 6.92946 13.9358 6.6971 13.5626C6.50119 13.1595 6.45657 12.6994 6.57139 12.2662C6.8071 11.284 8.00139 10.4355 9.49424 10.2626L11.545 10.0662C11.3037 10.4807 11.1163 10.9243 10.9871 11.3862C10.9319 11.5873 10.9588 11.8021 11.0619 11.9833C11.1651 12.1645 11.336 12.2974 11.5371 12.3526C11.7382 12.4078 11.953 12.3809 12.1342 12.2778C12.3155 12.1746 12.4483 12.0037 12.5035 11.8026C12.6907 11.0064 13.1342 10.2937 13.7659 9.77409C14.3977 9.25451 15.1826 8.95686 16 8.9269C16.8247 8.95912 17.6157 9.26327 18.2495 9.79196C18.8834 10.3206 19.3245 11.0442 19.5042 11.8498C19.5503 12.0212 19.653 12.1719 19.7957 12.2775C19.9384 12.3831 20.1126 12.4373 20.29 12.4312C20.3552 12.4389 20.4211 12.4389 20.4864 12.4312C20.6873 12.3777 20.8588 12.2468 20.9633 12.0671C21.0679 11.8875 21.097 11.6737 21.0442 11.4726C20.7808 10.3232 20.1418 9.29445 19.2283 8.54883C18.3148 7.80322 17.1788 7.38331 16 7.35547C14.949 7.36714 13.9287 7.71092 13.085 8.33761L9.32139 8.69904C7.14496 8.9269 5.45567 10.1998 4.99996 11.8733C4.78345 12.6775 4.87014 13.5332 5.24353 14.2776C5.53552 14.8168 5.95692 15.275 6.46984 15.611C6.98277 15.947 7.57115 16.1503 8.1821 16.2026L8.92853 23.9262C8.94623 24.1221 9.03676 24.3042 9.18224 24.4366C9.32771 24.569 9.51755 24.642 9.71424 24.6412H22.2857C22.4824 24.642 22.6722 24.569 22.8177 24.4366C22.9632 24.3042 23.0537 24.1221 23.0714 23.9262L23.7942 16.1869C24.3796 16.1101 24.9397 15.9001 25.4313 15.5733C25.923 15.2464 26.3333 14.8112 26.6307 14.3012C27.0462 13.567 27.1776 12.7058 27 11.8812Z"
      fill={fill}
    />
    <path
      d="M12.4958 14.7257C12.4176 14.5319 12.2657 14.377 12.0734 14.2953C11.8811 14.2135 11.6642 14.2114 11.4704 14.2896C11.2766 14.3677 11.1218 14.5197 11.04 14.712C10.9582 14.9042 10.9562 15.1211 11.0343 15.3149C11.3478 16.0565 11.8587 16.6979 12.5115 17.1692C12.6453 17.2696 12.8077 17.3247 12.9751 17.3264C13.14 17.3264 13.3007 17.2745 13.4345 17.1781C13.5683 17.0816 13.6683 16.9456 13.7204 16.7891C13.7726 16.6327 13.7742 16.4638 13.725 16.3064C13.6759 16.149 13.5784 16.011 13.4465 15.9121C13.0255 15.6126 12.6963 15.2018 12.4958 14.7257Z"
      fill={fill}
    />
    <path
      d="M19.512 14.67C19.3139 15.1801 18.9661 15.6184 18.5142 15.9271C18.3795 16.0246 18.2792 16.1623 18.2278 16.3205C18.1763 16.4786 18.1764 16.649 18.2279 16.8071C18.2794 16.9651 18.3798 17.1028 18.5145 17.2002C18.6493 17.2977 18.8115 17.3499 18.9777 17.3493C19.1415 17.3482 19.3008 17.296 19.4335 17.2C20.1428 16.7079 20.6898 16.0159 21.0049 15.2121C21.0405 15.1151 21.0566 15.0121 21.0524 14.9088C21.0482 14.8056 21.0236 14.7042 20.9802 14.6105C20.9368 14.5167 20.8754 14.4324 20.7994 14.3624C20.7234 14.2924 20.6344 14.2381 20.5374 14.2025C20.4404 14.1669 20.3373 14.1507 20.2341 14.155C20.1309 14.1592 20.0295 14.1837 19.9357 14.2271C19.842 14.2705 19.7577 14.332 19.6877 14.408C19.6177 14.4839 19.5633 14.573 19.5277 14.67H19.512Z"
      fill={fill}
    />
    <path
      d="M15.2144 15.2134V16.7849C15.2144 16.9933 15.2971 17.1931 15.4445 17.3405C15.5918 17.4878 15.7917 17.5706 16.0001 17.5706C16.2085 17.5706 16.4083 17.4878 16.5557 17.3405C16.703 17.1931 16.7858 16.9933 16.7858 16.7849V15.2134C16.7858 15.0051 16.703 14.8052 16.5557 14.6579C16.4083 14.5105 16.2085 14.4277 16.0001 14.4277C15.7917 14.4277 15.5918 14.5105 15.4445 14.6579C15.2971 14.8052 15.2144 15.0051 15.2144 15.2134Z"
      fill={fill}
    />
  </svg>
)

export default Recommended
