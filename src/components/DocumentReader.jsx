import React, { useState } from 'react';

export default function DocumentReader() {
  const [scope, setScope] = useState('full');
  const [range, setRange] = useState({ from: 1, to: 1 });
  const [topic, setTopic] = useState('');

  return (
    <section>
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Document Reader</h1>
      <div className="bg-white rounded-xl shadow p-8 max-w-2xl mx-auto space-y-6">
        <input type="file" className="w-full border p-2 rounded" />
        <div>
          <label className="block font-medium mb-1">Summary Scope:</label>
          <select value={scope} onChange={e => setScope(e.target.value)}
            className="border p-2 rounded w-full">
            <option value="full">Full Document</option>
            <option value="range">Page Range</option>
            <option value="topic">By Topic</option>
          </select>
          {scope === 'range' && (
            <div className="flex space-x-2 mt-2">
              <input type="number" min={1} max={range.to}
                className="border rounded p-2 w-1/2"
                value={range.from}
                onChange={e => setRange({...range, from: +e.target.value})}
                placeholder="From Page" />
              <input type="number" min={range.from} 
                className="border rounded p-2 w-1/2"
                value={range.to}
                onChange={e => setRange({...range, to: +e.target.value})}
                placeholder="To Page" />
            </div>
          )}
          {scope === 'topic' && (
            <input
              className="border rounded p-2 w-full mt-2"
              placeholder="Enter topic or keyword..."
              value={topic}
              onChange={e => setTopic(e.target.value)}
            />
          )}
        </div>
        <div className="flex space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Summarize</button>
          <button className="bg-green-600 text-white px-4 py-2 rounded">Search More About Topic</button>
          <button className="bg-purple-600 text-white px-4 py-2 rounded">Quiz (MCQ/Easy/Med/Hard)</button>
        </div>
        {/* Show results here */}
      </div>
    </section>
  );
}
