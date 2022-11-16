import { Routes, Route} from "react-router-dom";
import { useEffect, useState, React } from "react";
import Home from './pages/Home';
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import About from "./pages/About";
import Contact from "./pages/Contact";
import Store from "./pages/Store";
import Social from "./pages/Social";
import ImageManagement from "./pages/ImageManagement";
import StoreManagement from "./pages/StoreManagement";
import ContactManagement from "./pages/ContactManagement";
import BioManagement from './pages/BioManagement';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //get access token
  useEffect(() => {
    const jwt = localStorage.getItem("jwt")
    if(jwt){
     setIsLoggedIn(true)
    }
  }, [])

  const checkLogin = () => {
    if(isLoggedIn){
      return <AdminDashboard />
    }else if(!isLoggedIn){
      return <AdminLogin />
    }
  }
  
  return (
    <div className="App">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/admin' exact element={checkLogin()} />
            <Route path='/admin/image-management' element={<ImageManagement />} />
            <Route path='/admin/store-management' element={<StoreManagement />} />
            <Route path='/admin/contact-management' element={<ContactManagement />} />
            <Route path='/admin/bio-management' element={<BioManagement />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/store' element={<Store />} />
            <Route path='/social' element={<Social />} />
        </Routes>
    </div>
  );
}

export default App;


