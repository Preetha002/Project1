import React from 'react';
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gradient-to-r from-purple-500 to-blue-500 text-white font-sans">
      <Sidebar />

      <div className="flex-1 p-16 space-y-8">
        <h1 className="text-4xl font-bold">Learn faster and innovate smarter</h1>
        <p className="text-lg max-w-lg">Gain software skills tailored to any role and skill-level.</p>

        <h2 className="text-2xl font-bold mt-10">The future of learning at Alyyoo</h2>
        <p className="max-w-lg">Grow your skills. Future proof your career. Learn Alyyoo for free, anywhere, anytime.</p>
      </div>
    </div>
  );
};

export default Dashboard;
