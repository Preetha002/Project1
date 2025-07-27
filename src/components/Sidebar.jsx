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
    <aside className="fixed top-0 left-0 h-full w-20
      backdrop-blur-lg bg-white/15 border-r border-white/20
      shadow-xl flex flex-col items-center pt-8 z-30 rounded-r-2xl"
    >
      <div className="mb-8 flex justify-center items-center h-12 w-12 rounded-full border border-white/30 bg-white/30 backdrop-brightness-150 shadow">
        <span className="text-2xl font-bold text-indigo-600 select-none">U</span>
      </div>
      <nav className="flex-1 flex flex-col gap-4 items-center w-full">
        {items.map(([key, Icon, tooltip]) => (
          <button key={key}
            onClick={() => setActive(key)}
            aria-label={tooltip}
            className={`group relative flex items-center justify-center
                h-12 w-12 rounded-xl transition 
                outline-none focus:ring-2 focus:ring-indigo-400
                ${
                  active === key
                    ? 'bg-indigo-600 text-white shadow-lg scale-110'
                    : 'text-indigo-300 hover:bg-white hover:text-indigo-700 hover:scale-110'
                }
              `}
          >
            <Icon className="h-6 w-6" />
            {/* Tooltip */}
            <span className="absolute left-14 top-1/2 -translate-y-1/2
              whitespace-nowrap rounded px-3 py-1.5 text-xs font-semibold
              bg-black/80 text-white opacity-0 group-hover:opacity-100
              pointer-events-none transition-opacity duration-300 z-40 border border-white/30 shadow-lg"
            >
              {tooltip}
            </span>
          </button>
        ))}
      </nav>
      <div className="flex-1" />
    </aside>
  );
}
