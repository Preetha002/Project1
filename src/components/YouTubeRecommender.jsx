// src/components/YouTubeRecommender.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function YouTubeRecommender() {
  const courses = [
    { id: 1, title: 'React Basics', description: 'Understand core React features.' },
    { id: 2, title: 'Advanced React', description: 'Learn hooks and context.' },
    { id: 3, title: 'React with Tailwind', description: 'Build stunning UIs.' },
  ];

  return (
    <section>
      <h1 className="text-3xl font-semibold text-indigo-700 mb-8">Recommended Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {courses.map((course, i) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.15 }}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer flex flex-col"
          >
            <h2 className="text-xl font-semibold mb-4">{course.title}</h2>
            <p className="text-gray-600 flex-grow">{course.description}</p>
            <button className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition">
              Go to Course
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
