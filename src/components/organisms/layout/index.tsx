import React, { ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { BottomNavigation } from 'posy-fnb-core'
import { AnimatePresence } from 'framer-motion'
import Transition from '@/atoms/animations/transition'
import Bill from 'src/assets/icons/bill'
import { useAppSelector } from 'store/hooks'

interface OrganismsLayoutProps {
  children: ReactNode
}

const list = (transaction_uuid: string) => [
  {
    label: 'Menu',
    value: 'menu',
    icon: Bill,
  },
  {
    label: 'Bill',
    value: `bill?transaction_uuid=${transaction_uuid}`,
    icon: Bill,
  },
]
const showBottomNavigationRoutes = ['/menu', '/basket', '/bill']

const OrganismsLayout: React.FC<OrganismsLayoutProps> = ({ children }) => {
  const router = useRouter()
  const { transaction_uuid } = useAppSelector((state) => state.transaction)
  const [value, setValue] = useState(0)

  const handleChange = (e: any, newValue: number) => {
    setValue(newValue)
    router.push(`/${list(transaction_uuid)[newValue].value}`)
  }

  useEffect(() => {
    const selected = list(transaction_uuid).findIndex((el) => el.value === router.pathname.slice(1))
    setValue(selected)
  }, [router.pathname])

  return (
    <AnimatePresence initial={false}>
      <Transition>
        {children}
        {showBottomNavigationRoutes.includes(router.pathname) && (
          <div className="fixed bottom-0 z-10 w-full max-w-[576px]">
            <BottomNavigation list={list(transaction_uuid)} onChange={handleChange} value={value} />
          </div>
        )}
      </Transition>
    </AnimatePresence>
  )
}

export default OrganismsLayout
