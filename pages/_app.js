import Header from '../components/Header/Header'
import Footer from "../components/Footer/Footer"
import NextNProgress from 'nextjs-progressbar'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {

  return <>
      <NextNProgress
      height={6}
      />
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
  </>
}

export default MyApp
