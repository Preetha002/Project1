// src/components/Sidebar.jsx
import React from 'react';
import {
  HomeIcon,
  AcademicCapIcon,
  PuzzlePieceIcon,
  VideoCameraIcon,
  BookOpenIcon,
  ChartBarIcon,
  BoltIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

export default function Sidebar({ active, setActive }) {
  const items = [
    ['dashboard', HomeIcon, 'Dashboard'],
    ['recommend', AcademicCapIcon, 'Recommended Courses'],
    ['quiz', PuzzlePieceIcon, 'Quiz'],
    ['videos', VideoCameraIcon, 'YouTube Videos'],
    ['ebooks', BookOpenIcon, 'E-Books'],
    ['tracker', ChartBarIcon, 'Tracker'],
    ['streak', BoltIcon, 'Streak'],
    ['reader', DocumentTextIcon, 'Document Reader'],
  ];

  return (
    <aside className="
      fixed top-0 left-0 h-full w-20
      bg-gradient-to-b from-indigo-700 to-indigo-500/85
      backdrop-blur-lg shadow-2xl rounded-r-2xl
      flex flex-col items-center z-40
    ">
      {/* Profile circle at the absolute top */}
      <button
        className="
          mt-5 mb-8 flex items-center justify-center
          h-12 w-12 rounded-full border-4 border-white shadow-md
          transition hover:ring-2 hover:ring-indigo-300 bg-white
          overflow-hidden
        "
        aria-label="Profile"
        style={{ boxShadow: '0 2px 8px 0 rgba(49, 63, 128, 0.10)' }}
        onClick={() => setActive('profile')}
      >
        {/* Show profile initial or image here */}
        <img src="/path/to/profile.jpg" alt="Profile" className="h-12 w-12 rounded-full object-cover" />
        {/* ALTERNATIVE: Replace <span> with <img ... /> for user image */}
      </button>

      {/* Navigation Menu */}
      <nav className="flex flex-col gap-3 items-center w-full">
        {items.map(([key, Icon, tooltip]) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            aria-label={tooltip}
            className={`
              group relative flex items-center justify-center
              h-11 w-11 my-2 rounded-xl
              transition-all duration-200
              outline-none focus:ring-2 focus:ring-primary
              ${active === key
                ? 'bg-white text-indigo-700 shadow-lg scale-110'
                : 'text-indigo-200 hover:bg-white hover:text-indigo-700 hover:scale-105'}
            `}
          >
            <Icon className="h-6 w-6" />
            {/* Tooltip */}
            <span className="
              absolute left-14 top-1/2 -translate-y-1/2
              px-3 py-1.5 rounded shadow-lg border
              bg-black/80 text-white text-xs
              opacity-0 group-hover:opacity-100
              pointer-events-none transition-opacity duration-200 z-40
            ">
              {tooltip}
            </span>
          </button>
        ))}
      </nav>
      {/* Spacer for bottom */}
      <div className="flex-1" />
    </aside>
  );
}
