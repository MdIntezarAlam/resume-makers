import { BrowserRouter, Routes, Router, Route } from 'react-router-dom';
import HomePage from "./component/HomePage";
import NavBar from "./component/NavBar";
import Body from './resume_components/Body/Body'
import About from './component/About';
import Jobsection_Dashboard from './component/JobSection/jobsection_dashboard';
import Create_resume from './component/Create_resume';
import Login from './Login_Siginup/Login/Login'
import Siginup from './Login_Siginup/Siginup/Siginup'
import Dasboard from './component/Dashboard'
import Place_wipro from './component/JobSection/Placements/Place_wipro';
import Place_tcs from './component/JobSection/Placements/Place_tcs';


const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/home' element={<HomePage />}></Route>
                <Route path='dashboard' element={<Dasboard />} />
                <Route path='/body' element={<Body />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/jobsection_dashboard' element={<Jobsection_Dashboard />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/signup' element={<Siginup />}></Route>
                <Route path='/create_resume' element={<Create_resume />}></Route>
                <Route path='/place_wipro' element={<Place_wipro />}></Route>
                <Route path='/place_tcs' element={<Place_tcs />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App;   


