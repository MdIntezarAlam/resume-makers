import { BrowserRouter, Routes, Router, Route } from 'react-router-dom';
import HomePage from "./component/HomePage";
import NavBar from "./component/NavBar";
import Dashboard from './component/Dashboard';
import Body from './resume_components/Body/Body'
import About from './component/About';
import Jobsection_Dashboard from './component/JobSection/jobsection_dashboard';
import Create_resume from './component/Create_resume';
import Login from './Login_Siginup/Login/Login'
import Siginup from './Login_Siginup/Siginup/Siginup'

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/dashboard' element={<Dashboard />} ></Route>
                <Route path='/body' element={<Body />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/jobsection_dashboard' element={<Jobsection_Dashboard />}></Route>
                <Route path='/create_resume' element={<Create_resume />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<Siginup />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App;