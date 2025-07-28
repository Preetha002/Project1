import React from 'react';
// import Sidebar from './Sidebar'; // Uncomment if using Sidebar as a component

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-700 to-indigo-900 text-white flex">
      {/* Sidebar (inline or as a component, see above) */}
      <aside className="w-64 bg-purple-900 p-6 flex flex-col">
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

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h2 className="text-4xl font-bold mb-8 font-sans">Dashboard</h2>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-purple-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Course 1</h3>
            <p className="mb-4">Progress: 75%</p>
            <div className="w-full bg-purple-700 rounded-full h-4">
              <div className="bg-indigo-400 h-4 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
          <div className="bg-purple-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Course 2</h3>
            <p className="mb-4">Progress: 40%</p>
            <div className="w-full bg-purple-700 rounded-full h-4">
              <div className="bg-indigo-400 h-4 rounded-full" style={{ width: '40%' }}></div>
            </div>
          </div>
          <div className="bg-purple-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Course 3</h3>
            <p className="mb-4">Progress: 90%</p>
            <div className="w-full bg-purple-700 rounded-full h-4">
              <div className="bg-indigo-400 h-4 rounded-full" style={{ width: '90%' }}></div>
            </div>
          </div>
        </section>
      </main>

      {/* Fixed Chatbot Button */}
      <button
        aria-label="Chatbot"
        className="fixed bottom-8 right-8 bg-indigo-600 hover:bg-indigo-700 rounded-full w-14 h-14 shadow-lg flex items-center justify-center text-white text-2xl font-bold"
      >
        AI
      </button>
    </div>
  );
}
