import {Route, Routes} from 'react-router-dom'
import Landing from '../components/Landing/Landing'

function Router() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/admin" element={<Landing />} />
            
            </Routes>

        
        </div>
    )
}      

export default Router
