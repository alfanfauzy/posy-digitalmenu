import { useState } from 'react'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { store } from 'store/index'
import Layout from '@/organisms/layout'
import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
