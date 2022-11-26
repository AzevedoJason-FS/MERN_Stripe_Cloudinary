import { Routes, Route} from "react-router-dom";
import { useEffect, useState, React, Suspense, lazy } from "react";
import { ReactComponent as RollingLoader } from "./static/rolling.svg";

const Home = lazy(() => import('./pages/Home'));
const AdminLogin = lazy(() => import('./pages/AdminLogin'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Store = lazy(() => import('./pages/Store'));
const Social = lazy(() => import('./pages/Social'));
const ImageManagement = lazy(() => import('./pages/ImageManagement'));
const StoreManagement = lazy(() => import('./pages/StoreManagement'));
const ContactManagement = lazy(() => import('./pages/ContactManagement'));
const BioManagement = lazy(() => import('./pages/BioManagement'));

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
    <div className="app">
          <Routes>
            <Route path='/' element={
              <Suspense fallback={
                <div className="loader-container">
                  <div className="loader-container-inner">
                    <RollingLoader />
                  </div>
                </div>
              }>
              <Home />
            </Suspense>
            } />
            <Route path='/about' element={
              <Suspense fallback={
                <div className="loader-container">
                  <div className="loader-container-inner">
                    <RollingLoader />
                  </div>
                </div>
              }>
              <About />
            </Suspense>
            } />
            <Route path='/contact' element={
              <Suspense fallback={
                <div className="loader-container">
                  <div className="loader-container-inner">
                    <RollingLoader />
                  </div>
                </div>
              }>
              <Contact />
            </Suspense>
            } />                        
            <Route path='/store' element={
              <Suspense fallback={
                <div className="loader-container">
                  <div className="loader-container-inner">
                    <RollingLoader />
                  </div>
                </div>
              }>
              <Store />
            </Suspense>
            } />
            <Route path='/social' element={
              <Suspense fallback={
                <div className="loader-container">
                  <div className="loader-container-inner">
                    <RollingLoader />
                  </div>
                </div>
              }>
              <Social />
            </Suspense>
            } />            
            <Route path='/admin' exact element={
              <Suspense fallback={
                <div className="loader-container">
                  <div className="loader-container-inner">
                    <RollingLoader />
                  </div>
                </div>
              }>
              {checkLogin()}
            </Suspense>
            } />
            <Route path='/admin/image-management' element={
              <Suspense fallback={
                <div className="loader-container">
                  <div className="loader-container-inner">
                    <RollingLoader />
                  </div>
                </div>
              }>
              <ImageManagement />
            </Suspense>
            } />
            <Route path='/admin/store-management' element={
              <Suspense fallback={
                <div className="loader-container">
                  <div className="loader-container-inner">
                    <RollingLoader />
                  </div>
                </div>
              }>
              <StoreManagement />
            </Suspense>
            } />            
            <Route path='/admin/contact-management' element={
              <Suspense fallback={
                <div className="loader-container">
                  <div className="loader-container-inner">
                    <RollingLoader />
                  </div>
                </div>
              }>
              <ContactManagement />
            </Suspense>
            } />
            <Route path='/admin/bio-management' element={
              <Suspense fallback={
                <div className="loader-container">
                  <div className="loader-container-inner">
                    <RollingLoader />
                  </div>
                </div>
              }>
              <BioManagement />
            </Suspense>
            } />
          </Routes>
    </div>
  );
}

export default App;



