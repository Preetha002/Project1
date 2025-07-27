import React, { useState } from 'react';

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="w-80 h-96 bg-white shadow-2xl rounded-xl p-4 flex flex-col ring-1 ring-blue-300">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-blue-700">AI Assistant</span>
            <button onClick={() => setOpen(false)} className="text-lg">✕</button>
          </div>
          <div className="flex-1 bg-blue-50 rounded p-2 overflow-auto mb-2 text-sm">
            {/* Chat window logic goes here */}
            <div className="text-gray-700">How can I help you today?</div>
          </div>
          <input
            type="text"
            placeholder="Type your question..."
            className="w-full border rounded p-2 text-sm focus:ring-1 focus:ring-blue-600 outline-none"
          />
        </div>
      )}
      <button
        onClick={() => setOpen(o => !o)}
        className="h-14 w-14 bg-gradient-to-br from-blue-600 to-blue-400 text-white rounded-full shadow-xl flex items-center justify-center text-2xl"
        title="Chatbot"
      >💬</button>
    </div>
  );
}
