import React, { useState } from 'react';

export default function QuizBuilder() {
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState('default');
  const [type, setType] = useState('mcq');

  return (
    <section>
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Custom Quiz</h1>
      <div className="bg-white p-6 rounded-xl shadow max-w-lg mx-auto">
        <input
          value={topic}
          onChange={e => setTopic(e.target.value)}
          placeholder="Enter your topic (e.g. Thermodynamics)"
          className="border w-full p-2 rounded mb-4 focus:ring-2 focus:ring-blue-400"
        />
        <div className="mb-4">
          <span className="font-medium mr-2">Difficulty:</span>
          {['easy','medium','hard','default'].map(l => (
            <button
              key={l}
              onClick={() => setDifficulty(l)}
              className={`mr-1 px-3 py-1 rounded-lg ${difficulty===l ? 'bg-blue-600 text-white' :'bg-gray-200'}`}>
              {l.charAt(0).toUpperCase()+l.slice(1)}
            </button>
          ))}
        </div>
        <div className="mb-4">
          <span className="font-medium mr-2">Type:</span>
          <button
            className={`mr-1 px-3 py-1 rounded-lg ${type==='mcq'?'bg-blue-600 text-white':'bg-gray-200'}`}
            onClick={()=>setType('mcq')}>MCQ</button>
          <button
            className={`px-3 py-1 rounded-lg ${type==='truefalse'?'bg-blue-600 text-white':'bg-gray-200'}`}
            onClick={()=>setType('truefalse')}>True/False</button>
        </div>
        <button className="bg-blue-600 text-white px-8 py-2 rounded shadow mt-2">
          Generate Quiz
        </button>
      </div>
      {/* Render quiz/questions UI here after generation */}
    </section>
  );
}
