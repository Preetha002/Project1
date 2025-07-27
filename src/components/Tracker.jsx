import React from 'react';

export default function Tracker() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Learning Tracker</h1>
      <div className="bg-white rounded-xl p-8 shadow max-w-xl mx-auto text-lg">
        <div>Topics studied: <span className="font-bold text-blue-600">12</span></div>
        <div>Quizzes completed: <span className="font-bold text-blue-600">5</span></div>
        <div>Days active: <span className="font-bold text-blue-600">8</span></div>
        {/* Expand with charts or progress bars as needed */}
      </div>
    </section>
  );
}
