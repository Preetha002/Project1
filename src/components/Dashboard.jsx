// FILE: src/components/Dashboard.jsx
import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gradient-to-br from-purple-700 to-blue-700 text-white">
      <div className="w-64 bg-white/10 p-6 flex flex-col gap-4 rounded-r-3xl">
        <div className="font-bold text-lg bg-white/20 p-2 rounded-md">🏠 Dashboard</div>
        <div className="hover:bg-white/20 p-2 rounded-md cursor-pointer">🎓 Recommende Courses</div>
        <div className="hover:bg-white/20 p-2 rounded-md cursor-pointer">📝 Quiz</div>
        <div className="hover:bg-white/20 p-2 rounded-md cursor-pointer">📺 YouTube Videos</div>
        <div className="hover:bg-white/20 p-2 rounded-md cursor-pointer">📘 E-Books</div>
        <div className="hover:bg-white/20 p-2 rounded-md cursor-pointer">⚡ Tracker</div>
        <div className="hover:bg-white/20 p-2 rounded-md cursor-pointer">📄 Document Reader</div>
      </div>
      <div className="flex-1 p-12 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4">Learn faster and innovate smarter</h1>
        <p className="text-lg max-w-xl mb-6">
          Gain software skills tailored to any role and skill-level. Already a subscriber? Please sign in.
        </p>
        <button className="bg-blue-400 hover:bg-blue-300 text-white px-5 py-3 rounded-md w-fit">
          Sign In
        </button>
        <h2 className="text-2xl mt-12 mb-2">The future of learning at Alyyoo</h2>
        <p className="max-w-xl">Grow your skills. Future proof your career. Learn Alyyoo for free, anywhere, anytime.</p>
      </div>
    </div>
  );
};

export default Dashboard;
