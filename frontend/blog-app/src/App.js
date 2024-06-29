import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Home from './screens/Home';
import About from './screens/About';
import Contect from './screens/Contect';
import AdminHome from './screens/admin/AdminHome';
import Login from './screens/Login';
import Sign from './screens/Sign';

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin Route */}
        <Route exect path='/upload-article' element={<AdminHome/>}></Route>
        {/* Home route */}
        <Route exect path='/' element={<Home/>}></Route>
        <Route exect path='/home' element={<Home/>}></Route>
        {/* About route */}
        <Route exect path='/about' element={<About/>}></Route>
        {/* Contect route */}
        <Route exect path='/contect' element={<Contect/>}></Route>
        {/* Login Route */}
        <Route exect path='/login' element={<Login/>}></Route>
        {/* Signup Route */}
        <Route exect path='/SignUp' element={<Sign/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
