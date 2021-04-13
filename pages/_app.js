import { AuthProvider } from '../auth';
import GlobalStyle from '../components/GlobalStyle';
import { Basket } from '../contexts/BasketContext';
import '../styles/Global.css';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <Basket>
          <Component {...pageProps} />
        </Basket>
      </AuthProvider>
    </>
  )
}

export default MyApp