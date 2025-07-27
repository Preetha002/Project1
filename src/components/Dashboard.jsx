import React from 'react';
export default function Dashboard() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Learning Dashboard</h1>
      {/* Charts, stats, progress bars can go here */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow text-center">
          <div className="text-xl font-semibold mb-2">Current Streak</div>
          <div className="text-3xl font-bold text-blue-600">5 days</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow text-center">
          <div className="text-xl font-semibold mb-2">Topics Mastered</div>
          <div className="text-3xl font-bold text-green-600">7</div>
        </div>
        {/* Add more cards as needed */}
      </div>
    </section>
  );
}
