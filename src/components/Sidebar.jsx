import React from 'react';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-purple-900 p-6 flex flex-col min-h-screen">
      <h1 className="text-3xl font-extrabold mb-8 font-sans">Alyyooo</h1>
      <nav className="space-y-4">
        <a href="/dashboard" className="block py-2 px-4 rounded font-semibold bg-purple-800 hover:bg-purple-700">
          Dashboard
        </a>
        <a href="/courses" className="block py-2 px-4 rounded hover:bg-purple-700">
          Courses
        </a>
        <a href="/profile" className="block py-2 px-4 rounded hover:bg-purple-700">
          Profile
        </a>
      </nav>
    </aside>
  );
}
