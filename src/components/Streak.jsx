import React from 'react';

export default function Streak() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Streak</h1>
      <div className="bg-white rounded-xl shadow p-8 max-w-md mx-auto">
        <div className="font-semibold text-lg mb-2">Current Learning Streak</div>
        <div className="text-4xl font-bold text-blue-600 mb-4">6 days</div>
        {/* Add chart or streak calendar here for visual effect */}
      </div>
    </section>
  );
}
