import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="bg-blue-100 p-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">BizMatch</Link>
      <div className="space-x-4">
        <Link to="/buyers" className="hover:underline">Buyers</Link>
        <Link to="/acquisition/123" className="hover:underline">Acquisition</Link>
        <Link to="/profile" className="hover:underline">Profile</Link>
        <Link to="/onboarding/buyer" className="hover:underline">Onboarding</Link>
      </div>
    </nav>
  );
}

export default Navigation;
