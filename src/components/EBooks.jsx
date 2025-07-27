import React from 'react';

export default function EBooks() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-blue-700 mb-6">E-Books Library</h1>
      <div className="grid grid-cols-2 gap-6">
        {[1,2].map(id => (
          <div key={id} className="bg-white shadow rounded-xl p-4 flex flex-col">
            <div className="font-bold text-lg mb-2">E-Book Title {id}</div>
            <p className="text-gray-600 mb-4">Short description or topic for the e-book.</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded mt-auto">Read E-Book</button>
          </div>
        ))}
      </div>
    </section>
  );
}
