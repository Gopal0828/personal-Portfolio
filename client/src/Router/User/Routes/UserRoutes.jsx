

import { Route, Routes } from 'react-router-dom';
import UserLayout from '../Layout/UserLayout';
import Landing from '../../../Landing/Landing';

const UserRoutes = () => {
   return (
      <div>
            <Routes>
               <Route path='/' element={<UserLayout />} >
                  <Route index  element={<Landing />} />


               </Route>

            </Routes>
         
      </div>
   );
}

export default UserRoutes;
