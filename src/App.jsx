import React from 'react';

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#4568dc] to-[#b06ab3] p-4 font-sans">
      <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl shadow-lg p-8 w-full max-w-md text-white">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
        <form className="space-y-4">
          <div>
            <label className="text-sm mb-1 block">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/60"
            />
          </div>
          <div>
            <label className="text-sm mb-1 block">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/60"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white/20 hover:bg-white/30 transition-all py-2 rounded-xl font-semibold"
          >
            Sign In
          </button>
        </form>

        <div className="flex justify-center gap-4 mt-6">
          <button className="bg-white/20 hover:bg-white/30 transition p-3 rounded-full">
            <img
              src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
              alt="Google"
              className="w-6"
            />
          </button>
          <button className="bg-white/20 hover:bg-white/30 transition p-3 rounded-full">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
              className="w-6"
            />
          </button>
        </div>

        <p className="text-sm text-center mt-6">
          Don't have an account? <span className="underline underline-offset-4">Sign up</span>
        </p>
      </div>
    </div>
  );
}

export default App;
