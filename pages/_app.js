import Header from '../components/Header/Header'
import Footer from "../components/Footer/Footer"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return <>
    <Header></Header>
    <Component {...pageProps} />
    <Footer></Footer>
  </>
}

export default MyApp
