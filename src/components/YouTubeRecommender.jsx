// src/components/YouTubeRecommender.jsx
import React from 'react';

export default function YouTubeRecommender() {
  // Imagine data fetched from API with recommended courses here
  return (
    <section>
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Recommended Courses</h1>
      <div className="grid grid-cols-2 gap-6">
        {[1, 2, 3].map((id) => (
          <div key={id} className="bg-white shadow rounded-xl p-4 flex flex-col">
            <div className="font-bold text-lg mb-2">Course Title {id}</div>
            <p className="text-gray-600 mb-3">Brief course description to help user decide.</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded mt-auto hover:bg-blue-700 transition">
              Go to Course
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
