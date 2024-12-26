import './App.css';

import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Helmet } from 'react-helmet';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Header from '@components/commons/header/Header.index';
import Body from '@components/commons/body/Body.index';
import Footer from '@components/commons/footer/Footer.index';
import theme from '@styles/theme';
import { GlobalStyles, Wrap } from '@styles/global.styles';

import AppRoutes from './routes/AppRoutes';

function App() {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 1000 * 60 * 5,
			},
		},
	});

	// const [innerWidth, setInnerWidth] = useState(window.innerWidth);

	/*	const resizeListener = () => {
		setInnerWidth(window.innerWidth);
	};*/

	/*	useEffect(() => {
		window.addEventListener('resize', resizeListener);

		return () => {
			window.removeEventListener('resize', resizeListener);
		};
	}, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 설정*/

	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools />
			<BrowserRouter>
				<GlobalStyles />
				<Helmet>
					<title>React-Helmet</title>
				</Helmet>
				<ThemeProvider theme={theme}>
					<Wrap>
						{/*<MaxWrap innerWidth={innerWidth}>*/}
						<Header />
						<Body>
							<AppRoutes />
						</Body>
						<Footer />
						{/*</MaxWrap>*/}
					</Wrap>
				</ThemeProvider>
			</BrowserRouter>
		</QueryClientProvider>
	);
}

export default App;
