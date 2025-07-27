import React from 'react';
export default function Profile() {
  return (
    <section className="bg-white shadow rounded-xl p-8 max-w-md mx-auto mt-12">
      <h1 className="text-3xl font-semibold mb-4 text-blue-700">Your Profile</h1>
      <div className="flex items-center space-x-4 mb-6">
        <div className="h-16 w-16 rounded-full bg-blue-200 flex items-center justify-center text-2xl text-white font-bold">U</div>
        <div>
          <div className="font-bold text-lg">User Name</div>
          <div className="text-gray-500 text-sm">user@email.com</div>
        </div>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded shadow">Edit Profile</button>
    </section>
  );
}
