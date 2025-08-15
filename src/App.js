import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Onboarding from './components/Onboarding'; // You will create this next
import BuyerProfiles from './components/BuyerProfiles'; // To be created later
import AcquisitionProcess from './components/AcquisitionProcess'; // To be created later
import ProfileSettings from './components/ProfileSettings'; // Stub for profile settings

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/onboarding/:userType" element={<Onboarding />} />
        <Route path="/buyers" element={<BuyerProfiles />} />
        <Route path="/acquisition/:matchId" element={<AcquisitionProcess />} />
        <Route path="/profile" element={<ProfileSettings />} />
        <Route path="/" element={<div className="p-4">Welcome to BizMatch Platform!</div>} />
      </Routes>
    </Router>
  );
}

export default App;
