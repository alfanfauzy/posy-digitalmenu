import { Suspense, useState } from 'react'
import type { AppProps } from 'next/app'
import withRedux from 'next-redux-wrapper'
import { PersistGate } from 'redux-persist/integration/react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { NextPageWithLayout } from '@/types/index'
import { persistor, store } from 'store/index'
import Layout from '@/organisms/layout'
import 'posy-fnb-core/dist/index.css'
import 'posy-fnb-core/dist/style.css'
import '../styles/globals.css'

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const [queryClient] = useState(() => new QueryClient())

  const getLayout =
    Component.getLayout ??
    ((page) => (
      <Suspense fallback={page}>
        <Layout>{page}</Layout>
      </Suspense>
    ))

  return (
    <QueryClientProvider client={queryClient}>
      <PersistGate persistor={persistor}>{getLayout(<Component {...pageProps} />)}</PersistGate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

const makeStore = () => store
export default withRedux(makeStore)(App)
