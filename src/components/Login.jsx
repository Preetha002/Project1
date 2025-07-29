import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 to-blue-600 px-4">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl w-full max-w-md shadow-lg text-white">
        <div className="flex justify-center mb-6">
          <img
            src="YOUR_LOGO_URL_HERE"
            alt="Alyyooo Logo"
            className="w-20 h-20"
          />
        </div>
        <h2 className="text-2xl font-bold text-center mb-2">Welcome to Alyyooo</h2>
        <p className="text-center text-white/80 mb-6">Your AI-powered learning companion</p>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg placeholder-white/70 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg placeholder-white/70 focus:outline-none"
          />

          <div className="flex justify-between items-center text-sm text-white/70">
            <label className="flex items-center">
              <input type="checkbox" className="mr-1" />
              Remember me
            </label>
            <a href="#" className="hover:underline">Forgot password?</a>
          </div>

          <button className="w-full bg-white text-purple-700 font-semibold py-2 rounded-lg hover:bg-purple-200 transition-all">
            Continue Learning
          </button>
        </div>

        <div className="my-4 flex items-center justify-center">
          <span className="text-white/70 text-sm">or sign in with</span>
        </div>

        <div className="flex justify-center gap-4">
          <button className="bg-red-600 hover:bg-red-700 p-3 rounded-full">
            <img src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png" alt="Google" className="w-5 h-5" />
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full">
            <img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" alt="Facebook" className="w-5 h-5" />
          </button>
        </div>

        <div className="text-center mt-6 text-sm text-white/80">
          New to Alyyooo? <a href="#" className="underline">Create account</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
