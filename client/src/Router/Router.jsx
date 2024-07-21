import {Route, Routes} from 'react-router-dom'
import Landing from '../Landing/Landing'
import AdminLand from '../admin/AdminLand/AdminLand'


function Router() {
    return (
        <div>
            <Routes>

                <Route path="/" element={<Landing />} />
                <Route path="/admin" element={<AdminLand />} />
            
            </Routes>

        
        </div>
    )
}      

export default Router
