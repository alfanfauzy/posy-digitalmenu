/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { BottomNavigation } from 'posy-fnb-ds'
import { AnimatePresence } from 'framer-motion'
import Transition from '@/atoms/animation/transition'
import Bill from 'src/assets/icons/bill'

interface OrganismsLayoutProps {
  children: ReactNode
}

const list = [
  {
    label: 'Menu',
    value: 'menu',
    icon: Bill,
  },
  {
    label: 'Bill',
    value: 'bill',
    icon: Bill,
  },
]
const showBottomNavigationRoutes = ['/menu', '/basket', '/bill']

const OrganismsLayout: React.FC<OrganismsLayoutProps> = ({ children }) => {
  const router = useRouter()
  const [value, setValue] = useState(0)

  const handleChange = (e: any, newValue: number) => {
    setValue(newValue)
    router.push(`/${list[newValue].value}`)
  }

  useEffect(() => {
    const selected = list.findIndex((el) => el.value === router.pathname.slice(1))
    setValue(selected)
  }, [])

  return (
    <AnimatePresence initial={false}>
      <Transition>
        {children}
        {showBottomNavigationRoutes.includes(router.pathname) && (
          <div className="fixed bottom-0 z-10 w-full max-w-[576px]">
            <BottomNavigation list={list} onChange={handleChange} value={value} />
          </div>
        )}
      </Transition>
    </AnimatePresence>
  )
}

export default OrganismsLayout
