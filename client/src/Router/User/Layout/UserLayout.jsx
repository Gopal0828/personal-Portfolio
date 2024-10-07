
import { Outlet } from 'react-router-dom';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';


const UserLayout = () => {
   return (
      <div>
            <header> 
               <Navbar />
            </header>

            <main className='mt-20'> 
               <Outlet />
            </main>
            <footer> 
               <Footer />
            </footer>
      </div>
   );
}

export default UserLayout;
