import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import Header from './pages/Header';
import Footer from './pages/Footer';
import Home from './pages/home';
import AbousUs from './pages/AbousUs';
import Automation from './pages/Automation';
import Camera from './pages/Camera';
import Contacts from './pages/Contacts';
import CustormerSatisfaction from './pages/CustormerSatisfaction';
import Director from './pages/Director';
import DSTV from './pages/DSTV';
import Stuff from './pages/Stuff';
import WI_FI from './pages/WI-FI';
import Videos from './pages/Videos';
import Certificates from './pages/Certificates';
import Services from './pages/Services';

import AlarmSystem from './pages/AlarmSystem';
import Intercom from './pages/Intercom';
import NetworkPoints from './pages/NetworkPoints';
import TVIntallation from './pages/TVIntallation';
import HomeAutomation from './pages/HomeAutomation';
import GateMonitor from './pages/GateMonitor';

import LoadingSpinner from './components/LoadingSpinner';

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <LoadingSpinner />}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AbousUs" element={<AbousUs />} />
        <Route path="/Automation" element={<Automation />} />
        <Route path="/Camera" element={<Camera />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/CustormerSatisfaction" element={<CustormerSatisfaction />} />
        <Route path="/Director" element={<Director />} />
        <Route path="/DSTV" element={<DSTV />} />
        <Route path="/Stuff" element={<Stuff />} />
        <Route path="/WI-FI" element={<WI_FI />} />

        <Route path="/AlarmSystem" element={<AlarmSystem />} />
        <Route path="/Intercom" element={<Intercom />} />
        <Route path="/NetworkPoints" element={<NetworkPoints />} />
        <Route path="/TVIntallation" element={<TVIntallation />} />
        <Route path="/HomeAutomation" element={<HomeAutomation />} />
        <Route path="/GateMonitor" element={<GateMonitor />} />
        <Route path="/Videos" element={<Videos />} />
        <Route path="/Certificates" element={<Certificates />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <AppContent />
      </div>
    </Router>
  );
}

export default App;
