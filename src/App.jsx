import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
// import other components as usual

export default function App() {
  const [active, setActive] = useState('dashboard');
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/20 to-secondary/20 flex">
      <Sidebar active={active} setActive={setActive} />
      <div className="flex-1 ml-20 min-h-screen transition">
        {/* Main app content here */}
        {/* Replace with your page switch logic, example: */}
        {/* {active === 'dashboard' && <Dashboard />} */}
      </div>
    </div>
  );
}
