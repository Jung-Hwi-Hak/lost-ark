import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Helmet } from 'react-helmet';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Header from '@components/commons/header/Header.index';
// import Body from '@components/commons/body/Body.index';
// import Footer from '@components/commons/footer/Footer.index';
import theme from '@styles/theme';
import { GlobalStyles, Wrap } from '@styles/global.styles';
import Body from '@components/commons/body/Body.index';
import AppRoutes from '@routes/AppRoutes';
import Footer from '@components/commons/footer/Footer.index';

// import AppRoutes from './routes/AppRoutes';

function App() {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 1000 * 60 * 5,
			},
		},
	});

	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools />
			<BrowserRouter>
				<GlobalStyles />
				<Helmet>
					<title>React-Helmet</title>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap"
						rel="stylesheet"
					/>
				</Helmet>
				<ThemeProvider theme={theme}>
					<Wrap>
						<Header />
						<Body>
							<AppRoutes />
						</Body>
						<Footer />
					</Wrap>
				</ThemeProvider>
			</BrowserRouter>
		</QueryClientProvider>
	);
}

export default App;
