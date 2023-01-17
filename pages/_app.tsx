import { useState } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BottomNavigation } from 'posy-fnb-ds'
import '../styles/globals.css'
import Bill from 'src/assets/bill'

const list = [
  {
    label: 'Order',
    value: 'order',
    icon: Bill,
  },
  {
    label: 'Bill',
    value: 'bill',
    icon: Bill,
  },
]

const showBottomNavigationRoutes = ['/order', '/bill']

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient())
  const router = useRouter()

  const handleChange = (e: string) => {
    router.push(`/${e}`)
  }

  return (
    <QueryClientProvider client={queryClient}>
      {/* <Hydrate state={pageProps.dehydratedState}> */}
      <Component {...pageProps} />
      {showBottomNavigationRoutes.includes(router.pathname) && (
        <BottomNavigation list={list} onChange={handleChange} className="z-10" />
      )}
      {/* </Hydrate> */}
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
