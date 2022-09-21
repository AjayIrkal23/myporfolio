import { Accountprovider } from '../Context/AppContext';
import '../styles/globals.css'
import Navbar from './../Components/NavBar';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('tw-elements');
}, []);
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
