import LoadingBar from '@/atoms/loading-bar';
import {useLoading} from '@/hooks/useLoading';
import Layout from '@/organisms/layout';
import type {NextPageWithLayout} from '@/types/index';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {AxiosError} from 'axios';
import type {AppProps} from 'next/app';
import {Suspense, useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, wrapper} from 'store/index';
import 'posy-fnb-core/dist/index.css';
import 'posy-fnb-core/dist/style.css';
import '../styles/globals.css';
import {initialGoogleAnalytics} from 'utils/UtilsAnalytics';

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

const App = ({Component, pageProps, ...rest}: AppPropsWithLayout) => {
	const [queryClient] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					retry(failureCount, error) {
						const err = error as AxiosError;
						if (Number(err.code) === 500) {
							return failureCount < 3;
						}
						return false;
					},
				},
			},
		}),
	);
	const {store} = wrapper.useWrappedStore(rest);
	const {loadingState} = useLoading();

	const getLayout =
		Component.getLayout ??
		(page => (
			<Suspense fallback={page}>
				<Layout>{page}</Layout>
			</Suspense>
		));

	useEffect(() => {
		initialGoogleAnalytics();
	}, []);

	return (
		<>
			<QueryClientProvider client={queryClient}>
				<Provider store={store}>
					<PersistGate persistor={persistor}>
						<LoadingBar
							isRouteChanging={loadingState.isRouteChanging}
							key={loadingState.loadingKey}
						/>
						{getLayout(<Component {...pageProps} />)}
					</PersistGate>
					<ToastContainer
						position="bottom-center"
						autoClose={2000}
						hideProgressBar
						closeOnClick
						theme="colored"
					/>
				</Provider>
				<ReactQueryDevtools />
			</QueryClientProvider>
		</>
	);
};

export default App;
