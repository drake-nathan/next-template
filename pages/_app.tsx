import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Providers from 'contexts/Providers';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Providers>
    <Component {...pageProps} />
  </Providers>
);

export default MyApp;
