import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gradient-to-b from-purple-600 to-blue-600 p-6 rounded-tr-3xl rounded-br-3xl">
      <nav className="space-y-4">
        <div className="flex items-center gap-3">
          <span>📋</span>
          <span className="text-lg">Dashboard</span>
        </div>
        <div className="flex items-center gap-3 bg-white bg-opacity-20 p-2 rounded">
          <span>🎓</span>
          <span>Recommende Courses</span>
        </div>
        <div className="flex items-center gap-3">
          <span>📝</span>
          <span>Quiz</span>
        </div>
        <div className="flex items-center gap-3">
          <span>📺</span>
          <span>YouTube Videos</span>
        </div>
        <div className="flex items-center gap-3">
          <span>📚</span>
          <span>E-Books</span>
        </div>
        <div className="flex items-center gap-3">
          <span>📈</span>
          <span>Tracker</span>
        </div>
        <div className="flex items-center gap-3">
          <span>📄</span>
          <span>Document Reader</span>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
