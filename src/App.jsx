import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-pink-500 to-red-400 flex items-center justify-center font-sans">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-md w-full text-white">
        <h2 className="text-3xl font-bold text-center mb-6">Welcome Back</h2>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 w-full p-2 rounded-md bg-white/20 border border-white/30 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-1 w-full p-2 rounded-md bg-white/20 border border-white/30 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>
          <button className="w-full bg-white/30 hover:bg-white/50 text-white font-semibold py-2 px-4 rounded-lg transition">
            Login
          </button>
        </form>

        <div className="flex justify-center gap-4 mt-6">
          <button className="bg-white/20 p-2 rounded-full">
            <img
              src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
              alt="Google"
              className="w-6"
            />
          </button>
          <button className="bg-white/20 p-2 rounded-full">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
              className="w-6"
            />
          </button>
        </div>

        <p className="text-sm text-center mt-6">
          Don't have an account? <span className="underline">Sign up</span>
        </p>
      </div>
    </div>
  );
}

export default App;
