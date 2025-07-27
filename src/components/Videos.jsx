import React from 'react';

export default function Videos() {
  // Simulated recommended videos for a topic
  return (
    <section>
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Recommended YouTube Videos</h1>
      <div className="grid grid-cols-2 gap-6">
        {[1,2].map(id => (
          <div key={id} className="bg-white rounded-xl shadow p-4 flex flex-col">
            <div className="font-bold mb-2">Sample Video Title {id}</div>
            <iframe
              title="YouTube video"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              className="rounded-lg mb-2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              height={180}
            ></iframe>
            <button className="bg-blue-600 text-white px-4 py-2 rounded mt-auto">Watch</button>
          </div>
        ))}
      </div>
    </section>
  );
}
