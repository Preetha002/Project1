// src/App.jsx
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Chatbot from './components/Chatbot';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import YouTubeRecommender from './components/YouTubeRecommender';
import QuizBuilder from './components/QuizBuilder';
import Videos from './components/Videos';
import EBooks from './components/EBooks';
import Tracker from './components/Tracker';
import Streak from './components/Streak';
import DocumentReader from './components/DocumentReader';

export default function App() {
  const [active, setActive] = useState('dashboard');

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-gray-50 to-blue-50">
      <Sidebar active={active} setActive={setActive} />
      <div className="flex-1 ml-20 relative min-h-screen">
        {/* Profile button floating top right */}
        <button
          onClick={() => setActive('profile')}
          className="fixed top-5 right-8 bg-white shadow rounded-full flex items-center space-x-2 px-5 py-2 border hover:bg-blue-100 z-40"
        >
          <span className="text-gray-800 font-medium">Profile</span>
          <svg
            className="w-7 h-7 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 12c2.7 0 3.9-2.2 3.9-4.7 0-2.6-2.1-4.7-4.7-4.7s-4.7 2.1-4.7 4.7C8.1 9.8 9.3 12 12 12zm0 2C9.9 14 3 15 3 17.1V20h18v-2.9C21 15 14.1 14 12 14z" />
          </svg>
        </button>

        <main className="max-w-6xl mx-auto py-14 px-4">
          {active === 'profile' && <Profile />}
          {active === 'dashboard' && <Dashboard />}
          {active === 'recommend' && <YouTubeRecommender />}
          {active === 'quiz' && <QuizBuilder />}
          {active === 'videos' && <Videos />}
          {active === 'ebooks' && <EBooks />}
          {active === 'tracker' && <Tracker />}
          {active === 'streak' && <Streak />}
          {active === 'reader' && <DocumentReader />}
        </main>
        <Chatbot />
      </div>
    </div>
  );
}
