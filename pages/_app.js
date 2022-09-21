import { Accountprovider } from '../Context/AppContext';
import '../styles/globals.css'
import Navbar from './../Components/NavBar';

function MyApp({ Component, pageProps }) {
  return(

  <>  
  <Accountprovider>
  <Navbar/>
   <Component {...pageProps} />
   </Accountprovider>
   </>
  )
}
  
export default MyApp
