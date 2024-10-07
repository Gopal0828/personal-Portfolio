

import { Route, Routes } from 'react-router-dom';
import UserLayout from '../Layout/UserLayout';
import Landing from '../../../Landing/Landing';
import Education from '../../../components/Education/Education';
import Projects from '../../../components/Projects/Projects';
import Experience from '../../../components/Experience/Experience';
import GithubDashboard from '../../../components/GithubDashboard/GithubDashboard';

const UserRoutes = () => {
   return (
      <div>
            <Routes>
               <Route path='/' element={<UserLayout />} >
                  <Route index  element={<Landing />} />

                  <Route path='/projects' element={<Projects />} />
                  <Route path='/githubDashboard' element={<GithubDashboard />} />
                  <Route path='/education' element={<Education />} />
                  <Route path='/experience' element={<Experience />} />

               </Route>

            </Routes>
         
      </div>
   );
}

export default UserRoutes;
