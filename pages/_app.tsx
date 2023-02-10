import { Suspense, useState } from 'react'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { NextPageWithLayout } from '@/types/index'
import { persistor, wrapper } from 'store/index'
import Layout from '@/organisms/layout'
import 'posy-fnb-core/dist/index.css'
import 'posy-fnb-core/dist/style.css'
import '../styles/globals.css'

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps, ...rest }: AppPropsWithLayout) => {
  const [queryClient] = useState(() => new QueryClient())
  const { store } = wrapper.useWrappedStore(rest)

  const getLayout =
    Component.getLayout ??
    ((page) => (
      <Suspense fallback={page}>
        <Layout>{page}</Layout>
      </Suspense>
    ))

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>{getLayout(<Component {...pageProps} />)}</PersistGate>
      </Provider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
