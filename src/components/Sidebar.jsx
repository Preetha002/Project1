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

/*
 * Sidebar receives props:
 *   active   - the currently "active" screen key (e.g., 'dashboard')
 *   setActive - function to update which tab/page is active
 */
export default function Sidebar({ active, setActive }) {
  // Sidebar tab definitions: key, Icon from Heroicons, and tooltip label
  const items = [
    ['dashboard', HomeIcon, 'Dashboard'],
    ['recommend', AcademicCapIcon, 'Recommended Courses'],
    ['quiz', PuzzlePieceIcon, 'Quiz'],
    ['videos', VideoCameraIcon, 'YouTube Videos'],
    ['ebooks', BookOpenIcon, 'E-Books'],
    ['tracker', ChartBarIcon, 'Tracker'],
    ['streak', BoltIcon, 'Streak'],
    ['reader', DocumentTextIcon, 'Document Reader']
  ];

  return (
    // Sidebar container: fixed to the left, vertical, gradient + rounded + shadow
    <aside className="
      fixed top-0 left-0 h-full w-20
      bg-gradient-to-b from-indigo-700 to-indigo-500
      flex flex-col items-center pt-8 z-30 shadow-2xl
      rounded-r-2xl
    ">
      {/* Logo or Initial (could use app name or user initial) */}
      <div className="
        mb-8 flex justify-center items-center h-12 w-12
        rounded-full border-2 border-white bg-indigo-900 shadow
      ">
        <img src="/logo192.png" alt="App logo" className="h-8 w-8" />
        {/* ALTERNATIVE: Swap "U" for an <img> logo or user initial */}
      </div>

      {/* Main Navigation, with gap and full width */}
      <nav className="flex-1 flex flex-col gap-3 items-center justify-center w-full">
        {items.map(([key, Icon, tooltip]) => (
          // Button for each navigation item
          <button
            key={key}
            onClick={() => setActive(key)} // Triggers parent routing/tab change
            className={`
              group relative my-2 flex items-center justify-center
              h-12 w-12 rounded-xl
              transition-all duration-200 ease-in-out
              outline-none focus:ring-2 focus:ring-indigo-400
              ${
                active === key
                  ? 'bg-white shadow-lg text-indigo-700 scale-110'
                  : 'bg-indigo-600 text-indigo-200 hover:bg-white hover:text-indigo-700 hover:scale-110'
              }
            `}
            aria-label={tooltip}         // Accessibility: label for screen readers
            tabIndex={0}                 // Keyboard accessible
          >
            <Icon className="h-6 w-6" />
            {/* Tooltip: Appears on hover (hidden by default) */}
            <span className="
              absolute left-14 top-1/2 -translate-y-1/2
              whitespace-nowrap px-3 py-1.5 rounded shadow-lg border
              bg-black/80 text-white text-xs
              opacity-0 group-hover:opacity-100 pointer-events-none
              transition-opacity duration-200 z-40
            ">
              {tooltip}
            </span>
          </button>
        ))}
      </nav>
      {/* Spacer: pushes navigation to the top if there is extra height */}
      <div className="flex-1"></div>
    </aside>
  );
}
